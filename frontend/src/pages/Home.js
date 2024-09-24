import React from "react";
import GetAllBlogs from "../component/GetAllBlogs";

import Hero from "../component/Hero.js";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Hero />

      <h1 className="text-center py-12 text-4xl font-light underline decoration-wavy decoration-teal-500 text-gray-800">
        Trending Articles
      </h1>
      <div className="mt-5 lg:mx-[50px] ">
        <GetAllBlogs />
      </div>

      <Footer />
    </>
  );
}

export default Home;
