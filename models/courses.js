const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../utils/db-connection");

const Courses = sequelize.define("Course", {
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

module.exports = Courses;