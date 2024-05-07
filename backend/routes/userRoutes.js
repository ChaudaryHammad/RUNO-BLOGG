const {Router} = require('express')
const router = Router()
const {Auth,localVariables,verifyUser} = require('../middleware/auth')

const {register, login,getUser,updateUser} = require('../controller/userController')


router.post('/register',register)
router.post('/login',login)
router.get('/:username',getUser)
router.put('/:id',Auth,updateUser)



module.exports = router
