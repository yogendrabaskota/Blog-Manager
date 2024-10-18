const mongoose = require("mongoose")

exports.connectDatabase = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected successfully")
}