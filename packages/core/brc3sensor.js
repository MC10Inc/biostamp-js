let pb = require("protobufjs");
let proto = require("./brc3.json");
let schema = pb.Root.fromJSON(proto);
let { Command, Request, Response } = schema;

let BRC3Error = require("./brc3error.js");
let BRC3Streaming = require("./brc3streaming.js");
let BRC3PacketHandler = require("./brc3packet.js");
let BRC3Utils = require("./brc3utils.js");

const FLASH_PAGE_BYTES = 256;

class BRC3Sensor {
  constructor() {
    this.packetHandler = new BRC3PacketHandler(this.handlePayload.bind(this));
    this.streaming = new BRC3Streaming(schema);
  }

  request(request, dataWritePackets = undefined) {
    let reqBuffer = Request.encode(request).finish();

    console.log("request", JSON.stringify(Request.toObject(request)));

    return this.execute(reqBuffer, dataWritePackets).then((respBuffer) => {
      let response = Response.decode(respBuffer);

      console.log("response", JSON.stringify(Response.toObject(response)));

      if (response.command !== request.command) {
        throw new Error("Got response for wrong command");
      }

      if (response.error !== BRC3Error.SUCCESS) {
        throw new BRC3Error(response.error);
      }

      return Response.toObject(response);
    });
  }

  command(command) {
    let request = Request.create({ command });

    return this.request(request).then((response) => null);
  }

  handlePacket(packet) {
    this.packetHandler.handle(packet);
  }

  handlePayload(payload) {
    // let msg = schema.DataMessage.deserializeBinary(payload).toObject();

    // if (msg.streamingSamples) {
    //   this.streaming.handleStreamingSamples(msg.streamingSamples);
    // }
    // else if (msg.recordingPagesList && msg.recordingPagesList.length > 0) {
    //   if (this.recordingPagesListener) {
    //     this.recordingPagesListener(msg.recordingPagesList);
    //     this.recordingPagesListener = undefined;
    //   }
    // }
    // else {
    //   console.log("Unknown data message: " + msg);
    // }
  }

  // parseUserConfig(config) {
  //   let cfg = new schema.SensorConfig();
  //   cfg.setRecordingEnabled(config.recordingEnabled);

  //   if (config.motion) {
  //     let motion = new schema.MotionConfig();
  //     motion.setSamplingPeriodUs(config.motion.samplingPeriodUs);
  //     motion.setAccelGRange(config.motion.accelGRange);
  //     motion.setGyroDpsRange(config.motion.gyroDpsRange);
  //     motion.setMode(config.motion.mode);
  //     motion.setRotationType(config.motion.rotationType);

  //     cfg.setMotion(motion);
  //   }

  //   if (config.afe4900) {
  //     let afe4900 = new schema.AFE4900Config();
  //     afe4900.setMode(config.afe4900.mode);
  //     afe4900.setEcgGain(config.afe4900.ecgGain);
  //     afe4900.setColor(config.afe4900.color);
  //     afe4900.setPhotodiode(config.afe4900.photodiode);

  //     cfg.setAfe4900(afe4900);
  //   }

  //   if (config.environment) {
  //     let environment = new schema.EnvironmentConfig();
  //     environment.setMode(config.environment.mode);
  //     environment.setSamplingPeriodUs(config.environment.samplingPeriodUs);

  //     cfg.setEnvironment(environment);
  //   }

  //   if (config.ad5940) {
  //     let ad5940 = new schema.AD5940Config();
  //     ad5940.setMode(config.ad5940.mode);
  //     ad5940.setMeasureBaseline(false);

  //     cfg.setAd5940(ad5940);
  //   }

  //   return cfg;
  // }

  // startSensing(config, duration = 0, metadata = "") {
  //   let param = new schema.SensingStartCommandParam();
  //   param.setConfig(this.parseUserConfig(config));
  //   param.setMaxDuration(duration);
  //   param.setMetadata(BRC3Utils.encodeMessage(metadata));

  //   let request = new schema.Request();
  //   request.setCommand(schema.Command.SENSING_START);
  //   request.setSensingStart(param);

  //   return this.request(request).then((response) => {
  //     return response.getSensingStart().getRecordingId() || null;
  //   });
  // }

  stopSensing() {
    let request = Request.create({
      command: Command.SENSING_STOP
    });

    return this.request(request).then((response) => {
      return response.sensingStop.recordingId || null;
    });
  }

