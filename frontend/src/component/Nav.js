import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar } from "../components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Facebook,
  Linkedin,
  Menu,
  Search,
  SearchCheck,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

import { logout } from "../App/feature/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { backend_url } from '.././server.js'
import SearchComp from "./Search/SearchComp";

function Nav() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate()

  const toggleMenu = () => {
    setOpen(!open);
  };

  function handleChange() {
    setOpen(!open);
  }

  function handleSearchBox() {
    setSearchOpen(!searchOpen);
  }

  const handleLogout = async () => {
    await axios
      .get(`${backend_url}/user/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(logout());

        toast.success(res.data.message);
        
        navigate("/login")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <nav className={`bg-[#000]  fixed w-full z-20`} >
        <div className={`transition-all duration-500 ease-in  flex justify-between items-center px-8 py-4 bg-black/10 text-[#e5e7ea]`}>
          <div>
         
                <Link
                  to={"/"}
                  className="text-[20px] font-bold underline decoration-wavy decoration-indigo-500 "
                  style={{ fontFamily: "League Spartan" }}
                >
                  RUNO
                </Link>
            
        
          </div>

          <div className="flex items-center gap-2">
            <ul className="hidden lg:flex lg:gap-4 lg:mr-2 text-[14px]">
              <li>
                <Link
                  to={"/"}
                  className={`${
                    location.pathname === "/" ? "text-indigo-500" : "text-white"
                  } p-2 cursor-pointer hover:border-b border-white`}
                >
                  Home
                </Link>
              </li>
            
              <li>
                <Link
                  to={`${user?"/create-blog":"/blogs"}`}
                  className={` ${
                    location.pathname === "/create-blog"
                      ? "text-indigo-500"
                      : "text-white"
                  } p-2 hover:border-b  border-white cursor-pointer`}
                >
                 {
                    user? "Write":"Blogs"
                 }
                </Link>
              </li>

              {
                user &&  <li>
                <Link
                  to={`${"/user-blogs"}`}
                  className={` ${
                    location.pathname === "/user-blogs"
                      ? "text-indigo-500"
                      : "text-white"
                  } p-2 hover:border-b  border-white cursor-pointer`}
                >
                 My Articles
                </Link>
              </li>
              }
              {/* <li><Link to={'/'} className={`${location.pathname==='/'  ? 'text-red-500':'text-white'} p-2 hover:border-b  border-white cursor-pointer`}>Contact Us</Link></li> */}
            </ul>

            <span class="hidden lg:block h-6 border-r border-white  "></span>

            <div className="hidden lg:flex justify-between gap-3 mx-2 ">
              <a href="">
                {" "}
                <Twitter
                  className="hover:fill-[#1DA1F2] hover:text-[#1DA1F2]"
                  strokeWidth={1}
                />
              </a>

              <a href="">
                {" "}
                <Linkedin
                  className="hover:fill-[#0077b5] hover:text-[#0077b5]"
                  strokeWidth={1}
                />
              </a>
              <a href="">
                {" "}
                <Facebook
                  className="hover:fill-[#4267B2] hover:text-[#4267B2]"
                  strokeWidth={1}
                />
              </a>
              <a href="">
                {" "}
                <Youtube
                  className="hover:fill-[#FF0000] hover:text-black"
                  strokeWidth={1}
                />
              </a>
            </div>
            <span class="hidden lg:block h-6 border-r border-white  "></span>
            {!searchOpen ? (
              <>
                <div className="hidden lg:block mx-4 ">
                  <Search
                    className="cursor-pointer "
                    onClick={handleSearchBox}
                    strokeWidth={1}
                  />
                </div>
              </>
            ) : (
              <div className="hidden lg:block mx-4 ">
                <SearchCheck strokeWidth={1} />
              </div>
            )}

            <div className="hidden lg:block">
              {
                user ? (
                  <>
                  <Link to={"/profile"}>
                <Avatar className="h-[40px] w-[40px]">
                  {user ? (
                    <>
                     
                      <DropdownMenu>
  <DropdownMenuTrigger><Avatar  className="h-[40px] w-[40px]"> <AvatarImage src={user?.avatar?.url} /></Avatar></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>My Account</DropdownMenuItem>
    <DropdownMenuSeparator />
   
    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

                    </>
                  ) : (
                    <>
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </>
                  )}
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
                  </>
                ):(
                  <>
                  <Link to={"/login"}>
                <Avatar className="h-[40px] w-[40px]">
                  {user ? (
                    <>
                      <AvatarImage src={user?.avatar?.url} />
                    </>
                  ) : (
                    <>
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </>
                  )}
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
                  </>
                )
              }
            </div>
          </div>

          <div className="lg:hidden block">
            {open ? (
              <>
                <X
                  className="cursor-pointer"
                  onClick={handleChange}
                  strokeWidth={1}
                />
              </>
            ) : (
              <div className="flex gap-4">
                <Search
                  className="cursor-pointer"
                  onClick={handleSearchBox}
                  strokeWidth={1}
                />
                <Menu
                  className="cursor-pointer"
                  onClick={handleChange}
                  strokeWidth={1}
                />
              </div>
            )}
          </div>
        </div>

        {open ? (
          <>
            <div className="bg-black text-white w-full absolute right-0 top-0 h-screen z-50 lg:hidden  transition-all">
              <div className="flex justify-between  px-8 py-4">
                <div>
                  <h1
                    className="text-[20px] font-bold "
                    style={{ fontFamily: "League Spartan" }}
                  >
                    RUNO
                  </h1>
                </div>

                <div className="lg:hidden ">
                  {open ? (
                    <X
                      className="cursor-pointer"
                      onClick={handleChange}
                      strokeWidth={2}
                    />
                  ) : (
                    <Menu
                      className="cursor-pointer"
                      onClick={handleChange}
                      strokeWidth={1}
                    />
                  )}
                </div>
              </div>
              <ul className="flex flex-col gap-2 items-center " onClick={toggleMenu}>
                <Link
                  className="p-2 border border-white w-full text-center hover:bg-white hover:text-black"
                  to={"/"}
                >
                  Home
                </Link>

                <ul className="flex w-full flex-col gap-2 items-center " onClick={toggleMenu}>
                <Link
                  to={`${user?"/create-blog":"/blogs"}`}
                  className="p-2 border border-white w-full text-center hover:bg-white hover:text-black"
                >
                 {
                    user? "Write":"Blogs"
                 }
                </Link>
              </ul>
              
              {
                user &&  <ul className="flex w-full flex-col gap-2 items-center" onClick={toggleMenu}>
                <Link
                  to={`${"/user-blogs"}`}
                   className="p-2 border border-white w-full text-center hover:bg-white hover:text-black"
                >
                 My Articles
                </Link>
              </ul>
              }
               
              </ul>

              <div className="flex justify-center h-[220px] mt-5 mb-5 items-center " onClick={toggleMenu}>
                {user? (
                  <>
                  <Link to={"/profile"}>
                  <Avatar className=" h-[150px] w-[150px]">
                  
                      <>
                        <AvatarImage src={user?.avatar?.url} />
                      </>
                  </Avatar>
                </Link>
                  </>
                ):(
                  <>
                  <Link to={"/login"}>
                  <Avatar className=" h-[150px] w-[150px]">
                    {user ? (
                      <>
                        <AvatarImage src={user?.avatar?.url} />
                      </>
                    ) : (
                      <>
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </>
                    )}
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                  </>
                )}
              </div>
              <div>
                <ul className="flex gap-4 justify-center">
                  <Link href="">
                    {" "}
                    <Twitter
                      className="hover:fill-[#1DA1F2] hover:text-[#1DA1F2]"
                      strokeWidth={1}
                    />
                  </Link>

                  <Link href="">
                    {" "}
                    <Linkedin
                      className="hover:fill-[#0077b5] hover:text-[#0077b5]"
                      strokeWidth={1}
                    />
                  </Link>
                  <Link href="">
                    {" "}
                    <Facebook
                      className="hover:fill-[#4267B2] hover:text-[#4267B2]"
                      strokeWidth={1}
                    />
                  </Link>
                  <Link to={"https://www.youtube.com"}>
                    {" "}
                    <Youtube
                      className="hover:fill-[#FF0000] hover:text-black"
                      strokeWidth={1}
                    />
                  </Link>
                </ul>
              </div>
            
             {
                user && <div className="flex justify-center mt-5">
                <button
                  className="cursor-pointer hover:text-gray-400 underline"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
             }
            </div>
          </>
        ) : null}
      </nav>

      {searchOpen ? (
        <>
          <div className=" absolute top-0 w-full h-screen z-50 back" >
           <SearchComp handleSearchBox={handleSearchBox}/>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Nav;
