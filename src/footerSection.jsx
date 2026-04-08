import React from 'react';


export default function FooterSection() {
  return (
    <footer className="w-full bg-white text-gray-900 pt-16 pb-8 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-md w-full flex flex-col relative z-10">
        
        {/* =========================================
            SECTION 1: THE QUOTE CARD
        ========================================= */}
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl mb-16 aspect-[4/3] flex items-center justify-center p-6">
          {/* Background Image (Replace with your actual wavy image) */}
          <img 
            src="/art3.png" 
            alt="Auvra Culture" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Glassmorphism Quote Box */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shadow-lg font-clash">
            <p className="text-white text-sm md:text-base font-light leading-relaxed mb-4">
              "From the rhythms of Africa to the voices of the world, culture is more than memory. It is identity. It is ownership. It is legacy. It is you."
            </p>
            <p className="text-white/80 text-xs font-medium text-right italic">
              - Auvra
            </p>
          </div>
        </div>


        {/* =========================================
            SECTION 2: NEWSLETTER
        ========================================= */}
        <div className="mb-16">
          <h3 className="font-clash text-2xl font-medium mb-3">
            Get updates from Auvra
          </h3>
          <p className="text-black font-clash text-sm mb-6 leading-relaxed">
            By signing up, you agree to receive product updates and announcements from Auvra
          </p>
          
          {/* Input Field */}
          <div className="flex items-center bg-gray-100 rounded-xl p-1.5 border border-transparent focus-within:border-gray-300 transition-colors">
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-gray-800 placeholder-gray-500"
            />
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>


        {/* =========================================
            SECTION 3: FOOTER BIO & LINKS
        ========================================= */}
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
        <div className="grid grid-cols-2 gap-y-10 gap-x-4 mb-16">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-400 uppercase">Company</h4>
            <a href="#" className="text-sm text-gray-800 hover:text-black">About</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black">Blog</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-400 uppercase">Legal</h4>
            <a href="#" className="text-sm text-gray-800 hover:text-black">Terms of Service</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black">AML / KYC Policy</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-400 uppercase">Trust & Safety</h4>
            <a href="#" className="text-sm text-gray-800 hover:text-black">Community Guidelines</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black">Content Governance</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black">Copyright Policy</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black">Advocacy</a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 font-clash">
            <h4 className="text-[15px] font-medium tracking-widest text-gray-400 uppercase">Contact</h4>
            <a href="#" className="text-sm text-gray-800 hover:text-black">Contact us</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black">FAQs</a>
            
            <h4 className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mt-4">Connect</h4>
            <div className="flex items-center gap-3">
              {/* Replace these basic text characters with your actual social SVG icons */}
              <a href="#" className="text-gray-500 hover:text-[#E1306C] transition-colors font-bold">IG</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors font-bold">𝕏</a>
              <a href="#" className="text-gray-500 hover:text-[#0077B5] transition-colors font-bold">IN</a>
              <a href="#" className="text-gray-500 hover:text-[#1877F2] transition-colors font-bold">FB</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors font-bold">TK</a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] text-gray-400">
          © 2026 Auvra Tech Ltd. All Rights Reserved.
        </div>
      </div>

      {/* =========================================
          GIANT WATERMARK (Behind the copyright)
      ========================================= */}
      {/* <div className="absolute bottom-[-10px] left-0 w-full flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <h1 className="font-clash text-[7rem] sm:text-[10rem] font-bold text-gray-50 tracking-widest">
          AUVRA
        </h1>
      </div> */}

    </footer>
  );
}