import React, { useState } from 'react';
import { FaRegHandPointer } from 'react-icons/fa';

// All images use the small WebP versions from /public/webp/
// The originals are 2-4MB each; WebP resized versions are 0.05-0.21MB each
const images = [
  "/webp/pexels-1.webp",
  "/webp/pexels-2.webp",
  "/webp/pexels-3.webp",
  "/webp/pexels-4.webp",
  "/webp/pexels-5.webp",
  "/webp/pexels-6.webp",
  "/webp/pexels-7.webp",
  "/webp/pexels-8.webp",
  "/webp/pexels-11.webp",
  "/webp/pexels-12.webp",
  "/webp/pexels-13.webp",
  "/webp/pexels-14.webp",
  "/webp/pexels-15.webp",
  "/webp/pexels-16.webp",
  "/webp/pexels-17.webp",
  "/webp/pexels-18.webp",
  "/webp/pexels-19.webp",
  "/webp/pexels-20.webp",
  "/webp/pexels-21.webp",
  "/webp/pexels-22.webp",
  "/webp/pexels-23.webp",
  "/webp/pexels-24.webp",
  "/webp/pexels-25.webp",
];

const PhotoStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextPhoto = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-10">

      {/* Instruction Text */}
      <div
        onClick={handleNextPhoto}
        className="flex items-center gap-2 mb-12 text-gray-400 font-light cursor-pointer hover:text-gray-600 transition-colors"
      >
        <FaRegHandPointer className="text-lg animate-bounce" />
        <span className="text-sm tracking-wide">Touch to change photo</span>
      </div>

      {/* Interactive Image Stack */}
      <div
        className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] cursor-pointer"
        onClick={handleNextPhoto}
      >
        {images.map((src, index) => {
          const position = (index - activeIndex + images.length) % images.length;

          // Only render the top 3 visible + the next one about to come in
          // Everything else is hidden with opacity-0 but still in DOM for instant swap
          let baseClasses =
            "absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-lg border border-gray-200 transition-all duration-200 ease-in-out";

          let transformClasses = "";

          if (position === 0) {
            transformClasses = "z-30 scale-100 translate-y-0 opacity-100";
          } else if (position === 1) {
            transformClasses = "z-20 scale-95 translate-y-4 opacity-100 shadow-md";
          } else if (position === 2) {
            transformClasses = "z-10 scale-90 translate-y-8 opacity-100 shadow-sm";
          } else {
            transformClasses = "z-0 scale-75 translate-y-12 opacity-0 pointer-events-none";
          }

          // Eagerly load the first 3; lazily load the rest
          const loadingAttr = index < 3 ? "eager" : "lazy";

          return (
            <img
              key={index}
              src={src}
              alt={`Gallery item ${index + 1}`}
              loading={loadingAttr}
              width={350}
              height={450}
              className={`${baseClasses} ${transformClasses}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhotoStack;
