const jwt = require("jsonwebtoken")
 
const generateToken = (Id)=>{
try {
    return jwt.sign({Id},process.env.JWT_SECRET,{expiresIn:"1d"})
      
} catch (error) {
    return error
    }
}

module.exports = {generateToken}