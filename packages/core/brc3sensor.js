let BRC3Schema = require("./brc3schema.js");
let BRC3Error = require("./brc3error.js");
let BRC3Streaming = require("./brc3streaming.js");
let BRC3PacketHandler = require("./brc3packet.js");
let BRC3Utils = require("./brc3utils.js");

let { Command, Request, Response } = BRC3Schema;

const FLASH_PAGE_BYTES = 256;

class BRC3Sensor {
  constructor() {
    this.packetHandler = new BRC3PacketHandler(this.handlePayload.bind(this));
    this.streaming = new BRC3Streaming();
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
    return this.request(Request.create({ command }));
  }

  handlePacket(packet) {
    this.packetHandler.handle(packet);
  }

  handlePayload(payload) {
    let msg = BRC3Schema.DataMessage.decode(payload);

    if (msg.streamingSamples) {
      this.streaming.handleStreamingSamples(msg.streamingSamples);
    }
    else if (msg.recordingPages) {
      if (this.recordingPagesListener) {
        this.recordingPagesListener(msg.recordingPages);
        this.recordingPagesListener = undefined;
      }
    }
    else {
      console.log("Unknown data message", msg);
    }
  }

  startSensing(config, maxDuration = 0, strMetadata = "") {
    let metadata = BRC3Utils.encodeMessage(strMetadata);

    let request = Request.fromObject({
      command: Command.SENSING_START,
      sensingStart: {
        config,
        maxDuration,
        metadata,
      }
    });

    return this.request(request).then((response) => {
      return response.sensingStart.recordingId || null;
    });
  }

  stopSensing() {
    return this.command(Command.SENSING_STOP).then((response) => {
      return response.sensingStop.recordingId || null;
    });
  }

  powerOff() {
    return this.command(Command.POWER_OFF).then(() => null);
  }

  reset() {
    return this.command(Command.RESET).then(() => null);
  }

  blinkLeds() {
    return this.command(Command.BLINK_LEDS).then(() => null);
  }

  clearOldestRecording() {
    return this.command(Command.RECORDING_CLEAR_OLDEST).then(() => null);
  }

  clearAllRecordings() {
    return this.command(Command.CLEAR_ALL_RECORDINGS).then(() => null);
  }

  loadFirmwareImage() {
    return this.command(Command.LOAD_FIRMWARE_IMAGE).then(() => null);
  }

  getTemperature() {
    return this.command(Command.TEMPERATURE_GET).then((response) => {
      return response.temperatureGet.temperatureC;
    });
  }

  getPressure() {
    return this.command(Command.PRESSURE_GET).then((response) => {
      return response.pressureGet.pascals;
    });
  }

  getTime() {
    return this.command(Command.TIME_GET).then((response) => {
      return response.timeGet.timestamp;
    });
  }

  setTime(timestamp = Date.now() / 1000) {
    let request = Request.fromObject({
      command: Command.TIME_SET,
      timeSet: {
        timestamp
      }
    });

    return this.request(request).then((response) => null);
  }

  getRecordingFreeSpace() {
    return this.command(Command.RECORDING_GET_FREE_SPACE).then((response) => {
      return response.recordingGetFreeSpace;
    });
  }

  getRecordingInfo(index = null, recordingId = null) {
    let request = Request.fromObject({
      command: Command.RECORDING_GET_INFO,
      recordingGetInfo: {
        index,
        recordingId
      }
    });

    return this.request(request).then((response) => {
      let info = response.recordingGetInfo.info;
      info.metadata = BRC3Utils.decodeMessage(info.metadata);

      return info;
    });
  }

  countRecordings() {
    return this.command(Command.RECORDING_GET_COUNT).then((response) => {
      return response.recordingGetCount.count;
    });
  }

  listRecordings() {
    return new Promise((resolve, reject) => {
      let recordings = [];

      let getRec = (index) => {
        this.getRecordingInfo(index).then((rec) => {
          recordings.push(rec);

          getRec(index + 1);
        }).catch((err) => {
          if (err.code === BRC3Error.RECORDING_NOT_FOUND) {
            resolve(recordings);
          }
          else {
            reject(err);
          }
        });
      };

      getRec(0);
    });
  }

  getSystemStatus() {
    return this.command(Command.SYSTEM_STATUS).then((response) => {
      return response.systemStatus;
    });

  }

  getVersion() {
    return this.command(Command.VERSION_GET).then((response) => {
      return response.versionGet;
    });
  }

  flashEraseBlock(address) {
    let request = Request.fromObject({
      command: Command.FLASH_ERASE_BLOCK,
      flashEraseBlock: {
        address
      }
    });

    return this.request(request).then((response) => null);
  }

  flashWritePage(address, data) {
    let request = Request.fromObject({
      command: Command.FLASH_WRITE_PAGE,
      flashWritePage: {
        address,
        data
      }
    });

    return this.request(request).then((response) => null);
  }

  flashReadData(address, length) {
    let request = Request.fromObject({
      command: Command.FLASH_READ_DATA,
      flashReadData: {
        address,
        length
      }
    });

    return this.request(request).then((response) => {
      return response.flashReadData.data;
    });
  }

  getSensingInfo() {
    return this.command(Command.SENSING_GET_INFO).then((response) => {
      if (response.sensingGetInfo.enabled) {
        return response.sensingGetInfo;
      }

      return null;
    });
  }

  startStreaming(type, listener) {
    let request = Request.fromObject({
      command: Command.STREAMING_START,
      streamingStart: {
        type
      }
    });

    return this.request(request).then((response) => {
      let info = response.streamingStart.info;

      this.streaming.enableStream(type, info, listener);

      return info;
    });
  }

