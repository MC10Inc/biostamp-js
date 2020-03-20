let pb = require("protobufjs");
let proto = require("./brc3.json");

let BRC3Schema = pb.Root.fromJSON(proto);

module.exports = BRC3Schema;