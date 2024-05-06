const { get } = require("mongoose");
const Blog = require("../Model/blog");

const setBlog = async (req, res) => {
  try {
    const { title, description } = req.body;

    const exsistingBlog = await Blog.findOne({ title });

    if (exsistingBlog) {
      return res.status(400).json({
        message: "Blog Already Exsist",
      });
    }

    const blog = new Blog({
      title,
      description,
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

    res.status(200).json({
      message: "No blog found with this id",
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
    const blogId = req.params.id;
   try {
    const blog= await Blog.findById(blogId);
    if(!blog){
        return res.status(400).json({
            message: "No blog found with this id",
          });
    }

    const {title,description} = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(blogId,{
        title,
        description
    },{new:true});

    res.status(200).json({
        message: "Blog Updated Successfully",
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
