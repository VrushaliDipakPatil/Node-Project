const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

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


  const UsercreationQuery= `create table Users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(20) NOT NULL UNIQUE
)`;
  connection.execute(UsercreationQuery, (err) => {
    if (err) {
      console.error('Error creating user table:', err);
      connection.end();
      return;
    }
    console.log('User table created successfully');
  });

  const busCreationQuery= `create table Buses(
  id INT AUTO_INCREMENT PRIMARY KEY,
  busNumber VARCHAR(20) NOT NULL UNIQUE,
  totalSeats INT NOT NULL,
  availableSeats INT NOT NULL
)`;
  connection.execute(busCreationQuery, (err) => {
    if (err) {
      console.error('Error creating bus table:', err);
      connection.end();
      return;
    }
    console.log('Bus table created successfully');
  });

  const bookingCreationQuery= `create table Bookings(
  id INT AUTO_INCREMENT PRIMARY KEY,
  seatNumber INT NOT NULL
)`;
  connection.execute(bookingCreationQuery, (err) => {
    if (err) {
      console.error('Error creating booking table:', err);
      connection.end();
      return;
    }
    console.log('Booking table created successfully');
  });

  const PaymentQuery= `create table Payments(
  id INT AUTO_INCREMENT PRIMARY KEY,
  amountPaid DECIMAL(10, 2) NOT NULL,
  paymentStatus VARCHAR(20) NOT NULL
)`;
  connection.execute(PaymentQuery, (err) => {
    if (err) {
      console.error('Error creating payment table:', err);
      connection.end();
      return;
    }
    console.log('Payment table created successfully');
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});