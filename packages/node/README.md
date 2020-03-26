# Biostamp® 3.0 JavaScript SDK for Node.js

Connect to BioStamp® 3.0 sensors via Node.js.

See full documentation at [https://github.com/mc10inc/biostamp-js][3].

## Prerequisites

This API depends on [Noble][1]. Refer to the Noble [prerequisites][2] for your platform.

## Usage

``` javascript
let {
  BiostampSensor,
  BiostampDb,
  BiostampError,
  BiostampUtils
} = require("@mc10inc/biostamp-js-node");

BiostampSensor.connect("brc3ea22", onDisconnect).then((sensor) => {
  sensor.blinkLeds();
}).catch((error) => {
  console.info(error.message);
});
```

## Examples

### blink.js

Connect to a sensor and blink once.

``` bash
node examples/blink.js -s [serialNumber]
```

### listRecordings.js

Connect to a sensor and list all saved recordings.

``` bash
node examples/listRecordings.js -s [serialNumber]
```

### exportJSON.js

Connect to a sensor, download a recording, and export it as JSON into the working directory. Optional feature (-f) is one of "motion", "afe4900", "ad5940", "environment" or "annotation".

``` bash
node examples/exportJSON.js -s [serialNumber] -r [recordingId] -f [feature]
```

### exportCSV.js

Connect to a sensor, download a recording, and export it as CSV into the working directory. Required feature (-f) is one of "motion", "afe4900", "ad5940", "environment" or "annotation".

``` bash
node examples/exportCSV.js -s [serialNumber] -r [recordingId] -f [feature]
```

### stream.js

Connect to a sensor and stream motion data for five seconds.

``` bash
node examples/stream.js -s [serialNumber]
```

### uploadFirmware.js

Connect to a sensor, upload a firmware image, and restart.

``` bash
node examples/uploadFirmware.js -s [serialNumber] -p [pathToFirmwareImage]
```

### vitals.js

Connect to a sensor and list all vital signs, including firmware version and free space.

``` bash
node examples/vitals.js -s [serialNumber]
```

### dbList.js

List all recordings downloaded into the local database.

```
node examples/dbList.js
```

[1]: https://github.com/abandonware/noble
[2]: https://github.com/abandonware/noble#prerequisites
[3]: https://github.com/mc10inc/biostamp-js