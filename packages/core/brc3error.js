let pb = require("protobufjs");
let proto = require("./brc3.json");
let schema = pb.Root.fromJSON(proto);

class BRC3Error extends Error {
  constructor(code) {
    let key = Object.keys(schema.ErrorCode).find((key) => schema.ErrorCode[key] === code);

    super(`There was a problem communicating with the sensor (${key}).`);

    this.code = code;
  }
}

Object.keys(schema.ErrorCode).forEach((key) => {
  BRC3Error[key] = schema.ErrorCode[key];
});

module.exports = BRC3Error;