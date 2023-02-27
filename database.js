const mongoose = require("mongoose");
const dotenv = require("dotenv");

// load environment variables from .env file
dotenv.config();

// establish the db connection
exports.connectDB = async() => {

    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("connected to the database")
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};