const User = require("../model/userModel")
//const bcrypt = require("bcryptjs")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



class UserController{
     async register(req,res){
        const {email,password,username} = req.body 
       // console.log(email,password,username)

        if(!email || !password || !username){

          //  console.log(email,password,username)
            return res.status(400).json({
                message : "Please provide email,password,username"
            })
        }
        const data = await User.create({
            username,
            useremail : email,
            userpassword : bcrypt.hashSync(password,8)
        })
        res.status(201).json({
            message : "User registered successfully", 
            
        })
    }
    async login(req,res){
        const {email,password} = req.body 
        if(!email || !password){
            return res.status(400).json({
                message : "Please provide username,password"
            })
        }
            // check if that email user already exist or not
        const userData =  await User.find({useremail : email})
        if(userData.length ===  0 ){
            return res.status(400).json({
                message : "Invalid Email"
            })
        }

    // password check 
    const isMatched = bcrypt.compareSync(password,userData[0].userpassword)
    console.log(password)
    if(isMatched){
        // generate token 
       const token = jwt.sign({id : userData[0]._id},process.env.SECRET_KEY,{
        expiresIn : '30d'
       })


        res.status(200).json({
            message : "User logged in successfully",
            token, 
            data : userData
        })

    }else{
        res.status(400).json({
            message : "Invalid Password"
        })
    }
}
}

module.exports = new UserController()