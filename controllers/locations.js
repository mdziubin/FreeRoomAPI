const locationWrapper = require("../DbWrapper/locationWrapper");

exports.getBuildings = async (req, res, next) => {
  // Get building code if provided
  const bKey = req.query.bKey || "";

  try {
    // Return a list of building codes
    const rows = await locationWrapper.getBuildings(bKey);
    res.status(200).json(rows);
  } catch (error) {
    if (!error.status) {
      error.status = 500;
      next(error);
    }
  }
};

exports.getRooms = async (req, res, next) => {
  // Get building code(required) and room number if provided
  const bKey = req.params.bKey;
  const rKey = req.query.rKey || "";

  try {
    // Return a list of rooms in the building, filtered by the rKey if given
    const rows = await locationWrapper.getRoomNumbers(bKey, rKey);
    res.status(200).json(rows);
  } catch (error) {
    if (!error.status) {
      error.status = 500;
      next(error);
    }
  }
};
