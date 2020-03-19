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

let decodeMessage = (buffer) => {
  if (typeof navigator !== "undefined") {
    if (buffer instanceof Array) {
      buffer = Uint8Array.from(buffer);
    }

    return new TextDecoder().decode(buffer);
  }

  if (buffer instanceof Array) {
    buffer = Buffer.from(buffer);
  }

  return buffer.toString("utf-8");
};

module.exports = {
  crc16,
  encodeMessage,
  decodeMessage
};
