import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-neutral-900 rounded-b-[2%] overflow-hidden font-clash">
      
      {/* 1. MOBILE IMAGE (Tall & narrow - hides on desktop) */}
      <img 
        src="/1img.jpg" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover object-top block md:hidden z-0" 
      />

      {/* 2. DESKTOP IMAGE (Wide & sharp - hides on mobile) */}
      <img 
        src="/1img.jpg" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover object-center hidden md:block z-0" 
      />

      {/* 3. Dark overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/40 z-0"></div>

      {/* Top Floating Navigation */}
      <nav className="relative z-20 mx-4 md:mx-18 mt-6 bg-white rounded-full px-4 py-3 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3 font-semibold text-xl tracking-wide">
          <img 
             src="/Vector.jpg" 
             alt="Auvra Logo" 
             className="w-8 h-8 object-contain" 
             />
             Auvra
        </div>
      
        
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-sm">
            <FaApple className="text-xl" />
          </button>
          <button className="w-10 h-10 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-sm">
            <FaGooglePlay className="text-lg" />
          </button>
          <button className="w-10 h-10 bg-gray-100 rounded-full flex flex-col justify-center items-center gap-1 hover:bg-gray-200 transition shadow-sm">
            <div className="w-4 h-[2px] bg-black"></div>
            <div className="w-4 h-[2px] bg-black"></div>
          </button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <main className="relative z-20 flex flex-col items-center text-center px-6 mt-12 text-white">
        <div className="flex items-center gap-3 px-1 py-1 pr-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 shadow-lg">
          <span className="bg-black/40 px-3 py-1 rounded-full text-sm font-medium border border-white/10">New</span>
          <span className="text-sm opacity-90 tracking-wide">A new way to preserve culture</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 max-w-lg">
          The permanent home for <span className="text-[#FBBF24] font-damion font-normal tracking-wide">human</span> culture
        </h1>
        
        <p className="text-lg opacity-90 mb-10 max-w-sm font-light leading-none">
          Preserve traditions, own your creations, and pass down what matters all in one place.
        </p>

        <button className="px-8 py-3.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/10 text-lg hover:bg-white/30 transition-all shadow-xl">
          Start preserving
        </button>
      </main>

      {/* Bottom Mockups & Cards Section */}
      <div className="relative z-20 mt-16 w-full max-w-3xl mx-auto flex justify-center items-end h-[350px]">
        
        {/* Left Card */}
        <div className="absolute left-2 md:left-8 bottom-20 w-32 bg-[#1a1c23]/90 backdrop-blur-xl rounded-2xl border border-white/20 p-4 flex flex-col items-center justify-center shadow-2xl z-30">
           <div className="w-10 h-10 bg-[#F59E0B] rounded-full flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
             <div className="w-4 h-4 bg-white/80 rounded-sm rotate-45"></div> 
           </div>
           <p className="text-[10px] text-white/80 text-center leading-tight">7-day preservation streak</p>
        </div>

        {/* Center Phone */}
        <div className="w-64 h-[350px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-t-[2.5rem] p-4 flex flex-col shadow-2xl relative z-10 translate-y-8">
           <div className="w-16 h-1.5 bg-white/30 rounded-full mx-auto mb-6"></div>
           <div className="flex justify-between items-center text-white/80 text-xs mb-4 px-2">
             <span>My Orbit</span>
             <span>⚙️</span>
           </div>
           <div className="w-full flex-1 border border-white/10 rounded-2xl bg-white/5 relative overflow-hidden">
             <div className="absolute top-4 left-4 text-[10px] text-white/60">Your Cultural Orbit</div>
             <div className="absolute top-8 left-4 text-green-400 text-sm font-bold">18.2k</div>
           </div>
        </div>

        {/* Right Card */}
        <div className="absolute right-2 md:right-8 bottom-24 w-36 p-4 bg-[#111111]/95 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col shadow-2xl z-30">
            <p className="text-[10px] text-white/80 text-center mb-3 leading-tight">Today's goal: Complete 3 oral histories</p>
            <div className="flex justify-between px-1">
               <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"><span className="text-[8px]">👑</span></div>
               <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"><span className="text-[8px]">💬</span></div>
               <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"><span className="text-[8px]">✓</span></div>
            </div>
            <div className="flex justify-between px-1 mt-1">
              <span className="text-[7px] text-white/50">66%</span>
              <span className="text-[7px] text-white/50">87%</span>
              <span className="text-[7px] text-white/50">94%</span>
            </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/90 to-transparent backdrop-blur-sm z-40 pointer-events-none"></div>

    </div>
  );
};

export default Hero;