let { BiostampSensor } = require("../index");

let yargs = require("yargs");

let argv = yargs
  .option("serial", { alias: "s", describe: "Serial number" })
  .demandOption(["serial"])
  .argv;

BiostampSensor.connect(argv.serial, process.exit).then((sensor) => {
  let config = {
    motion: {
      accelGRange: 16,
      gyroDpsRange: 500,
      mode: BiostampSensor.MotionMode.ACCEL_GYRO,
      rotationType: BiostampSensor.MotionRotationType.ROT_ACCEL_GYRO,
      samplingPeriodUs: 6250
    },
    recordingEnabled: false
  };

  sensor.getSensingInfo().then((info) => {
    if (info) {
      return sensor.stopSensing();
    }

    return Promise.resolve();
  }).then(() => {
    return sensor.setTime();
  }).then((time) => {
    return sensor.startSensing(config);
  }).then((recordingId) => {
    sensor.startStreaming(BiostampSensor.StreamingType.MOTION, (packet, ts) => {
      console.log(packet, ts);
    });

    setTimeout(() => {
      sensor.stopSensing().then(() => {
        sensor.disconnect();
      });
    }, 5000);
  }).catch((err) => {
    console.error(err.message);

    sensor.disconnect();
  });
});
