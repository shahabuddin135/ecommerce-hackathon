"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';


import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import cImage1 from "../../../public/images/carousel1.jpg"
import cImage2 from "../../../public/images/carousel2.jpg"
import cImage3 from "../../../public/images/carousel3.jpg"
import cImage4 from "../../../public/images/carousel3.jpg"
import Button from '../Button';


import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
}); 

const Carousel = () => {

  const slides = [
    cImage1,
    cImage2,
    cImage3,
    cImage4
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (

    <section className={`bg-[#FFF3E3] w-full h-auto lg:h-[42rem] flex flex-col ${poppins.className} lg:flex-row items-center p-[44px] justify-between gap-10`}>

      <div className=' flex justify-center items-start flex-col gap-5'>
        <h1 className='text-[#3A3A3A] font-bold text-4xl'>
          50+ Beautiful rooms <br/> inspiration
        </h1>
        <p className='text-[#3A3A3A]'>
        Our designer already made a lot of beautiful <br/> prototipe of rooms that inspire you
        </p>
        <Button name="Explore More" className='hover:opacity-80 active:opacity-55 transition-all cursor-pointer'/>
      </div>

      <div className="relative bg-[#FFF3E3] w-full lg:w-[700px] max-w-screen h-auto lg:h-[37rem] mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 66.66}%)` }} // Adjust to show part of the next image
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`w-[372px] h-[486px] flex-shrink-0 transition-transform duration-700 ease-in-out 
              ${currentSlide === index ? 'scale-110 z-10' : 'scale-90'} 
              ${index === currentSlide + 1 ? 'opacity-100' : 'opacity-80'}`} // Active image scaled, next is half visible
                style={{ marginRight: index === currentSlide ? '20px' : '0px' }} // Adjust space between active and next
              >
                <Image
                  src={slide}
                  alt={`Slide ${index}`}
                  width={300}
                  height={400}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left and Right navigation */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-white p-2 rounded-full hover:bg-yellow-600 z-20 shadow-lg"
        >
          <MdOutlineKeyboardArrowLeft className="w-6 h-6 text-yellow-600 rounded-[100%] hover:text-white bg-transparent" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white p-2 rounded-full z-20 shadow-lg bg-white hover:bg-[#B88E2F] active:bg-white active:text-[#B88E2F] transition-all"
        >
          < MdOutlineKeyboardArrowRight className="w-6 h-6 text-yellow-600  rounded-[100%] bg-transparent hover:text-white" />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${currentSlide === index ? 'bg-yellow-600 border-yellow-600 ' : 'bg-gray-400'}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;