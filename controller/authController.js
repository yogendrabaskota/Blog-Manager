const bcrypt = require("bcryptjs")

exports.registerUser = (async (req, res) => {
        const { email, username, password } = req.body;
    
        if(!email || !username || !password){
           return res.status(400).json({
                message : "please provide email, username and password"
            })
        }
        const userFound = await User.find({userEmail : email})
        if(userFound.length > 0){
            return  res.status(400).json({
                message : "User with this email already exist. please use unique email "
            })
        }
      
    
    
        
            await User.create({
                userEmail: email,
                userName: username,
                userPassword: bcrypt.hashSync(password,10)
    
            });
            return res.status(201).json({
                message: "User registered successfully"
               
            });
            
    
            
           
    }

)