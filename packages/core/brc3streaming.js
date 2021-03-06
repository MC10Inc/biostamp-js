let BRC3Schema = require("./brc3schema.js");

class BRC3Streaming {
  constructor(types) {
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
    let listener = this.listeners[BRC3Schema.StreamingType.AD5940];
    let ad5940 = ss.ad5940;

    if (!listener) {
      return;
    }

    let samples = [];

    for (let i = 0; i < ad5940.zMag.length; i++) {
      samples.push({
        zMag: ad5940.zMag[i],
        zPhase: ad5940.zPhase[i]
      });
    }

    listener(samples);
  }

  handleAFE4900(ss) {
    let type = BRC3Schema.StreamingType.AFE4900;
    let listener = this.listeners[type];
    let afe = ss.afe4900;

    if (!listener) {
      return;
    }

    let info = this.infos[type];

    if (afe.ppg.length > 0 && afe.ppgIr.length > 0) {
      let ppg = this.getDifferentialArray(afe.ppg, 1);
      let ppgIr = this.getDifferentialArray(afe.ppgIr, 1);
      let ts = this.getTimestamps(info, ss, ppg.length);

      listener(this.zip([ppg, ppgIr]), ts);
    }
    else if (afe.ecg.length > 0 && afe.ppg.length > 0) {
      let ecg = this.getDifferentialArray(afe.ecg, info.afe4900EcgVScale);
      let ppg = this.getDifferentialArray(afe.ppg, 1);
      let ts = this.getTimestamps(info, ss, ecg.length);

      listener(this.zip([ecg, ppg]), ts);
    }
    else if (afe.ecg.length > 0) {
      let ecg = this.getDifferentialArray(afe.ecg, info.afe4900EcgVScale);
      let ts = this.getTimestamps(info, ss, ecg.length);

      listener(ecg, ts);
    }
    else {
      let ppg = this.getDifferentialArray(afe.ppg, 1);
      let ambient = this.getDifferentialArray(afe.ambient, 1);
      let ts = this.getTimestamps(info, ss, ppg.length);

      listener(this.zip([ppg, ambient]), ts);
    }
  }

  handleEnvironment(ss) {
    let type = BRC3Schema.StreamingType.ENVIRONMENT;
    let listener = this.listeners[type];
    let info = this.infos[type];
    let environment = ss.environment;

    if (!listener) {
      return;
    }

    let samples = [];

    for (let i = 0; i < environment.pascals.length; i++) {
      samples.push({
        pascals: environment.pascals[i],
        temperatureC: environment.temperatureC[i]
      });
    }

    let ts = this.getTimestamps(info, ss, samples.length);

    listener(samples, ts);
  }

  handleMotion(ss) {
    let type = BRC3Schema.StreamingType.MOTION;
    let listener = this.listeners[type];
    let info = this.infos[type];
    let motion = ss.motion;

    if (!listener) {
      return;
    }

    let axes = [];

    if (motion.accelX.length) {
      axes = axes.concat([
        this.getDifferentialArray(motion.accelX, info.accelGScale),
        this.getDifferentialArray(motion.accelY, info.accelGScale),
        this.getDifferentialArray(motion.accelZ, info.accelGScale)
      ]);
    }
    if (motion.gyroX.length) {
      axes = axes.concat([
        this.getDifferentialArray(motion.gyroX, info.gyroDpsScale),
        this.getDifferentialArray(motion.gyroY, info.gyroDpsScale),
        this.getDifferentialArray(motion.gyroZ, info.gyroDpsScale)
      ]);
    }
    if (motion.magX.length) {
      axes = axes.concat([
        this.getDifferentialArray(motion.magX, info.magUtScale),
        this.getDifferentialArray(motion.magY, info.magUtScale),
        this.getDifferentialArray(motion.magZ, info.magUtScale)
      ]);
    }

    let ts = this.getTimestamps(info, ss, axes[0].length);

    listener(this.zip(axes), ts);
  }

  handleRotation(ss) {
    let type = BRC3Schema.StreamingType.MOTION;
    let listener = this.listeners[type];
    let info = this.infos[type];
    let rotation = ss.rotation;

    if (!listener) {
      return;
    }

    let axes = [
      rotation.quatA,
      rotation.quatB,
      rotation.quatC,
      rotation.quatD
    ];

    let ts = this.getTimestamps(info, ss, axes[0].length);

    listener(this.zip(axes), ts);
  }

  getTimestamps(info, ss, n) {
    let ts = new Array(n);
    let t0 = ss.timestamp * info.timestampScale;
    let dt = ss.samplingPeriod * info.samplingPeriodScale;

    for (let i = 0; i < n; i++) {
      ts[i] = t0 + (i * dt);
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
