import React from "react";
import CreateBlog from "../component/CreateBlog";

function CreateBlogPage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-4xl font-light  underline decoration-wavy decoration-green-500 text-gray-800">
        Write Article
      </h1>

      <CreateBlog />
    </div>
  );
}

export default CreateBlogPage;
