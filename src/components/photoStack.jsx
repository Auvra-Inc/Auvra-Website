import React, { useState } from 'react';
import { FaRegHandPointer } from 'react-icons/fa';

const PhotoStack = () => {
  // Put all your image URLs here. You can add as many as you want!
  // It will perfectly cycle through them infinitely.
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
    "/pexels-8.jpg"
  ];

  // This state tracks which image is currently sitting at the very front
  const [activeIndex, setActiveIndex] = useState(0);

  // This function moves to the next image, and loops back to 0 at the end
  const handleNextPhoto = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      
      {/* 1. The Instruction Text */}
      <div 
        onClick={handleNextPhoto}
        className="flex items-center gap-2 mb-8 text-gray-400 font-light cursor-pointer hover:text-gray-600 transition-colors"
      >
        <FaRegHandPointer className="text-lg" />
        <span className="text-sm tracking-wide">Touch to change photo</span>
      </div>

      {/* 2. The Interactive Image Stack */}
      <div 
        className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] cursor-pointer px-8 overflow-hidden" 
        onClick={handleNextPhoto}
      >
        {images.map((src, index) => {
          // This magical line calculates where the image should be in the stack 
          // relative to the activeIndex
          const position = (index - activeIndex + images.length) % images.length;

          // Transform classes are applied to the wrapper so each card
          // rotates and scales consistently while the image fills the frame.
          let transformClasses = "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out rounded-3xl overflow-hidden";

          if (position === 0) {
            transformClasses += " z-30 rotate-0 scale-100 opacity-100";
          } else if (position === 1) {
            transformClasses += " z-20 rotate-[6deg] scale-95 opacity-100 translate-y-2";
          } else if (position === 2) {
            transformClasses += " z-10 -rotate-[6deg] scale-90 opacity-100 translate-y-4";
          } else {
            transformClasses += " z-0 rotate-0 scale-50 opacity-0 translate-y-10";
          }

          return (
            <div key={index} className={transformClasses}>
              <img
                src={src}
                alt={`Gallery item ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default PhotoStack;