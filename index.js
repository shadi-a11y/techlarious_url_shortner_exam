const express = require("express");
const router = require("./routes/authRoutes");

// create an instance of an Express application
const app = express();

const DB = require("./database").connectDB;

const authRouter = require("./routes/authRoutes");

DB();

// parse incoming requests with JSON 
app.use(express.json());

// mount the router
app.use("/api/auth", authRouter);

// start the server
app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port: ${process.env.PORT}`);
});
