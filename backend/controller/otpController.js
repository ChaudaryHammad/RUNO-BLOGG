const User = require('../Model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const otpGenerator = require('otp-generator')


const getOtp = async(req,res)=>{
    req.app.locals.OTP = await otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets:false,specialChars: false });
    res.status(201).send({
        code:req.app.locals.OTP
    })

}

const verifyOtp = async(req,res)=>{
    const {code} = req.query;
    if(parseInt(req.app.locals.OTP) === parseInt(code))
        {
            req.app.locals.OTP =null
            req.app.locals.resetSession = true;
            return res.status(200).send({
                message:"OTP Verified"
            })
        }

        return res.status(400).send({
            message:"Invalid OTP"
        
        })

}



module.exports = {
    verifyOtp,
    getOtp
}