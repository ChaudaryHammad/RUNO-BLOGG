const jwt = require("jsonwebtoken")

const generateToken = (userId)=>{
try {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"1h"})
    return token   
} catch (error) {
    return error
    }
}

module.exports = {generateToken}