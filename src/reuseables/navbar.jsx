import React, { useState, useEffect, useRef } from 'react';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* =========================================
          ULTRA-MODERN FLOATING NAV WITH ANIMATIONS
      ========================================= */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed z-[110] font-clash flex justify-between items-center px-4 py-2 shadow-sm transition-all duration-300 ease-in-out left-0 right-0 mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-5xl rounded-2xl
          ${isScrolled || isMenuOpen
            ? 'top-5 sm:top-6 bg-white/80 backdrop-blur-md border border-white/40 shadow-lg' 
            : 'top-5 sm:top-6 bg-white/90 border border-gray-100'
          }`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/" className="flex items-center gap-3 font-medium text-lg sm:text-xl tracking-wide">
            <img 
               src="/Vector .png" 
               alt="Auvra Logo" 
               className="w-8 h-8 object-contain" 
            />
            Auvra
          </Link>
        </motion.div>
      
        <div className="flex gap-2">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-gray-200 text-black rounded-xl flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FaAppStore className="text-lg" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-gray-200 text-black rounded-xl flex items-center justify-center hover:bg-gray-100 transition "
          >
            <FaGooglePlay className="text-lg font-bold" />
          </motion.button>
          
          {/* ANIMATED HAMBURGER / X BUTTON */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 bg-gray-200 rounded-xl flex flex-col justify-center items-center hover:bg-gray-100 transition relative"
          >
            <motion.div 
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 0 : -4 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-black absolute"
            ></motion.div>
            <motion.div 
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 0 : 4 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-black absolute"
            ></motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* =========================================
          REFINED BLURRED MENU OVERLAY WITH ANIMATIONS
      ========================================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col items-center px-4 pt-24 pb-5"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-md transition-all"
              onClick={() => setIsMenuOpen(false)}
            ></motion.div>

            {/* The Dropdown Menu Box */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10 w-full font-clash max-w-5xl bg-white rounded-[2rem] p-6 shadow-xl flex flex-col gap-6"
            >
              
              {/* ASK LENS AI */}
              <motion.a 
                whileHover={{ x: 5 }}
                href="#" 
                className="text-base font-medium text-gray-900 hover:text-gray-500 transition"
              >
                Ask Lens AI
              </motion.a>
              
              {/* PRODUCTS WITH DROPDOWN - ONE UNIFIED CARD */}
              <div className="relative" ref={dropdownRef}>
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="text-base font-medium text-gray-900 hover:text-gray-500 transition flex items-center justify-between w-full"
                >
                  Products
                  <motion.svg 
                    animate={{ rotate: isProductsDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
                
                {/* ONE UNIFIED DROPDOWN CARD - Less shadow */}
                <AnimatePresence>
                  {isProductsDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="mt-2 bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
                    >
                      <Link 
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsProductsDropdownOpen(false);
                        }} 
                        to="/" 
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50"
                      >
                        <span className="text-sm text-black">Auvra Core</span>
                      </Link>
                      <Link 
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsProductsDropdownOpen(false);
                        }} 
                        to="/institutions" 
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50"
                      >
                        <span className="text-sm text-black">Auvra for Institutions</span>
                      </Link>
                      <div className="flex items-center justify-between px-4 py-3 bg-gray-50/30">
                        <span className="text-sm text-gray-400">Auvra Node</span>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Coming soon</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <motion.div whileHover={{ x: 5 }}>
                <Link onClick={() => setIsMenuOpen(false)} to="/about" className="text-base font-medium text-gray-900 hover:text-gray-500 transition block">Company</Link>
              </motion.div>
              
              <motion.div whileHover={{ x: 5 }}>
                <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="text-base font-medium text-gray-900 hover:text-gray-500 transition block">Blog</Link>
              </motion.div>
              
              <div className="pt-0.5"></div>
              
              {/* INSTITUTIONAL ACCESS CARD WITH IMAGE */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  onClick={() => setIsMenuOpen(false)} 
                  to="/institutional-access"
                  className="relative block overflow-hidden rounded-xl bg-gray-900 transition-all duration-300 hover:shadow-md w-full text-left"
                >
                  <img 
                    src="/IMG_inst.JPG" 
                    alt="Institutional Access" 
                    className="w-full h-full object-cover absolute inset-0"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
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
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
