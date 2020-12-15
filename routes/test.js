const express = require("express");

const testController = require("../controllers/test.js");

const router = express.Router();

// GET /test
router.get("/", testController.getMessage);

module.exports = router;
