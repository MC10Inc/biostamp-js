let pb = require("protobufjs");
let fs = require("fs");

pb.load("brc3.proto").then((root) => {
  let json = JSON.stringify(root, null, 2);

  fs.writeFileSync("brc3.json", json, "utf8");
});

console.log("Wrote brc3.json");
