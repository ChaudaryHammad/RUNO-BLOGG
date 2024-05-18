import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './../components/ui/card.jsx'
import { useSelector } from 'react-redux'
import { backend_url } from '.././server.js'

function BlogDetails() {
    const {id} = useParams()
    const [blog,setBlog] = useState(null)
    const {blogs} = useSelector((state)=>state.blogs)

   const getBlog = ()=>{
    const blog = blogs.find((blog)=>blog._id===id)
    setBlog(blog)
   }

    useEffect(()=>{ 
      const handleView = async () => {
        try {
          await axios.put(`${backend_url}/blog/view/${id}`)

        } catch (error) {
          console.log(error);
        }
      };
    getBlog()
handleView()
    },[id])
    

  return (
   <>
      <div className='mt-5 mx-[50px] flex lg:justify-center flex-col  '>
            <CardTitle className='text-[25px] mb-5 font-extrabold !text-left'>{blog?.title}</CardTitle>
            {blog ? (
                <div>
                   <div className='mb-5'>
                    <img src={blog.avatar.url} className='w-[800px] h-[300px] object-cover' alt="" />
                   </div>
                   
                    <p className='text-justify'>{blog.description}</p>
                </div>
            ) : (
                <>
         <div className="relative flex w-[600px] h-[70vh] items-center animate-pulse gap-2 p-4">
  <div className="flex-1">
    <div className="mb-1 h-4 w-[50%] lg:w-3/5 rounded-lg bg-slate-300 text-lg" />
    <div className="mb-1 h-4 w-2/5 lg:w-4/5 rounded-lg bg-slate-300 text-lg" />

    <div className="h-4 w-[20%] lg:w-[90%] rounded-lg bg-slate-300 text-sm" />
  </div>
</div>

                </>
            )}
        </div>
   </>
    
  )
}

export default BlogDetails