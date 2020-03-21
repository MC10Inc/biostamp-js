let sqlite3 = require("sqlite3");

let CREATE_TABLE_RECORDINGS = "CREATE TABLE IF NOT EXISTS recordings ("
  + "id INTEGER PRIMARY KEY AUTOINCREMENT, "
  + "serial TEXT NOT NULL, "
  + "recording_id INTEGER NOT NULL, "
  + "num_pages INTEGER NOT NULL, "
  + "rec_info BLOB NOT NULL, "
  + "UNIQUE(serial, recording_id))";

let CREATE_TABLE_PAGES = "CREATE TABLE IF NOT EXISTS pages ("
  + "recording_id INTEGER NOT NULL REFERENCES recordings(id) ON DELETE CASCADE, "
  + "page_number INTEGER NOT NULL, "
  + "page_data BLOB NOT NULL, "
  + "PRIMARY KEY(recording_id, page_number)) "
  + "WITHOUT ROWID";

let db = null;

let dbRun = function (sql, args = {}) {
  return new Promise(function (resolve, reject) {
    db.run(sql, args, function (err) {
      if (err) {
        reject(err);
      }
      else {
        resolve(this);
      }
    });
  });
};

let dbEach = function (sql, args = {}, onRow) {
  return new Promise(function (resolve, reject) {
    db.each(sql, args, onRow, resolve);
  });
};

class BRC3Db {
  constructor(path = "./biostamp.db") {
    if (!db) {
      db = new sqlite3.Database(path, (err) => {
        if (err) {
          console.error(err);
        }
        else {
          Promise.all([
            dbRun(CREATE_TABLE_RECORDINGS),
            dbRun(CREATE_TABLE_PAGES)
          ]).catch((err) => {
            console.error(err);
          });
        }
      });
    }
  }

  download(sensor, recInfo) {
    // TODO INSERT INTO recordings (serial, recording_id, num_pages, rec_info) values ()

    console.log(sensor.name);
    console.log(recInfo.recordingId);
    console.log(recInfo.numPages);
    console.log(sensor.encode(recInfo, "RecordingInfo"));

    let receivePage = (pageNum, pageData) => {
      console.log(pageNum, sensor.encode(pageData, "RecordingPage"));
    };

    return sensor.downloadRecording(recInfo, receivePage, 0, false);
  }

  list() {
  }

  read(id, onRow) {
  }

  exportJson() {
  }

  exportCsv() {
  }

  delete(id) {
  }
}

module.exports = { BRC3Db };
