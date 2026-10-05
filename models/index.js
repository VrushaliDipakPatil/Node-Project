const Student = require("./students");
const IdentityCard = require("./identitycard");
const Department = require("./department");
const Courses = require("./courses");
const StudentCourses = require("./studentCourses");
const Users = require("./users");
const Bookings = require("./bookings");
const Buses = require("./buses");

//one to one relationship
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many relationship
Department.hasMany(Student);
Student.belongsTo(Department);

//many to many relationship
Student.belongsToMany(Courses, { through: StudentCourses });
Courses.belongsToMany(Student, { through: StudentCourses });

Users.hasMany(Bookings);
Bookings.belongsTo(Users);

Buses.hasMany(Bookings);
Bookings.belongsTo(Buses);

module.exports = {
  Student,
  IdentityCard,
  Department,
  Courses,
  StudentCourses,
    Users,
    Bookings,
    Buses
};