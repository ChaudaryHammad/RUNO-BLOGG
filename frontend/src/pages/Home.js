import React from 'react'
import GetAllBlogs from '../component/GetAllBlogs'
import Nav from '../component/Nav.js'


function Home() {
  return (
    <div className=''>


        <Nav />


      <div className='mt-5 lg:mx-[100px] min-h-screen'>
      <GetAllBlogs />
      </div>
    </div>
  )
}

export default Home