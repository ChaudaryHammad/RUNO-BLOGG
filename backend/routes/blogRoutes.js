const express = require('express')
const router = express.Router()

const {setBlog,getAllBlogs, deleteBlog, getSingleBlog,updateBlog} = require('../controller/blogController')






router.post('/create-blog',setBlog)
router.get('/get-all-blog',getAllBlogs)
router.get('/single-blog/:id',getSingleBlog)
router.put('/update-blog/:id',updateBlog)

router.delete('/delete-blog/:id',deleteBlog)






module.exports = router
