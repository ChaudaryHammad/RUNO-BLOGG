const {Router} = require('express')
const { sendMail } = require('../controller/mailer')
const router = Router()


router.post('/',sendMail)



module.exports = router