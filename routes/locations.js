const express = require("express");

const locationController = require("../controllers/locations");

const router = express.Router();

// GET /locations/buildings
router.get("/buildings", locationController.getBuildings);

// GET /locations/<building key>
router.get("/:bKey", locationController.getRooms);

module.exports = router;
