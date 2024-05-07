import React from 'react'
import GetAllBlogs from '../component/GetAllBlogs'
import Nav from '../component/Nav.js'


function Home() {
  return (
    <>
<div className="absolute inset-0 -z-10 h-full w-full  [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#12b_100%)]" />

        <Nav />


        <GetAllBlogs />
    </>
  )
}

export default Home