import React from 'react';
import { motion } from 'framer-motion';

// We store the raw domains. The image tags will use these to fetch the real logos.
const partners = [
  { name: "ElevenLabs", domain: "elevenlabs.io" },
  { name: "Polygon", domain: "polygon.technology" },
  { name: "Dojah", domain: "dojah.io" },
  { name: "Paystack", domain: "paystack.com" },
  { name: "Quidax", domain: "quidax.com" },
  { name: "OpenAI", domain: "openai.com" },
  { name: "Crossmint", domain: "crossmint.com" }
];

export default function PartnersSection() {
  
  const LogoGroup = () => (
    <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 w-max">
      {partners.map((partner, index) => (
        <img 
          key={index} 
          // Attempt #1: Try to grab the high-res logo from Clearbit
          src={`https://logo.clearbit.com/${partner.domain}`}
          alt={`${partner.name} Logo`} 
          className="h-8 md:h-10 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          
          // Attempt #2: If Clearbit fails or blocks Vercel, instantly swap to Icon.horse
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite looping if both fail
            e.target.src = `https://icon.horse/icon/${partner.domain}`;
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="w-full py-16 bg-white overflow-hidden border-t border-gray-100">
      
      {/* THE MARQUEE CONTAINER */}
      <div className="relative w-full flex overflow-hidden">
        
        {/* Left & Right Gradients so logos fade smoothly at the edges */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* THE ANIMATING TRACK */}
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, // Smooth, continuous scroll
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