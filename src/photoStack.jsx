import React, { useState } from 'react';
import { FaRegHandPointer } from 'react-icons/fa';

const PhotoStack = () => {
  // Put all your image URLs here. You can add as many as you want!
  // It will perfectly cycle through them infinitely.
  const images = [
    "/caro4.png", "/caro3.png", "/caro2.png"
  ];

  // This state tracks which image is currently sitting at the very front
  const [activeIndex, setActiveIndex] = useState(0);

  // This function moves to the next image, and loops back to 0 at the end
  const handleNextPhoto = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden ">
      
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
        className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] w-[400px] cursor-pointer" 
        onClick={handleNextPhoto}
      >
        {images.map((src, index) => {
          // This magical line calculates where the image should be in the stack 
          // relative to the activeIndex
          const position = (index - activeIndex + images.length) % images.length;

          // Base classes that every single image gets (the smooth transition is here!)
          let baseClasses = "absolute top-0 left-0 w-full h-full object-contain rounded-3xl transition-all duration-500 ease-in-out";
          
          // We apply different transforms based on their position in the stack
          let transformClasses = "";

          if (position === 0) {
            // Front Image: Straight, full size, top layer
            transformClasses = "z-30 rotate-0 scale-100 opacity-100";
          } else if (position === 1) {
            // Second Image: Tilted right, slightly pushed back
            transformClasses = "z-20 rotate-[6deg] scale-95 opacity-100 translate-y-2";
          } else if (position === 2) {
            // Third Image: Tilted left, pushed back further
            transformClasses = "z-10 -rotate-[6deg] scale-90 opacity-100 translate-y-4";
          } else {
            // Any extra images: Hidden safely behind the stack waiting for their turn
            transformClasses = "z-0 rotate-0 scale-50 opacity-0 translate-y-10";
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