const express = require('express')
const router = express.Router()

const {setBlog,getAllBlogs, deleteBlog} = require('../controller/blogController')






router.post('/create-blog',setBlog)
router.get('/get-all-blog',getAllBlogs)
router.delete('/delete-blog/:id',deleteBlog)





module.exports = router