  stopStreaming(type) {
    this.streaming.disableStream(type);

    let request = Request.fromObject({
      command: Command.STREAMING_STOP,
      streamingStop: {
        type
      }
    });

    return this.request(request).then((response) => null);
  }

  annotate(message, overrideTimestamp) {
    let annotationData = BRC3Utils.encodeMessage(message);

    let request = Request.fromObject({
      command: Command.ANNOTATE,
      annotate: {
        annotationData,
        overrideTimestamp
      }
    });

    return this.request(request).then((response) => {
      return response.annotate.timestamp;
    });
  }

  readRecording(recordingId, firstPage) {
    let request = Request.fromObject({
      command: Command.RECORDING_READ,
      recordingRead: {
        recordingId,
        firstPage
      }
    });

    return this.request(request).then((response) => null);
  }

  afe4900DynamicConfig(dynamic) {
    let request = Request.fromObject({
      command: Command.AFE4900_DYNAMIC_CONFIG,
      afe4900DynamicConfig: {
        dynamic
      }
    });

    return this.request(request).then((response) => null);
  }

  uploadStart(file) {
    let type = BRC3Schema.UploadType.FIRMWARE_IMAGE;
    let size = file.length;
    let crc = BRC3Utils.crc16(file);

    let request = Request.fromObject({
      command: Command.UPLOAD_START,
      uploadStart: {
        type,
        size,
        crc
      }
    });

    return this.request(request).then((response) => {
      return response.uploadStart;
    });
  }

  uploadWritePage(file, offset) {
    let data = file.slice(offset, offset + FLASH_PAGE_BYTES);

    let request = Request.fromObject({
      command: Command.UPLOAD_WRITE_PAGE,
      uploadWritePage: {
        offset,
        data
      }
    });

    return this.request(request).then((response) => null);
  }

  uploadFirmwareImage(image) {
    this.padFirmwareImage(image);

    return this.uploadStart(image).then((response) => {
      let offset = 0;
      let packets = [];
      let imageCopy = image.slice();
      // Max number of payload bytes we can include in each write, excluding the 4 byte address
      let payloadLen = response.maxFastWriteSize - 4;

      while (imageCopy.length > 0) {
        let packet = [offset & 0xff, (offset >> 8) & 0xff, (offset >> 16) & 0xff, (offset >> 24) & 0xff];
        let payload = imageCopy.splice(0, payloadLen);

        packet = packet.concat(payload);
        packets.push(packet);
        offset += payload.length;
      }

      let request = Request.create({
        command: Command.UPLOAD_WRITE_PAGES_FAST
      });

      return this.request(request, packets).then((response) => null);
    }).then(() => {
      return this.uploadFinish();
    });
  }

  uploadFinish() {
    return this.command(Command.UPLOAD_FINISH).then(() => null);
  }

  padFirmwareImage(image) {
    while (image.length % 256 !== 0) {
      image.push(0);
    }
  }

  processRecordingPage(page) {
    let differentialToAbsolute = (a) => {
      if (!a) {
        return;
      }

      let value = 0;

      for (let i = 0; i < a.length; i++) {
        value += a[i];
        a[i] = value;
      }
    };

    if (!page.pageNumber) {
      page.pageNumber = 0;
    }

    if (page.motion) {
      differentialToAbsolute(page.motion.accelX);
      differentialToAbsolute(page.motion.accelY);
      differentialToAbsolute(page.motion.accelZ);
      differentialToAbsolute(page.motion.gyroX);
      differentialToAbsolute(page.motion.gyroY);
      differentialToAbsolute(page.motion.gyroZ);
    }

    if (page.afe4900) {
      differentialToAbsolute(page.afe4900.ecg);
      differentialToAbsolute(page.afe4900.ppg);
    }

    if (page.annotation) {
      page.annotation = BRC3Utils.decodeMessage(page.annotation.annotationData);
    }
  }

  downloadRecording(recInfo, pageListener, pageNum = 0) {
    let n = pageNum;

    let downloadNext = () => {
      let getPages = new Promise((resolve, reject) => {
        this.recordingPagesListener = (pages) => {
          n = (pages[pages.length - 1].pageNumber || 0) + 1;

          pages.map(this.processRecordingPage);

          pageListener(pages);

          resolve();
        };

        setTimeout(() => reject("Download timed out"), 15000);
      });

      return Promise.all([getPages, this.readRecording(recInfo.recordingId, n)]).then(() => {
        if (n < recInfo.numPages) {
          return downloadNext();
        }
      });
    };

    return downloadNext();
  }

  getFaultInfo() {
    return this.command(Command.FAULT_GET_INFO).then((response) => {
      return response.faultGetInfo;
    });
  }

  getRTOSDebugInfo() {
    return this.command(Command.DEBUG_RTOS_GET_INFO).then((response) => {
      return response.debugRtosGetInfo;
    });
  }

  simulateFault(fault) {
    let request = Request.fromObject({
      command: Command.SIMULATE_FAULT,
      simulateFault: {
        fault
      }
    });

    return this.request(request).then((response) => null);
  }

  clearFaultLogs() {
    return this.command(Command.FAULT_LOG_CLEAR).then(() => null);
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
    let request = Request.fromObject({
      command: Command.FAULT_LOG_READ,
      faultLogRead: {
        index
      }
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
  BRC3Sensor[prop] = BRC3Schema[prop];
});

module.exports = BRC3Sensor;
