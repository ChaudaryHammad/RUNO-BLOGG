import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast';

function GetAllBlogs() {
   
    const [data,setData] = useState([{}])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/v2/blog/get-all-blog').then((res)=>{
            setData(res.data.data)
        
        }).catch((err)=>{
            console.log(err);
        })
    },[])


    const handleDelete=async(id)=>{
        try {
            await axios.delete(`http://localhost:8000/api/v2/blog/delete-blog/${id} `)
            toast.success('Blog Deleted')
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }
   
  return (
<>


<div className='flex gap-5 flex-wrap m-[50px] '>
{
    data?.map((blog,index)=>{
        return(
            <div key={index}>
        <div className="cookieCard ">
  <p className="cookieHeading">{blog.title}</p>
  <p className="cookieDescription">{blog.description} <Link to="/">What for?</Link></p>
  <button className="acceptButton hover:underline" onClick={()=>handleDelete(blog._id)}>delete</button>
</div>


            </div>
        )
    })
}
</div>

</>  )
}

export default GetAllBlogs