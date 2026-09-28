const express = require("express");

const app = express();

const userRoutes=require("./routes/userRoutes");
const productRoutes=require("./routes/productRoutes");
const cartRoutes=require("./routes/cartRoutes");

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/carts", cartRoutes);

app.use((req,res)=>{
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});
