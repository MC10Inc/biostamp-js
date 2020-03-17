let crc16 = (data) => {
  let crc = 0xffff;
  let i;

  for (i = 0; i < data.length; i++) {
    crc  = (crc >> 8) | (crc << 8);
    crc &= 0xffff;
    crc ^= data[i];
    crc &= 0xffff;
    crc ^= (crc & 0xFF) >> 4;
    crc &= 0xffff;
    crc ^= (crc << 8) << 4;
    crc &= 0xffff;
    crc ^= ((crc & 0xFF) << 4) << 1;
    crc &= 0xffff;
  }
  return crc;
}

let encodeMessage = (str) => {
  if (typeof navigator !== "undefined") {
    return new TextEncoder().encode(str);
  }

  return Buffer.from(str);
};

let decodeMessage = (b64) => {
  if (typeof navigator !== "undefined") {
    return atob(b64);
  }

  return Buffer.from(b64, "base64").toString("utf-8");
};

let promiseTimeout = (timeoutMs, promise) => {
  let timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Timed out");
    }, timeoutMs);
  });

  return Promise.race([promise, timeout]);
};

module.exports = {
  crc16,
  encodeMessage,
  decodeMessage,
  promiseTimeout
};
