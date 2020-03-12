let { BiostampSensor } = require("../index");

let yargs = require("yargs");

let argv = yargs
  .option("serial", { alias: "s", describe: "Serial number" })
  .demandOption(["serial"])
  .argv;

BiostampSensor.connect(argv.serial, process.exit).then((sensor) => {
  let vitals = {
    name: sensor.name,
    id: sensor.id
  };

  sensor.setTime().then(() => {
    return sensor.getTime();
  }).then((time) => {
    vitals.time = time;

    return sensor.getVersion();
  }).then((version) => {
    vitals.version = version;

    return sensor.getRecordingFreeSpace();
  }).then((freeSpace) => {
    vitals.freeSpace = freeSpace;

    return sensor.countRecordings();
  }).then((countRecs) => {
    vitals.countRecs = countRecs;

    return sensor.getSystemStatus();
  }).then((systemStatus) => {
    vitals.systemStatus = systemStatus;

    return sensor.getTemperature();
  }).then((temperature) => {
    vitals.temperature = temperature;

    return sensor.getPressure();
  }).then((pressure) => {
    vitals.pressure = pressure;

    console.log(vitals);

    sensor.disconnect();
  });
});
