import React, { useState } from 'react';
import { FaRegHandPointer } from 'react-icons/fa';

const PhotoStack = () => {
  const images = [
    // "/caro4.png",
    // "/caro3.png", 
    // "/caro2.png",
    "/pexels-1.jpg",
    "/pexels-2.jpg",
    "/pexels-3.jpg",
    "/pexels-4.jpg",
    "/pexels-5.jpg",
    "/pexels-6.jpg",
    "/pexels-7.jpg",
    "/pexels-8.jpg",
    "/pexels-11.jpg",
    "/pexels-12.jpg",
    "/pexels-13.jpg",
    "/pexels-14.jpg",
    "/pexels-15.jpg",
    "/pexels-16.jpg",
    "/pexels-17.jpg",
    "/pexels-18.jpg",
    "/pexels-19.jpg",
    "/pexels-20.jpg",
    "/pexels-21.jpg",
    "/pexels-22.jpg",
    "/pexels-23.jpg",
    "/pexels-24.jpg",
    "/pexels-25.jpg"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextPhoto = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      
      {/* 1. The Instruction Text */}
      <div 
        onClick={handleNextPhoto}
        className="flex items-center gap-2 mb-12 text-gray-400 font-light cursor-pointer hover:text-gray-600 transition-colors"
      >
        <FaRegHandPointer className="text-lg animate-bounce" />
        <span className="text-sm tracking-wide">Touch to change photo</span>
      </div>

      {/* 2. The Interactive Image Stack */}
      {/* Removed px-8 because padding doesn't affect absolute children anyway */}
      <div 
        className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] cursor-pointer" 
        onClick={handleNextPhoto}
      >
        {images.map((src, index) => {
          const position = (index - activeIndex + images.length) % images.length;

          // Show only the front image, hide all others
          let baseClasses = "absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100 transition-all duration-100 ease-in-out";
          
          let transformClasses = "";

          if (position === 0) {
            // Front Image: Full size, top layer
            transformClasses = "z-30 scale-100 translate-y-0 opacity-100";
          } else {
            // All other images: Hidden behind
            transformClasses = "z-0 scale-75 translate-y-12 opacity-0";
          }

          return (
            <img
              key={index}
              src={src}
              alt={`Gallery item ${index}`}
              className={`${baseClasses} ${transformClasses}`}
            />
          );
        })}
      </div>

    </div>
  );
};

export default PhotoStack;