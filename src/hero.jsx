import React, { useState, useEffect } from 'react';
import { FaAppStore, FaGooglePlay, FaCog } from 'react-icons/fa';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden font-clash text-black">

      {/* Background Image */}
      <img 
        src="/nature2.avif" 
        alt="Culture Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-white/20 z-0"></div>

      {/* Dynamic Floating Navigation */}
      <nav 
        className={`fixed z-50 flex justify-between items-center px-3 sm:px-4 py-2.5 shadow-sm transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'top-0 left-0 right-0 w-full bg-white/60 backdrop-blur-md rounded-none border-b border-gray-200/50' 
            : 'top-5 sm:top-6 left-3 right-3 sm:left-4 sm:right-4 md:left-8 md:right-8 bg-white/90 rounded-2xl border border-gray-100'
          }`}
      >
        <div className="flex items-center gap-3 font-medium text-lg sm:text-xl tracking-wide">
          <img 
             src="/Vector.jpg" 
             alt="Auvra Logo" 
             className="w-8 h-8 object-contain" 
             />
             Auvra
        </div>
      
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-gray-200 text-black rounded-xl flex items-center justify-center hover:bg-gray-100 transition">
            <FaAppStore className="text-lg" />
          </button>
          <button className="w-10 h-10 bg-gray-200 text-black rounded-xl flex items-center justify-center hover:bg-gray-100 transition ">
            <FaGooglePlay className="text-lg font-bold" />
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-xl flex flex-col justify-center items-center gap-1 hover:bg-gray-100 transition ">
            <div className="w-4 h-0.5 bg-black"></div>
            <div className="w-4 h-0.5 bg-black"></div>
          </button>
        </div>
      </nav>

      {/* Main Hero Content - UPDATED MARGINS HERE */}
      <main className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 mt-32 sm:mt-40 md:mt-48 text-black max-w-4xl mx-auto">
        
        {/* Glassmorphism Pill Badge */}
        <div className="flex items-center gap-3 px-1 py-1 pr-4 rounded-full bg-white/10 backdrop-blur-md text-white mb-6 ">
          <span className="bg-black text-white px-3 py-1 rounded-full text-md font-medium">New</span>
          <span className="text-sm font-medium tracking-wide">A new way to preserve culture</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 max-w-lg text-white">
          The permanent home for <span className="text-[#FBBF24] font-damion font-normal italic text-[0.85em] tracking-wide drop-shadow-sm">human </span> culture
        </h1>
        
        {/* Subheading */}
        <p className="text-md text-white/90 mb-4 max-w-sm font-medium leading-snug">
          Preserve traditions, own your creations, and pass down what matters all in one place.
        </p>

        {/* Glassmorphism CTA Button */}
        <button className="px-8 mt- rounded-full bg-white/10 h-[40.1px] backdrop-blur-md text-white text-md font-medium hover:bg-white/20 transition-all ">
          Start preserving
        </button>
      </main>

      {/* Bottom Mockups */}
      <div className="relative z-20 mt-2 sm:mt-8 md:mt-12 w-full max-w-5xl mx-auto flex justify-center items-end h-[30rem] sm:h-[32rem] md:h-[35rem]"> 
        
        {/* Left Card */}
        <div className="absolute left-1 sm:left-2 md:left-8 bottom-16 sm:bottom-18 md:bottom-20 w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 bg-gradient-to-b from-[#A3A3A3] to-[#444343] rounded-2xl border border-gray-300 p-3 sm:p-4 flex flex-col items-center justify-center z-10 shadow-md">
           <div className="w-10 h-10 bg-[#F59E0B] rounded-full flex items-center justify-center mb-3">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
             </svg>
           </div>
           <p className="text-[10px] text-white text-center leading-tight">7-day preservation streak</p>
        </div>

        <div className="w-64 z-100 md:w-80 h-[350px] md:h-[450px] bg-gradient-to-b bg-white/10 backdrop-blur-md  from-[#A3A3A3] to-[#444343] rounded-t-[2.5rem] p-4 flex flex-col relative z-10 translate-y-8  shadow-md overflow-hidden">
           
           {/* Dynamic Notch */}
           <div className="w-16 h-1.5 bg-[#444343] rounded-full mx-auto mb-6"></div>
           
           {/* Top Status Bar */}
           <div className="flex justify-between items-center text-white text-[13px] mb-6 sm:mb-10 md:mb-14 px-2 font-semi-bold">
             <span>Mon, 07:32</span>
             <div className="flex gap-1 items-center">
                <span className="w-3 h-2 bg-white/80 rounded-sm"></span>
                <span className="w-2 h-2 bg-white/80 rounded-full"></span>
             </div>
           </div>
           
           {/* My Orbit Header */}
           <div className="flex justify-between items-center text-white text-lg font-semi-bold px-2 mb-4">
             <span>My Orbit</span>
             <FaCog className="w-5 h-5 opacity-90 text-white" />
           </div>

           {/* Main Inner Frost Card */}
           <div className="w-full flex-1 rounded-2xl bg-white/20 border border-white/20 relative p-3 backdrop-blur-md shadow-inner">
             
             {/* Header section */}
             <div className="flex justify-between items-center mb-1">
                <div className="text-[10px] text-white">Your Cultural Orbit</div>
                <div className=" px-2 py-0.5 rounded-full text-[7px] text-blue-800 bg-blue-400">10k orbiters</div>
             </div>
             
             {/* Subtext */}
             <div className="text-[8px] text-white mb-2 font-semibold">People connected to your cultural legacy</div>
             
             {/* Total witnesses text */}
             <div className="text-green-800 text-xl font-medium flex items-center gap-1 mb-2">18.2k <span className="text-[7px] font-medium text-white/60 mt-1">total witnesses across all works</span></div>
             
             {/* Orbital Visualization Area */}
             <div className="absolute inset-x-0 bottom-4 h-32 flex justify-center items-center">
                
                {/* SVG Orbital Lines */}
                <svg viewBox="0 0 100 100" className="absolute w-full h-full stroke-white/20 fill-none">
                  <circle cx="50" cy="50" r="20" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="30" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
                </svg>
                
                {/* Six Profile Circles */}
                <div className="absolute top-[20%] left-[25%] w-6 h-6 rounded-full border border-white/40 overflow-hidden shadow-md">
                    <img src="/1img.jpg" alt="Profile node Red Headwrap pattern" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 w-6 h-6 rounded-full border border-white/40 overflow-hidden shadow-md">
                    <img src="/hs.jpg" alt="Profile node Hmong Girl portrait" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute top-[20%] right-[30%] w-7 h-7 rounded-full border border-white/40 overflow-hidden shadow-md">
                    <img src="/2img.jpg" alt="Profile circle African Child" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-[20%] left-[14%] w-7 h-7 rounded-full border border-white/40 overflow-hidden shadow-md">
                    <img src="/justin-lagat-9fPrUATxdIc-unsplash.jpg" alt="Profile circle Older Asian Elder" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-[30%] right-[20%] w-7 h-7 rounded-full border border-white/40 overflow-hidden shadow-md">
                    <img src="/hassan-kibwana-G85LQv2dj2o-unsplash.jpg" alt="Profile circle African Woman" className="w-full h-full object-cover" />
                </div>
             </div>
           </div>
        </div>

        {/* Right Card */}
        <div className="absolute right-1 sm:right-2 md:right-8 bottom-20 sm:bottom-24 md:bottom-28 w-32 sm:w-36 md:w-44 lg:w-52 xl:w-60 p-3 sm:p-4 bg-[#141414] rounded-2xl border border-gray-800 flex flex-col z-10 shadow-md">
            <p className="text-[10px] text-white/90 text-center mb-3 leading-tight">Today's goal: Complete 3 oral histories</p>
            <div className="flex justify-between px-1 mb-1">
               <div className="w-7 h-7 border border-white/20 rounded-full flex items-center justify-center text-white">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"></path>
                 </svg>
               </div>
               <div className="w-7 h-7 border border-white/20 rounded-full flex items-center justify-center text-white">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
                 </svg>
               </div>
               <div className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                 </svg>
               </div>
            </div>
            <div className="flex justify-between px-2 mt-1">
              <span className="text-[8px] text-white/50">66%</span>
              <span className="text-[8px] text-white/50">87%</span>
              <span className="text-[8px] text-white/50">94%</span>
            </div>
        </div>
      </div>
      
      {/* Light fade */}
      <div className="absolute bottom- -3 left-0 right-0 h-7 bg-linear-to-t from-white to-transparent z-40 pointer-events-none"></div>

    </div>
  );
};

export default Hero;