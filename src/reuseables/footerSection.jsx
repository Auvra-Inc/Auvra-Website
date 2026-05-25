import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer className="w-full bg-gray-50 text-gray-900 pt-16 pb-0 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-md w-full flex flex-col relative z-10">

        {/* Logo, Bio, and Social Icons */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            {/* Auvra Star Logo Icon */}
            <img 
             src="/Vector .png" 
             alt="Auvra Logo" 
             className="w-8 h-8 object-contain" 
             />
            <span className="font-clash text-xl font-medium tracking-wide">Auvra</span>
          </div>
          <p className="text-gray-800 text-md leading-relaxed font-light font-clash">
            A permanent home for human culture.
            Where stories are kept, traditions endure, and creation becomes legacy.
          </p>
          
          {/* Social Icons - Only Instagram, X, LinkedIn */}
          <div className="flex items-center gap-5 mt-6">
            <a href="https://www.instagram.com/goauvra" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/goauvra" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/auvra/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links Grid - Adjusted alignment for LEGAL and CONTACT to move right */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-16 relative z-20">
          
          {/* Column 1 - TRUST & SAFETY */}
          <div className="flex flex-col gap-3 font-clash justify-self-start">
            <h4 className="text-[13px] font-medium tracking-widest text-gray-600 uppercase">Trust & Safety</h4>
            <Link to="/community" className="text-xs text-gray-700 hover:text-black transition">Community Guidelines</Link>
            <Link to="/governance" className="text-xs text-gray-700 hover:text-black transition">Content Governance</Link>
            <Link to="/copyright" className="text-xs text-gray-700 hover:text-black transition">Copyright Policy</Link>
            <Link to="/ai-policy" className="text-xs text-gray-700 hover:text-black transition">AI Policy</Link>
          </div>

          {/* Column 2 - LEGAL (moved right by using justify-self-end) */}
          <div className="flex flex-col gap-3 font-clash justify-self-end text-right">
            <h4 className="text-[13px] font-medium tracking-widest text-gray-600 uppercase">Legal</h4>
            <Link to="/terms" className="text-xs text-gray-700 hover:text-black transition">Terms of Service</Link>
            <Link to="/privacy" className="text-xs text-gray-700 hover:text-black transition">Privacy Policy</Link>
            <Link to="/aml" className="text-xs text-gray-700 hover:text-black transition">AML / CFT Policy</Link>
            <Link to="/collab" className="text-xs text-gray-700 hover:text-black transition">Collaboration Terms</Link>
          </div>

          {/* Column 3 - COMPANY */}
          <div className="flex flex-col gap-3 font-clash justify-self-start">
            <h4 className="text-[13px] font-medium tracking-widest text-gray-600 uppercase">Company</h4>
            <Link to="/about" className="text-xs text-gray-700 hover:text-black transition">About</Link>
            <Link to="/blog" className="text-xs text-gray-700 hover:text-black transition">Blog</Link>
          </div>

          {/* Column 4 - CONTACT (moved right by using justify-self-end) */}
          <div className="flex flex-col gap-3 font-clash justify-self-end text-right">
            <h4 className="text-[13px] font-medium tracking-widest text-gray-600 uppercase">Contact</h4>
            <Link to="/contact" className="text-xs text-gray-700 hover:text-black transition">Contact us</Link>
            <Link to="/faqs" className="text-xs text-gray-700 hover:text-black transition">FAQs</Link>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] text-gray-500 relative z-20 pb-4">
          © 2026 Auvra Tech Ltd. All Rights Reserved.
        </div>
      </div>

      {/* GIANT WATERMARK - Animated */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full flex justify-center overflow-hidden pointer-events-none select-none z-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1 
          className="font-clash text-[7rem] sm:text-[10rem] font-bold text-gray-300 tracking-widest leading-none translate-y-4 sm:translate-y-6 opacity-15"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          AUVRA
        </motion.h1>
      </motion.div>

    </footer>
  );
}
