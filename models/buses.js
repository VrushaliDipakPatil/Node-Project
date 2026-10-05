const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../utils/db-connection');

const Buses = sequelize.define('Bus', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    busNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },

    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    timestamps: false
});

module.exports = Buses;