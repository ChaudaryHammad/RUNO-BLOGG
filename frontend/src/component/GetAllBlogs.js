import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../App/feature/blog/blogSlice.js";
import { backend_url } from "../server.js";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination"
function GetAllBlogs() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 5; // Posts per page

  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${backend_url}/blog/get-all-blog`, {
        params: { page: currentPage, limit },
      });

      dispatch(getBlog(response.data.data));
      setTotalPages(response.data.totalPages); // Get total pages from the response
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
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
    <div className="container mx-auto p-6  ">
      {/* Blog List */}
      <div>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
              key={blog._id}
              className={`flex items-start gap-4 hover:bg-zinc-100 px-6 py-6 ${
                index !== blogs.length - 1 ? "border-b" : ""
              } border-gray-300`}
            >
              {/* Author Section */}
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <img
                    src={blog?.creator?.avatar.url}
                    alt={blog?.creator?.username}
                    className="rounded-full w-8 h-8"
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
                    <span dangerouslySetInnerHTML={{
                      __html: blog.description.split(" ").slice(0, 10).join(" "),
                    }}></span>
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: blog.description }} />
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
              </div>

              {/* Thumbnail Image */}
              <div className="lg:h-full h-[240px] lg:block flex items-center">
                <img
                  src={blog?.avatar?.url}
                  alt={"blog-image"}
                  className="rounded-lg lg:w-[300px] lg:h-32 h-28 object-cover lg:object-cover"
                />
              </div>
            </div>
          ))
        ) : (
          <div>No blogs available.</div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
   

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious onClick={handlePreviousPage} className={'cursor-pointer'} disabled={currentPage === 1}  />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink >{currentPage} of {totalPages}</PaginationLink>
    </PaginationItem>
   
    <PaginationItem>
      <PaginationNext onClick={handleNextPage} className={`cursor-pointer  `} disabled={currentPage === totalPages} />
    </PaginationItem>
  </PaginationContent>
</Pagination>
      </div>
    </div>
  );
}

export default GetAllBlogs;
