import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

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
      <div className='mt-5 flex justify-center flex-col  items-center'>
            <div>BlogDetails</div>
            {blog ? (
                <div>
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                </div>
            ) : (
                <>
         <div className="relative flex w-64 animate-pulse gap-2 p-4">
  <div className="flex-1">
    <div className="mb-1 h-4 w-2/5 rounded-lg bg-slate-300 text-lg" />
    <div className="h-4 w-[70%] rounded-lg bg-slate-300 text-sm" />
  </div>
</div>

                </>
            )}
        </div>
   </>
    
  )
}

export default BlogDetails