const mongoose = require("mongoose");
require("dotenv").config();


const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("DB connected sucessfully");
})
.catch((error)=>{
    console.log("error encounterd at db connection");
})
}

module.exports = dbconnect;
