import React from 'react';

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
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* =========================================
          HEADER SECTION
      ========================================= */}
      <div className="bg-white border-b border-gray-200 pt-32 pb-12 px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background pattern matching Auvra's vibe */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 block">Trust & Safety</span>
          <h1 className="text-4xl md:text-5xl font-clash font-medium text-gray-900 mb-4">Legal & Compliance</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Everything you need to know about how Auvra protects your data, your rights, and your cultural legacy.
          </p>
        </div>
      </div>

      {/* =========================================
          MAIN CONTENT & SIDEBAR
      ========================================= */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-10">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="sticky top-28 flex flex-col gap-1.5">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm border ${
                  currentPage === item.id
                    ? 'bg-white border-gray-200 text-gray-900 shadow-sm'
                    : 'border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* The Actual Legal Document Area */}
        <main className="flex-1 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-gray-200/40 border border-gray-100">
          {children}
        </main>
        
      </div>
    </div>
  );
};

export default LegalLayout;