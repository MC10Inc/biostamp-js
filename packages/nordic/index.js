let { BRC3Sensor, BRC3Error } = require("@mc10inc/biostamp-js-core");

let ble = require("pc-ble-driver-js");

let adapterFactory = ble.AdapterFactory.getInstance(undefined, { enablePolling: false });
let driver = null;

const BLE_UUID_CCCD = "2902";
const BRC3_SERVICE_UUID = "DE77100090E111E89A5A34F39A69480C";
const BRC3_COMMAND_UUID = "DE77100190E111E89A5A34F39A69480C";
const BRC3_RESPONSE_UUID = "DE77100290E111E89A5A34F39A69480C";
const BRC3_DATA_UUID = "DE77100390E111E89A5A34F39A69480C";

class NordicSensor extends BRC3Sensor {
  static connect(port, mac, onDisconnect) {
    let open = () => {
      return new Promise((resolve, reject) => {
        if (driver) {
          resolve();
        }
        else {
          driver = adapterFactory.createAdapter("v3", port, "");

          driver.on("logMessage", (severity, message) => {
            if (severity > 1) {
              console.log(message);
            }
          });

          driver.open({ baudRate: 1000000, logLevel: "error" }, (err) => {
            if (err) {
              reject(Error(`Error opening adapter: ${err}.`));
            }

            resolve();
          });
        }
      });
    };

    return open().then(() => {
      return new Promise((resolve, reject) => {
        let options = {
          scanParams: {
            active: false,
            interval: 100,
            window: 50,
            timeout: 10,
          },
          connParams: {
            min_conn_interval: 7.5,
            max_conn_interval: 7.5,
            slave_latency: 0,
            conn_sup_timeout: 4000,
          }
        };

        let onConnect = (device) => {
          if (device.address.toLowerCase() !== mac.toLowerCase()) {
            return;
          }

          driver.removeListener("deviceConnected", onConnect);

          resolve(new NordicSensor(device, onDisconnect).setup());
        };

        driver.on("deviceConnected", onConnect);

        driver.connect(mac, options, (err) => {
          if (err) {
            driver.removeListener("deviceConnected", onConnect);

            reject(Error(`Error connecting to target device: ${err}.`));
          }
        });
      });
    });
  }

  constructor(device, handleDisconnect) {
    super();

    this.device = device;
    this.handleDisconnect = handleDisconnect;
    this.connected = false;
  }

  disconnect() {
    return new Promise((resolve, reject) => {
      driver.disconnect(this.device.instanceId, (err) => {
        if (err) {
          reject(Error(`Error disconnecting: ${err}`));
        } else {
          resolve();
        }
      });
    });
  }

  get name() {
    return null;
  }

  setup() {
    return this.discoverService()
      .then(() => this.discoverCharacteristics())
      .then(() => this.discoverCommandCCCD())
      .then(() => this.setCommandCCCD())
      .then(() => this.discoverDataCCCD())
      .then(() => this.setDataCCCD())
      .then(() => {
        let onDisconnect = (device) => {
          if (device.instanceId === this.device.instanceId) {

            driver.removeListener("deviceDisconnected", onDisconnect);
            this.onDisconnected();
          }
        };

        driver.on("deviceDisconnected", onDisconnect);

        driver.on("characteristicValueChanged", attribute => this.onCharacteristicValueChanged(attribute));
        this.connected = true;
        return this;
      });
  }

  onCharacteristicValueChanged(attribute) {
    if (attribute.instanceId === this.commandChar.instanceId) {
      this.onCommandCharValueChanged(attribute);
    } else if (attribute.instanceId === this.dataChar.instanceId) {
      this.onDataCharValueChanged(attribute);
    }
  }

  onCommandCharValueChanged(attribute) {
    if (this.respHandler !== undefined) {
      if (this.ignoreWriteChange) {
        this.ignoreWriteChange = undefined;
        return;
      }
      if (attribute.value.length < 1) {
        this.respHandler(undefined, "Response is too short");
        return;
      }
      if (attribute.value[0] === 1) {
        this.respHandler(attribute.value.slice(1));
      } else if (attribute.value[0] === 2) {

        driver.readCharacteristicValue(this.responseChar.instanceId, (err, readBytes) => {
          if (err) {
            this.respHandler(undefined, err);
            return;
          }
          this.respHandler(readBytes);
        });
      } else {
        this.respHandler(undefined, "Response is invalid");
      }
    }
  }

  onDataCharValueChanged(attribute) {
    this.handlePacket(attribute.value);
  }

