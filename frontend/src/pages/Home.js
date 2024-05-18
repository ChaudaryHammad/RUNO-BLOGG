import React from 'react'
import GetAllBlogs from '../component/GetAllBlogs'
import Nav from '../component/Nav.js'
import Hero from '../component/Hero.js'



function Home() {

  return (
    <>


      
       <Nav />
     
       
       <Hero/>
      
<h1 className='text-center text-4xl font-light p-5 mt-5 underline decoration-wavy decoration-teal-500 text-gray-800'>Trending Articles</h1>
      <div className='mt-5 lg:mx-[50px] min-h-screen'>
      <GetAllBlogs />
      </div>
    </>
  )
}

export default Home