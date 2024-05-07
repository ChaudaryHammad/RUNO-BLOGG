
const otpGenerator = require('otp-generator')
const sendMail = require('../utils/sendMail')


const getOtp = async (req, res) => {
    try {
        const { email, username } = req.user; // Extract username and email from req.user
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
        req.app.locals.OTP = otp;
        await sendMail({ email, username, otp }); // Pass email, username, and otp to sendMail function
        res.status(201).send({
            message: 'OTP sent successfully'
        });
    } catch (error) {
        console.error('Error generating OTP or sending OTP email:', error);
        res.status(500).send({
            error: 'Failed to send OTP'
        });
    }
};



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
    getOtp,
 
}