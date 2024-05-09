import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Profile() {
  const [data,setData] = useState({}) 
  useEffect(()=>{
    const fetchData = async()=>{
      await axios.get('http://localhost:8000/api/v2/user',{
        withCredentials:true
      }).then((res)=>{
        
    
        setData(res.data)
        console.log(data)
      
      }).catch((error)=>{
        console.log(error)
      } )
    }
    fetchData()
  },[])

  return (
    <div className='flex  flex-col  items-center justify-center h-[50vh] w-full border border-red-500'>
    
    {
      data.user ? (
        <div>
         <div  className='text-[20px] font-bold cursor-pointer ' style={{fontFamily:"League Spartan"}}>User Name: {data.user.username}</div>
          <div  className='text-[20px] font-bold cursor-pointer ' style={{fontFamily:"League Spartan"}}>User Email: {data.user.email}</div>
          <div  className='text-[20px] font-bold cursor-pointer ' style={{fontFamily:"League Spartan"}}>User Id: {data.user._id}</div>


        </div>
      ):(
        <div>loading...</div>
      )
    }</div>
  ) 
}

export default Profile