  powerOff() {
    return this.command(Command.POWER_OFF);
  }

  reset() {
    return this.command(Command.RESET);
  }

  blinkLeds() {
    return this.command(Command.BLINK_LEDS);
  }

  clearOldestRecording() {
    return this.command(Command.RECORDING_CLEAR_OLDEST);
  }

  clearAllRecordings() {
    return this.command(Command.CLEAR_ALL_RECORDINGS);
  }

  loadFirmwareImage() {
    return this.command(Command.LOAD_FIRMWARE_IMAGE);
  }

  getTemperature() {
    let request = Request.create({
      command: Command.TEMPERATURE_GET
    });

    return this.request(request).then((response) => {
      return response.temperatureGet.temperatureC;
    });
  }

  getPressure() {
    let request = Request.create({
      command: Command.PRESSURE_GET
    });

    return this.request(request).then((response) => {
      return response.pressureGet.pascals;
    });
  }

  getTime() {
    let request = Request.create({
      command: Command.TIME_GET
    });

    return this.request(request).then((response) => {
      return response.timeGet.timestamp;
    });
  }

  setTime(timestamp = Date.now() / 1000) {
    let { TimeSetCommandParam } = schema;

    let request = Request.create({
      command: Command.TIME_SET,
      timeSet: TimeSetCommandParam.create({ timestamp })
    });

    return this.request(request).then((response) => null);
  }

  getRecordingFreeSpace() {
    let request = Request.create({
      command: Command.RECORDING_GET_FREE_SPACE
    });

    return this.request(request).then((response) => {
      return response.recordingGetFreeSpace;
    });
  }

  // getRecordingInfo(index = null, recordingId = null) {
  //   let param = new schema.RecordingGetInfoCommandParam();
  //   param.setIndex(index);
  //   param.setRecordingId(recordingId);

  //   let request = new schema.Request();
  //   request.setCommand(schema.Command.RECORDING_GET_INFO);
  //   request.setRecordingGetInfo(param);

  //   return this.request(request).then((response) => {
  //     let info = response.getRecordingGetInfo().getInfo().toObject();
  //     info.metadata = BRC3Utils.decodeMessage(info.metadata);

  //     return info;
  //   });
  // }

  countRecordings() {
    let request = Request.create({
      command: Command.RECORDING_GET_COUNT
    });

    return this.request(request).then((response) => {
      return response.recordingGetCount.count;
    });
  }

  // listRecordings() {
  //   return new Promise((resolve, reject) => {
  //     let recordings = [];

  //     let getRec = (index) => {
  //       this.getRecordingInfo(index).then((rec) => {
  //         recordings.push(rec);

  //         getRec(index + 1);
  //       }).catch((err) => {
  //         if (err.code === BRC3Error.RECORDING_NOT_FOUND) {
  //           resolve(recordings);
  //         }
  //         else {
  //           reject(err);
  //         }
  //       });
  //     };

  //     getRec(0);
  //   });
  // }

  getSystemStatus() {
    let request = Request.create({
      command: Command.SYSTEM_STATUS
    });

    return this.request(request).then((response) => {
      return response.systemStatus;
    });

  }

  getVersion() {
    let request = Request.create({
      command: Command.VERSION_GET
    });

    return this.request(request).then((response) => {
      return response.versionGet;
    });
  }

  flashEraseBlock(address) {
    let { FlashEraseBlockCommandParam } = schema;

    let request = Request.create({
      command: Command.FLASH_ERASE_BLOCK,
      flashEraseBlock: FlashEraseBlockCommandParam.create({ address })
    });

    return this.request(request).then((response) => null);
  }

  flashWritePage(address, data) {
    let { FlashWritePageCommandParam } = schema;

    let request = Request.create({
      command: Command.FLASH_WRITE_PAGE,
      flashWritePage: FlashWritePageCommandParam.create({ address, data })
    });

    return this.request(request).then((response) => null);
  }

  // flashReadData(address, length) {
  //   let param = new schema.FlashReadDataCommandParam();
  //   param.setAddress(address);
  //   param.setLength(length);

  //   let request = new schema.Request();
  //   request.setCommand(schema.Command.FLASH_READ_DATA);
  //   request.setFlashReadData(param);

  //   return this.request(request).then((response) => {
  //     return response.getFlashReadData().getData();
  //   });
  // }

  getSensingInfo() {
    let request = Request.create({
      command: Command.SENSING_GET_INFO
    });

    return this.request(request).then((response) => {
      if (response.sensingGetInfo.enabled) {
        return response.sensingGetInfo;
      }

      return null;
    });
  }

