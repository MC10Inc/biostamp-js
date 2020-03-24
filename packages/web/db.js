let { BRC3Sensor, BRC3Error, BRC3Utils } = require("@mc10inc/biostamp-js-core");

let db = null;
let dbName = "biostamp";
let dbVersion = 1;

class BRC3WebDb {
  constructor() {
    let request = indexedDB.open(dbName, dbVersion);

    request.onupgradeneeded = (evt) => { 
      db = request.result;

      console.log("Created DB");

      db.createObjectStore("recordings", { keyPath: ["serial", "recordingId"] });

      db.createObjectStore("pages", { keyPath: ["serial", "recordingId", "pageNumber"] })
        .createIndex("pagesBySerialAndRecId", ["serial", "recordingId"], { unique: false });
    };

    request.onsuccess = (evt) => {
      console.log("Accessed DB");

      db = request.result;

      db.onerror = (evt) => {
        console.log("Cannot access DB");
      };
    }

    request.onerror = (evt) => {
      console.log(request.error.message);
    };
  }

  _insertRec(serial, recInfo) {
    return new Promise((resolve, reject) => {
      let tx = db.transaction(["recordings"], "readwrite");

      tx.oncomplete = (evt) => {
        console.log("Saved recInfo", serial, recInfo.recordingId);
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

  _insertPage(serial, recordingId, pageNumber, recPage) {
    return new Promise((resolve, reject) => {
      let tx = db.transaction(["pages"], "readwrite");
      let os = tx.objectStore("pages");

      tx.oncomplete = (evt) => {
        // console.log("Saved page", serial, recordingId, pageNumber);
        resolve();
      };

      tx.onerror = (evt) => {
        reject(evt);
      };

      let put = os.put({
        serial,
        recordingId,
        pageNumber,
        pageData: BRC3Sensor.encodeProto(recPage, "RecordingPage")
      });

      put.onerror = (evt) => {
        reject(evt);
      };
    });
  }

  _getStartPage(serial, recordingId) {
    let tx = db.transaction(["pages"]);
    let os = tx.objectStore("pages");

    return new Promise((resolve, reject) => {
      let index = os.index("pagesBySerialAndRecId");

      index.openKeyCursor([serial, recordingId], "prev").onsuccess = (evt) => {
        let cursor = evt.target.result;

        if (cursor) {
          let req = os.get(cursor.primaryKey);

          req.onsuccess = (evt) => {
            resolve(req.result ? req.result.pageNumber : 0);
          };
        }
        else {
          resolve(null);
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

          resolve(recs);
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
    return this._insertRec(sensor.serial, recInfo).then(() => {
      return this._getStartPage(sensor.serial, recInfo.recordingId);
    }).then((startPage) => {
      // TODO extract progress class into BRC3Utils
      let n1 = startPage;
      let t1 = Date.now();
      let nDelta = [];
      let tDelta = [];

      let rollAvg = (arr) => {
        return arr.slice(-10).reduce((a, b) => a + (+b), 0) / Math.min(10, arr.length);
      };

      let handlePage = (pageNumber, recPage) => {
        this._insertPage(sensor.serial, recInfo.recordingId, pageNumber, recPage);

        if (onProgress) {
          let n2 = pageNumber;

          if ((n2 + 1) === recInfo.numPages || n2 - n1 >= 100) {
            let t2 = Date.now();

            nDelta.push(n2 - n1);
            tDelta.push(t2 - t1);

            t1 = t2;
            n1 = n2;

            let pctComplete = ((n2 + 1) / recInfo.numPages);
            let pagesLeft = recInfo.numPages - (n2 + 1);
            let pagesPerInterval = rollAvg(nDelta) || 1;
            let interval = rollAvg(tDelta);
            let estTimeLeft = Math.round(((pagesLeft / pagesPerInterval) * interval) / 1000);

            onProgress({ pctComplete, estTimeLeft });
          }
        }
      };

      // TODO this resolves before the last batch of pages is inserted
      return sensor.downloadRecording(recInfo, handlePage, startPage, false);
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

        index.openKeyCursor([serial, recId]).onsuccess = (evt) => {
          let cursor = evt.target.result;

          if (cursor) {
            let req = os.get(cursor.primaryKey);

            req.onsuccess = (evt) => {
              let recPage = BRC3Sensor.decodeProto(req.result.pageData, "RecordingPage");

              onRow({
                pageNum: req.result.pageNumber,
                pageData: BRC3Sensor.processRecPage(recPage, recInfo)
              });
            };

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

  // TODO extract into BRC3Utils
  readJson(serial, recId) {
    let rows = [];

    let onRow = (row) => {
      rows.push(row.pageData);
    };

    return this.read(serial, recId, onRow).then(() => {
      return JSON.stringify(rows, null, 2);
    });
  }

  // TODO extract into BRC3Utils
  readCsv(serial, recId, feature) {
    let pages = [];
    let cols = [];
    let txt = "";

    let onRow = (row) => {
      if (row.pageData[feature]) {
        pages.push(row.pageData);
      }
    };

    return this.read(serial, recId, onRow).then(() => {
      let cols = [];

      if (pages.length) {
        cols = feature === "annotation" ? [feature] : Object.keys(pages[0][feature]);
        txt = ["timestamp"].concat(cols).join(",") + "\n";
      }

      pages.forEach((page) => {
        let timestamp = page.timestamp;
        let samplingPeriod = page.samplingPeriod || 0;
        let data = page[feature];

        if (feature === "annotation") {
          txt += timestamp + ",\"" + data.replace(/"/g, "\"\"") + "\"\n";
        }
        else for (let i = 0, n = data[cols[0]].length; i < n; i++) {
          txt += (timestamp + (samplingPeriod * i)) + ",";
          txt += (cols.map((c) => data[c][i]).join(",") + "\n");
        }
      });

      return txt;
    });
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
