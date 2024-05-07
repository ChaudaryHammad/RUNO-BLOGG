const {Router} = require('express')
const router = Router()
const Auth = require('../middleware/auth')

const {register, login,getUser,updateUser, getOtp} = require('../controller/userController')


router.post('/register',register)
router.post('/login',login)
router.get('/:username',getUser)
router.put('/:id',Auth,updateUser)
router.post('/otp',getOtp)


module.exports = router
