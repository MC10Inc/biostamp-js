let { BRC3Sensor, BRC3Error, BRC3Utils } = require("@mc10inc/biostamp-js-core");

const BRC3_SERVICE_UUID = "de771000-90e1-11e8-9a5a-34f39a69480c";
const BRC3_COMMAND_UUID = "de771001-90e1-11e8-9a5a-34f39a69480c";
const BRC3_RESPONSE_UUID = "de771002-90e1-11e8-9a5a-34f39a69480c";
const BRC3_DATA_UUID = "de771003-90e1-11e8-9a5a-34f39a69480c";

class WebSensor extends BRC3Sensor {
  static connect(namePrefix = "BRC3", onDisconnect) {
    let filters = [{ namePrefix }];
    let optionalServices = [BRC3_SERVICE_UUID];

    return navigator.bluetooth.requestDevice({ filters, optionalServices }).then((device) => {
      return new Promise((resolve, reject) => {
        device.addEventListener("gattserverdisconnected", onDisconnect);

        device.gatt.connect().then((server) => {
          return server.getPrimaryService(BRC3_SERVICE_UUID);
        }).then((service) => {
          return Promise.all([
            service.getCharacteristic(BRC3_COMMAND_UUID),
            service.getCharacteristic(BRC3_DATA_UUID),
            service.getCharacteristic(BRC3_RESPONSE_UUID)
          ]);
        }).then(([commandChar, dataChar, responseChar]) => {
          resolve(new WebSensor(device, commandChar, dataChar, responseChar));
        }).catch((err) => {
          reject(err);
        });
      });
    })
    .catch((err) => {
      console.error(err);
      throw(err);
    });
  }

  constructor(device, commandChar, dataChar, responseChar) {
    super();

    this.device = device;
    this.commandChar = commandChar;
    this.dataChar = dataChar;
    this.responseChar = responseChar;

    commandChar.startNotifications();

    dataChar.startNotifications();
    dataChar.addEventListener("characteristicvaluechanged", this.handleValueChange.bind(this));
  }

  execute(data, dataWritePackets) {
    return new Promise((resolve, reject) => {
      let uint8ArrayRequest = new Uint8Array(data);

      let listener = this.onValueChanged((uint8ArrayResponse) => {
        resolve(uint8ArrayResponse);
        this.commandChar.removeEventListener("characteristicvaluechanged", listener);
      });

      this.commandChar.addEventListener("characteristicvaluechanged", listener);
      this.commandChar.writeValue(uint8ArrayRequest).then(() => {
        if (dataWritePackets) {
          this.writeDataPackets(dataWritePackets);
        }
      }).catch((err) => {
        console.error(err);
      });
    });
  }

  disconnect() {
    this.device.gatt.disconnect();
  }

  handleValueChange(evt) {
    let view = evt.target.value;
    let packet = new Uint8Array(view.buffer);

    this.handlePacket(Array.from(packet));
  }

  readLongResponse() {
    return this.responseChar.readValue().catch((err) => {
      console.error(err);
    });
  }

  onValueChanged(resolve) {
    return (evt) => {
      let view = evt.target.value;
      let mode = view.getInt8(0);

      // "short response"
      if (mode === 1) {
        resolve(new Uint8Array(view.buffer.slice(1)));
      }
      // "long response"
      else if (mode === 2) {
        this.readLongResponse().then((view) => {
          resolve(new Uint8Array(view.buffer));
        });
      }
      else {
        // ERROR
      }
    };
  }

  writeDataPackets(packets) {
    let i = 0;
    let n = packets.length;

    let write = (packets) => {
      if (packets.length) {
        this.dataChar.writeValue(new Uint8Array(packets.shift())).then(() => {
          console.log("packet=" + (++i) + "/" + n);

          write(packets);
        })
        .catch((err) => {
          console.error(err);
        });
      }
    };

    write(packets);
  }

  get name() {
    return this.device.name;
  }
}

window.BiostampSensor = WebSensor;
window.BiostampError = BRC3Error;

module.exports =  {
  BiostampSensor: WebSensor,
  BiostampError: BRC3Error,
  BiostampUtils: BRC3Utils
};
