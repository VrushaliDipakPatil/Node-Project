const {Seqelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const Department = sequelize.define('Department', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: false,
});
module.exports = Department;