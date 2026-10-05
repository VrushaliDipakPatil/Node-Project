const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const IdentityCard = sequelize.define('IdentityCard', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
},{
    timestamps: false,
});
module.exports = IdentityCard;