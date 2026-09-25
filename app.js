const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1 executed");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2 executed");
  res.send("<h1>Server is up and running on port 3000! Ready to handle requests</h1>");
});

app.listen(3000,()=>{
    console.log("Server is up and running on port 3000! Ready to handle requests");
});
