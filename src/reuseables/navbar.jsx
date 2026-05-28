import React, { useState, useEffect } from 'react';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 absolute ${isMenuOpen ? 'rotate-45' : '-translate-y-1'}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 absolute ${isMenuOpen ? '-rotate-45' : 'translate-y-1'}`}></div>
          </button>
        </div>
      </nav>

      {/* =========================================
          REFINED BLURRED MENU OVERLAY WITH CARD
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
            
            {/* PRODUCTS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="text-base font-medium text-gray-900 hover:text-gray-500 transition flex items-center justify-between w-full"
              >
                Products
                <svg className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProductsOpen && (
                <div className="mt-3 ml-4 pl-4 border-l-2 border-gray-200 flex flex-col gap-3">
                  <Link 
                    onClick={() => setIsMenuOpen(false)} 
                    to="/" 
                    className="text-sm text-gray-600 hover:text-black transition"
                  >
                    Auvra Core
                  </Link>
                  <Link 
                    onClick={() => setIsMenuOpen(false)} 
                    to="/institutions" 
                    className="text-sm text-gray-600 hover:text-black transition"
                  >
                    Auvra for Institutions
                  </Link>
                  {/* NEW: Auvra Node (coming soon) */}
                  <span className="text-sm text-gray-400 cursor-default flex items-center justify-between">
                    Auvra Node
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Coming soon</span>
                  </span>
                </div>
              )}
            </div>
            
            <Link onClick={() => setIsMenuOpen(false)} to="/about" className="text-base font-medium text-gray-900 hover:text-gray-500 transition">Company</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="text-base font-medium text-gray-900 hover:text-gray-500 transition">Blog</Link>
            
            <div className="pt-0.5"></div>
            
            {/* INSTITUTIONAL ACCESS CARD WITH IMAGE */}
            <Link 
              onClick={() => setIsMenuOpen(false)} 
              to="/institutional-access"
              className="relative block overflow-hidden rounded-xl bg-gray-900 transition-all duration-300 hover:scale-[1.01] hover:shadow-md w-full text-left"
            >
              {/* Background Image */}
              <img 
                src="/IMG_inst.JPG" 
                alt="Institutional Access" 
                className="w-full h-full object-cover absolute inset-0"
                loading="eager"
              />
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
              {/* Text Content */}
              <div className="relative z-10 flex items-center justify-between p-3">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">Apply for Institutional Access</span>
                  <span className="text-xs text-gray-200 mt-0.5">For Institutions & Government Bodies</span>
                </div>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
