import React from 'react';
import { motion } from 'framer-motion';

// Pointing directly to your downloaded, official assets
const partners = [
  { name: "ElevenLabs", imagePath: "/logos/elevenlabs.svg" }, // Change to .svg if you downloaded an SVG!
  { name: "Polygon", imagePath: "/logos/polygon.svg" },
  { name: "Dojah", imagePath: "/logos/dojah.svg" },
  { name: "Paystack", imagePath: "/logos/paystack.png" },
  { name: "Quidax", imagePath: "/logos/quidax.svg" },
  { name: "OpenAI", imagePath: "/logos/openai.svg" },
  { name: "Crossmint", imagePath: "/logos/crossmint.svg" }
];

export default function PartnersSection() {
  
  const LogoGroup = () => (
    <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 w-max">
      {partners.map((partner, index) => (
        <img 
          key={index} 
          src={partner.imagePath} 
          alt={`${partner.name} Logo`} 
          className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
        />
      ))}
    </div>
  );

  return (
    <section className="w-full pt-10 bg-white overflow-hidden border-t border-gray-100">
      
     

      {/* THE MARQUEE CONTAINER */}
      <div className="relative w-full flex overflow-hidden">
        
        {/* Left & Right Gradients */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* THE ANIMATING TRACK */}
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 35, // Buttery smooth and slow
            repeat: Infinity 
          }}
        >
          {/* Rendered twice to create the infinite loop */}
          <LogoGroup />
          <LogoGroup />
        </motion.div>
        
      </div>
    </section>
  );
}