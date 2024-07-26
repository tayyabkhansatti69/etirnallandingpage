"use client";

import { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    './assets/11.png',
    './assets/22.png',
    './assets/33.png',
  ];

  const changeSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  return (
    <div>
<div className="absolute top-[70px] left-[-6px] z-50 w-[396px] h-[373px] bg-slate-400 rounded-[29px] overflow-hidden transform skew-y-[-20deg] sm:w-[190px] sm:h-[200px] sm:rounded-lg sm:left-8 sm:top-10">
      <div className="relative w-full h-full">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover "
            />
          ))}
        </div>
      </div>
      {/* Buttons below the images */}
      
    </div>
    <div className="absolute  z-50 left-1/2 top-[510px] transform -translate-x-1/2 flex items-center gap-5.5 sm:hidden">
        <button
          onClick={() => changeSlide(currentSlide - 1)}
          className="px-6 py-2  text-black border-none rounded cursor-pointer"
        >
          BACK
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 bg-black rounded-full opacity-50 ${currentSlide === index ? 'opacity-100' : ''}`}
            ></span>
          ))}
        </div>
        <button
          onClick={() => changeSlide(currentSlide + 1)}
          className="px-6 py-2  text-black border-none rounded cursor-pointer"
        >
          NEXT
        </button>
      </div>
    </div>
    
  );
};

export default Slider;
