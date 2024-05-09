const jwt = require('jsonwebtoken');
const User = require('../Model/user');

const Auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized! No token found." });
        }
       
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken.userId;
        
        next();
    } catch (error) {
        return res.status(500).json({ message: "Authentication error Invalid token" });
    }

};

const localVariables=async(req,res,next)=>{
    req.app.locals={
        OTP:null,
        resetSession:false
    }
    next()
}

const verifyUser=async(req,res,next)=>{
    try {
   const {email} =  req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message:"User not found"})
    }
    req.user = user;
    next();

    
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"})
        
    }

}

module.exports = {
    Auth,
    localVariables,
    verifyUser
};
