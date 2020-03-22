let { BRC3Sensor } = require("@mc10inc/biostamp-js-core");

let sqlite3 = require("sqlite3");

// let FK_ON = "PRAGMA foreign_keys=ON";

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

let INSERT_REC_INFO = "REPLACE INTO recordings ("
  + "serial, recording_id, num_pages, rec_info) values ("
  + "$serial, $recording_id, $num_pages, $rec_info)";

let INSERT_REC_PAGE = "REPLACE INTO pages ("
  + "recording_id, page_number, page_data) values ("
  + "$recording_id, $page_number, $page_data)";

let SELECT_RECORDINGS = "SELECT * FROM recordings";

let SELECT_RECORDING = "SELECT * FROM recordings "
  + "WHERE recording_id = $recording_id";

let SELECT_PAGES = "SELECT * FROM pages "
  + "WHERE recording_id = $recording_id "
  + "ORDER BY page_number";

let SELECT_MAX_PAGE_NUM = "SELECT MAX(page_number) as page_number FROM pages "
  + "WHERE recording_id = $recording_id";

let DELETE_RECORDING = "DELETE FROM recordings "
  + "WHERE recording_id = $recording_id";

let DELETE_ALL_RECORDINGS = "DELETE FROM recordings";

let db = null;

let dbGet = function (sql, params = {}) {
  return new Promise(function (resolve, reject) {
    db.get(sql, params, function (err, row) {
      if (err) {
        reject(err);
      }
      else {
        resolve(row);
      }
    });
  });
};

let dbRun = function (sql, params = {}) {
  return new Promise(function (resolve, reject) {
    db.run(sql, params, function (err) {
      if (err) {
        reject(err);
      }
      else {
        resolve(this);
      }
    });
  });
};

let dbEach = function (sql, params = {}, onRow) {
  return new Promise(function (resolve, reject) {
    db.each(sql, params, onRow, resolve);
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
            // dbRun(FK_ON)
          ]).then((statements) => {
            //
          }).catch((e) => {
            console.error(e);
          });
        }
      });
    }
  }

  _initDownload(serial, recInfo) {
    let params = {
      $serial: serial,
      $recording_id: recInfo.recordingId,
      $num_pages: recInfo.numPages,
      $rec_info: BRC3Sensor.encode(recInfo, "RecordingInfo")
    };

    return dbRun(INSERT_REC_INFO, params).then((statement) => {
      // console.log(statement);
      // let lastId = statement.lastId;
      return dbGet(SELECT_MAX_PAGE_NUM, { $recording_id: recInfo.recordingId });
    }).then((result) => {
      return result.page_number || 0;
    });
  }

  download(sensor, recInfo, onProgress) {
    return this._initDownload(sensor.name, recInfo).then((startPage) => {
      let pageListener = (pageNum, recPage) => {
        let params = {
          $recording_id: recInfo.recordingId,
          $page_number: pageNum,
          $page_data: BRC3Sensor.encode(recPage, "RecordingPage")
        };

        dbRun(INSERT_REC_PAGE, params).catch((e) => {
          console.error(e);
        });

        if (onProgress) {
          onProgress((pageNum + 1) / recInfo.numPages);
        }
      };

      return sensor.downloadRecording(recInfo, pageListener, startPage, false);
    }).catch((e) => {
      throw(e);
    });
  }

  list() {
    return new Promise((resolve, reject) => {
      let rows = [];

      let handleRow = (err, row) => {
        if (err) {
          reject(err);
        }

        rows.push({
          serial: row.serial,
          recordingId: row.recording_id,
          numPages: row.num_pages,
          recInfo: BRC3Sensor.decode(row.rec_info, "RecordingInfo")
        });
      };

      return dbEach(SELECT_RECORDINGS, {}, handleRow).then(() => {
        resolve(rows);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  read(recId, onRow) {
    return new Promise((resolve, reject) => {
      return dbGet(SELECT_RECORDING, { $recording_id: recId }).then((rec) => {
        if (!rec) {
          reject(Error("Recording not found"));
        }

        return BRC3Sensor.decode(rec.rec_info, "RecordingInfo");
      }).then((recInfo) => {
        let handleRow = (err, row) => {
          if (err) {
            reject(err);
          }

          let recPage = BRC3Sensor.decode(row.page_data, "RecordingPage");

          onRow({
            recordingId: row.recording_id,
            pageNum: row.page_number,
            pageData: BRC3Sensor.processPage(recPage, recInfo)
          });
        };

        return dbEach(SELECT_PAGES, { $recording_id: recId }, handleRow);
      }).then(() => {
        resolve();
      }).catch((e) => {
        reject(e);
      });
    });
  }

  readJson(recId) {
    let rows = [];

    let onRow = (row) => {
      rows.push(row.pageData);
    };

    return this.read(recId, onRow).then(() => {
      return JSON.stringify(rows, null, 2);
    });
  }

  readCsv(recId, feature) {
    // TODO
  }

  delete(recId) {
    console.log("deleting ", recId);
    return dbRun(DELETE_RECORDING, { $recording_id: recId }).catch((e) => {
      throw(e);
    });
  }

  deleteAll() {
    return dbRun(DELETE_RECORDINGS).catch((e) => {
      throw(e);
    });
  }
}

module.exports = { BRC3Db };
