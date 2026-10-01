const express = require('express');
const connection = require('./utils/db-connection');
const studentRoutes = require('./routes/studentsRoutes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/students", studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});