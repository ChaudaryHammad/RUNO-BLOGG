const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:[true,'Please a username'],
      
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


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(this.password,salt)
    this.password = hashPassword;
    next()
})



module.exports = mongoose.model('User',userSchema)