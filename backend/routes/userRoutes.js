const {Router} = require('express')
const router = Router()
const {Auth,verifyUser} = require('../middleware/auth')

const {register, login,getUser,updateUser, resetPassword, createSession} = require('../controller/userController')


router.post('/register',register)
router.post('/login',login)
router.get('/:username',getUser)

router.get('/createSession',createSession)


router.put('/resetpassword',verifyUser,resetPassword)
router.put('/:id',Auth,updateUser)



module.exports = router
