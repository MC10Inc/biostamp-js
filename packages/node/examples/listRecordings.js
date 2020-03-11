let { BiostampSensor } = require("../index");

let yargs = require("yargs");

let argv = yargs
  .option("serial", { alias: "s", describe: "Serial number" })
  .demandOption(["serial"])
  .argv;

BiostampSensor.connect(argv.serial, process.exit).then((sensor) => {
  sensor.listRecordings().then((recordings) => {
    console.log(recordings);

    sensor.disconnect();
  });
});
