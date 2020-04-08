let { BiostampSensor } = require("../index");

let yargs = require("yargs");

let argv = yargs
  .option("serial", { alias: "s", describe: "Serial number,Serial number" })
  .demandOption(["serial"])
  .argv;

let [serial1, serial2] = argv.serial.split(",");

BiostampSensor.connect(serial1, () => null).then((sensor1) => {
  return BiostampSensor.connect(serial2, () => null).then((sensor2) => {
    return [sensor1, sensor2];
  });
}).then(([sensor1, sensor2]) => {
  return Promise.all([sensor1.blinkLeds(), sensor2.blinkLeds()]).then(() => {
    sensor1.disconnect();
    sensor2.disconnect();
  });
}).then(() => {
  process.exit();
});
