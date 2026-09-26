const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.get("/welcome/:username",(req,res)=>{
    const username=req.params.username;
    const role=req.query.role;
    res.send(`Hello ${username}! You are a ${role}.`);
});


app.use((req,res)=>{
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});
