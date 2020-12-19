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
