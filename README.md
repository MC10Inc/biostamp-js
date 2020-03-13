# BioStamp® 3.0 JavaScript SDK

Build JavaScript-based applications that communicate with BioStamp® 3.0 sensors via [Bluetooth Low Energy (BLE)][1].

## Table of Contents

  * [Supported platforms](#supported-platforms)
  * [Requirements](#requirements)
  * [Getting started](#getting-started)
  * [Connecting to a sensor](#connecting-to-a-sensor)
  * [Issuing sensor commands](#issuing-sensor-commands)
  * [BiostampSensor](#biostampsensor)
  * [BiostampRecording](#biostamprecording)
  * [BiostampError](#biostamperror)

## Supported platforms

  * Chromium-based web browsers ([Google Chrome][2] and [Microsoft Edge][11])
  * Node.js
  * [pc-ble-driver][9] by Nordic Semiconductor

## Requirements

  * [Node.js][6]

## Getting started

Add the following lines to your `.npmrc` file, replacing _TOKEN_ with a GitHub personal access token:

```
@mc10inc:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

Then install the package corresponding to your target platform: [biostamp-js-web][13], [biostamp-js-node][14] or [biostamp-js-nordic][15]. For example:

```
npm install @mc10inc/biostamp-js-node
```

See [Configuring npm for use with GitHub Packages][12] for more information.

## Connecting to a sensor

The `BiostampSensor` class, described below, is a [Promise][4]-based interface for communicating with a BioStamp® 3.0 sensor. Do not instantiate this class directly. Rather, use the static `connect()` method corresponding to your target platform:

``` javascript
let { BiostampSensor } = require("@mc10inc/biostamp-js-xxx");

BiostampSensor.connect(...).then((sensor) => {
  sensor.blinkLeds();
}).catch((error) => {
  console.info(error.message);
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

A command might be rejected for a variety of reasons, but usually because it is issued out of order or with invalid parameters. Here, calling `getTime()` generates a `BiostampError` because the time was never set:

``` javascript
sensor.getTime().then((time) => {
  console.log(time);
}).catch((error) => {
  console.log(error.message); // "There was a problem communicating with the sensor (TIME_NOT_SET)."
  console.log(error.code); // 6
  console.log(error instanceof BiostampError); // true
});
```

## BiostampSensor

The `BiostampSensor` class is a [Promise][4]-based interface for communicating with a BioStamp® 3.0 sensor. Do not instantiate this class directly. Rather, use the static `connect()` method corresponding to your target platform:

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

### blinkLeds()

Blink the sensor LEDs.

``` javascript
sensor.blinkLeds().then(() => {
  ...
});
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
  console.log(recInfo.metadata); // "subject_01; right_femur"
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

  * **config**: A configuration object in the form `{ recordingEnabled, ad5940, afe4900, environment, motion }`, as described below.
  * **duration**: The number of seconds after which to stop sensing. If 0 (the default), sensing continues until you call `stopSensing()`.
  * **metadata**: An optional UTF-8 string to describe a recording, up to 128 bytes, if recording is enabled in the sensing configuration.

``` javascript
sensor.startSensing(config, 0, metadata).then((recordingId) => {
  ...
});
```

At least one of `ad5940`, `afe4900`, `environment` or `motion` must be set in the sensing configuration.

The property `recordingEnabled` is a boolean indicating whether to store data on the sensor for later retrieval.

The property `ad5940` is an object in the form `{ measureBaseline, mode }`.

The property `afe4900` is an object in the form `{ color, ecgGain, mode, photodiode }`.

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
    mode: BiostampSensor.AFE4900Mode.(ECG|PPG|PTT),
    photodiode: BiostampSensor.AFE4900Photodiode.(PD1|PD2)
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
  * **handlePacket(packet, ts)**: A function to handle a packet array and a corresponding timestamp array. Each entry in `packet` is either a number or an array of numbers, depending on the streaming type.

``` javascript
sensor.startStreaming(BiostampSensor.StreamingType.MOTION, (packet, ts) => {
  console.log(packet); // [[0.06787316501140594, ...], ...]
  console.log(ts); // [2020-01-24T22:55:04.079Z, ...]
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

### afe4900DynamicConfig(config)

Apply dynamic settings during AFE900 sensing (PPG and PTT modes only).

  * **config**: A configuration object in the form `{ ledCurrent, offDacCurrent, offDacCurrentAmbient, offDacScale, tiaGain, photodiodeDisconnect }`.

```javascript
sensor.afe4900DynamicConfig(config).then(() => {
  ...
});
```

The pseudo-code below shows all the supported values:

```
{
  ledCurrent: (0...255),
  offDacCurrent: (-127...127),
  offDacCurrentAmbient: (-127...127),
  offDacScale: BiostampSensor.AFE4900OffdacScale.OFFDAC_SCALE_(1X|2X|4X|8X),
  tiaGain: BiostampSensor.AFE4900TIAGain.TIA_GAIN_(10|25|50|100|250|500|1500|2000)KOHM
  photodiodeDisconnect: (true|false)
}
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

Download pages of raw recording data.

  * **recInfo**: A recording info object obtained through `getRecordingInfo()` or `listRecordings()`.
  * **onPages(pages)**: A function to receive an array of recording pages.
  * **startPage**: The first page to download (default is 0).

``` javascript
let allPages = [];

sensor.downloadRecording(recInfo, (pages) => {
  console.log(`Received ${pages.length} pages starting at page ${pages[0].pageNumber}`);
  allPages = allPages.concat(pages);
}).then(() => {
  console.log(allPages);
});
```

If a download is interrupted, you can resume the operation by starting with the next `pageNumber`.

The contents of each page depend on the sensing configuration. For example, a page might contain `motion` samples but no `afe4900` samples:

``` javascript
[
  {
    pageNumber: 100,
    timestamp: 51759495851679,
    samplingPeriod: 13107,
    environment: undefined,
    motion: {
      accelXList: [...],
      accelYList: [...],
      accelZList: [...],
      gyroXList: [...],
      gyroYList: [...],
      gyroZList: [...],
      magXList: [],
      magYList: [],
      magZList: []
    },
    afe4900: undefined,
    ad5940: undefined,
    annotations: [...]
  },
  {
    pageNumber: 101,
    timestamp: 51759495855126,
    ...
  },
  ...
]
```

This data is raw, or unprocessed. Use the `BiostampRecording` class, described below, to process the samples and convert the data structure into a more usable form.

_Download speeds may range from 10KB/sec to 30KB/sec depending on the environment._

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

### name

(Property) The sensor serial number.

``` javascript
console.log(sensor.name); // BRC3ea22
```

## BiostampRecording

The `BiostampRecording` class processes samples from raw recording pages and outputs the results in a human-readable format.

### BiostampRecording(recInfo)

Construct a BiostampRecording object.

  * **recInfo**: A recording info object obtained through `sensor.getRecordingInfo()` or `sensor.listRecordings()`.

``` javascript
let recording = new BiostampRecording(recInfo);
```

### processPage(page)

Process a recording page.

  * **page**: A page obtained through `sensor.downloadRecording()`.

``` javascript
sensor.getRecordingInfo(0).then((recInfo) => {
  let recording = new BiostampRecording(recInfo);

  return sensor.downloadRecording(recInfo, (pages) => {
    pages.forEach((page) => {
      recording.processPage(page);
    });
  }).then(() => {
    let result = recording.toObject();
  });
});
```

### toObject()

Output results after all pages have been processed. This method returns an object, which can be serialized with `JSON.stringify()`.

``` javascript
let result = recording.toObject();
```

In **Node.js**, you can use the [File System][5] API to save the data to disk:

``` javascript
let fs = require("fs");

let text = JSON.stringify(recording.toObject());

fs.writeFileSync("recording.json", text, "utf8");
```

In the **web browser**, you can use [createObjectURL][7] and a temporary anchor tag:

``` javascript
let text = JSON.stringify(recording.toObject());

let anchor = document.createElement("a");
let blob = new Blob([text], { type: "text/json" });
let url = URL.createObjectURL(blob);

document.body.appendChild(anchor);

anchor.href = url;
anchor.download = "recording.json";
anchor.click();

document.body.removeChild(anchor);

URL.revokeObjectURL(url);
```

### toCsv(feature)

Output CSV for the given feature—one of "motion", "afe4900", "ad5940", "environment" or "annotation"—after all pages have been processed. This method returns a string.

``` javascript
let result = recording.toCsv("motion");
```

Refer to the examples in `toObject()`, above, to create a file of type "text/csv".

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
