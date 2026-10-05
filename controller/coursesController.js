const Courses = require("../models/courses");
const Student = require("../models/students");

const addCourse = async (req, res) => {
  try {
    const { name } = req.body;
    const course = await Courses.create({
      name: name,
    });
    res.status(200).send({ message: `Course ${name} added successfully` });
  } catch (error) {
    console.error("Error adding course:", error);
    res.status(500).send({ message: "Error adding course" });
  }
};

const addStudentstoCourses = async (req, res) => {
  try {
    const {studentIds, courseIds} = req.body;
    const student = await Student.findByPk(studentIds); 
    const course = await Courses.findAll({ where: { id: courseIds } });
    await student.addCourses(course);
const updatedStudent = await Student.findByPk(studentIds, {
      include: Courses,
    });
    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Error adding students to course:", error);
    res.status(500).send({ message: "Error adding students to course" });
  }
};

module.exports = {
  addCourse,
  addStudentstoCourses,
};
