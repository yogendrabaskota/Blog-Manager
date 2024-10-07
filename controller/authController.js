const bcrypt = require("bcryptjs");
const { find } = require("../model/userModel");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken")

exports.registerUser = (async (req, res) => {
        const { email, username, password } = req.body;
    
        if(!email || !username || !password){
           return res.status(400).json({
                message : "please provide email, username and password"
            })
        }
        const userFound = await User.find({useremail : email})
        if(userFound.length > 0){
            return  res.status(400).json({
                message : "User with this email already exist. please use unique email "
            })
        }
      
            await User.create({
                useremail: email,
                username: username,
                userpassword: bcrypt.hashSync(password,10)
    
            });
            return res.status(201).json({
                message: "User registered successfully"
               
            });
            
    
            
           
    }

)

exports.loginUser =( async(req,res)=>{
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({
            message : "please provide email and password"
        })
    }
    
    const userFound = await User.find({useremail:email})
    if(userFound.length == 0){
        return res.status(400).json({
            message : "user with this email is not registered"
        })
    }
    const isMatched = bcrypt.compareSync(password, userFound[0].userpassword)
    if(!isMatched){
        return res.status(200).json({
            message: "Password is incorrect, please provide a valid password"
        })
    }
    
    if(isMatched){
        const token = jwt.sign({id: userFound[0]._id}, process.env.SECRET_KEY,{
            expiresIn : '30d'
        })
        res.status(200).json({
            message : "user logged in  successfully",
            token
            
        })
    }
    



})