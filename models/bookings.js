const { DataTypes } = require('sequelize');

const sequelize = require('../utils/db-connection');

const Bookings = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    timestamps: false
});

module.exports = Bookings;