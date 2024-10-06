const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userEmail : {
        type : String,
        required : [true]
    },
   
    userName : {
        type : String,
        required : [true]
    },
    userPassword : {
        type : String,
        required : [true]
    }

    
    

},{
    timestamps : true
}
)

const User = mongoose.model("User", userSchema)
module.exports = User