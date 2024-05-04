
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../components/ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Facebook, Linkedin, Menu, Search, X, Youtube } from 'lucide-react'



function Nav() {
  const [open, setOpen] = useState(false)
  function handleChange() {
    setOpen(!open)
  }

  
  return (
    <>
        {/* <nav className='bg-black text-white p-3 flex justify-center  items-center '>
            <ul className='flex gap-4 items-center'>
                <Link className='hover:underline' to={'/'}>Home</Link>
                <Link className='hover:underline' to={'/create-blog'}>Create Blog</Link>
                <Link to={'/profile'}>
                <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </Link>
                
            </ul>
        </nav> */}

        <nav>
          <div className='flex justify-between items-center px-14 py-6 bg-[#E5E5E5] text-[#495057]'>

          <div>
            <Link to={'/'} className='text-[20px] font-bold ' style={{fontFamily:"League Spartan"}}>RUNO</Link>
          </div>

        <div className="flex items-center gap-2">
  <ul className="hidden lg:flex lg:gap-4 lg:mr-2 text-[14px] ">
    <Link to={'/'}><a className="p-2 border-b border-red-700 hover:border-b border-red-300 cursor-pointer">Home</a></Link>
    <Link to={'/create-blog'} ><a className="p-2 hover:border-b border-red-300 cursor-pointer">Create</a></Link>
    <Link to={'/profile'}><a className="p-2 hover:border-b border-red-300 cursor-pointer">About</a></Link>
    <Link to={'/'} ><a className="p-2 hover:border-b border-red-300 cursor-pointer">Contact Us</a></Link>
  </ul>



            
            <span class="hidden lg:block h-6 border-r border-black  "></span>

            <div className='hidden lg:flex justify-between gap-3 '>
           
            <a href="">  <X  strokeWidth={1}/></a>
          
            <a href="">  <Linkedin  strokeWidth={1}/></a>
            </div>
            <span class="hidden lg:block h-6 border-r border-black  "></span>
            <div className='hidden lg:block '>
            <Search strokeWidth={1} />
            </div>

            <div className='hidden lg:block'>
            <Link to={'/profile'}>
                <Avatar className="h-[40px] w-[40px]">
                <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </Link>
            </div>


          </div>

<div className='lg:hidden block'>


{
  open ? (
    <>
      <X onClick={handleChange}  strokeWidth={1} /> 
     

    </>
  ):(
   <div className='flex gap-2'>
   <Search strokeWidth={1} />
   <Menu onClick={handleChange} strokeWidth={1} />
 
   </div>
 
 
  )

}
</div>



          </div>

          {
  open ? (
    <>
      <div className='bg-black text-white w-full absolute right-0 top-0 h-screen lg:hidden'>
      <div className='flex justify-between mx-7 p-7'>
      <div>
  <h1>RUNO</h1>
</div>

        <div className='lg:hidden '>
{
  open ? <X onClick={handleChange}  strokeWidth={2} />  : <Menu onClick={handleChange} strokeWidth={1} />
}
</div>
      </div>
        <ul className='flex flex-col gap-2 items-center '>
   

          <Link className='p-2 border border-white w-full text-center hover:bg-white hover:text-black' to={'/'}>Home</Link>
          <Link className='p-2 border border-white w-full text-center hover:bg-white hover:text-black' to={'/create-blog'}>Create</Link>
          <Link className='p-2 border border-white w-full text-center hover:bg-white hover:text-black' to={'/profile'}>Articles</Link>
          <Link className='p-2 border border-white w-full text-center hover:bg-white hover:text-black'>Contact Us</Link>
        </ul>

        <div className='flex justify-center h-[220px] mt-5 mb-5 items-center '>
        <Link to={'/profile'}>
                <Avatar className=" h-[150px] w-[150px]">
                <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </Link>
        </div>
        <div>
          <ul className='flex gap-4 justify-center'>
            <a href="">  <X  strokeWidth={1}/></a>
            <a href="">  <Linkedin  strokeWidth={1}/></a>
            <a href="">  <Facebook  strokeWidth={1}/></a>
            <a href="">  <Youtube  strokeWidth={1}/></a>
          </ul>
        </div>
        <div className='text-center p-3 mt-1'>
          <p className='underline'>Logout</p>
          
        </div>
      </div>

      
    </>
  ) :null
}
        </nav>
    </>
  )
}

export default Nav