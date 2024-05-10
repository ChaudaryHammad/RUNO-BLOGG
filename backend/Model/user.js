const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:[true,'Please provide a Unique username'],
        unique:[true,'Username already taken']
    },
    password:{
        type:String,
        required:[true,'Please provide a password']

    },
    email:{
        type:String,
        required:[true,'Please provide an email'],
        unique:[true,'Email already taken']
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    
    },
    mobile:{
        type:Number
    },
    address:{
        type:String
    },
    avatar:{
        public_id:{
            type:String
        },
        url:{
            type:String
        }
        }
    

},{
    timestamps:true
})


module.exports = mongoose.model('User',userSchema)