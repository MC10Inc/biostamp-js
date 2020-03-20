let pb = require("protobufjs");
let proto = require("./brc3.json");
let schema = pb.Root.fromJSON(proto);

module.exports = schema;