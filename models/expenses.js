const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const Expenses = sequelize.define('Expense', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
    timestamps: false
});

module.exports = Expenses;