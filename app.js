const express = require("express");

const app = express();
const ordersRouter = require("./routes/orders");
const usersRouter = require("./routes/users");

app.use("/orders", ordersRouter);
app.use("/users", usersRouter);




app.use((req,res)=>{
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});
