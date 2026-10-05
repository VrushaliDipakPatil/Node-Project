const express = require('express');
const router = express.Router();
const busesController = require('../controller/busesController');

router.post("/add", busesController.addBuses);
router.get("/available/:availableSeats", busesController.getBusesasperAvailableSeats);
router.get('/:id/bookings', busesController.getBusBookings);
module.exports = router;