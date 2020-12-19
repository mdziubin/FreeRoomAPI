const db = require("../database/database");

/**
 * Search schedule database for classroom schedule
 * @param {*} lKey - Full classroom location key (BuildingCode + RoomNumber)
 *
 * @returns Promise of classroom schedule or query error
 */
const getSchedules = (lKey) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM roomSchedules WHERE location = ?";
    db.all(query, [lKey], (err, rows) => {
      err ? reject(err) : resolve(rows);
    });
  });
};

module.exports = {
  getSchedules,
};
