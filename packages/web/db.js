let { BRC3Sensor, BRC3Error, BRC3Utils } = require("@mc10inc/biostamp-js-core");

let db = null;
let dbName = "biostamp";
let dbVersion = 1;

class BRC3WebDb {
  constructor(onReady) {
    let request = indexedDB.open(dbName, dbVersion);

    request.onupgradeneeded = (evt) => { 
      db = request.result;

      console.log("(DB) Created database");

      db.createObjectStore("recordings", { keyPath: ["serial", "recordingId"] });

      db.createObjectStore("pages", { keyPath: ["serial", "recordingId", "pageNumber"] })
        .createIndex("pagesBySerialAndRecId", ["serial", "recordingId"], { unique: false });
    };

    request.onsuccess = (evt) => {
      console.log("(DB) Opened database");

      db = request.result;

      db.onerror = (evt) => {
        console.log("(DB) Cannot open database");
      };

      if (onReady) {
        onReady();
      }
    }

    request.onerror = (evt) => {
      console.log(request.error.message);
    };
  }

  _insertOrUpdateRec(serial, recInfo) {
    return new Promise((resolve, reject) => {
      let tx = db.transaction(["recordings"], "readwrite");

      tx.oncomplete = (evt) => {
        console.log("(DB) Saved recInfo", serial, recInfo.recordingId);
        resolve();
      };

      tx.onerror = (evt) => {
        reject(evt);
      };

      let put = tx.objectStore("recordings").put({
        serial,
        recordingId: recInfo.recordingId,
        numPages: recInfo.numPages,
        recInfo: BRC3Sensor.encodeProto(recInfo, "RecordingInfo")
      });

      put.onerror = (evt) => {
        reject(evt);
      };
    });
  }

  _insertPages(serial, recordingId, pageNumber, recPages) {
    return new Promise((resolve, reject) => {
      let tx = db.transaction(["pages"], "readwrite");
      let os = tx.objectStore("pages");

      tx.oncomplete = (evt) => {
        console.log("(DB) Saved pages", serial, recordingId, pageNumber);
        resolve();
      };

      tx.onerror = (evt) => {
        reject(evt);
      };

      let put = os.put({
        serial,
        recordingId,
        pageNumber,
        pagesEncoded: recPages.map((recPage) => {
          return BRC3Sensor.encodeProto(recPage, "RecordingPage");
        })
      });

      put.onerror = (evt) => {
        reject(evt);
      };
    });
  }

  _getNextPage(serial, recordingId) {
    let tx = db.transaction(["pages"]);
    let os = tx.objectStore("pages");

    return new Promise((resolve, reject) => {
      let index = os.index("pagesBySerialAndRecId");

      index.openCursor([serial, recordingId], "prev").onsuccess = (evt) => {
        let cursor = evt.target.result;

        if (cursor) {
          let { pageNumber, pagesEncoded } = cursor.value;

          resolve(pageNumber + pagesEncoded.length);
        }
        else {
          resolve(0);
        }
      };
    }).catch((e) => {
      throw(e);
    });
  }

  list() {
    let tx = db.transaction(["recordings"]);
    let os = tx.objectStore("recordings");

    let results = [];

    return new Promise((resolve, reject) => {
      os.openCursor().onsuccess = (evt) => {
        let cursor = evt.target.result;

        if (cursor) {
          results.push(cursor.value);

          cursor.continue();
        }
        else {
          let recs = results.map((row) => {
            return {
              serial: row.serial,
              recordingId: row.recordingId,
              numPages: row.numPages,
              recInfo: BRC3Sensor.decodeProto(row.recInfo, "RecordingInfo")
            };
          });

          Promise.all(recs.map((rec) => {
            this._getNextPage(rec.serial, rec.recordingId).then((nextPage) => {
              rec.pagesDownloaded = nextPage;
            });
          })).then(() => {
            resolve(recs);
          });
        }
      };
    });
  }

  _getRec(serial, recId) {
    return this.list().then((recs) => {
      return recs.find((rec) => {
        return rec.serial === serial && rec.recordingId === recId;
      });
    })
  }

  download(sensor, recInfo, onProgress) {
    return this._insertOrUpdateRec(sensor.serial, recInfo).then(() => {
      return this._getNextPage(sensor.serial, recInfo.recordingId);
    }).then((nextPage) => {
      let sampler = new BRC3Utils.ProgressSampler(nextPage, recInfo.numPages, onProgress);

      let handlePages = (recPages) => {
        this._insertPages(sensor.serial, recInfo.recordingId, recPages[0].pageNumber, recPages);

        sampler.sample(recPages[0].pageNumber);
      };

      if (nextPage === recInfo.numPages) {
        return Promise.resolve();
      }

      return sensor.downloadRecording(recInfo, handlePages, nextPage, false);
    }).catch((e) => {
      throw(e);
    });
  }

  read(serial, recId, onRow) {
    return this._getRec(serial, recId).then((rec) => {
      if (!rec) {
        throw("Recording not found");
      }

      return rec.recInfo;
    }).then((recInfo) => {
      let tx = db.transaction(["pages"]);
      let os = tx.objectStore("pages");

      return new Promise((resolve, reject) => {
        let index = os.index("pagesBySerialAndRecId");

        index.openCursor([serial, recId]).onsuccess = (evt) => {
          let cursor = evt.target.result;

          if (cursor) {
            cursor.value.pagesEncoded.forEach((pageEncoded) => {
              let recPage = BRC3Sensor.decodeProto(pageEncoded, "RecordingPage");

              onRow(BRC3Sensor.processRecPage(recPage, recInfo));
            });

            cursor.continue();
          }
          else {
            resolve(null);
          }
        };
      });
    }).catch((e) => {
      throw(e);
    });
  }

  readJson(serial, recId, feature) {
    return BRC3Utils.buildJson(this, serial, recId, feature);
  }

  readCsv(serial, recId, feature) {
    return BRC3Utils.buildCsv(this, serial, recId, feature);
  }

  delete(serial, recId, deleteAll) {
    return new Promise((resolve, reject) => {
      let tx = db.transaction(["recordings", "pages"], "readwrite");

      tx.oncomplete = (evt) => {
        resolve();
      };

      tx.onerror = (evt) => {
        reject(evt);
      };

      let del = (os) => {
        os.openCursor().onsuccess = (evt) => {
          let cursor = evt.target.result;

          if (cursor) {
            let value = cursor.value;

            if ((value.serial === serial && value.recordingId === recId) || deleteAll) {
              cursor.delete();
            }

            cursor.continue();
          }
        };
      };

      del(tx.objectStore("recordings"));
      del(tx.objectStore("pages"));
    });
  }

  deleteAll() {
    return this.delete(null, null, true);
  }
}

module.exports = { BRC3WebDb };
