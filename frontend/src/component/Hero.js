import React from 'react'

import Slider from "react-slick";
import { Button } from '../components/ui/button';
  

function Hero() {
    var settings = {
     
        infinite: true,
       
        fade: true,
        slidesToShow: 1,
       
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,   
        autoplaySpeed: 2000,
        waitForAnimate: false,
      
      };
  return (
    <div className='w-full '>
          <Slider {...settings} >
      <div className='h-[50vh] lg:h-[70vh]  ' >
        <div className='flex justify-center items-center h-full bg-center bg-cover' style={{backgroundImage:`url('https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}><Button>Start reading</Button></div>
      </div>
      <div className='h-[50vh] lg:h-[70vh] '>
      <div className='flex justify-center items-center h-full bg-center bg-cover' style={{backgroundImage:`url('https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}><Button className="bg-teal-700">Write Articles</Button></div>
      </div>
      <div className='h-[50vh] lg:h-[70vh]  '>
      <div className='flex justify-center items-center h-full bg-center bg-cover' style={{backgroundImage:`url('https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}><Button>Explore RUNO</Button></div>
      </div>
    
      
    </Slider>
    </div>
  )
}

export default Hero