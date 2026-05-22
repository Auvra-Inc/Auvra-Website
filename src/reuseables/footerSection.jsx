import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export default function FooterSection() {
  return (
    <footer className="w-full bg-gray-50 text-gray-900 pt-16 pb-0 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-md w-full flex flex-col relative z-10">

        {/* Logo and Bio */}
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
          <p className="text-black text-md leading-relaxed font-light font-clash">
            A permanent home for human culture.
            Where stories are kept, traditions endure, and creation becomes legacy.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-4 mb-16 relative z-20">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-400 uppercase">Company</h4>
            <a href="/#about" className="text-sm text-gray-800 hover:text-black transition">About</a>
            <a href="/#blog" className="text-sm text-gray-800 hover:text-black transition">Blog</a>
          </div>

          {/* Column 2 - ROUTED */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-400 uppercase">Legal</h4>
            <Link to="/terms" className="text-sm text-gray-800 hover:text-black transition">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-gray-800 hover:text-black transition">Privacy Policy</Link>
            <Link to="/aml" className="text-sm text-gray-800 hover:text-black transition">AML / CFT Policy</Link>
            <Link to="/collab" className="text-sm text-gray-800 hover:text-black transition">Collaboration Terms</Link>
          </div>

          {/* Column 3 - ROUTED */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-400 uppercase">Trust & Safety</h4>
            <Link to="/community" className="text-sm text-gray-800 hover:text-black transition">Community Guidelines</Link>
            <Link to="/governance" className="text-sm text-gray-800 hover:text-black transition">Content Governance</Link>
            <Link to="/copyright" className="text-sm text-gray-800 hover:text-black transition">Copyright Policy</Link>
            <Link to="/ai-policy" className="text-sm text-gray-800 hover:text-black transition">AI Policy</Link>
          </div>

          {/* Column 4 - FAQ & CONTACT ANCHORS ADDED */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-400 uppercase">Contact</h4>
            <a href="/#contact" className="text-sm text-gray-800 hover:text-black transition">Contact us</a>
            <a href="/#faq" className="text-sm text-gray-800 hover:text-black transition">FAQs</a>
            
            <h4 className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mt-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 text-[#E1306C] flex items-center justify-center transition hover:bg-[#E1306C] hover:text-white">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 text-[#1DA1F2] flex items-center justify-center transition hover:bg-[#1DA1F2] hover:text-white">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 text-[#0A66C2] flex items-center justify-center transition hover:bg-[#0A66C2] hover:text-white">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 text-[#1877F2] flex items-center justify-center transition hover:bg-[#1877F2] hover:text-white">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 text-black flex items-center justify-center transition hover:bg-black hover:text-white">
                <SiTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright - Bumped z-index so it sits cleanly over the watermark */}
        <div className="text-center text-[10px] text-gray-500 relative z-20 pb-4">
          © 2026 Auvra Tech Ltd. All Rights Reserved.
        </div>
      </div>

      {/* =========================================
          GIANT WATERMARK (Now perfectly flush with the bottom)
      ========================================= */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center overflow-hidden pointer-events-none select-none z-0">
        {/* Added leading-none and pushed it down slightly so the bounding box doesn't break the layout */}
        <h1 className="font-clash text-[7rem] sm:text-[10rem] font-bold text-gray-400 tracking-widest leading-none translate-y-4 sm:translate-y-6">
          AUVRA
        </h1>
      </div>

    </footer>
  );
}