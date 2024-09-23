import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateBlogPage from './pages/CreateBlogPage'
import ProfilePage from './pages/ProfilePage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import UpdateBlogPage from './pages/UpdateBlogPage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import ResetPage from './pages/ResetPage'
import { useSelector } from 'react-redux'

function App() {
  const {user} = useSelector((state)=>state.user)
  
  return (
    
   <BrowserRouter>
   <Routes>
   
    <Route path="/" element={<Home/>} />
    <Route path="/create-blog" element={user && <CreateBlogPage/>} />
    <Route path="/blog/:id" element={<BlogDetailsPage/>} />
    <Route path="/update-blog/:id" element={user && <UpdateBlogPage/>} />



    <Route path="/profile" element={<ProfilePage/>} />
    <Route path="/registration" element={<RegistrationPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/forget-password" element={<ForgetPasswordPage/>} />
    <Route path="/reset-password/:resetToken" element={<ResetPage/>} />






   </Routes>
   </BrowserRouter>
  
  )
}


export default 
App
