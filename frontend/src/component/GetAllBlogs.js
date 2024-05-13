import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './../components/ui/card.jsx'
import { BarChart2, Calendar, Pencil, Trash2, User, ViewIcon } from "lucide-react";
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
    <div className="lg:mx-[100px] mx-[50px] h-full">
     
      
      
      
    
      <div className="flex gap-5 flex-col flex-wrap justify-center lg:flex-nowrap">

        {data?.map((blog, index) => {
          return (
        <>
        <div className="flex gap-5 mt-5 flex-col lg:flex-row h-full ">
         <div className="w-[300px] lg:w-[500px] h-[250px] ">
          <img className="h-full w-full" src={blog?.avatar?.url} alt="" />
         </div>
         <div className="w-full ">
         <CardTitle>{blog.title}</CardTitle>
         <Link to={`/blog/${blog._id}`} className=" underline">
                 <CardDescription> {blog._id}</CardDescription>
                </Link>

            <div className="flex gap-3 items-center mt-2 mb-2">
            <div className="flex items-center gap-2">
              <BarChart2 />
              <CardDescription> {blog.views}</CardDescription>
              
              </div>

              <div className="flex items-center gap-2">
              <User />
              <CardDescription> {blog.creator}</CardDescription>
              
              </div>

              <div className="flex items-center gap-2">
              <Calendar/>
              <CardDescription className=""> {blog?.createdAt?.split('T')[0]}</CardDescription>
              
              </div>
            </div>

             


        
         <CardDescription className="text-justify">{blog.description}</CardDescription>
        
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
      </div>


    

    </div>
  );
}

export default GetAllBlogs;

