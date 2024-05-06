import React, { useEffect, useState } from 'react'

import Nav from '../component/Nav'
import BlogDetails from '../component/BlogDetails'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function BlogDetailsPage() {
 
   
  return (
    <>
   <Nav/>
    <BlogDetails />
    </>
  )
}

export default BlogDetailsPage