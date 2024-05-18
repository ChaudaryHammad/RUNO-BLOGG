import React from 'react'
import CreateBlog from '../component/CreateBlog';
import Nav from '../component/Nav';

function CreateBlogPage() {
  return (
    <div>
      <Nav />
<h1 className='text-center text-4xl font-light p-5 mt-5 underline decoration-wavy decoration-green-500 text-gray-800'>Write Article</h1>

    <CreateBlog/></div>
  )
}

export default CreateBlogPage