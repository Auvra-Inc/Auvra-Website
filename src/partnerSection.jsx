import React from 'react';
import { motion } from 'framer-motion';

// We use an API to instantly pull the official logos straight from their websites!
const partners = [
  { name: "ElevenLabs", url: "https://logo.clearbit.com/elevenlabs.io" },
  { name: "Polygon", url: "https://logo.clearbit.com/polygon.technology" },
  { name: "Dojah", url: "https://logo.clearbit.com/dojah.io" },
  { name: "Paystack", url: "https://logo.clearbit.com/paystack.com" },
  { name: "Quidax", url: "https://logo.clearbit.com/quidax.com" },
  { name: "OpenAI", url: "https://logo.clearbit.com/openai.com" },
  { name: "Crossmint", url: "https://logo.clearbit.com/crossmint.com" }
];

export default function PartnersSection() {
  
  const LogoGroup = () => (
    <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 w-max">
      {partners.map((partner, index) => (
        <img 
          key={index} 
          src={partner.url} 
          alt={`${partner.name} Logo`} 
          // h-8 keeps them all the exact same size. Grayscale makes them blend in until hovered!
          className="h-8 md:h-10 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          // Fallback just in case a logo doesn't load
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="w-full py-16 bg-white overflow-hidden border-t border-gray-100">
      
      <div className="text-center mb-10">
        <p className="text-sm font-sans font-semibold text-gray-500 uppercase tracking-widest">
          Powered by world-class technology
        </p>
      </div>

      {/* THE MARQUEE CONTAINER */}
      <div className="relative w-full flex overflow-hidden">
        
        {/* Left & Right Gradients for the fade effect */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* THE ANIMATING TRACK */}
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, // Nice, smooth, slow scroll
            repeat: Infinity 
          }}
        >
          {/* Rendered twice for the infinite loop */}
          <LogoGroup />
          <LogoGroup />
        </motion.div>
        
      </div>
    </section>
  );
}