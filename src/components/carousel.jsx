import React, { useState } from 'react';

export default function TestimonialCarousel() {
  // We store our slide data in an array. You can easily add more later!
  const slides = [
    {
      id: 1,
      name: "Marcus Reed",
      role: "Fitness Instructor",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
      avatar: "https://i.pravatar.cc/150?u=1"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Yoga Teacher",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
      avatar: "https://i.pravatar.cc/150?u=2"
    },
    {
      id: 3,
      name: "David Chen",
      role: "Marathon Runner",
      image: "https://images.unsplash.com/photo-1552674605-15c2145efa38?q=80&w=800&auto=format&fit=crop",
      avatar: "https://i.pravatar.cc/150?u=3"
    }
  ];

  // This state keeps track of which image we are currently looking at (0, 1, or 2)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next image. If we are at the last image, loop back to the first (index 0).
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Move to the previous image. If we are at the first image, jump to the last one.
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex flex-col items-center py-16 px-4 bg-white font-sans overflow-hidden">
      
      {/* 1. Header Section */}
      <div className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 mb-6">
        A closer look
      </div>

      <h2 className="text-4xl md:text-5xl font-medium text-center text-gray-900 mb-4 max-w-lg leading-tight tracking-tight">
        How people use Auvra every day
      </h2>

      {/* Rating Block */}
      <div className="flex items-center gap-2 mb-12">
        <span className="font-semibold text-gray-900">4.5/5</span>
        <div className="flex text-yellow-400">
          {/* Rendering 5 stars quickly using an array map */}
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-500 text-sm">(Trusted by 1582+ users)</span>
      </div>

      {/* 2. Carousel Section */}
      <div className="relative w-full max-w-[320px] sm:max-w-sm h-[480px]">
        {/* This is the "track" that holds all images side-by-side. 
          The inline style transforms it left or right based on the currentIndex.
        */}
        <div 
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            // Each slide takes up 100% of the container's width
            <div key={slide.id} className="w-full h-full flex-shrink-0 px-2">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-md">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* A subtle dark gradient overlay at the top so the white text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

                {/* User Info Overlay */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <img
                    src={slide.avatar}
                    alt={slide.name}
                    className="w-10 h-10 rounded-full border-2 border-white/30 object-cover"
                  />
                  <div className="text-white">
                    <p className="font-semibold text-sm">{slide.name}</p>
                    <p className="text-xs text-white/80">{slide.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Navigation Controls */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default TestimonialCarousel;