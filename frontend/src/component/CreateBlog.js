import axios from "axios";
import { AudioWaveform, Image } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../App/feature/blog/blogSlice";
import { backend_url } from ".././server.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // Subscript / Superscript
      [{ indent: "-1" }, { indent: "+1" }], // Outdent / Indent
      [{ direction: "rtl" }], // Text direction
      [{ size: ["small", false, "large", "huge"] }], // Font size
    
   
      ["link"], // Add links, images, videos
      ["clean"], // Remove formatting
    ],
  };
  const formats = [
    "header", // Heading levels (1, 2, etc.)
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote", // Text styles
    "list",
    "bullet",
  
  ];

  const [avatar, setAvatar] = useState(null);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleFileInputChange = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      avatar,
      userId: user._id,
    };
    console.log(data);
    axios
      .post(`${backend_url}/blog/create-blog`, data)
      .then((res) => {
        dispatch(addBlog(res.data.data));
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
      <div className="flex justify-center max-w-[370px] lg:max-w-[1200px] mx-auto  items-center mt-5">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-5  justify-center flex-wrap">
            <div>
              <div className="flex flex-col">
                <label htmlFor="title" className="font-bold">
                  Title
                </label>

                <input
                  type="text"
                  className="border  p-1 w-full"
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

                <ReactQuill
                  theme="snow"
                  formats={formats}
                  className="border min-h-20 "
                  value={description}
                  modules={modules}
                  onChange={setDescription}
                />
              </div>

              <div className="mb-3">
                <div className="">
                  <label
                    htmlFor="avatar"
                    className="block text-sm font-medium text-gray-700"
                  ></label>
                  <div className={`inline-block ${avatar && "lg:w-[200px] w-full mt-2"} ` }>
                    <span className="inline-block   overflow-hidden">
                      {avatar && avatar.length>0 && (
                        <img
                          src={avatar}
                          alt="avatar"
                          className="h-full w-full object-cover"
                        />
                      ) }
                    </span>
                    <label
                      htmlFor="file-input"
                      className={`${avatar && "hidden"} flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50`}
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

              <div>
                <button
                  type="submit"
                  className="border px-2 py-2 rounded-md shadow-sm text-sm font-medium w-full border-blue-800 mt-3 p-1 hover:bg-blue-800 hover:text-white"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateBlog;
