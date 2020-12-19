const db = require("../database/database");

/**
 * Search location database for building code
 * @param {*} bKey - Building code
 *
 * @returns Promise of building codes LIKE bKey or query error
 */
const getBuildings = (bKey) => {
  return new Promise((resolve, reject) => {
    const query =
      "SELECT DISTINCT building FROM locations WHERE building LIKE ?";
    db.all(query, ["%" + bKey + "%"], (err, rows) => {
      err ? reject(err) : resolve(rows);
    });
  });
};

/**
 * Search location database for roomnumbers in a building
 * @param {*} bKey - Building code
 * @param {*} rKey - Room number
 *
 * @returns Promise of room numbers in building and LIKE given room number or query error
 */
const getRoomNumbers = (bKey, rKey) => {
  return new Promise((resolve, reject) => {
    const query =
      "SELECT roomNumber FROM locations WHERE building = ? AND roomNumber LIKE ?";
    db.all(query, [bKey, "%" + rKey + "%"], (err, rows) => {
      err ? reject(err) : resolve(rows);
    });
  });
};

module.exports = {
  getBuildings,
  getRoomNumbers,
};
