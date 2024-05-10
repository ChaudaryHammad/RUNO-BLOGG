import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

function GetAllBlogs() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v2/blog/get-all-blog")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/v2/blog/delete-blog/${id} `
      );
      toast.success("Blog Deleted");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     
      
      
      
    
      <div className="flex gap-5 flex-wrap mt-[50px] mx-0 lg:mx-[100px] justify-center lg:justify-start ">
        {data?.map((blog, index) => {
          return (
            <div key={index}>
              <div className="cookieCard !h-[400px]">
              <div className="h-[150px] w-full">
                <img className="h-full w-full object-contain" src={blog?.avatar?.url} alt="" />
              </div>
                <p className="cookieHeading">{blog.title}</p>
                <Link to={`/blog/${blog._id}`} className="text-white underline">
                  {blog._id}
                </Link>
                <p className="cookieDescription">
                  {blog.description}
                </p>
                <p>Views:{blog.views}</p>
                <div className="flex gap-2 w-full justify-center">
                  <button
                    className="acceptButton hover:underline"
                    onClick={() => handleDelete(blog._id)}
                  >
                    delete
                  </button>
                  <Link
                    to={`/update-blog/${blog._id}`}
                    className="acceptButton hover:underline"
                  >
                    Update
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
}

export default GetAllBlogs;
