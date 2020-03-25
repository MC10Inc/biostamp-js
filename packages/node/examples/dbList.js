let { BiostampDb } = require("../index");

let db = new BiostampDb();

db.list().then((recs) => {
  console.log(recs);
});
