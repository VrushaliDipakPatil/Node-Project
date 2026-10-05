const db = require("../utils/db-connection");
const Students = require("../models/students");
const IdentityCard = require("../models/identitycard");

const getEntries = async (req, res) => {
    try {
        const students = await Students.findAll();
        res.status(200).send(students);
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).send({ message: "Error fetching students" });
    }
};

const getEntriesById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Students.findByPk(id);
    if (!student) {
      return res
        .status(404)
        .send({ message: `Student with id ${id} not found` });
    }
    res.status(200).send(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).send({ message: "Error fetching student" });
  }
};

const addEntries = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const student = await Students.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(200).send({ message: `Student ${name} added successfully` });
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).send({ message: "Error adding student" });
  }
};

const addingValuestoStudentandIdentityTable = async (req, res) => {
  try {
const student = await Students.create(req.body.student);
const idCard = await IdentityCard.create({
    ...req.body.identityCard,
    StudentId: student.id, // Associate the IdentityCard with the Student
})

    res.status(200).send({ message: `Student ${student.name} and Identity Card added successfully` });
  } catch (error) {
    console.error("Error adding student and identity card:", error);
    res.status(500).send({ message: "Error adding student and identity card" });
  }
};



const updateEntries = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const student = await Students.findByPk(id);
    if (!student) {
      return res
        .status(404)
        .send({ message: `Student with id ${id} not found` });
    }
    await student.update({ name, email, age });
    res
      .status(200)
      .send({ message: `Student with id ${id} updated successfully` });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).send({ message: "Error updating student" });
  }
};

const deleteEntries = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Students.findByPk(id);
    if (!student) {
      return res
        .status(404)
        .send({ message: `Student with id ${id} not found` });
    }
    await student.destroy();
    res
      .status(200)
      .send({ message: `Student with id ${id} deleted successfully` });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).send({ message: "Error deleting student" });
  }
};

module.exports = {
  getEntries,
  addEntries,
  updateEntries,
  deleteEntries,
  getEntriesById,
  addingValuestoStudentandIdentityTable
};
