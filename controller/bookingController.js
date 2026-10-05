const Bookings = require('../models/bookings');

const addBooking = async (req, res) => {
    try {
        const { userId, busId, seatNumber } = req.body;

        const booking = await Bookings.create({
            UserId: userId,
            BusId: busId,
            seatNumber: seatNumber
        });

        res.status(200).send({
            message: 'Booking added successfully',
            booking: booking
        });

    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send({
            message: 'Error adding booking'
        });
    }
};

module.exports = { addBooking };