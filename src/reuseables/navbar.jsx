import React, { useState, useEffect } from 'react';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle background blur on scroll
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* =========================================
          ULTRA-MODERN FLOATING NAV
      ========================================= */}
      <nav 
        className={`fixed z-[110] font-clash flex justify-between items-center px-4 py-2 shadow-sm transition-all duration-300 ease-in-out left-0 right-0 mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-5xl rounded-2xl
          ${isScrolled || isMenuOpen
            ? 'top-5 sm:top-6 bg-white/80 backdrop-blur-md border border-white/40 shadow-lg' 
            : 'top-5 sm:top-6 bg-white/90 border border-gray-100'
          }`}
      >
        <Link to="/" className="flex items-center gap-3 font-medium text-lg sm:text-xl tracking-wide">
          <img 
             src="/Vector .png" 
             alt="Auvra Logo" 
             className="w-8 h-8 object-contain" 
          />
          Auvra
        </Link>
      
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-gray-200 text-black rounded-xl flex items-center justify-center hover:bg-gray-100 transition">
            <FaAppStore className="text-lg" />
          </button>
          <button className="w-10 h-10 bg-gray-200 text-black rounded-xl flex items-center justify-center hover:bg-gray-100 transition ">
            <FaGooglePlay className="text-lg font-bold" />
          </button>
          
          {/* ANIMATED HAMBURGER / X BUTTON */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 bg-gray-200 rounded-xl flex flex-col justify-center items-center hover:bg-gray-100 transition relative"
          >
            {/* Top Line */}
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 absolute ${isMenuOpen ? 'rotate-45' : '-translate-y-1'}`}></div>
            {/* Bottom Line */}
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 absolute ${isMenuOpen ? '-rotate-45' : 'translate-y-1'}`}></div>
          </button>
        </div>
      </nav>

      {/* =========================================
          REFINED BLURRED MENU OVERLAY WITH IMAGE CARD
      ========================================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center px-4 pt-24 pb-5">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-md transition-all"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* The Dropdown Menu Box */}
          <div className="relative z-10 w-full font-clash max-w-5xl bg-white rounded-[2rem] p-6 shadow-xl flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-200">
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-500 transition">Ask Lens AI</a>
            <a href="/#features" className="text-base font-medium text-gray-900 hover:text-gray-500 transition">Features</a>
            <Link onClick={() => setIsMenuOpen(false)} to="/about" className="text-base font-medium text-gray-900 hover:text-gray-500 transition">Company</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="text-base font-medium text-gray-900 hover:text-gray-500 transition">Blog</Link>
            
            {/* INSTITUTIONAL ACCESS - THE IMAGE ITSELF IS THE CARD */}
            <Link 
              onClick={() => setIsMenuOpen(false)} 
              to="/institutional-access" 
              className="block rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            >
              <img 
                src="/IMG_inst.JPG" 
                alt="Institutional Access" 
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
