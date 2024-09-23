import React from "react";
import UpdateBlog from "../component/UpdateBlog";

function UpdateBlogPage() {
  return (
    <>
      <h1 className="text-center text-4xl font-light underline decoration-wavy decoration-indigo-500 text-gray-800">
        Update Articles
      </h1>

      <UpdateBlog />
    </>
  );
}

export default UpdateBlogPage;
