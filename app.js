const express = require("express")
const User = require("./model/userModel")
const { connectDatabase } = require("./database/database")
const app = express()
require("dotenv").config()
const bcrypt = require("bcryptjs") 
const { registerUser } = require("./controller/authController")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

connectDatabase()

app.get("/",(req,res)=>{
    res.status(200).json({
        message : "Server is Running"
    })
})

app.post("/register",registerUser);







const PORT = process.env.PORT 
app.listen(PORT, ()=> {
    console.log(`server has started at port ${PORT}`)
})