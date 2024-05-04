import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateBlogPage from './pages/CreateBlogPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    
   <BrowserRouter>
   <Routes>
   
    <Route path="/" element={<Home/>} />
    <Route path="/create-blog" element={<CreateBlogPage/>} />
    <Route path="/profile" element={<ProfilePage/>} />


   </Routes>
   </BrowserRouter>
  
  )
}


export default 
App
