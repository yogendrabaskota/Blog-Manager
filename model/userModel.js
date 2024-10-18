const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    useremail : {
        type : String,
        required : [true]
    },
   
    username : {
        type : String,
        required : [true]
    },
    userpassword : {
        type : String,
        required : [true]
    }

    
    

},{
    timestamps : true
}
)

const User = mongoose.model("User", userSchema)
module.exports = User