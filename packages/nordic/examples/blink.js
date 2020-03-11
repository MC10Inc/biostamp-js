let { BiostampSensor } = require("../index");

let yargs = require("yargs");

let argv = yargs
  .option("port", { alias: "p", describe: "nRF52840 Dongle port" })
  .option("mac", { alias: "m", describe: "MAC address" })
  .demandOption(["port", "mac"])
  .argv;

BiostampSensor.connect(argv.port, argv.mac, process.exit).then((sensor) => {
  sensor.blinkLeds().then(() => {
    sensor.disconnect();
  });
});
