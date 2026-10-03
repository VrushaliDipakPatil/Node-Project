const express = require('express');
const db = require('./utils/db-connection');
const studentRoutes = require('./routes/studentsRoutes');
const busesRoutes = require('./routes/busesRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

const studentModel = require('./models/students');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/students", studentRoutes);
app.use("/users", userRoutes);
app.use("/buses", busesRoutes);

db.sync({force:true}).then(() => {
  app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
}).catch((err) => {
  console.error('Error synchronizing database:', err);
});

