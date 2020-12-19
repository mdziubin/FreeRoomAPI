const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const DBSOURCE = path.join(__dirname, "../Winter_19.db");

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
  }
});

module.exports = db;
