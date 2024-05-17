import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

function Nav() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [data, setData] = useState([]);
  function handleChange() {
    setOpen(!open);
  }

  function handleSearchBox() {
    setSearchOpen(!searchOpen);
  }

  const handleLogout = async () => {
    await axios
      .get("http://localhost:8000/api/v2/user/logout", {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(logout());
        toast.success(res.data.message);
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <nav>
        <div className="flex justify-between items-center px-14 py-6 bg-black text-[#e5e7ea]">
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
                  to={"/create-blog"}
                  className={`${
                    location.pathname === "/create-blog"
                      ? "text-indigo-500"
                      : "text-white"
                  } p-2 hover:border-b  border-white cursor-pointer`}
                >
                  Create
                </Link>
              </li>
              <li>
                <Link
                  to={"/profile"}
                  className={` ${
                    location.pathname === "/profile"
                      ? "text-indigo-500"
                      : "text-white"
                  } p-2 hover:border-b  border-white cursor-pointer`}
                >
                  About
                </Link>
              </li>
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
            <div className="bg-black text-white w-full absolute right-0 top-0 h-screen z-50 lg:hidden">
              <div className="flex justify-between mx-8 p-6">
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
              <ul className="flex flex-col gap-2 items-center ">
                <Link
                  className="p-2 border border-white w-full text-center hover:bg-white hover:text-black"
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  className="p-2 border border-white w-full text-center hover:bg-white hover:text-black"
                  to={"/create-blog"}
                >
                  Create
                </Link>
                <Link
                  className="p-2 border border-white w-full text-center hover:bg-white hover:text-black"
                  to={"/profile"}
                >
                  Articles
                </Link>
                <Link className="p-2 border border-white w-full text-center hover:bg-white hover:text-black">
                  Contact Us
                </Link>
              </ul>

              <div className="flex justify-center h-[220px] mt-5 mb-5 items-center ">
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
              <div className="text-center p-3 mt-1">
                <p
                  onClick={handleLogout}
                  className="cursor-pointer hover:text-gray-400 underline"
                >
                  Logout
                </p>
              </div>
            </div>
          </>
        ) : null}
      </nav>

      {searchOpen ? (
        <>
          <div className="relative w-full  h-full bg-gray-400">
            <div className="absolute top-0 right-16 mx-12 -z-0 flex justify-center items-center  ">
              <input
                type="text"
                placeholder="Search Here"
                className="w-full h-[40px] border border-black m-4 pl-4 rounded-lg"
              />
              <X
                className="cursor-pointer bg-black p-2 h-10 w-10 text-white rounded-lg"
                onClick={handleSearchBox}
                strokeWidth={1}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Nav;
