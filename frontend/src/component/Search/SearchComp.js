import { X } from 'lucide-react'
import React from 'react'

function Search({handleSearchBox}) {

  
  return (
   <>
     <div className=" flex relative top-[300px] justify-center items-center  ">
             <div className="fixed w-[70%] flex justify-center items-center">
             <input
                type="text"
                placeholder="Search Here"
                className="w-full h-[40px] border border-black m-4 pl-4 rounded-lg"
              />
              <X
                className="cursor-pointer bg-white p-2 h-10 w-10 text-black rounded-lg"
                onClick={handleSearchBox}
                strokeWidth={1}
              />
             </div>
            </div>
   </>
  )
}

export default Search