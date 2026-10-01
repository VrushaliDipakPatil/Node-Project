const db = require('../utils/db-connection');

const addEntries = (req, res) => {
 const{name, email} = req.body;
 const insertQuery = 'INSERT INTO Students (name, email) VALUES (?, ?)';
 db.execute(insertQuery, [name, email], (err) => {
   if (err) {
     console.error('Error inserting data:', err);
     res.status(500).send(err.message);
     db.end();
     return;
   }
   console.log('Data inserted successfully');
   res.status(200).send({ message: `Student ${name} added successfully` });
 });
}

const updateEntries = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updateQuery = 'UPDATE Students SET name = ? WHERE id = ?';
  db.execute(updateQuery, [name, id], (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if(result.affectedRows === 0) {
      res.status(404).send({ message: `Student with id ${id} not found` });
      return;
    }
    console.log('User data updated successfully');
    res.status(200).send({ message: `Student ${name} updated successfully` });
  });
};

const deleteEntries = (req, res) => {
  const { id } = req.params;
  const deleteQuery = 'DELETE FROM Students WHERE id = ?';
  db.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if(result.affectedRows === 0) {
      res.status(404).send({ message: `Student with id ${id} not found` });
      return;
    }
    console.log('User data deleted successfully');
    res.status(200).send({ message: `Student with id ${id} deleted successfully` });
  });
};

module.exports = { addEntries, updateEntries, deleteEntries };