import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {

  CardDescription,
  
  CardTitle,
} from "./../components/ui/card.jsx";


import { BarChart2, Calendar, Pencil, Trash2, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../App/feature/blog/blogSlice.js";
import { backend_url } from '.././server.js'

function GetAllBlogs() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);


  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${backend_url}/blog/get-all-blog`
      );

      dispatch(getBlog(response.data.data));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };




  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${backend_url}/blog/delete-blog/${id} `
      );
      toast.success("Blog Deleted");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }; 

  return (
    <div className="lg:mx-[50px]  px-[50px] h-full">
      <div className="flex gap-5 flex-col flex-wrap items-center justify-center lg:flex-nowrap">
        {loading ? (
          <>
            <div
              className="loader  border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
aspect-square w-8 flex justify-center items-center text-yellow-700"
            />
          </>
        ) : (
          <>
            {blogs?.map((blog, index) => {
              return (
                <>
                  <div className="flex gap-5 mt-5 flex-col lg:flex-row h-full ">
                    <div className="w-[300px] lg:w-[500px] h-[250px] ">
                      <img
                        className="h-full w-full"
                        src={blog?.avatar?.url}
                        alt=""
                      />
                    </div>
                    <div className="w-full ">
                      <CardTitle>{blog.title}</CardTitle>

                      <div className="flex gap-3 items-center mt-2 mb-2">
                        <div className="flex items-end gap-2">
                          <BarChart2 size={20} />
                          <CardDescription> {blog.views}</CardDescription>
                        </div>

                        <div className="flex items-end gap-2">
                          <User size={20} />
                          <CardDescription> {blog?.creator?.username}</CardDescription>
                        </div>

                        <div className="flex items-end gap-2">
                          <Calendar size={20} />
                          <CardDescription className="">
                            {" "}
                            {blog?.createdAt?.split("T")[0]}
                          </CardDescription>
                        </div>
                      </div>

                      <CardDescription className="text-justify">
                        {blog.description.length > 280 ? (
                          <>
                            {blog.description.slice(0, 280)}
                           
                          </>
                        ) : (
                          blog.description
                        )}
                      </CardDescription>

                      <span>
                             
                              <Link
                                to={`/blog/${blog._id}`}
                                className="underline text-black"
                              >
                                {" "}
                                Read more
                              </Link>
                            </span>

                      <div className="flex gap-2 w-full mt-5">
                        <button
                          className="acceptButton hover:underline fill-red-600"
                          onClick={() => handleDelete(blog._id)}
                        >
                          <Trash2 />
                        </button>
                        <Link
                          to={`/update-blog/${blog._id}`}
                          className="acceptButton hover:underline"
                        >
                          <Pencil />
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

          </>
        )}
      </div>
    </div>
  );
}

export default GetAllBlogs;
