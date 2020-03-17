let { BiostampSensor, BiostampRecording } = require("../index");

let fs = require("fs");
let yargs = require("yargs");

let argv = yargs
  .option("serial", { alias: "s", describe: "Serial number" })
  .option("recId", { alias: "r", describe: "Recording ID"})
  .option("feature", { alias: "f", describe: "Data feature, e.g. 'motion'"})
  .demandOption(["serial", "recId", "feature"])
  .argv;

BiostampSensor.connect(argv.serial, process.exit).then((sensor) => {
  sensor.getRecordingInfo(null, parseInt(argv.recId)).then((recInfo) => {
    let recording = new BiostampRecording(recInfo);

    return sensor.downloadRecording(recInfo, (pages) => {
      pages.forEach((page) => {
        recording.processPage(page);
      });
    }).then(() => {
      return recording.toCsv(argv.feature);
    }).catch((err) => {
      throw(err);
    });
  }).then((txt) => {
    let path = argv.serial + "-" + argv.recId + ".csv";

    fs.writeFileSync(path, txt, "utf8");

    console.log("Saved " + path);
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    sensor.disconnect();
  });
});
