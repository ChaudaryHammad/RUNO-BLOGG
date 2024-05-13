
const Blog = require("../Model/blog");
const User = require("../Model/user")
const cloudinary = require("cloudinary");

const setBlog = async (req, res) => {
  try {
    const { title, description,avatar,userId } = req.body;
    const user = await User.findById(userId);
 
    const exsistingBlog = await Blog.findOne({ title });

    if (exsistingBlog) {
      return res.status(400).json({
        message: "Blog Already Exsist",
      });
    }

    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "blogs",
    });



    const blog = new Blog({
      title,
      description,
      avatar:{
        public_id:myCloud.public_id,
        url:myCloud.secure_url
      },
      creator:user.username
   
       
    });

    const savedBlog = await blog.save();

    res.status(200).json({
      message: "Blog Created",
      data: savedBlog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      message: "All Blogs",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const findBlog = await Blog.findById(id);

    if (!findBlog) {
      return res.status(400).json({
        message: "No Blog Found",
      });
    }
    await cloudinary.uploader.destroy(findBlog.avatar.public_id);

    const deleteBlogById = await Blog.findByIdAndDelete(findBlog);

    res.status(200).json({
      message: "Blog Deleted Successfully",
      data: deleteBlogById,
    });
  } catch (error) {}
};

const getSingleBlog = async (req, res) => {
  const blogId = req.params.id;

  try {
    const getBlog = await Blog.findById(blogId);
    if (!getBlog) {
      return res.status(400).json({
        message: "No blog found with this id",
      });
    }
    getBlog.views +=1;

    await getBlog.save();

    res.status(200).json({
      message: "Blog Found!",
      data: getBlog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


const updateBlog = async (req,res)=>{
   try {
    const { id } = req.params; // Assuming you're passing the blog id in the request params
    const { title, description, avatar } = req.body;

    // Find the blog by its id
    let blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    // Delete the old image from Cloudinary if a new one is provided
    if (avatar && blog.avatar && blog.avatar.public_id) {
      await cloudinary.uploader.destroy(blog.avatar.public_id);
    }

    // Update the blog data
    blog.title = title || blog.title;
    blog.description = description || blog.description;

    // If a new avatar is provided, upload it to Cloudinary and update the avatar data
    if (avatar) {
      const myCloud = await cloudinary.uploader.upload(avatar, {
        folder: "blogs",
      });
      blog.avatar = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }

    // Save the updated blog
    const updatedBlog = await blog.save();

    res.status(200).json({
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}
module.exports = {
  setBlog,
  getAllBlogs,
  deleteBlog,
  getSingleBlog,
  updateBlog
};
