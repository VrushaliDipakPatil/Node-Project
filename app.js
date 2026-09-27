const express = require("express");

const app = express();
const studentsRouter = require("./routes/students");
const coursesRouter = require("./routes/courses");
const homeRouter = require("./routes/home");

app.use("/students", studentsRouter);
app.use("/courses", coursesRouter);
app.use("/home", homeRouter);




app.use((req,res)=>{
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});
