import React from 'react'
import Nav from '../component/Nav'
import UpdateBlog from '../component/UpdateBlog'

function UpdateBlogPage() {
  return (
   <>
    <Nav/>
<h1 className='text-center text-4xl font-light p-5 mt-5 underline decoration-wavy decoration-indigo-500 text-gray-800'>Update Articles</h1>

    <UpdateBlog/>
   </>
  )
}

export default UpdateBlogPage