const userRoute = require("./routes/userRoute")
const blogRoute = require("./routes/blogRoute")
const express = require("express")

const app = express()
const cors = require("cors")
app.use(cors({
    origin : '*'
}))

require("dotenv").config()
const User = require("./model/userModel")
const { connectDatabase } = require("./database/database")
//const app = express()

const bcrypt = require("bcryptjs") 
const { registerUser, loginUser } = require("./controller/userController")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

connectDatabase()

app.get("/",(req,res)=>{
    res.status(200).json({
        message : "Server is Running"
    })
})

app.use("/api/user",userRoute)
app.use("/api/user",blogRoute)
app.use(express.static('uploads'))







const PORT = process.env.PORT 
app.listen(PORT, ()=> {
    console.log(`server has started at port ${PORT}`)
})