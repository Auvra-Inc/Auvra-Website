import React, { useState } from 'react';
import { FaRegHandPointer } from 'react-icons/fa';

const PhotoStack = () => {
  const images = [
    "/caro4.png",
    "/caro3.png", 
    "/caro2.png",
    "/pexels-1.jpg",
    "/pexels-2.jpg",
    "/pexels-3.jpg",
    "/pexels-4.jpg",
    "/pexels-5.jpg",
    "/pexels-6.jpg",
    "/pexels-7.jpg",
    "/pexels-8.jpg",
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
      <div 
        className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] cursor-pointer" 
        onClick={handleNextPhoto}
      >
        {images.map((src, index) => {
          const position = (index - activeIndex + images.length) % images.length;

          // The clean, identical base for every single image
          let baseClasses = "absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-xl border-sm border-gray-100 transition-all duration-500 ease-in-out";
          
          let transformClasses = "";

          // THE FIX: Perfectly uniform logic. No downward cascading at all.
          if (position === 0) {
            // The Front Image: Fully visible, full size
            transformClasses = "z-30 scale-100 opacity-100";
          } else {
            // EVERY other image: Perfectly centered directly behind it, ready to smoothly scale up
            transformClasses = "z-0 scale-95 opacity-0";
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