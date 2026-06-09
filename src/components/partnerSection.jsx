import React from 'react';
import { motion } from 'framer-motion';

// Pointing directly to your downloaded, official assets
const partners = [
  { name: "ElevenLabs", imagePath: "/logos/elevenlabs.svg" }, 
  { name: "Polygon", imagePath: "/logos/polygon.svg" },
  { name: "Dojah", imagePath: "/logos/dojah.svg" },
  { name: "Paystack", imagePath: "/logos/paystack.png" },
  { name: "Quidax", imagePath: "/logos/quidax.svg" },
  { name: "OpenAI", imagePath: "/logos/openai.svg" },
  { name: "NVIDIA", imagePath: "/logos/kindpng_280277.png" },
  { name: "Crossmint", imagePath: "/logos/crossmint.svg" },
  { name: "Breet", imagePath: "/logos/breet.svg" },
];

export default function PartnersSection() {
  
  const LogoGroup = () => (
    <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 w-max">
      {partners.map((partner, index) => (
        // Added shrink-0 here! This stops the marquee flexbox from randomly squishing the boxes.
        <div key={index} className="w-28 md:w-36 h-24 md:h-28 flex justify-center items-center shrink-0 mx-8 md:mx-12">
          <img 
            src={partner.imagePath} 
            alt={`${partner.name} Logo`} 
            style={{ maxHeight: '85%', maxWidth: '85%', width: 'auto', height: 'auto', objectFit: 'contain' }}
            className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full pt-7 bg-white overflow-hidden border-t border-gray-100">
      
      <div className="text-center">
        <p className="max-w-2xl mx-auto font-clash">Our partners in innovation</p>
      </div>

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