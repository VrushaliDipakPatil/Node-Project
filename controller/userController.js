const db = require('../utils/db-connection');

const addUser = (req, res) => {
  const { name, email } = req.body;
  const insertQuery = 'INSERT INTO Users (name, email) VALUES (?, ?)';  
  db.execute(insertQuery, [name, email], (err) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).send({ message: `User ${name} added successfully` });
  });
};

const fetchUsers = (req, res) => {
  const selectQuery = 'SELECT * FROM Users';
  db.execute(selectQuery, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    res.status(200).send(results);
  });
};

module.exports = { addUser, fetchUsers };