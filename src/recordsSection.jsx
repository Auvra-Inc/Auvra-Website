import React from 'react';

const LivingRecordsSection = () => {
  return (
    <section className="py-24 px-6 overflow-hidden bg-white font-clash">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-gray-900">
          Build living 
          <span className="inline-flex items-center justify-center w-20 h-10 bg-orange-200 rounded-full align-middle mx-3 overflow-hidden shadow-inner">
             <img src="One.png" alt="Cyclist" className="w-full h-full object-cover opacity-80" />
          </span> 
          records of culture that connect stories, people, and 
          <img 
            alt="Diamond"
            src="Vector.png"
            className="inline-flex items-center justify-center text-5xl align-middle mx-3 drop-shadow-md 
          "/> 
          meaning across generations.
        </h2>

        <p className="text-lg text-gray-600 font-sans mb-8">
          Used by people who believe culture deserves to last forever
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 font-sans">
          {['#Creators', '#Families', '#Communities', '#Collectors', '#Diaspora', '#Museums'].map((tag) => (
            <span key={tag} className="px-5 py-2.5 bg-gray-100/80 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Floating Mockup Area */}
      <div className="relative max-w-5xl mx-auto h-[700px] flex justify-center items-center mt-10">
        
        {/* Central Phone Mockup - Static */}
        <img 
          src="div.framer-13hbuxv.jpg" 
          alt="Auvra Mobile App" 
          className="relative z-20 w-[320px] h-[650px] object-contain drop-shadow-2xl" 
        />

        {/* FLOATING CARDS - Notice the new animate-float classes added! */}
        
        {/* Left Side Floating */}
        <div className="hidden md:block absolute left-[5%] top-[40%] w-24 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 text-center z-10 -translate-y-1/2 animate-float-normal">
          <div className="w-10 h-10 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-2 shadow-inner">🚶</div>
          <p className="text-[10px] font-medium leading-tight text-gray-600">Cultural footprint</p>
        </div>
        
        <div className="hidden md:block absolute left-[15%] top-[25%] w-32 h-32 rounded-3xl shadow-xl overflow-hidden z-0 rotate-[-5deg] animate-float-slow">
          <img src="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=200&auto=format&fit=crop" alt="Red harvest" className="w-full h-full object-cover" />
        </div>

        <div className="hidden md:block absolute left-[8%] bottom-[15%] w-40 h-40 rounded-3xl shadow-2xl overflow-hidden z-30 animate-float-fast">
          <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" alt="Elder" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Floating */}
        <div className="hidden md:block absolute right-[15%] top-[25%] w-32 h-32 rounded-3xl shadow-xl overflow-hidden z-0 rotate-[5deg] animate-float-normal" style={{ animationDelay: '1s' }}>
          <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=200&auto=format&fit=crop" alt="Blue dancer" className="w-full h-full object-cover" />
        </div>

        <div className="hidden md:block absolute right-[2%] top-[35%] w-32 bg-white p-4 rounded-3xl shadow-xl border border-gray-100 text-center z-10 animate-float-fast" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-3 shadow-lg shadow-blue-200">A</div>
          <p className="text-xs font-bold leading-tight text-gray-800">3 Languages documented</p>
        </div>

        <div className="hidden md:block absolute right-[8%] bottom-[20%] w-28 bg-white p-4 rounded-3xl shadow-xl border border-gray-100 text-center z-30 animate-float-slow">
          <div className="w-10 h-10 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-2 shadow-lg shadow-blue-200">🏆</div>
          <p className="text-[10px] font-bold leading-tight text-gray-800">New Badge claimed</p>
        </div>

      </div>
    </section>
  );
};

export default LivingRecordsSection;