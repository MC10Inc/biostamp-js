let { BiostampSensor, BiostampRecording } = require("../index");

let fs = require("fs");
let yargs = require("yargs");

let argv = yargs
  .option("serial", { alias: "s", describe: "Serial number" })
  .option("recId", { alias: "r", describe: "Recording ID"})
  .demandOption(["serial", "recId"])
  .argv;

BiostampSensor.connect(argv.serial, process.exit).then((sensor) => {
  sensor.getRecordingInfo(null, parseInt(argv.recId)).then((recInfo) => {
    let recording = new BiostampRecording(recInfo);

    return sensor.downloadRecording(recInfo, (pages) => {
      pages.forEach((page) => {
        recording.processPage(page);
      });
    }).then(() => {
      return recording.toObject();
    }).catch((err) => {
      throw(err);
    });
  }).then((obj) => {
    let path = argv.serial + "-" + argv.recId + ".json";

    fs.writeFileSync(path, JSON.stringify(obj, null, 2), "utf8");

    console.log("Saved " + path);
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    sensor.disconnect();
  });
});
