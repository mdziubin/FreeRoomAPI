const express = require("express");

const locationController = require("../controllers/locations");

const router = express.Router();

// GET /locations
router.get("/buildings", locationController.getBuildings);

module.exports = router;
