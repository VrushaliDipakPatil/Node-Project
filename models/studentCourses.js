const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const StudentCourses = sequelize.define('StudentCourse', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  timestamps: false,
});

module.exports = StudentCourses;