import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v2/blog/single-blog/${id}`
        );
        setTitle(response.data.data.title);
        setDescription(response.data.data.description);
      } catch (error) {
        toast.error("Internal Server Error");
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
    };

   try {
    const res = await axios.put(`http://localhost:8000/api/v2/blog/update-blog/${id}`, data);
  
      toast.success(res.data.message);
    
      navigate("/");
    
    
   } catch (error) {
    toast.error("Internal Server Error",error);
    
   }

  };
  return (
    <>
      <h1 className="text-3xl font-bold text-center p-2">Update Blog</h1>

      <div className="flex justify-center items-center mt-5">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-5 justify-center flex-wrap">
            <div>
              <div className="flex flex-col">
                <label htmlFor="title" className="font-bold">
                  Title
                </label>

                <input
                  type="text"
                  className="border border-black p-1 w-[300px]"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  id="title"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="description" className="font-bold">
                  Description
                </label>

                <input
                  type="text"
                  className="border border-black p-1 w-[300px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  id="description"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="border border-blue-800 mt-3 p-1 hover:bg-blue-800 hover:text-white"
                >
                  Update
                </button>
              </div>
            </div>

            <div>
              <div className="w-[300px] h-[170px] bg-red-400 text-white">
                <label htmlFor="avatar">
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateBlog;
