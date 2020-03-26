let { BiostampSensor, BiostampDb } = require("../index");

let fs = require("fs");
let yargs = require("yargs");

let argv = yargs
  .option("serial", { alias: "s", describe: "Serial number" })
  .option("recId", { alias: "r", describe: "Recording ID"})
  .demandOption(["serial", "recId"])
  .argv;

let serial = argv.serial;
let recId = parseInt(argv.recId);

BiostampSensor.connect(serial, process.exit).then((sensor) => {
  let db = new BiostampDb();

  sensor.getRecordingInfo(null, recId).then((recInfo) => {
    return db.download(sensor, recInfo, (progress) => {
      console.log(progress);
    });
  }).then(() => {
    return db.readJson(serial, recId);
  }).then((txt) => {
    let path = serial + "-" + recId + ".json";

    fs.writeFileSync(path, txt, "utf8");
    console.log("Exported " + path);
  }).catch((e) => {
    console.warn(e);
  }).finally(() => {
    sensor.disconnect();
  });
});
