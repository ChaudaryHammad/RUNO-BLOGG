import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const [data,setData] = useState({}) 
  const {user} = useSelector((state)=>state.user)


  return (
    <div className='flex  flex-col  items-center justify-center h-[50vh] w-full border border-red-500'>
    
    {
      user ? (
        <div>
         <div  className='text-[20px] font-bold cursor-pointer ' style={{fontFamily:"League Spartan"}}>User Name: {user.username}</div>
          <div  className='text-[20px] font-bold cursor-pointer ' style={{fontFamily:"League Spartan"}}>User Email: {user.email}</div>
          <div  className='text-[20px] font-bold cursor-pointer ' style={{fontFamily:"League Spartan"}}>User Id: {user._id}</div>


        </div>
      ):(
        <div>No User Found 😞</div>
      )
    }</div>
  ) 
}

export default Profile