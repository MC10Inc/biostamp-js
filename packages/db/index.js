let { BRC3Sensor, BRC3Utils } = require("@mc10inc/biostamp-js-core");

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

let SELECT_RECORDINGS = "SELECT r.*, MAX(p.page_number) AS last_page "
  + "FROM recordings r "
  + "LEFT JOIN pages p ON p.fk_id = r.id "
  + "GROUP BY r.id";

let SELECT_RECORDING = "SELECT r.*, MAX(p.page_number) AS last_page "
  + "FROM recordings r "
  + "LEFT JOIN pages p ON p.fk_id = r.id "
  + "WHERE serial = $serial "
  + "AND recording_id = $recording_id "
  + "GROUP BY r.id";

let SELECT_PAGES = "SELECT * FROM pages "
  + "WHERE fk_id = $fk_id "
  + "ORDER BY page_number";

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
  constructor(onReady = null, path = "./biostamp.db") {
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
          ]).then(() => {
            if (onReady) {
              onReady();
            }
          }).catch((e) => {
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

  download(sensor, recInfo, onProgress) {
    return this._insertRec(sensor.serial, recInfo).then(() => {
      return this._getRec(sensor.serial, recInfo.recordingId);
    }).then((rec) => {
      let nextPage = rec.last_page ? rec.last_page + 1 : 0;
      let sampler = new BRC3Utils.ProgressSampler(nextPage, recInfo.numPages, onProgress);

      let handlePages = (recPages) => {
        recPages.forEach((recPage) => {
          let params = {
            $fk_id: rec.id,
            $page_number: recPage.pageNumber,
            $page_data: BRC3Sensor.encodeProto(recPage, "RecordingPage")
          };

          dbRun(INSERT_REC_PAGE, params).catch((e) => {
            console.error(e);
          });
        })

        sampler.sample(recPages[0].pageNumber);
      };

      if (nextPage === recInfo.numPages) {
        return Promise.resolve(recInfo.recordingId);
      }

      return sensor.downloadRecording(recInfo, handlePages, nextPage, false).then(() => {
        sampler.sample(recInfo.numPages - 1);

        return Promise.resolve(recInfo.recordingId);
      });
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
          pagesDownloaded: row.last_page ? row.last_page + 1 : 0,
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

          onRow(BRC3Sensor.processRecPage(recPage, recInfo));
        };

        return dbEach(SELECT_PAGES, { $fk_id: fkId }, handleRow);
      }).then(() => {
        resolve();
      }).catch((e) => {
        reject(e);
      });
    });
  }

  readJson(serial, recId, feature) {
    return BRC3Utils.buildJson(this, serial, recId, feature);
  }

  readCsv(serial, recId, feature) {
    return BRC3Utils.buildCsv(this, serial, recId, feature);
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
