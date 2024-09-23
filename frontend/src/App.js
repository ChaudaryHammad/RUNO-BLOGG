import React from "react";
import {  Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlogPage from "./pages/CreateBlogPage";
import ProfilePage from "./pages/ProfilePage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import UpdateBlogPage from "./pages/UpdateBlogPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ResetPage from "./pages/ResetPage";
import { useSelector } from "react-redux";
import Nav from "./component/Nav";
import Blogs from "./pages/Blogs";
import UserBlogs from "./pages/UserBlogs";

function App() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation()
  const hideNavbarRoutes = ["/login", "/registration","/reset-password",'/forget-password'];
const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname) || 
location.pathname.startsWith("/reset-password/");
  return (
  <>
   {!shouldHideNavbar && <Nav />}
      <div className={`${location.pathname=='/' ? "pt-0":"pt-24"} min-h-screen `}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
       {
          user && <Route path="/user-blogs" element={<UserBlogs />} />
       }


        <Route path="/create-blog" element={ <CreateBlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/update-blog/:id" element={user && <UpdateBlogPage />} />


        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/reset-password/:resetToken" element={<ResetPage />} />
      </Routes>
      </div>
      </>

  );
}

export default App;
