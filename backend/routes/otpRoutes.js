const {Router} = require('express')
const { verifyUser, localVariables } = require('../middleware/auth')
const { getOtp, verifyOtp } = require('../controller/otpController')
const router = Router()



router.get('/get-otp',verifyUser,localVariables,getOtp)
router.get('/verify-otp',verifyOtp)


module.exports  = router