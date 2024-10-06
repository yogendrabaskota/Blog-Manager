const express = require("express")

require("dotenv").config()
const User = require("./model/userModel")
const { connectDatabase } = require("./database/database")
const app = express()

const bcrypt = require("bcryptjs") 
const { registerUser, loginUser } = require("./controller/authController")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

connectDatabase()

app.get("/",(req,res)=>{
    res.status(200).json({
        message : "Server is Running"
    })
})

app.post("/register",registerUser)
app.post("/login",loginUser)







const PORT = process.env.PORT 
app.listen(PORT, ()=> {
    console.log(`server has started at port ${PORT}`)
})