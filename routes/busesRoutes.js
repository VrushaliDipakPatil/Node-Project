const express = require('express');
const router = express.Router();
const busesController = require('../controller/busesController');

router.post("/add", busesController.addBuses);
router.get("/available/:availableSeats", busesController.getBusesasperAvailableSeats);
module.exports = router;