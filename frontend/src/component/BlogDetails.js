import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './../components/ui/card.jsx'

function BlogDetails() {
    const {id} = useParams()
    const [blog,setBlog] = useState(null)

    console.log(blog);

    useEffect(()=>{
       const fetchBlog = async()=>{
        try {
            const response = await axios.get(`http://localhost:8000/api/v2/blog/single-blog/${id}`)
            setBlog(response.data.data)
        } catch (error) {
            toast.error('Internal Server Error')
        }
       }

       fetchBlog()

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
    <div className="mb-1 h-4 w-3/5 rounded-lg bg-slate-300 text-lg" />
    <div className="mb-1 h-4 w-4/5 rounded-lg bg-slate-300 text-lg" />

    <div className="h-4 w-[90%] rounded-lg bg-slate-300 text-sm" />
  </div>
</div>

                </>
            )}
        </div>
   </>
    
  )
}

export default BlogDetails