import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search({ handleSearchBox }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const SearchBlog = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:8000/api/v2/blog/search/${searchTerm}`
      );
      const data = await res.json();
      console.log(data.data);
      setSearchResult(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" flex relative top-[300px] justify-center items-center  ">
        <div className="absolute w-[70%] flex justify-center gap-[20px] items-center">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full h-[40px] border border-black m-4 pl-4 rounded-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="cursor-pointer bg-black text-white p-2 h-10  rounded-lg"
            onClick={SearchBlog}
          >
            Search
          </button>
          <X
            className="cursor-pointer bg-white p-2 h-10 w-10 text-black rounded-lg"
            onClick={handleSearchBox}
            strokeWidth={1}
          />
        </div>

        {searchResult && (
          <>
            <div className="bg-white relative min-h-[40px] top-[70px] left-0   rounded-lg">
              {searchResult.map((blog) => (
                <div className=" flex justify-start p-2 items-center">
                  <Link to={`/blog/${blog._id}`}>
                    <div className="flex gap-5">
                      <div className="hover:bg-gray-200 cursor-pointer p-1 w-full">
                        {blog.title}
                      </div>
                      <div>
                        <img className="h-8 w-8" src={blog.avatar.url} alt="" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Search;
