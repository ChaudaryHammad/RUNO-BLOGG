import axios from "axios";
import { AudioWaveform, Image } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../App/feature/blog/blogSlice";
import { backend_url } from '.././server.js'

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(null);
  const {user} = useSelector((state)=>state.user)
  const dispatch = useDispatch();

  const handleFileInputChange = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      avatar,
      userId:user._id
    };

    axios
      .post(`${backend_url}/blog/create-blog`, data)
      .then((res) => {
    
          dispatch(addBlog(res.data.data))
          toast.success(res.data.message);
          setTitle("");
          setDescription("");
          setAvatar();
          navigate("/");
    
      })
      .catch((err) => {
        toast.error(err.res.data.message);
      });
  };
  return (
    <>


     

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
                  Create
                </button>
              </div>
            </div>

            <div>
              <div className="w-[300px] h-[170px] bg-red-400 text-white flex justify-center">
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
<div className="mt-2 flex items-center">
                <span className="inline-block h-36 w-36  overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image className="h-36 w-36" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
              
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  ); 
}

export default CreateBlog;
