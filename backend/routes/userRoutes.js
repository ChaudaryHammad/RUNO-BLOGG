const {Router} = require('express')
const router = Router()
const {Auth,verifyUser} = require('../middleware/auth')

const {register, login,getUser,updateUser, resetPassword, createSession, logout} = require('../controller/userController')


router.post('/register',register)
router.post('/login',login)
// router.get('/:username',getUser)

router.get('/',Auth,getUser)

// router.get('/createSession',createSession)


// router.put('/resetpassword',verifyUser,resetPassword)
router.put('/',Auth,updateUser)
router.get('/logout',Auth,logout)



module.exports = router
