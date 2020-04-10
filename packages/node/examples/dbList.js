let { BiostampDb } = require("../index");

let db = new BiostampDb(() => {
  db.list().then((recs) => {
    console.log(recs);
  }).catch((err) => {
    console.error(err.message);
  });
});
