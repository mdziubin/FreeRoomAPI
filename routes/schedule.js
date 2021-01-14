const express = require("express");

const scheduleController = require("../controllers/schedule");

const router = express.Router();

// GET /schedule/buildings
router.get("/:lKey", scheduleController.getSchedule);

module.exports = router;
