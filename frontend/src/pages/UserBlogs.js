import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { toast } from "react-hot-toast";



import { backend_url } from ".././server.js";

function UserBlogs() {
  const [loading, setLoading] = useState(true);


const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${backend_url}/blog/get-user-blogs`,{
        withCredentials:true
      });
      const data = response.data.blogs
      
        setBlogs(data);

     
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backend_url}/blog/delete-blog/${id} `);
      toast.success("Blog Deleted");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center container">
    <div className="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
aspect-square w-8 flex justify-center items-center text-yellow-700" />

      </div >
    )
  }

  
  return (
    <div className="container mx-auto p-6">
      {/* Blog List */}
      <div className=" ">
        {blogs ? (
          blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`flex items-start gap-4  hover:bg-zinc-100 px-6  py-6 ${
                index !== blogs.length - 1 ? "border-b" : ""
              } border-gray-300`}
            >
              {/* Author Section */}

              {/* Blog Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <img
                    src={blog?.creator?.avatar.url}
                    alt={blog?.creator?.username}
                    className="rounded-full w-8 h-8 "
                  />
                  <div className="text-sm text-gray-500">
                    Authorized by Mr. {blog?.creator?.username}
                  </div>
                </div>

                <Link to={`/blog/${blog._id}`} className="hover:underline decoration-black">
                  <h2 className="lg:text-2xl py-1 font-bold text-gray-900 hover:text-black">
                    {blog.title}
                  </h2>
                </Link>
                <p className="text-gray-600">
                  {blog.description.split(" ").length > 20 ? (
                    <>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: blog.description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "),
                        }}
                      ></span>
                    </>
                  ) : (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: blog.description,
                      }}
                    />
                  )}
                </p>

                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <span>{blog?.createdAt?.split("T")[0]}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.views} views</span>
                  <span className="mx-2">•</span>
                  <span>{blog.comments || 0} comments</span>
                </div>

<div className="mt-4 flex gap-5 ">
<button  className="px-2 py-2 w-[70px] bg-red-500 text-white rounded-md"  onClick={() => handleDelete(blog._id)}>Delete</button>
<Link to={`/update-blog/${blog._id}`}  className="px-2 text-center py-2 w-[100px] bg-green-500 text-white rounded-md"  >Edit</Link>

</div>
              </div>


              {/* Thumbnail Image */}
              <div className="lg:h-full h-[240px] lg:block flex items-center">
                <img
                  src={blog?.avatar?.url}
                  alt={"blog-image"}
                  className="rounded-lg  lg:w-[300px] lg:h-32 h-28 object-cover lg:object-contain"
                />
              </div>
            </div>
          ))
        ) : (
          <div>No blogs available.</div>
        )}
      </div>
    </div>
  );
}

export default UserBlogs;
