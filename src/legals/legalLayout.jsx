import React from 'react';
import { Link } from 'react-router-dom';

const LegalLayout = ({ children, currentPage }) => {
  const menuItems = [
    { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
    { id: 'terms', label: 'Terms of Service', href: '/terms' },
    { id: 'aml', label: 'AML / CFT Policy', href: '/aml' },
    { id: 'collab', label: 'Collaboration Hub Terms', href: '/collab' },
    { id: 'ai', label: 'AI Policy', href: '/ai-policy' },
    { id: 'community', label: 'Community Guidelines', href: '/community' },
    { id: 'copyright', label: 'Copyright Policy', href: '/copyright' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* =========================================
          SIMPLE TOP LOGO NAV
      ========================================= */}
      <div className="pt-10 pb-4 flex justify-center items-center gap-2 font-medium text-xl tracking-wide text-gray-900 z-20 relative">
        <img 
          src="/Vector .png" 
          alt="Auvra Logo" 
          className="w-6 h-6 object-contain" 
        />
        <span className="font-clash">Auvra</span>
      </div>

      {/* =========================================
          HEADER SECTION
      ========================================= */}
      <div className="bg-white border-b border-gray-200 pt-16 pb-12 px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background pattern matching Auvra's vibe */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 block font-clash">Trust & Safety</span>
          <h1 className="text-3xl md:text-5xl font-clash font-medium text-gray-900 mb-4">Legal & Compliance</h1>
          <p className="text-md text-gray-500 max-w-2xl leading-relaxed font-clash">
            Everything you need to know about how Auvra protects your data, your rights, and your cultural legacy.
          </p>
        </div>
      </div>

      {/* =========================================
          MAIN CONTENT & SIDEBAR
      ========================================= */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-10">
        
        {/* Sticky Sidebar / Horizontal Mobile Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0 z-20">
          <nav className="sticky top-4 md:top-28 flex flex-row md:flex-col gap-2 md:gap-1.5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`px-4 py-3 rounded-xl transition-all font-clash duration-200 font-medium text-sm border whitespace-nowrap flex-shrink-0 ${
                  currentPage === item.id
                    ? 'bg-white border-gray-200 text-gray-900 shadow-sm'
                    : 'border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* The Actual Legal Document Area */}
        <main className="flex-1 bg-white p-6 md:p-12 rounded-[2rem] shadow-xl shadow-gray-200/40 border border-gray-100">
          {children}
        </main>
        
      </div>
    </div>
  );
};

export default LegalLayout;