# Biostamp® 3.0 JavaScript SDK for Nordic

Connect to BioStamp® 3.0 sensors via the [pc-ble-driver library][1] by Nordic Semiconductor.

See full documentation at [https://github.com/mc10inc/biostamp-js][3].

## Prerequisites

  * [nRF52840 Dongle][2]

## Usage

``` javascript
let {
  BiostampSensor,
  BiostampDb,
  BiostampError,
  BiostampUtils
} = require("@mc10inc/biostamp-js-nordic");

BiostampSensor.connect("/dev/tty.usbmodem14112", "f2:fb:48:02:13:a8", onDisconnect).then((sensor) => {
  sensor.blinkLeds();
}).catch((error) => {
  console.info(error.message);
});
```

## Examples

### blink.js

Connect to a sensor and blink once.

``` bash
node examples/blink.js -p /dev/tty.usbmodem14112 -m f2:fb:48:02:13:a8
```

_See more examples in the biostamp-js-node package._

[1]: https://github.com/NordicSemiconductor/pc-ble-driver-js
[2]: https://www.nordicsemi.com/Software-and-tools/Development-Kits/nRF52840-Dongle
[3]: https://github.com/mc10inc/biostamp-js
