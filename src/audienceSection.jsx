import React from 'react';
import { Briefcase, Users, Monitor, User, Landmark } from 'lucide-react';

const AudienceSection = () => {
  return (
    <section 
      className="relative w-full py-24 px-6 flex flex-col items-center justify-center font-clash bg-white"
      style={{ 
        backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)', 
        backgroundSize: '32px 32px' 
      }}
    >
      
      {/* 1. TOP PILL TAG */}
      <div className="px-6 py-2 rounded-full border border-gray-200 text-sm text-gray-500 font-sans mb-10 bg-white/80 backdrop-blur-sm shadow-sm z-10">
        Fits every way cultures lives
      </div>

      {/* 2. MAIN HEADING */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center text-gray-900 max-w-4xl mb-14 leading-[1.1] z-10">
        Designed for the people who create, protect, and remember
      </h2>

      {/* 3. ICON BUTTONS CLUSTER */}
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl font-sans bg-white/50 backdrop-blur-sm p-4 rounded-3xl z-10 mb-20">
        <button className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition bg-white shadow-sm">
          <Briefcase className="w-5 h-5" /> Creators
        </button>
        <button className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition bg-white shadow-sm">
          <Users className="w-5 h-5" /> Communities
        </button>
        <button className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gray-50 text-gray-700 font-medium hover:bg-gray-100 transition border border-transparent">
          <Monitor className="w-5 h-5" /> Collectors
        </button>
        <button className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-200 border-dashed text-gray-600 font-medium hover:bg-gray-50 transition bg-white shadow-sm">
          <Users className="w-5 h-5" /> Families
        </button>
        <button className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition bg-white shadow-sm">
          <User className="w-5 h-5" /> Individuals
        </button>
        <button className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition bg-white shadow-sm">
          <Landmark className="w-5 h-5" /> Institutions
        </button>
      </div>

      {/* 4. THE GLASSMORPHISM SHOWCASE */}
      {/* THE FIX: Changed max-w-5xl to max-w-[420px] to keep it strictly portrait-sized! */}
      <div className="relative w-full max-w-[420px] h-[550px] md:h-[650px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
        
        {/* Background Image */}
        <img 
          src="/2img.jpg" 
          alt="Creator with cat" 
          className="w-full h-full object-cover"
        />

        {/* The Frosted Glass Card */}
        {/* THE FIX: Removed the md: positioning rules so it stretches perfectly across the bottom on ALL screens */}
        <div className="absolute bottom-2  w-[220px] h-[200px] right-6 bg-black/20 backdrop-blur-xl border border-white/20 p-6 md: rounded-3xl shadow-2xl text-white">
          
          <p className="font-medium text-md  leading-snug mb-6 ">
            For creators turning culture into lasting work.
          </p>
          
          <div className="flex items-end gap-3 mb-2">
            <span className="text-3xl font-bold tracking-tight">100%</span>
            <span className="text-sm font-medium mb-1 md:mb-1.5 opacity-90">Ownership</span>
          </div>
          
          <p className="text-xs md:text-sm font-light opacity-80 tracking-wide">
            Your work. Your rights. Your legacy
          </p>

        </div>
      </div>

    </section>
  );
};

export default AudienceSection;