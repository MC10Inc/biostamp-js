# BioStamp3™ JavaScript SDK

Build JavaScript-based applications that communicate with BioStamp3™ sensors via [Bluetooth Low Energy (BLE)][1].

## Table of Contents

  * [Supported platforms](#supported-platforms)
  * [Requirements](#requirements)
  * [Getting started](#getting-started)
  * [Connecting to a sensor](#connecting-to-a-sensor)
  * [Issuing sensor commands](#issuing-sensor-commands)
  * [BiostampSensor](#biostampsensor)
  * [BiostampDb](#biostampdb)
  * [BiostampUtils](#biostamputils)
  * [BiostampError](#biostamperror)

## Supported platforms

  * Chromium-based web browsers ([Google Chrome][2] and [Microsoft Edge][11])
  * Node.js
  * [pc-ble-driver][9] by Nordic Semiconductor

## Requirements

  * [Node.js][6]

## Getting started

Create a GitHub [personal access token][22] with the `read:packages` scope for your GitHub account. Then add the following lines to your `.npmrc` file, replacing _TOKEN_ with your personal access token:

```
@mc10inc:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

Finally, install the package corresponding to your target platform: [biostamp-js-web][13], [biostamp-js-node][14] or [biostamp-js-nordic][15]. For example:

```
npm install @mc10inc/biostamp-js-node
```

See [Configuring npm for use with GitHub Packages][12] for more information.

## Connecting to a sensor

The `BiostampSensor` class, described below, is a [Promise][4]-based interface for communicating with a BioStamp3™ sensor. Do not instantiate this class directly. Rather, use the static `connect()` method corresponding to your target platform:

``` javascript
let { BiostampSensor } = require("@mc10inc/biostamp-js-xxx");

BiostampSensor.connect(...).then((sensor) => {
  sensor.blinkLeds();
}).catch((error) => {
  console.info(error.message);
});
```

To connect to another sensor at the same time, wait for the first connection to resolve:

``` javascript
BiostampSensor.connect(...).then((sensor1) => {
  BiostampSensor.connect(...).then((sensor2) => {
    sensor1.blinkLeds();
    sensor2.blinkLeds();
  });
});
```

## Issuing sensor commands

Commands can be issued one at a time after connecting to a sensor. Some commands, such as `getTemperature()`, return a payload when they resolve:

``` javascript
sensor.getTemperature().then((temp) => {
  console.log(temp); // 34
});
```

Other commands return nothing:

``` javascript
sensor.blinkLeds().then(() => {
  ...
});
```

The following example demonstrates how to issue two commands in a series:

``` javascript
sensor.startSensing(config).then(() => {
  sensor.blinkLeds();
});
```

A command might be rejected for a variety of reasons, but usually because it is issued out of order or with invalid parameters. Here, calling `stopSensing()` generates a `BiostampError` because the sensor is not currently sensing:

``` javascript
sensor.stopSensing().then(() => {
  ...
}).catch((error) => {
  console.log(error.message); // "There was a problem communicating with the sensor (CANNOT_STOP)."
  console.log(error.code); // 8
  console.log(error instanceof BiostampError); // true
});
```

## BiostampSensor

The `BiostampSensor` class is a [Promise][4]-based interface for communicating with a BioStamp3™ sensor. Do not instantiate this class directly. Rather, use the static `connect()` method corresponding to your target platform:

### connect(serialPrefix, onDisconnect)

**(Web only)**

Connect to a sensor. This method invokes the web browser's Bluetooth pairing dialog.

  * **serialPrefix**: A case-sensitive filter to restrict the list of discovered devices. The default value is "BRC3", which matches any serial number starting with "BRC3".
  * **onDisconnect**: A function to run when the connected sensor disconnects for any reason.

``` javascript
let { BiostampSensor } = require("@mc10inc/biostamp-js-web");

BiostampSensor.connect("BRC3", onDisconnect).then((sensor) => {
  sensor.blinkLeds();
}).catch((error) => {
  console.info(error.message);
});
```

### connect(serialNumber, onDisconnect)

**(Node.js only)**

Discover and connect to a sensor.

  * **serialNumber**: The serial number of the target sensor, e.g. "BRC3ea22". This value is case-insensitive.
  * **onDisconnect**: A function to run when the connected sensor disconnects for any reason.

``` javascript
let { BiostampSensor } = require("@mc10inc/biostamp-js-node");

BiostampSensor.connect("BRC3ea22", onDisconnect).then((sensor) => {
  sensor.blinkLeds();
}).catch((error) => {
  console.info(error.message);
});
```

### connect(port, macAddress, onDisconnect)

**(Nordic only)**

Open a port to the [nRF52840 Dongle][10] and connect to a sensor.

``` javascript
let { BiostampSensor } = require("@mc10inc/biostamp-js-nordic");

BiostampSensor.connect("/dev/tty.usbmodem40132", "fc:9a:af:25:ea:22", onDisconnect).then((sensor) => {
  sensor.blinkLeds();
}).catch((error) => {
  console.info(error.message);
});
```

The given port remains open until the process exits. To connect to another sensor, set `port` to null.

### disconnect()

Disconnect from the sensor. _This method has no return value. Disconnections should be handled in the callback function provided to the connect() method._

``` javascript
sensor.disconnect();
```

### getVersion()

Get the firmware version and bootloader version.

``` javascript
sensor.getVersion().then((version) => {
  console.log(version); // { firmwareVersion: "74141db4", bootloaderVersion: "983d19c4" }
});
```

### blinkLeds([blinkPattern [, stepTimeMs [, repeats]]])

Blink the sensor LEDs.

``` javascript
sensor.blinkLeds().then(() => {
  ...
});
```

The LED sequence (by default, a short green light followed by a short blue light) may be customized as follows:

  * **blinkPattern**: A string, up to 16 characters long, describing the LED pattern in units of green ("G"), blue ("B"), green AND blue ("X") or neither (" "). For example, the pattern "B G " flashes blue, then pauses, then flashes green, then pauses again. You may create irregular patterns by repeating certain characters. For example, the pattern "BBBG" generates a long blue flash followed by a short green flash.
  * **stepTimeMs**: The amount of time, in milliseconds, to sustain each unit of the pattern. Default is 500.
  * **repeats**: The number of times to repeat the pattern. Default is 1.

``` javascript
// blink green 10 times quickly
sensor.blinkLeds("G ", 50, 10);

// blink green + blue 3 times slowly
sensor.blinkLeds("X ", 1000, 3);

// alternate green and blue 5 times moderately
sensor.blinkLeds("GB", 250, 5);

// hold green for 3 seconds
sensor.blinkLeds("G", 3000, 1);
```

### getTemperature()

Get the surface temperature in degrees Celcius.

``` javascript
sensor.getTemperature().then((degrees) => {
  console.log(degrees); // 34
});
```

### getPressure()

Get the atmospheric pressure in pascals.

``` javascript
sensor.getPressure().then((pascals) => {
  console.log(pascals); // 102498.486328125
});

```

### setTime([time])

Set the current time in seconds since the Unix epoch.

  * **time**: Seconds since the Unix epoch (January 1, 1970 00:00:00 UTC).

``` javascript
sensor.setTime(Date.now() / 1000).then(() => {
  ...
});
```

### getTime()

Get the current time in seconds since the Unix epoch.

``` javascript
sensor.getTime().then((secs) => {
  console.log(secs); // 1579891048.8141174
});
```

### getRecordingFreeSpace()

Get the amount of free space and the amount of total space available for storing recording data, in blocks. _This information is not updated during sensing. Use getRecordingInfo() for information about a recording in progress._

``` javascript
sensor.getRecordingFreeSpace().then((space) => {
  console.log(space); // { freeBlocks: 4030, totalBlocks: 4086 }
});
```

Use the following formula to determine "percent full":

``` javascript
let percentFull = 1 - (space.freeBlocks / space.totalBlocks);
```

### countRecordings()

Get the number of recordings saved on the sensor.

``` javascript
sensor.countRecordings().then((count) => {
  console.log(count); // 3
});
```

### getRecordingInfo(index [, recordingId])

Get information about a recording saved on the sensor, by index _or_ recordingId. _The oldest recording is at index 0._

  * **index**: Index of the recording.
  * **recordingId**: Numeric ID of the recording, obtained via `startSensing()` or `stopSensing()`.

``` javascript
// get by index
sensor.getRecordingInfo(0).then((recInfo) => {
  console.log(recInfo.durationSec); // 1442
  console.log(recInfo.inProgress); // false
  console.log(recInfo.metadata); // [ ... ]
  console.log(recInfo.numPages); // 9127
  console.log(recInfo.rawDataInfo); // { ... }
  console.log(recInfo.recordingId); // 1579711554
  console.log(recInfo.sensorConfig); // { ... }
  console.log(recInfo.sizeBytes); // 2336512
  console.log(recInfo.timestampStart); // 1579711554
}).catch((err) => {
  if (err.code === BiostampError.RECORDING_NOT_FOUND) {
    // nothing to see here
  }
});
```

If the `metadata` field contains encoded text, use `BiostampUtils.decodeText()`, described below, to decode it.

``` javascript
// get by recordingId
sensor.getRecordingInfo(null, 1579711554).then((recInfo) => {
  ...
}).catch((err) => {
  if (err.code === BiostampError.RECORDING_NOT_FOUND) {
    // nothing to see here
  }
});
```

### listRecordings()

Get a list of all recordings saved on the sensor.

``` javascript
sensor.listRecordings().then((recordings) => {
  console.log(recordings);  // [ { durationSec: 1142, ...}, ...];
});
```

### getSystemStatus()

Get information about the battery level, charging state and uptime (in seconds).

``` javascript
sensor.getSystemStatus().then((status) => {
  console.log(status); // { batteryPercent: 86, chargePower: false, uptimeSec: 103685 }
});
```

### getSensingInfo()

Get information about the current sensing operation, if currently sensing. _If not sensing, this method resolves with null._

``` javascript
sensor.getSensingInfo().then((info) => {
  if (info) {
    console.log(info.sensorConfig); // { ... }
    console.log(info.timestampStart); // 1579897174
    console.log(info.recordingId); // 1579897174
  }
});
```

### startSensing(config [, duration [, metadata]])

Start sensing. This method resolves with a `recordingId` if recording is enabled in the given sensing configuration.

_The time must be set at some point before sensing. See setTime()._

  * **config**: A plain object in the form `{ recordingEnabled, ad5940, afe4900, environment, motion }`, as described below.
  * **duration**: The number of seconds after which to stop sensing. If 0 (the default), sensing continues until you call `stopSensing()`.
  * **metadata**: A byte array, up to 128 bytes, if recording is enabled in the sensing configuration. Use `BiostampUtils.encodeText()`, described below, to store textual data in this field.

``` javascript
sensor.startSensing(config, 0, metadata).then((recordingId) => {
  ...
});
```

At least one of `ad5940`, `afe4900`, `environment` or `motion` must be set in the configuration object.

The property `recordingEnabled` indicates whether to store data on the sensor for later retrieval.

The property `ad5940` is an object in the form `{ measureBaseline, mode }`.

The property `afe4900` is an object in the form `{ color, ecgGain, mode }`.

The property `environment` is an object in the form `{ mode, samplingPeriodUs }`.

The property `motion` is an object in the form `{ accelGRange, gyroDpsRange, mode, rotationType, samplingPeriodUs }`.

The pseudo-code below shows all the supported values:

```
{
  recordingEnabled: (true|false),
  ad5940: {
    measureBaseline: (true|false),
    mode: BiostampSensor.AD5940Mode.EDA
  },
  afe4900: {
    color: BiostampSensor.AFE4900Color.(GREEN|RED|INFRARED)
    ecgGain: BiostampSensor.AFE4900ECGGain.(GAIN_2|GAIN_3|GAIN_4|GAIN_5|GAIN_6|GAIN_9|GAIN_12),
    mode: BiostampSensor.AFE4900Mode.(ECG|PPG|PTT)
  },
  environment: {
    mode: BiostampSensor.EnvironmentMode.ALL,
    samplingPeriodUs: (1000000|500000|200000|100000)
  },
  motion: {
    accelGRange: (2|4|8|16),
    gyroDpsRange: (500|1000),
    mode: BiostampSensor.MotionMode.(ACCEL|ACCEL_GYRO|COMPASS|ROTATION),
    rotationType: BiostampSensor.MotionRotationType.(ROT_ACCEL_GYRO|ROT_ACCEL_GYRO_MAG|ROT_ACCEL_MAG),
    samplingPeriodUs: (100000|50000|32000|25000|12500|8000|6250)
  }
}
```

_Do not enable ad5940 and afe4900 at the same time if afe4900 is in ECG or PTT mode._

### stopSensing()

Stop sensing. This method resolves with a `recordingId` if recording is enabled in the sensing configuration.

``` javascript
sensor.stopSensing().then((recordingId) => {
  ...
});
```

### startStreaming(type, handlePacket)

Start streaming data while the sensor is sensing. _This method should be called only while sensing. Streams are destroyed automatically when sensing stops._

  * **type**: The streaming type, one of `BiostampSensor.StreamingType.MOTION`, `BiostampSensor.StreamingType.AFE4900`, `BiostampSensor.StreamingType.ENVIRONMENT` or `BiostampSensor.StreamingType.AD5940`.
  * **handlePacket(packet, ts)**: A function to handle a packet array and a corresponding timestamp array. Each entry in `packet` is either a number or an array of numbers, depending on the streaming type. _Timestamps are UTC seconds with microsecond precision._

``` javascript
sensor.startStreaming(BiostampSensor.StreamingType.MOTION, (packet, ts) => {
  console.log(packet); // [[0.06787316501140594, ...], ...]
  console.log(ts); // [1586525371.1465697, ...]
}).then(() => {
  ...
});
```

### stopStreaming(type)

Stop streaming data.

  * **type**: The streaming type, one of `BiostampSensor.StreamingType.MOTION`, `BiostampSensor.StreamingType.AFE4900`, `BiostampSensor.StreamingType.ENVIRONMENT` or `BiostampSensor.StreamingType.AD5940`.

``` javascript
sensor.stopStreaming(BiostampSensor.StreamingType.MOTION).then(() => {
  ...
});
```

### annotate(message [, timestamp])

Annotate a recording. This method resolves with the timestamp of the annotation.

  * **message**: A UTF-8 string, up to 220 bytes.
  * **timestamp**: An optional timestamp, in seconds, to override the value provided by the sensor's internal clock.

``` javascript
sensor.annotate("start_walking").then((timestamp) => {
  ...
});
```

### clearOldestRecording()

Clear the oldest recording stored on the sensor. _This command cannot be issued while recording._

``` javascript
sensor.clearOldestRecording().then(() => {
  ...
});
```

### clearAllRecordings()

Clear all recordings stored on the sensor. _This command cannot be issued while recording._

``` javascript
sensor.clearAllRecordings().then(() => {
  ...
});
```

### downloadRecording(recInfo, onPages [, startPage])

Download pages of unprocessed recording data. _Use this method only if you intend to process the downloaded data yourself. Otherwise, use the download() method of the BiostampDb class, described below._

  * **recInfo**: A recording info object obtained via `getRecordingInfo()` or `listRecordings()`.
  * **onPages(pages)**: A function to handle a batch of unprocessed recording pages.
  * **startPage**: The first page to download. Default is 0.

``` javascript
sensor.downloadRecording(recInfo, (pages) => {
  let firstPageNum = pages[0].pageNumber;
  let lastPageNum = pages[pages.length - 1].pageNumber;

  console.log(`Received pages ${firstPageNum}-${lastPageNum} of ${recInfo.numPages}`);
  ...
}).then(() => {
  console.log(pages);
});
```

If a download is interrupted, you can resume the operation by starting again with a page number greater than zero.

### uploadFirmwareImage(image)

Upload a new firmware image to the sensor. After uploading, call `loadFirmwareImage()` to load the image and `reset()` to reset the sensor.

  * **image**: An array of bytes.

In **Node.js**:

``` javascript
let fs = require("fs");

fs.readFile("path/to/brc3app.img", (err, buffer) => {
  sensor.uploadFirmwareImage(Array.from(buffer)).then(() => {
    console.log("Loading firmware ...");

    return sensor.loadFirmwareImage();
  }).then(() => {
    console.log("Loaded firmware");

    return sensor.reset();
  });
});
```

In the **web browser**:

``` html
<input type="file" onChange="uploadFile()">
```

``` javascript
let uploadFile = (evt) => {
  let file = evt.target.files[0];
  let reader = new FileReader();

  if (file) {
    reader.onloadend = () => {
      let image = new Uint8Array(reader.result);

      sensor.uploadFirmwareImage(Array.from(image)).then(() => {
        console.log("Loading firmware ...");

        return sensor.loadFirmwareImage();
      }).then(() => {
        console.log("Loaded firmware");

        return sensor.reset();
      })
    };

    reader.readAsArrayBuffer(file);
  }
};
```

### loadFirmwareImage()

Load a firmware image after it is uploaded and before resetting the sensor.

``` javascript
sensor.uploadFirmwareImage(image).then(() => {
  return sensor.loadFirmwareImage();
}).then(() => {
  return sensor.reset();
});
```

### getFaultLogs()

Get a list of faults. Faults are generated when the sensor's firmware encounters a fatal error condition that causes the sensor to reset, or when the sensor turns off due to a low battery. These logs may be sent to MC10 to assist in troubleshooting.

``` javascript
sensor.getFaultLogs().then((logs) => {
  console.log(logs);
});
```

### clearFaultLogs()

Clear all faults.

``` javascript
sensor.clearFaultLogs().then(() => {
  ...
});
```

### reset()

Reset and disconnect from the sensor.

``` javascript
sensor.reset().then(() => {
  ...
});
```

### powerOff()

Power off and disconnect from the sensor.

``` javascript
sensor.powerOff().then(() => {
  ...
});
```

### serial

(Property) The sensor serial number.

``` javascript
console.log(sensor.serial); // BRC3ea22
```

## BiostampDb

The `BiostampDb` class downloads recording data from a sensor, saves it to a local database and exports the data in a usable form.

This class depends on [SQLite][16] in Node.js and [IndexedDB][17] in the web browser. _IndexedDB observes a [same-origin][20] policy—meaning two different origins will use two different databases—and may be subject to [storage limits][21]._

### BiostampDb([onReady [, path]])

Construct a BiostampDb object.

  * **onReady(db)**: An optional callback to run when the database is ready to access.
  * **path**: Path to the database file (Node.js only). If no path is given, a file named "biostamp.db" will be created automatically in the working directory.

``` javascript
let db = new BiostampDb();
```

If you intend to access the database immediately upon instantiation, use the `onReady` callback to determine when it is safe to proceed:

```
let db = new BiostampDb(() => {
  db.list();
});
```

### download(sensor, recInfo [, onProgress])

Download a recording from a connected sensor and save it to the local database. This method resolves with a recording ID when all recording pages have been downloaded, at which point you can read out the entire recording from the database. _If the download is interruped for any reason, call this method again to resume where the download left off._

  * **sensor**: The connected sensor.
  * **recInfo**: A recording info object obtained via `sensor.getRecordingInfo()` or `sensor.listRecordings()`.
  * **onProgress(progress)**: A function to receive periodic notifications in the form `{ pctComplete, estTimeLeft }`, where `estTimeLeft` is the estimated number of seconds remaining.

The following example shows how to download the oldest recording on the sensor, read it out as JSON, then save it to disk in Node.js:

``` javascript
let db = new BiostampDb();

sensor.getRecordingInfo(0).then((recInfo) => {
  return db.download(sensor, recInfo);
}).then((recId) => {
  return db.readJson(serial, recId);
}).then((txt) => {
  fs.writeFileSync("recording.json", txt, "utf8");
}).catch((e) => {
  console.warn(e);
});
```

In the web browser, use `BiostampUtils.writeFile()` to save the file to the user's downloads directory:

``` javascript
BiostampUtils.writeFile("recording.json", txt, "text/json");
```

### list()

List all recordings saved in the local database. _Some recordings may not be fully downloaded. To determine if a recording is fully downloaded, compare the fields numPages and pagesDownloaded._

``` javascript
db.list().then((recs) => {
  recs.forEach((rec) => {
    console.log(rec.serial); // "BRC3ea22"
    console.log(rec.recordingId); // 1584919921
    console.log(rec.numPages); // 51195
    console.log(rec.pagesDownloaded); // 51195
    console.log(rec.recInfo); // { ... }
  });
});
```

### read(serial, recordingId, onRow)

Read rows of recording data from the database. This method resolves when all rows have been read. _Use this method only if you intend to transform the data yourself. Otherwise use readCsv() or readJson(), below._

  * **serial**: The sensor serial number, e.g. "BRC3ea22". This value is case-sensitive.
  * **recordingId**: The numeric recording ID, e.g. 1584919921.
  * **onRow(row)**: A function to run after each row is read.

``` javascript
db.read(serial, recordingId, (row) => {
  console.log(row); // { ... }
}).then(() => {
  ...
});
```

### readCsv(serial, recordingId, feature)

Read recording data as CSV. This method resolves with plain text that can be written to a file.

  * **serial**: The sensor serial number, e.g. "BRC3ea22". This value is case-sensitive.
  * **recordingId**: The numeric recording ID, e.g. 1584919921.
  * **feature**: The feature to read, one of "motion", "afe4900", "ad5940", "environment" or "annotation".

``` javascript
db.readCsv(serial, recordingId, feature).then((txt) => {
  ...
});
```

The outputted CSV string contains one line per sample:

```
timestamp,accelX,accelY,accelZ
1584660192.5770874,0.03271584212779999,-0.028321176767349243,0.997589036822319
1584660192.5850792,0.046388134360313416,-0.03662221133708954,0.9922177791595459
1584660192.593071,0.037598803639411926,-0.03320413827896118,0.9887997061014175
...
```

_Timestamps are UTC seconds with microsecond precision._

### readJson(serial, recordingId [, feature])

Read recording data as JSON. This method resolves with plain text that can be written to a file.

  * **serial**: The sensor serial number, e.g. "BRC3ea22". This value is case-sensitive.
  * **recordingId**: The numeric recording ID, e.g. 1584919921.
  * **feature**: The feature to read, one of "motion", "afe4900", "ad5940", "environment" or "annotation". If omitted, read all features.

``` javascript
db.readJson(serial, recordingId).then((txt) => {
  ...
});
```

The outputted JSON structure contains "pages" of samples, each with a timestamp and sampling period (the interval between samples):

```
[
  {
    "pageNumber": 0,
    "timestamp": 1584725842.565857,
    "samplingPeriod": 0.007991790771484375,
    "motion": {
      "accelX": [
        0.02685628831386566,
        0.03662221133708954,
        0.03418073058128357,
        ...
      ],
      "accelY": [
        ...
      ],
      "accelZ": [
        ...
      ]
    }
  },
  {
    "pageNumber": 1,
    "timestamp": 1584725842.589386,
    "samplingPeriod": 0.0039997100830078125,
    "afe4900": {
      "ecg": [
        -0.0017612457975246798,
        -0.005420208192674636,
        -0.0032598496778746267,
        ...
      ]
    }
  },
  ...
]
```

_Timestamps are UTC seconds with microsecond precision._

### delete(serial, recordingId)

Delete a recording from the local database.

  * **serial**: The sensor serial number, e.g. "BRC3ea22". This value is case-sensitive.
  * **recordingId**: The numeric recording ID, e.g. 1584919921.

``` javascript
db.delete(serial, recordingId).then(() => {
  ...
});
```

### deleteAll()

Delete all recordings from the local database.

``` javascript
db.deleteAll(serial, recordingId).then(() => {
  ...
});
```

## BiostampUtils

### encodeText(text)

Encode a text string as a byte array. This method returns a [Buffer][18] in Node.js and a [Uint8Array][19] in the web browser.

  * **text**: A UTF-8 string to encode.

``` javascript
let metadata = BiostampUtils.encodeText("Testing 1-2-3"); // <Buffer 54 65 73 ...>
```

### decodeText(bytes)

Convert encoded text into a UTF-8 string.

  * **bytes**: A byte array generated by `encodeText()`.

``` javascript
sensor.getRecordingInfo(0).then((recInfo) => {
  console.log(BiostampUtils.decodeText(recInfo.metadata)); // "Testing 1-2-3"
});
```

### writeFile(fileName, text [, mimeType])

**(Web only)**

Save a file to the user's downloads directory. This method has no return value.

  * **fileName**: File name, e.g. "BRC3ea22-1584919921.json".
  * **text**: File contents as plain text.
  * **mimeType**: Optional mime type, e.g. "text/json". Default is "text/plain".

``` javascript
db.readJson(serial, recInfo.recordingId).then((txt) => {
  BiostampUtils.writeFile("recording.json", txt, "text/json");
});
```

## BiostampError

The `BiostampError` class represents an error issued by the sensor if it cannot process a command. It contains a string `message` and a numeric `code`. It extends [Error][8].

``` javascript
sensor.startSensing(config).then(() => {
  ...
}).catch((error) => {
  console.log(error.message); // "There was a problem communicating with the sensor (CANNOT_START)."
  console.log(error.code); // 7
});
```

You can differentiate between a `BiostampError` and another kind of error with the `instanceof` operator. For example, the following code generates a TypeError:

``` javascript
sensor.blinkLeds().then(() => {
  sensor.bork();
}).catch((error) => {
  if (error instanceof TypeError) {
    ...
  }

  if (error instanceof BiostampError) {
    ...
  }
});
```

If the error is a `BiostampError`, you can compare its `code` to the following constant values:

``` javascript
BiostampError.PARSE
BiostampError.UNSUPPORTED
BiostampError.FAIL
BiostampError.INVALID_PARAMETER
BiostampError.TIME_NOT_SET
BiostampError.CANNOT_START
BiostampError.CANNOT_STOP
BiostampError.UPLOAD_FAILED
BiostampError.MEMORY_FULL
BiostampError.RECORDING_NOT_FOUND
BiostampError.FIRMWARE_IMAGE_INCOMPATIBLE
BiostampError.FIRMWARE_IMAGE_INVALID
BiostampError.RECORDING_IN_PROGRESS
BiostampError.RECORDING_NOT_IN_PROGRESS
```

[1]: https://en.wikipedia.org/wiki/Bluetooth_Low_Energy
[2]: https://www.google.com/chrome/browser/
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[5]: https://nodejs.org/api/fs.html
[6]: https://nodejs.org/en/
[7]: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[9]: https://github.com/NordicSemiconductor/pc-ble-driver-js
[10]: https://www.nordicsemi.com/Software-and-tools/Development-Kits/nRF52840-Dongle
[11]: https://www.microsoft.com/en-us/edge
[12]: https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
[13]: https://github.com/MC10Inc/biostamp-js/packages/150198
[14]: https://github.com/MC10Inc/biostamp-js/packages/150196
[15]: https://github.com/MC10Inc/biostamp-js/packages/150195
[16]: https://www.sqlite.org/
[17]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[18]: https://nodejs.org/api/buffer.html
[19]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
[20]: https://www.w3.org/Security/wiki/Same_Origin_Policy
[21]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
[22]: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
