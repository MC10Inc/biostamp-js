# Biostamp® 3.0 JavaScript SDK for Web BLE

Connect to BioStamp® 3.0 sensors via Chromium-based web browsers ([Google Chrome][2] and [Microsoft Edge][3].)

See full documentation at [https://github.com/mc10inc/biostamp-js][6].

## Usage

``` javascript
let { BiostampSensor, BiostampDb, BiostampError } = require("@mc10inc/biostamp-js-web");

BiostampSensor.connect("BRC3", onDisconnect).then((sensor) => {
  sensor.blinkLeds();
}).catch((error) => {
  console.info(error.message);
});
```

If you prefer to use a precompiled script, simply include `sensor.min.js` in your HTML page:

``` html
<html>
  <head>
    <script src="sensor.min.js"></script>
  </head>
  <body>
    Testing BioStamp® 3.0!
  </body>
</html>
```

This script adds three variables to the window scope: `BiostampSensor`, `BiostampDb` and `BiostampError`.

## Examples

### blink.html

The file `blink.html` demonstrates how to connect to a sensor, blink the LEDs, and disconnect.

Launch [http-server][1] (on demand) in this directory:

```
npx http-server -p 8080
```

Open [http://localhost:8080/examples/blink.html][5] in Chrome or Microsoft Edge.

[1]: https://www.npmjs.com/package/http-server
[2]: https://www.google.com/chrome/browser/
[3]: https://www.microsoft.com/en-us/edge
[4]: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server
[5]: http://localhost:8080/examples/blink.html
[6]: https://github.com/mc10inc/biostamp-js