  onDisconnected() {
    if (this.respHandler !== undefined) {
      this.respHandler(undefined, "Disconnected while executing command");
    }

    this.connected = false;
    this.handleDisconnect();
  }

  discoverService() {
    return new Promise((resolve, reject) => {

      driver.getServices(this.device.instanceId, (err, services) => {
        if (err) {
          reject(Error(`Error discovering services: ${err}.`));
          return;
        }
        this.service = services.find(s => s.uuid === BRC3_SERVICE_UUID);
        if (this.service === undefined) {
          reject(Error("Could not find BRC3 service"));
        } else {
          resolve();
        }
      });
    });
  }

  discoverCharacteristics() {
    return new Promise((resolve, reject) => {

      driver.getCharacteristics(this.service.instanceId, (err, chars) => {
        if (err) {
          reject(Error(`Error discovering the service characteristics: ${err}.`));
          return;
        }

        this.commandChar = chars.find(c => c.uuid === BRC3_COMMAND_UUID);
        this.responseChar = chars.find(c => c.uuid === BRC3_RESPONSE_UUID);
        this.dataChar = chars.find(c => c.uuid === BRC3_DATA_UUID);

        if (this.commandChar === undefined
          || this.responseChar === undefined
          || this.dataChar === undefined) {
          reject(Error("Could not find all characteristics"));
        } else {
          resolve();
        }
      });
    });
  }

  discoverCommandCCCD() {
    return new Promise((resolve, reject) => {

      driver.getDescriptors(this.commandChar.instanceId, (err, descrs) => {
        if (err) {
          reject(Error(`Error discovering the command characteristic CCCD: ${err}.`));
          return;
        }

        this.commandCCCD = descrs.find(d => d.uuid === BLE_UUID_CCCD);
        if (this.commandCCCD === undefined) {
          reject(Error("Could not find command CCCD"));
        } else {
          resolve();
        }
      });
    });
  }

  setCommandCCCD() {
    return new Promise((resolve, reject) => {

      driver.writeDescriptorValue(this.commandCCCD.instanceId, [2, 0], true, (err) => {
        if (err) {
          reject(Error(`Failed to set command characteristic CCCD: ${err}.`));
          return;
        }

        resolve();
      });
    });
  }

  discoverDataCCCD() {
    return new Promise((resolve, reject) => {

      driver.getDescriptors(this.dataChar.instanceId, (err, descrs) => {
        if (err) {
          reject(Error(`Error discovering the data characteristic CCCD: ${err}.`));
          return;
        }

        this.dataCCCD = descrs.find(d => d.uuid === BLE_UUID_CCCD);
        if (this.dataCCCD === undefined) {
          reject(Error("Could not find data CCCD"));
        } else {
          resolve();
        }
      });
    });
  }

  setDataCCCD() {
    return new Promise((resolve, reject) => {

      driver.writeDescriptorValue(this.dataCCCD.instanceId, [1, 0], true, (err) => {
        if (err) {
          reject(Error(`Failed to set data characteristic CCCD: ${err}.`));
          return;
        }

        resolve();
      });
    });
  }

  execute(command, dataWritePackets) {
    return new Promise((resolve, reject) => {
      if (!this.connected) {
        reject(Error("Not connected"));
        return;
      }
      if (this.respHandler !== undefined) {
        reject(Error("Busy executing a command"));
        return;
      }

      this.respHandler = (response, err) => {
        this.dataWritePackets = undefined;
        this.respHandler = undefined;
        if (err) {
          reject(Error(`Failed to execute command: ${err}.`));
          return;
        }

        resolve(response);
      };

      this.ignoreWriteChange = true;

      driver.writeCharacteristicValue(this.commandChar.instanceId, Array.from(command), true, (err) => {
        if (err) {
          this.respHandler = undefined;
          reject(Error(`Failed to write to command characteristic: ${err}.`));
        }

        if (dataWritePackets) {
          this.dataWritePackets = dataWritePackets;
          this.writeDataPacket();
        }
        // TODO Start a timeout
      });
    });
  }

  writeDataPacket() {
    if (!this.dataWritePackets) {
      return;
    }

    var p = this.dataWritePackets.shift();

    if (p) {

      driver.writeCharacteristicValue(this.dataChar.instanceId, p, false, (err) => {
        if (!err) {
          this.writeDataPacket();
        }
      });
    }
  }
}

module.exports =  {
  BiostampSensor: NordicSensor,
  BiostampError: BRC3Error
};
