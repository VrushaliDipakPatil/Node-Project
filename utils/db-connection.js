const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'testdb'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
  const creationQuery= `create table IF NOT EXISTS Students(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(20) NOT NULL UNIQUE
)`;
  connection.execute(creationQuery, (err) => {
    if (err) {
      console.error('Error creating table:', err);
      connection.end();
      return;
    }
    console.log('Table created successfully');
  });
});

module.exports = connection;