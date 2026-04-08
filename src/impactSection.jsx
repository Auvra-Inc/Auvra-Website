import React, { useState, useEffect, useRef } from 'react';

// --- CUSTOM HOOK FOR COUNTING NUMBERS (NOW WITH SCROLL SENSOR) ---
const AnimatedCounter = ({ target, duration = 600 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null); // The sensor
  const [hasAnimated, setHasAnimated] = useState(false); // Locks it so it only animates once

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Fire the animation only when visible and hasn't animated yet
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime = null;
          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const current = Math.min(Math.floor((progress / duration) * target), target);
            setCount(current);
            if (current < target) {
              requestAnimationFrame(animateCount);
            }
          };
          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the number is on screen
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, [target, duration, hasAnimated]);

  return <span ref={countRef}>{count}</span>;
};

export default function ImpactSection() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6 flex flex-col items-center overflow-hidden">
      
      {/* =========================================
          SECTION 1: THE CAROUSEL
      ========================================= */}
      <div className="max-w-md w-full flex flex-col items-center mb-32">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 border border-gray-200 rounded-full px-4 py-1">
          A shared task
        </span>
        <h2 className="font-clash text-4xl font-medium text-center leading-tight mb-2">
          How people use <br /> Auvra every day
        </h2>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-10 text-sm">
          <span className="font-bold">4.8/5</span>
          <div className="flex text-yellow-400 text-xs">
            ★★★★★
          </div>
          <span className="text-gray-500">(Trusted by 10.0k+ people)</span>
        </div>

        {/* Carousel Card */}
        <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-xl mb-8">
          <img 
            src="/section.png" 
            alt="People working out" 
            className="absolute inset-0 w-full h-full object-cover"
          />
         
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
            ←
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition">
            →
          </button>
        </div>
      </div>


      {/* =========================================
          SECTION 2: THE GLOBE & STATS
      ========================================= */}
      <div className="max-w-md w-full flex flex-col items-center text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Preservation numbers
        </span>
        <h2 className="font-clash text-4xl font-medium leading-tight mb-16">
          How culture stays <br /> alive on Auvra
        </h2>

        {/* Stat 1: Languages */}
        <div className="mb-8 relative">
          <h3 className="font-clash text-[5.5rem] font-medium leading-none text-[#FF5A1F] drop-shadow-[0_0_20px_rgba(255,90,31,0.4)]">
            <AnimatedCounter target={100} />+
          </h3>
          <p className="text-gray-600 font-medium text-lg mt-2">Languages documented</p>
        </div>

        {/* The Earth Image */}
        <div className="w-full max-w-[350px] aspect-square my-7">
          <img 
            src="/earth2.png" 
            alt="3D Earth" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Stat 2: Verification */}
        <div className="mb-16">
          <h3 className="font-clash text-5xl font-medium leading-none text-gray-900">
            <AnimatedCounter target={94} /><span className="text-purple-600">%</span>
          </h3>
          <p className="text-gray-500 text-sm font-clash max-w-[200px] mx-auto mt-2 leading-relaxed">
            of cultural records verified by community elders
          </p>
        </div>

        {/* Stat 3: Elders */}
        <div className="mb-16">
          <h3 className="font-clash text-5xl font-medium leading-none text-gray-900">
            <AnimatedCounter target={52} /><span className="text-blue-500">+</span>
          </h3>
          <p className="text-gray-500 font-clash text-sm mt-2">
            elders sharing their stories
          </p>
        </div>

        {/* Stat 4: Contributors */}
        <div className="mb-10">
          <h3 className="font-clash text-5xl font-medium leading-none text-gray-900">
            <AnimatedCounter target={87} /><span className="text-purple-600">%</span>
          </h3>
          <p className="text-gray-500 font-clash text-sm max-w-[200px] mx-auto mt-2 leading-relaxed">
            of languages have active contributors
          </p>
        </div>

      </div>
    </section>
  );
}