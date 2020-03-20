let BRC3Schema = require("./brc3schema.js");

class BRC3Error extends Error {
  constructor(code) {
    let key = Object.keys(BRC3Schema.ErrorCode).find((key) => {
      return BRC3Schema.ErrorCode[key] === code;
    });

    super(`There was a problem communicating with the sensor (${key}).`);

    this.code = code;
  }
}

Object.keys(BRC3Schema.ErrorCode).forEach((key) => {
  BRC3Error[key] = BRC3Schema.ErrorCode[key];
});

module.exports = BRC3Error;