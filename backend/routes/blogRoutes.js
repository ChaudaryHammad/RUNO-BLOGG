const express = require('express')
const router = express.Router()

const {setBlog,getAllBlogs, deleteBlog, getSingleBlog,updateBlog,getBlogPerPage,increaseView, searchBlog, getBlogByUser} = require('../controller/blogController')
const { Auth } = require('../middleware/auth')

router.post('/create-blog',setBlog)
router.get('/get-all-blog',getAllBlogs)
router.get('/get-user-blogs',Auth, getBlogByUser)

router.get('/single-blog/:id',getSingleBlog)
router.get('/search/:key',searchBlog)
router.put('/view/:id',increaseView)

router.get('/blogs',getBlogPerPage)
router.put('/update-blog/:id',updateBlog)

router.delete('/delete-blog/:id',deleteBlog)

module.exports = router