  // startStreaming(type, listener) {
  //   let param = new schema.StreamingStartCommandParam();
  //   param.setType(type);

  //   let request = new schema.Request();
  //   request.setCommand(schema.Command.STREAMING_START);
  //   request.setStreamingStart(param);

  //   return this.request(request).then((response) => {
  //     let info = response.getStreamingStart().toObject().info;

  //     this.streaming.enableStream(type, info, listener);

  //     return info;
  //   });
  // }

  // stopStreaming(type) {
  //   this.streaming.disableStream(type);

  //   let param = new schema.StreamingStopCommandParam();
  //   param.setType(type);

  //   let request = new schema.Request();
  //   request.setCommand(schema.Command.STREAMING_STOP);
  //   request.setStreamingStop(param);

  //   return this.request(request).then((response) => null);
  // }

  // annotate(message, timestamp) {
  //   let param = new schema.AnnotateCommandParam();
  //   param.setAnnotationData(BRC3Utils.encodeMessage(message));
  //   param.setOverrideTimestamp(timestamp);

  //   let request = new schema.Request();
  //   request.setCommand(schema.Command.ANNOTATE);
  //   request.setAnnotate(param);

  //   return this.request(request).then((response) => {
  //     return response.getAnnotate().getTimestamp();
  //   });
  // }

  // readRecording(recordingId, firstPage) {
  //   let param = new schema.RecordingReadCommandParam();
  //   param.setRecordingId(recordingId);
  //   param.setFirstPage(firstPage);

  //   let request = new schema.Request();
  //   request.setCommand(schema.Command.RECORDING_READ);
  //   request.setRecordingRead(param);

  //   return this.request(request).then((response) => null);
  // }

  // afe4900DynamicConfig(config) {
  //   let dynamic = new schema.AFE4900Dynamic();
  //   dynamic.setTiaGain(config.tiaGain);
  //   dynamic.setLedCurrent(config.ledCurrent);
  //   dynamic.setOffdacCurrent(config.offDacCurrent);
  //   dynamic.setOffdacScale(config.offDacScale);
  //   dynamic.setOffdacCurrentAmbient(config.offDacCurrentAmbient);
  //   dynamic.setPhotodiodeDisconnect(config.photodiodeDisconnect);

  //   let param = new schema.AFE4900DynamicConfigCommandParam();
  //   param.setDynamic(dynamic);

  //   let request = new schema.Request();
  //   request.setCommand(schema.Command.AFE4900_DYNAMIC_CONFIG);
  //   request.setAfe4900DynamicConfig(param);

  //   return this.request(request).then((response) => null);
  // }

  // uploadStart(file) {
  //   let param = new schema.UploadStartCommandParam();
  //   param.setType(schema.UploadType.FIRMWARE_IMAGE);
  //   param.setSize(file.length);
  //   param.setCrc(BRC3Utils.crc16(file));

  //   let request = new schema.Request();
  //   request.setCommand(schema.Command.UPLOAD_START);
  //   request.setUploadStart(param);

  //   return this.request(request).then((response) => {
  //     return response.getUploadStart().toObject();
  //   });
  // }

  // uploadWritePage(file, offset) {
  //   let param = new schema.UploadWritePageCommandParam();
  //   param.setOffset(offset);
  //   param.setData(file.slice(offset, offset + FLASH_PAGE_BYTES));

  //   let request = new schema.Request();
  //   request.setCommand(schema.Command.UPLOAD_WRITE_PAGE);
  //   request.setUploadWritePage(param);

  //   return this.request(request).then((response) => null);
  // }

  // uploadFirmwareImage(image) {
  //   this.padFirmwareImage(image);

  //   return this.uploadStart(image).then((response) => {
  //     let offset = 0;
  //     let packets = [];
  //     let imageCopy = image.slice();
  //     // Max number of payload bytes we can include in each write, excluding the 4 byte address
  //     let payloadLen = response.maxFastWriteSize - 4;

  //     while (imageCopy.length > 0) {
  //       let packet = [offset & 0xff, (offset >> 8) & 0xff, (offset >> 16) & 0xff, (offset >> 24) & 0xff];
  //       let payload = imageCopy.splice(0, payloadLen);

  //       packet = packet.concat(payload);
  //       packets.push(packet);
  //       offset += payload.length;
  //     }

