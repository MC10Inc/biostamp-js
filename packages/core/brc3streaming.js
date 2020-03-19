let pb = require("protobufjs");
let proto = require("./brc3.json");
let schema = pb.Root.fromJSON(proto);

class BRC3Streaming {
  constructor() {
    this.listeners = {};
    this.infos = {};
  }

  enableStream(type, info, listener) {
    this.listeners[type] = listener;
    this.infos[type] = info;
  }

  disableStream(type) {
    delete this.listeners[type];
    delete this.infos[type];
  }

  handleStreamingSamples(ss) {
    if (ss.motion) {
      this.handleMotion(ss);
    }
    else if (ss.afe4900) {
      this.handleAFE4900(ss);
    }
    else if (ss.environment) {
      this.handleEnvironment(ss);
    }
    else if (ss.rotation) {
      this.handleRotation(ss);
    }
    else if (ss.ad5940) {
      this.handleAD5940(ss);
    }
  }

  handleAD5940(ss) {
    let listener = this.listeners[schema.StreamingType.AD5940];
    let ad5940 = ss.ad5940;

    if (!listener) {
      return;
    }

    let samples = [];

    for (let i = 0; i < ad5940.zMagList.length; i++) {
      samples.push({
        zMag: ad5940.zMagList[i],
        zPhase: ad5940.zPhaseList[i]
      });
    }

    listener(samples);
  }

  handleAFE4900(ss) {
    let type = schema.StreamingType.AFE4900;
    let listener = this.listeners[type];
    let afe = ss.afe4900;

    if (!listener) {
      return;
    }

    let info = this.infos[type];

    if (afe.ecgList.length > 0 && afe.ppgList.length > 0) {
      let ecg = this.getDifferentialArray(afe.ecgList, info.afe4900EcgVScale);
      let ppg = this.getDifferentialArray(afe.ppgList, 1);
      let ts = this.getTimestamps(info, ss, ecg.length);

      listener(this.zip([ecg, ppg]), ts);
    }
    else if (afe.ecgList.length > 0) {
      let ecg = this.getDifferentialArray(afe.ecgList, info.afe4900EcgVScale);
      let ts = this.getTimestamps(info, ss, ecg.length);

      listener(ecg, ts);
    }
    else {
      let ppg = this.getDifferentialArray(afe.ppgList, 1);
      let ambient = this.getDifferentialArray(afe.ambientList, 1);
      let ts = this.getTimestamps(info, ss, ppg.length);

      listener(this.zip([ppg, ambient]), ts);
    }
  }

  handleEnvironment(ss) {
    let type = schema.StreamingType.ENVIRONMENT;
    let listener = this.listeners[type];
    let info = this.infos[type];
    let environment = ss.environment;

    if (!listener) {
      return;
    }

    let samples = [];
  
    for (let i = 0; i < environment.pascalsList.length; i++) {
      samples.push({
        pascals: environment.pascalsList[i],
        temperatureC: environment.temperatureCList[i],
        externalTemperatureC: environment.externalTemperatureCList[i]
      });
    }

    let ts = this.getTimestamps(info, ss, samples.length);

    listener(samples, ts);
  }

  handleMotion(ss) {
    let type = schema.StreamingType.MOTION;
    let listener = this.listeners[type];
    let info = this.infos[type];
    let motion = ss.motion;

    if (!listener) {
      return;
    }

    let axes = [];

    if (motion.accelXList.length > 0) {
      axes = axes.concat([
        this.getDifferentialArray(motion.accelXList, info.accelGScale),
        this.getDifferentialArray(motion.accelYList, info.accelGScale),
        this.getDifferentialArray(motion.accelZList, info.accelGScale)
      ]);
    }
    if (motion.gyroXList.length > 0) {
      axes = axes.concat([
        this.getDifferentialArray(motion.gyroXList, info.gyroDpsScale),
        this.getDifferentialArray(motion.gyroYList, info.gyroDpsScale),
        this.getDifferentialArray(motion.gyroZList, info.gyroDpsScale)
      ]);
    }
    if (motion.magXList.length > 0) {
      axes = axes.concat([
        this.getDifferentialArray(motion.magXList, info.magUtScale),
        this.getDifferentialArray(motion.magYList, info.magUtScale),
        this.getDifferentialArray(motion.magZList, info.magUtScale)
      ]);
    }

    let ts = this.getTimestamps(info, ss, axes[0].length);

    listener(this.zip(axes), ts);
  }

  handleRotation(ss) {
    let type = schema.StreamingType.MOTION;
    let listener = this.listeners[type];
    let info = this.infos[type];
    let rotation = ss.rotation;

    if (!listener) {
      return;
    }

    let axes = [
      rotation.quatAList,
      rotation.quatBList,
      rotation.quatCList,
      rotation.quatDList
    ];

    let ts = this.getTimestamps(info, ss, axes[0].length);

    listener(this.zip(axes), ts);
  }

  getTimestamps(info, ss, n) {
    let ts = new Array(n);
    let t0 = ss.timestamp * info.timestampScale;
    let dt = ss.samplingPeriod * info.samplingPeriodScale;

    for (let i = 0; i < n; i++) {
      ts[i] = new Date((t0 + (i * dt)) * 1000);
    }

    return ts;
  }

  getDifferentialArray(raw, scale) {
    let values = new Array(raw.length);
    let value = 0;

    for (let i = 0; i < raw.length; i++) {
      value += raw[i] * scale;
      values[i] = value;
    }

    return values;
  }

  zip(cols) {
    let rows = new Array(cols[0].length);

    for (let i = 0; i < cols[0].length; i++) {
      rows[i] = cols.map((col) => col[i]);
    }

    return rows;
  }
}

module.exports = BRC3Streaming;
