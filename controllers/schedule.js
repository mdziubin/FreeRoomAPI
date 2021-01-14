const scheduleWrapper = require("../DbWrapper/scheduleWrapper");

exports.getSchedule = async (req, res, next) => {
  // Get location key, decode the spaces
  const lKey = decodeURIComponent(req.params.lKey);

  try {
    // Return a list of building codes
    const rows = await scheduleWrapper.getSchedules(lKey);
    res.status(200).json(rows);
  } catch (error) {
    if (!error.status) {
      error.status = 500;
      next(error);
    }
  }
};
