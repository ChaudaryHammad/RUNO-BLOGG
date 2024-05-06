import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateBlogPage from './pages/CreateBlogPage'
import ProfilePage from './pages/ProfilePage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import UpdateBlogPage from './pages/UpdateBlogPage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage';

function App() {
  return (
    
   <BrowserRouter>
   <Routes>
   
    <Route path="/" element={<Home/>} />
    <Route path="/create-blog" element={<CreateBlogPage/>} />
    <Route path="/blog/:id" element={<BlogDetailsPage/>} />
    <Route path="/update-blog/:id" element={<UpdateBlogPage/>} />



    <Route path="/profile" element={<ProfilePage/>} />
    <Route path="/registration" element={<RegistrationPage/>} />
    <Route path="/login" element={<LoginPage/>} />




   </Routes>
   </BrowserRouter>
  
  )
}


export default 
App
