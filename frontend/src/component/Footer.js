import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
    <div className="mx-auto container pb-6 lg:pt-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">Create Your Story Today</h2>
  
        <p className="mx-auto mt-4 max-w-sm text-gray-500">
        
        Join our community of creators and share your unique perspective.
        </p>
  
        <Link to={'/create-blog'}
         
          className="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        >
          Get Started
        </Link>
      </div>
  
      <div
        className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24"
      >
        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          <li>
            <Link to="/" className="text-gray-500 transition hover:opacity-75"> Runo </Link>
          </li>
  
          <li>
            <Link to="/blogs" className="text-gray-500 transition hover:opacity-75"> Blogs </Link>
          </li>
  
          <li>
            <Link to="/" className="text-gray-500 transition hover:opacity-75"> About </Link>
          </li>
        </ul>

        <div className="text-center text-[12px] flex items-center lg:w-[50%] gap-2 justify-center lg:justify-end w-full  mt-5 text-gray-500 transition hover:opacity-75">
          <span>Developed by hammad</span>   <a
              href="https://github.com/ChaudaryHammad"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">GitHub</span>
  
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />


              </svg>
            </a>
        </div>
  
       
      </div>
    </div>
  </footer>
  );
};

export default Footer;
