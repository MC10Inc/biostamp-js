class BRC3Recording {
  constructor(recInfo) {
    this.recInfo = recInfo;
    this.motion = [];
    this.afe4900 = [];
    this.ad5940 = [];
    this.environment = [];
    this.annotation = [];
    this.nextPage = 0;
  }

  processPage(page) {
    if (page.pageNumber !== this.nextPage) {
      throw Error("Got page " + page.pageNumber + " but expected page " + this.nextPage);
    }

    if (page.motion) {
      if (page.motion.gyroX) {
        this.processMotionAccelGyro(page);
      }
      else {
        this.processMotionAccel(page);
      }
    }
    else if (page.afe4900) {
      if (page.afe4900.ecg && page.afe4900.ppg) {
        this.processAfe4900Ptt(page);
      }
      else if (page.afe4900.ecg) {
        this.processAfe4900Ecg(page);
      }
      else {
        this.processAfe4900Ppg(page);
      }
    }
    else if (page.ad5940) {
      this.processAd5940Z(page);
    }
    else if (page.environment) {
      this.processEnvironment(page);
    }
    else if (page.annotation) {
      this.processAnnotation(page);
    }

    this.nextPage++;
  }

  processAnnotation(page) {
    let ts = page.timestamp * this.recInfo.rawDataInfo.timestampScale;

    this.annotation.push([ts, page.annotation]);
  }

  processAd5940Z(page) {
    let series = [page.ad5940.zMag, page.ad5940.zPhase];
    let scales = [1, 1];

    this.processSeries(page, series, scales, this.ad5940);
  }

  processAfe4900Ecg(page) {
    let series = [page.afe4900.ecg];
    let scales = [this.recInfo.rawDataInfo.afe4900EcgVScale];

    this.processSeries(page, series, scales, this.afe4900);
  }

  processAfe4900Ppg(page) {
    let series = [page.afe4900.ppg];
    let scales = [1];

    this.processSeries(page, series, scales, this.afe4900);
  }

  processAfe4900Ptt(page) {
    let series = [page.afe4900.ecg, page.afe4900.ppg];
    let scales = [this.recInfo.rawDataInfo.afe4900EcgVScale, 1];

    this.processSeries(page, series, scales, this.afe4900);
  }

  processMotionAccel(page) {
    let series = [
      page.motion.accelX,
      page.motion.accelY,
      page.motion.accelZ
    ];

    let scales = [
      this.recInfo.rawDataInfo.accelGScale,
      this.recInfo.rawDataInfo.accelGScale,
      this.recInfo.rawDataInfo.accelGScale
    ];

    this.processSeries(page, series, scales, this.motion);
  }

  processMotionAccelGyro(page) {
    let series = [
      page.motion.accelX,
      page.motion.accelY,
      page.motion.accelZ,
      page.motion.gyroX,
      page.motion.gyroY,
      page.motion.gyroZ
    ];

    let scales = [
      this.recInfo.rawDataInfo.accelGScale,
      this.recInfo.rawDataInfo.accelGScale,
      this.recInfo.rawDataInfo.accelGScale,
      this.recInfo.rawDataInfo.gyroDpsScale,
      this.recInfo.rawDataInfo.gyroDpsScale,
      this.recInfo.rawDataInfo.gyroDpsScale
    ];

    this.processSeries(page, series, scales, this.motion);
  }

  processEnvironment(page) {
    let series = [
      page.environment.pascals,
      page.environment.temperatureC
    ];

    let scales = [1, 1];

    this.processSeries(page, series, scales, this.environment);
  }

  processSeries(page, series, scales, dest) {
    let ts = page.timestamp * this.recInfo.rawDataInfo.timestampScale;
    let tsStep = page.samplingPeriod * this.recInfo.rawDataInfo.samplingPeriodScale;

    for (let i = 0; i < series[0].length; i++) {
      let row = [ts + (i * tsStep)];

      for (let j = 0; j < series.length; j++) {
        row.push(series[j][i] * scales[j]);
      }

      dest.push(row);
    }
  }

  toObject() {
    return Object.assign({}, this);
  }

  toCsv(feature) {
    let join = (vals) => vals.join(",");

    if (feature === "annotation") {
      join = (vals) => `${vals[0]},"${vals[1].replace(/"/g, "\"\"")}"`;
    }

    return ["A,B,C,D,E,F,G"].concat(this[feature].map(join)).join("\n");
  }
}

module.exports = BRC3Recording;
