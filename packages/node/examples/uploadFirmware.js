let { BiostampSensor } = require("../index");

let fs = require("fs");
let yargs = require("yargs");

let argv = yargs
  .option("serial", { alias: "s", describe: "Serial number" })
  .option("path", { alias: "p", describe: "Firmware image path" })
  .demandOption(["serial", "path"])
  .argv;

BiostampSensor.connect(argv.serial, process.exit).then((sensor) => {
  fs.readFile(argv.path, (err, buffer) => {
    sensor.uploadFirmwareImage(Array.from(buffer)).then(() => {
      console.log("Loading firmware ...");

      return sensor.loadFirmwareImage();
    }).catch((err) => {
      console.error(err.message);
    }).then(() => {
      console.log("Loaded firmware");

      sensor.reset();
    });
  });
});