  //     let request = new schema.Request();
  //     request.setCommand(schema.Command.UPLOAD_WRITE_PAGES_FAST);

  //     return this.request(request, packets).then((response) => null);
  //   }).then(() => {
  //     return this.uploadFinish();
  //   });
  // }

  uploadFinish() {
    return this.command(Command.UPLOAD_FINISH);
  }

  padFirmwareImage(image) {
    while (image.length % 256 !== 0) {
      image.push(0);
    }
  }

  // processRecordingPage(page) {
  //   let differentialToAbsolute = (a) => {
  //     if (!a) {
  //       return;
  //     }

  //     let value = 0;

  //     for (let i = 0; i < a.length; i++) {
  //       value += a[i];
  //       a[i] = value;
  //     }
  //   };

  //   if (!page.pageNumber) {
  //     page.pageNumber = 0;
  //   }

  //   if (page.motion) {
  //     differentialToAbsolute(page.motion.accelXList);
  //     differentialToAbsolute(page.motion.accelYList);
  //     differentialToAbsolute(page.motion.accelZList);
  //     differentialToAbsolute(page.motion.gyroXList);
  //     differentialToAbsolute(page.motion.gyroYList);
  //     differentialToAbsolute(page.motion.gyroZList);
  //   }

  //   if (page.afe4900) {
  //     differentialToAbsolute(page.afe4900.ecgList);
  //     differentialToAbsolute(page.afe4900.ppgList);
  //   }

  //   if (page.annotation) {
  //     page.annotation = BRC3Utils.decodeMessage(page.annotation.annotationData);
  //   }
  // }

  // downloadRecording(recInfo, pageListener, pageNum = 0) {
  //   let n = pageNum;

  //   let downloadNext = () => {
  //     let getPages = new Promise((resolve, reject) => {
  //       this.recordingPagesListener = (pages) => {
  //         n = pages[pages.length - 1].pageNumber + 1;

  //         pages.map(this.processRecordingPage);

  //         pageListener(pages);

  //         resolve();
  //       };

  //       setTimeout(() => reject("Download timed out"), 15000);
  //     });

  //     return Promise.all([getPages, this.readRecording(recInfo.recordingId, n)]).then(() => {
  //       if (n < recInfo.numPages) {
  //         return downloadNext();
  //       }
  //     });
  //   };

  //   return downloadNext();
  // }

  getFaultInfo() {
    let request = Request.create({
      command: Command.FAULT_GET_INFO
    });

    return this.request(request).then((response) => {
      return response.faultGetInfo;
    });
  }

  getRTOSDebugInfo() {
    let request = Request.create({
      command: Command.DEBUG_RTOS_GET_INFO
    });

    return this.request(request).then((response) => {
      return response.debugRtosGetInfo;
    });
  }

  simulateFault(fault) {
    let { SimulateFaultCommandParam } = schema;

    let request = Request.create({
      command: SIMULATE_FAULT,
      simulateFault: SimulateFaultCommandParam.create({ fault })
    });

    return this.request(request).then((response) => null);
  }

  clearFaultLogs() {
    return this.command(Command.FAULT_LOG_CLEAR);
  }

  getFaultLogs() {
    return new Promise((resolve, reject) => {
      let faultLogs = [];

      let getFaultLog = (index) => {
        this.readFaultLog(index).then((faultLog) => {
          if (faultLog) {
            faultLogs.push(faultLog);
            getFaultLog(index + 1);
          } else {
            resolve(faultLogs);
          }
        }).catch((err) => {
          reject(err);
        });
      };

      getFaultLog(0);
    });
  }

  readFaultLog(index) {
    let { FaultLogReadCommandParam, FaultInfo } = schema;

    let request = Request.create({
      command: Command.FAULT_LOG_READ,
      faultLogRead: FaultLogReadCommandParam.create({ index })
    });

    return this.request(request).then((response) => {
      return response.faultLogRead.faultInfo || null;
    });
  }
}

let props = [
  "AD5940Mode",
  "AFE4900Color",
  "AFE4900Photodiode",
  "AFE4900ECGGain",
  "AFE4900Mode",
  "AFE4900OffdacScale",
  "AFE4900Photodiode",
  "AFE4900TIAGain",
  "EnvironmentMode",
  "MotionMode",
  "MotionRotationType",
  "StreamingType",
  "SimulateFaultType"
];

props.forEach((prop) => {
  BRC3Sensor[prop] = schema[prop];
});

module.exports = BRC3Sensor;
