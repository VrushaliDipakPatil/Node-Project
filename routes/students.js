const express = require('express');
const router = express.Router();

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];

router.get('/', (req, res) => {
    res.send('Students: ' + students.map(s => s.name).join(', '));
});

router.get('/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (student) {
        res.send('Student: ' + student.name);
    } else {
        res.status(404).send('Student not found.');
    }
});


module.exports = router;