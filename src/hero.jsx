import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative min-h-screen rounded-b-[2%] overflow-hidden font-clash text-black bg-[#edf2f9]">
      
      {/* 1. The New Background Image */}
      <img 
        src="/hassan-kibwana-9Rof7St92fM-unsplash.jpg" 
        alt="Auvra Hero Background" 
        className="absolute inset-0 w-full h-full object-cover object-center z-0" 
      />

      {/* 2. Light Frosted Glass Overlay (Crucial for readable black text!) */}
      <div className="absolute inset-0  z-0"></div>

      {/* Top Floating Navigation */}
      <nav className="relative z-20 mx-4 md:mx-18 mt-6 bg-white/80 backdrop-blur-md rounded-2xl px-4 py-3 flex justify-between items-center border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 font-semibold text-xl tracking-wide">
          <img 
             src="/Vector.jpg" 
             alt="Auvra Logo" 
             className="w-8 h-8 object-contain" 
             />
             Auvra
        </div>
      
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-50 transition shadow-sm border border-gray-100">
            <FaApple className="text-xl" />
          </button>
          <button className="w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-50 transition shadow-sm border border-gray-100">
            <FaGooglePlay className="text-lg" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex flex-col justify-center items-center gap-1 hover:bg-gray-50 transition shadow-sm border border-gray-100">
            <div className="w-4 h-[2px] bg-black"></div>
            <div className="w-4 h-[2px] bg-black"></div>
          </button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <main className="relative z-20 flex flex-col items-center text-center px-6 mt-15 text-black">
        
        {/* UPDATED: Glassmorphism Pill Badge */}
        <div className="flex items-center gap-3 px-1 py-1 pr-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 shadow-lg">
          <span className="bg-black text-white border border-white/10 px-3 py-1 rounded-full text-md font-medium">New</span>
          <span className="text-sm font-medium tracking-wide text-white">A new way to preserve culture</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 max-w-lg text-white">
          The permanent home for <span className="text-[#FBBF24] font-damion font-normal italic text-[0.85em] tracking-wide drop-shadow-sm">human</span> culture
        </h1>
        
        {/* Subheading */}
        <p className="text-lg text-gray-800 mb-10 max-w-sm font-medium leading-snug">
          Preserve traditions, own your creations, and pass down what matters all in one place.
        </p>

        {/* UPDATED: Glassmorphism CTA Button */}
        <button className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-medium hover:bg-white/20 transition-all shadow-lg">
          Start preserving
        </button>
      </main>

      {/* Bottom Mockups */}
      <div className="relative z-20 mt-16 w-full max-w-3xl mx-auto flex justify-center items-end h-[350px]">
        
        {/* Left Card */}
        <div className="absolute left-2 md:left-8 bottom-20 w-32 bg-gradient-to-b from-gray-400 to-gray-600 rounded-2xl border border-gray-300 p-4 flex flex-col items-center justify-center z-30 shadow-md">
           <div className="w-10 h-10 bg-[#F59E0B] rounded-full flex items-center justify-center mb-3">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
             </svg>
           </div>
           <p className="text-[10px] text-white text-center leading-tight">7-day preservation streak</p>
        </div>

        {/* Center Phone */}
        <div className="w-64 h-[350px] bg-gradient-to-b from-[#A3A3A3] to-[#8C8C8C] rounded-t-[2.5rem] p-4 flex flex-col relative z-10 translate-y-8 border-[5px] border-[#e0e0e0] shadow-md">
           <div className="w-16 h-1.5 bg-white/40 rounded-full mx-auto mb-6"></div>
           
           <div className="flex justify-between items-center text-white/90 text-[10px] mb-4 px-2">
             <span>Mon, 07:32</span>
             <div className="flex gap-1 items-center">
                <span className="w-3 h-2 bg-white/80 rounded-sm"></span>
                <span className="w-2 h-2 bg-white/80 rounded-full"></span>
             </div>
           </div>
           
           <div className="flex justify-between items-center text-white text-lg font-medium px-2 mb-4">
             <span>My Orbit</span>
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 opacity-90">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
             </svg>
           </div>

           <div className="w-full flex-1 rounded-2xl bg-white/10 border border-white/20 relative overflow-hidden p-3 backdrop-blur-sm">
             <div className="flex justify-between items-center mb-1">
                <div className="text-[10px] text-white">Your Cultural Orbit</div>
                <div className="bg-white/20 px-2 py-0.5 rounded-full text-[7px] text-white">10k orbiters</div>
             </div>
             <div className="text-[8px] text-white/70 mb-2">People connected to your cultural legacy</div>
             <div className="text-green-300 text-xl font-bold flex items-center gap-1">18.2k <span className="text-[7px] font-normal text-white/60 mt-1">total witnesses across all works</span></div>
             
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-white">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  <path d="M2 12h20"></path>
                </svg>
             </div>
           </div>
        </div>

        {/* Right Card */}
        <div className="absolute right-2 md:right-8 bottom-24 w-36 p-4 bg-[#141414] rounded-2xl border border-gray-800 flex flex-col z-30 shadow-md">
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
      
      {/* Very light fade at the bottom to transition to the next section smoothly */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-40 pointer-events-none"></div>

    </div>
  );
};

export default Hero;