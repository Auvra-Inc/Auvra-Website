import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export default function FooterSection() {
  return (
    <footer className="w-full bg-gray-900 text-white pt-16 pb-0 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-md w-full flex flex-col relative z-10">

        {/* Logo, Bio, and Social Icons */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            {/* Auvra Logo Icon */}
            <img 
              src="/Vector.png" 
              alt="Auvra Logo" 
              className="w-8 h-8 object-contain brightness-0 invert" 
            />
            <span className="font-clash text-xl font-medium tracking-wide text-white">Auvra</span>
          </div>
          <p className="text-gray-300 text-md leading-relaxed font-light font-clash">
            A permanent home for human culture.
            Where stories are kept, traditions endure, and creation becomes legacy.
          </p>
          
          {/* Social Icons - White/Grey */}
          <div className="flex items-center gap-5 mt-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/goauvra" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            
            {/* Modern X Logo */}
            <a href="https://x.com/goauvra" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/auvra/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedinIn className="w-5 h-5" />
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebookF className="w-[18px] h-[18px]" />
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <SiTiktok className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-4 mb-16 relative z-20">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-500 uppercase">Trust & Safety</h4>
            <Link to="/community" className="text-sm text-gray-400 hover:text-white transition">Community Guidelines</Link>
            <Link to="/governance" className="text-sm text-gray-400 hover:text-white transition">Content Governance</Link>
            <Link to="/copyright" className="text-sm text-gray-400 hover:text-white transition">Copyright Policy</Link>
            <Link to="/ai-policy" className="text-sm text-gray-400 hover:text-white transition">AI Policy</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-500 uppercase">Legal</h4>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition">Privacy Policy</Link>
            <Link to="/aml" className="text-sm text-gray-400 hover:text-white transition">AML / CFT Policy</Link>
            <Link to="/collab" className="text-sm text-gray-400 hover:text-white transition">Collaboration Terms</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-500 uppercase">Company</h4>
            <Link to="/about" className="text-sm text-gray-400 hover:text-white transition">About</Link>
            <Link to="/blog" className="text-sm text-gray-400 hover:text-white transition">Blog</Link>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-500 uppercase">Contact</h4>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition">Contact us</Link>
            <Link to="/faqs" className="text-sm text-gray-400 hover:text-white transition">FAQs</Link>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] text-gray-500 relative z-20 pb-4">
          © 2026 Auvra Tech Ltd. All Rights Reserved.
        </div>
      </div>

      {/* GIANT WATERMARK - Very Faint, Almost Invisible */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <h1 className="font-clash text-[7rem] sm:text-[10rem] font-bold text-gray-800 tracking-widest leading-none translate-y-4 sm:translate-y-6 opacity-10">
          AUVRA
        </h1>
      </div>

    </footer>
  );
}
