let { BRC3Sensor } = require("@mc10inc/biostamp-js-core");

let sqlite3 = require("sqlite3");

let FK_ON = "PRAGMA foreign_keys=ON";

let CREATE_TABLE_RECORDINGS = "CREATE TABLE IF NOT EXISTS recordings ("
  + "id INTEGER PRIMARY KEY AUTOINCREMENT, "
  + "serial TEXT NOT NULL, "
  + "recording_id INTEGER NOT NULL, "
  + "num_pages INTEGER NOT NULL, "
  + "rec_info BLOB NOT NULL, "
  + "UNIQUE(serial, recording_id))";

let CREATE_TABLE_PAGES = "CREATE TABLE IF NOT EXISTS pages ("
  + "fk_id INTEGER NOT NULL REFERENCES recordings(id) ON DELETE CASCADE, "
  + "page_number INTEGER NOT NULL, "
  + "page_data BLOB NOT NULL, "
  + "PRIMARY KEY(fk_id, page_number)) "
  + "WITHOUT ROWID";

let INSERT_REC_INFO = "INSERT OR IGNORE INTO recordings ("
  + "serial, recording_id, num_pages, rec_info) VALUES ("
  + "$serial, $recording_id, $num_pages, $rec_info)";

let INSERT_REC_PAGE = "INSERT OR IGNORE INTO pages ("
  + "fk_id, page_number, page_data) VALUES ("
  + "$fk_id, $page_number, $page_data)";

let SELECT_RECORDINGS = "SELECT * FROM recordings";

let SELECT_RECORDING = "SELECT * FROM recordings "
  + "WHERE serial = $serial "
  + "AND recording_id = $recording_id";

let SELECT_PAGES = "SELECT * FROM pages "
  + "WHERE fk_id = $fk_id "
  + "ORDER BY page_number";

let SELECT_MAX_PAGE_NUM = "SELECT MAX(page_number) AS page_number FROM pages "
  + "WHERE fk_id = $fk_id";

let DELETE_RECORDING = "DELETE FROM recordings "
  + "WHERE id = $id";

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
            dbRun(CREATE_TABLE_PAGES),
            dbRun(FK_ON)
          ]).catch((e) => {
            console.error(e);
          });
        }
      });
    }
  }

  _insertRec(serial, recInfo) {
    let params = {
      $serial: serial,
      $recording_id: recInfo.recordingId,
      $num_pages: recInfo.numPages,
      $rec_info: BRC3Sensor.encodeProto(recInfo, "RecordingInfo")
    };

    return dbRun(INSERT_REC_INFO, params);
  }

  _getRec(serial, recId) {
    let params = {
      $serial: serial,
      $recording_id: recId
    };

    return dbGet(SELECT_RECORDING, params).then((rec) => {
      if (!rec) {
        throw(Error("Recording not found"));
      }

      return rec;
    });
  }

  _getStartPage(fkId) {
    return dbGet(SELECT_MAX_PAGE_NUM, { $fk_id: fkId }).then((result) => {
      return result.page_number || 0;
    });
  }


  download(sensor, recInfo, onProgress) {
    return this._insertRec(sensor.serial, recInfo).then(() => {
      return this._getRec(sensor.serial, recInfo.recordingId);
    }).then((rec) => {
      return this._getStartPage(rec.id).then((startPage) => {
        return [rec, startPage];
      });
    }).then(([rec, startPage]) => {
      let p1 = startPage / rec.num_pages;
      let t1 = Date.now();
      let pDelta = [];
      let tDelta = [];

      let rollAvg = (arr) => {
        return arr.slice(-10).reduce((a, b) => a + (+b), 0) / Math.min(10, arr.length);
      };

      let handlePage = (pageNum, recPage) => {
        let params = {
          $fk_id: rec.id,
          $page_number: pageNum,
          $page_data: BRC3Sensor.encodeProto(recPage, "RecordingPage")
        };

        dbRun(INSERT_REC_PAGE, params).catch((e) => {
          console.error(e);
        });

        if (onProgress) {
          let p2 = (pageNum + 1) / rec.num_pages;
          let t2 = Date.now();

          if (p2 === 1 || p2 - p1 >= 0.002) {
            pDelta.push(p2 - p1);
            tDelta.push(t2 - t1);

            p1 = p2;
            t1 = t2;

            let est = Math.round((((1 - p2) / rollAvg(pDelta)) * rollAvg(tDelta)) / 1000);

            onProgress({ pctComplete: p1, estTimeLeft: est });
          }
        }
      };

      return sensor.downloadRecording(recInfo, handlePage, startPage, false);
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
          recInfo: BRC3Sensor.decodeProto(row.rec_info, "RecordingInfo")
        });
      };

      return dbEach(SELECT_RECORDINGS, {}, handleRow).then(() => {
        resolve(rows);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  read(serial, recId, onRow) {
    return new Promise((resolve, reject) => {
      return this._getRec(serial, recId).then((rec) => {
        let fkId = rec.id;
        let recInfo = BRC3Sensor.decodeProto(rec.rec_info, "RecordingInfo");

        let handleRow = (err, row) => {
          if (err) {
            reject(err);
          }

          let recPage = BRC3Sensor.decodeProto(row.page_data, "RecordingPage");

          onRow({
            pageNum: row.page_number,
            pageData: BRC3Sensor.processRecPage(recPage, recInfo)
          });
        };

        return dbEach(SELECT_PAGES, { $fk_id: fkId }, handleRow);
      }).then(() => {
        resolve();
      }).catch((e) => {
        reject(e);
      });
    });
  }

  readJson(serial, recId) {
    let rows = [];

    let onRow = (row) => {
      rows.push(row.pageData);
    };

    return this.read(serial, recId, onRow).then(() => {
      return JSON.stringify(rows, null, 2);
    });
  }

  readCsv(serial, recId, feature) {
    return Promise.resolve("TODO");
  }

  delete(serial, recId) {
    return this._getRec(serial, recId).then((rec) => {
      return rec.id;
    }).then((id) => {
      return dbRun(DELETE_RECORDING, { $id: id });
    }).catch((e) => {
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
