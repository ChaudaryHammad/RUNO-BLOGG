const User = require('../Model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const otpGenerator = require('otp-generator')

const register = async(req,res)=>{
    const {username,password,email,profile} = req.body;

  try {

    const existingUserName = await User.findOne({username})
    if(existingUserName){
      return res.status(400).json({message:"Username already taken"})
    }
    const existingEmail = await User.findOne({email})
    if(existingEmail){
     return res.status(400).json({message:"Email already taken"})
    }

    const hashedPassword = await bcrypt.hash(password,10)
    const user = new User({username,password:hashedPassword,email,profile})
    await user.save().then(()=>{
       return res.status(200).json({message:"User Registered Successfully"})
        
    }).catch((error)=>{
       return res.status(400).json({message:"Error in registering user",error:error})
    }
    )
    
  } catch (error) {
    return res.status(400).json({message:"Error in registering user",error:error})
  }
}



const login = async(req,res)=>{
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid Password"})
        }
        const token = jwt.sign({email:user.email,id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"})
        return res.status(200).json({username:user.username,token})
      

       

        
    } catch (error) {
        return res.status(400).json({message:"Error in logging in",error:error})
    }
}






const getUser=async(req,res)=>{
    const {username} = req.query;
    try {
        if(!username){
            return res.status(400).json({message:"Please provide a username"})
        
        }
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json({message:"User not found fdd"})
        }

        const {password,...rest} = user._doc
        return res.status(200).json({data:rest})

        
    } catch (error) {
        return res.status(500).json({message:"Error in getting user",error:error})
    }

}

const updateUser = async(req,res)=>{
    const {id} = req.user;
    const {username,email,profile} = req.body;
    try {
        const user = await User.findByIdAndUpdate(id,{username,email,profile},{new:true})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        return res.status(200).json({message:"User updated successfully",data:user}) 
        
    } catch (error) {
        return res.status(500).json({message:"Error in updating user",error:error})
    }
}



module.exports = {register,login,getUser,updateUser}