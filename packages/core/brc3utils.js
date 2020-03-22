const BROWSER = typeof navigator !== "undefined";

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
};

let toBytes = (arr) => {
  if (BROWSER) {
    return Uint8Array.from(arr);
  }

  return Buffer.from(arr);
};

let encodeText = (str) => {
  if (BROWSER) {
    return new TextEncoder().encode(str);
  }

  return Buffer.from(str);
};

let decodeText = (buffer) => {
  if (BROWSER) {
    return new TextDecoder().decode(buffer);
  }

  return buffer.toString("utf-8");
};

module.exports = {
  crc16,
  toBytes,
  encodeText,
  decodeText
};
