let { BRC3Sensor, BRC3Error, BRC3Utils } = require("@mc10inc/biostamp-js-core");
let { BRC3Db } = require("@mc10inc/biostamp-js-db");

let noble = require("@abandonware/noble");

const BRC3_SERVICE_UUID = "de77100090e111e89a5a34f39a69480c";
const BRC3_COMMAND_UUID = "de77100190e111e89a5a34f39a69480c";
const BRC3_RESPONSE_UUID = "de77100290e111e89a5a34f39a69480c";
const BRC3_DATA_UUID = "de77100390e111e89a5a34f39a69480c";

class NodeSensor extends BRC3Sensor {
  static connect(serial, onDisconnect) {
    noble.startScanning();

    return new Promise((resolve, reject) => {
      let discover = (peripheral) => {
        let adv = peripheral.advertisement || {};
        console.log(adv.localName || "[No name]");

        let isSerialMatch = (adv.localName || "").toLowerCase() === serial.toLowerCase();

        if (isSerialMatch) {
          noble.stopScanning();
          noble.off("discover", discover);

          peripheral.once("disconnect", onDisconnect);

          peripheral.connect((error) => {
            console.log("[connected " + adv.localName + "]");

            peripheral.discoverAllServicesAndCharacteristics((error, services, chars) => {
              let commandChar = chars.find((char) => {
                return char.uuid === BRC3_COMMAND_UUID;
              });

              let dataChar = chars.find((char) => {
                return char.uuid === BRC3_DATA_UUID;
              });

              let responseChar = chars.find((char) => {
                return char.uuid === BRC3_RESPONSE_UUID;
              });

              resolve(new NodeSensor(peripheral, commandChar, dataChar, responseChar));
            });
          });
        }
      };

      noble.on("discover", discover);
    });
  }

  constructor(peripheral, commandChar, dataChar, responseChar) {
    super();

    this.peripheral = peripheral;
    this.commandChar = commandChar;
    this.dataChar = dataChar;
    this.responseChar = responseChar;

    dataChar.subscribe((error) => {
      dataChar.on("data", (buffer) => {
        this.handlePacket(Array.from(buffer));
      });
    });
  }

  disconnect() {
    console.log("[disconnected]");

    this.peripheral.disconnect();
  }

  writeDataPackets(packets) {
    let i = 0;
    let n = packets.length;

    let write = (packets) => {
      if (packets.length) {
        this.dataChar.write(Buffer.from(packets.shift()), false, (error) => {
          if (error) {
            console.error(error);
          }

          console.log("packet=" + (++i) + "/" + n);

          write(packets);
        });
      }
    };

    write(packets);
  }

  execute(data, dataWritePackets) {
    return new Promise((resolve, reject) => {
      let subscribe = (error) => {
        if (error) {
          console.error(error);
        }

        this.commandChar.on("data", onData);

        this.commandChar.write(Buffer.from(data), false, (error) => {
          if (error) {
            console.error(error);
          }

          if (dataWritePackets) {
            this.writeDataPackets(dataWritePackets);
          }
        });
      };

      let onData = (buffer) => {
        this.commandChar.off("data", onData);

        this.commandChar.unsubscribe();

        if (buffer[0] === 1) {
          resolve(buffer.slice(1));
        }
        else {
          this.responseChar.read((error, buffer) => {
            if (error) {
              console.error(error);
            }

            resolve(buffer);
          });
        }
      };

      this.commandChar.subscribe(subscribe);
    });
  }

  get serial() {
    return this.peripheral.advertisement.localName;
  }
}

module.exports =  {
  BiostampSensor: NodeSensor,
  BiostampDb: BRC3Db,
  BiostampError: BRC3Error,
  BiostampUtils: BRC3Utils
};
