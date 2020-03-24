const BROWSER = typeof navigator !== "undefined";

let crc16 = (data) => {
  let crc = 0xffff;
  let i;

  for (i = 0; i < data.length; i++) {
    crc  = (crc >> 8) | (crc << 8);
    crc &= 0xffff;
    crc ^= data[i];
    crc &= 0xffff;
    crc ^= (crc & 0xFF) >> 4;
    crc &= 0xffff;
    crc ^= (crc << 8) << 4;
    crc &= 0xffff;
    crc ^= ((crc & 0xFF) << 4) << 1;
    crc &= 0xffff;
  }
  return crc;
};

let toBytes = (arr) => {
  if (BROWSER) {
    return Uint8Array.from(arr);
  }

  return Buffer.from(arr);
};

let encodeText = (str) => {
  if (BROWSER) {
    return new TextEncoder().encode(str);
  }

  return Buffer.from(str);
};

let decodeText = (buffer) => {
  if (BROWSER) {
    return new TextDecoder().decode(buffer);
  }

  return buffer.toString("utf-8");
};

let buildJson = (db, serial, recId) => {
  let rows = [];

  let onRow = (row) => {
    rows.push(row.pageData);
  };

  return db.read(serial, recId, onRow).then(() => {
    return JSON.stringify(rows, null, 2);
  });
};

let buildCsv = (db, serial, recId, feature) => {
  let pages = [];
  let cols = [];
  let txt = "";

  let onRow = (row) => {
    if (row.pageData[feature]) {
      pages.push(row.pageData);
    }
  };

  return db.read(serial, recId, onRow).then(() => {
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
        txt += (timestamp + (samplingPeriod * i)) + "," + (cols.map((c) => data[c][i]).join(",") + "\n");
      }
    });

    return txt;
  });
};

let writeFile = (name, text, type = "text/plain") => {
  if (BROWSER) {
    let anchor = document.createElement("a");
    let blob = new Blob([text], { type });
    let url = URL.createObjectURL(blob);

    document.body.appendChild(anchor);

    anchor.href = url;
    anchor.download = name;
    anchor.click();

    document.body.removeChild(anchor);

    URL.revokeObjectURL(url);
  }
};

let ProgressSampler = function (startPage, totalPages, onProgress) {
  let n1 = startPage;
  let t1 = Date.now();
  let nDelta = [];
  let tDelta = [];

  let rollAvg = (arr) => {
    return arr.slice(-10).reduce((a, b) => a + (+b), 0) / Math.min(10, arr.length);
  };

  this.sample = (n2) => {
    if (!onProgress) {
      return;
    }

    if ((n2 + 1) === totalPages || n2 - n1 >= 100) {
      let t2 = Date.now();

      nDelta.push(n2 - n1);
      tDelta.push(t2 - t1);

      t1 = t2;
      n1 = n2;

      let pctComplete = ((n2 + 1) / totalPages);
      let pagesLeft = totalPages - (n2 + 1);
      let pagesPerInterval = rollAvg(nDelta) || 1;
      let interval = rollAvg(tDelta);
      let estTimeLeft = Math.round(((pagesLeft / pagesPerInterval) * interval) / 1000);

      onProgress({ pctComplete, estTimeLeft });
    }
  };
}

module.exports = {
  crc16,
  toBytes,
  encodeText,
  decodeText,
  buildJson,
  buildCsv,
  writeFile,
  ProgressSampler
};
