const Student = require("./students");
const IdentityCard = require("./identitycard");
const Department = require("./department");

//one to one relationship
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many relationship
Department.hasMany(Student);
Student.belongsTo(Department);

module.exports = {
  Student,
  IdentityCard,
  Department
};