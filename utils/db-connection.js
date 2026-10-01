const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
  const usercreationQuery = `create table IF NOT EXISTS Users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(20) NOT NULL UNIQUE
)`;
  connection.execute(usercreationQuery, (err) => {
    if (err) {
      console.error("Error creating table:", err);
      connection.end();
      return;
    }
    console.log("Table user created successfully");
  });

  const busescrestionQuery = `create table IF NOT EXISTS Buses(
  id INT AUTO_INCREMENT PRIMARY KEY,
 busNumber VARCHAR(20) NOT NULL,
 totalSeats INT NOT NULL,
 availableSeats INT NOT NULL
)`;

  connection.execute(busescrestionQuery, (err) => {
    if (err) {
      console.error("Error creating table:", err);
      connection.end();
      return;
    }
    console.log("Table buses created successfully");
  });
});

module.exports = connection;
