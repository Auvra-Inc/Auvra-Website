import React from 'react';

const LivingRecordsSection = () => {
  return (
    <section className="py-15 px-6 overflow-hidden bg-white font-clash">        

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 text-gray-900">
          Build living
          <span className="inline-flex items-center justify-center w-20 h-10 bg-orange-200 rounded-full align-middle mx-3 overflow-hidden shadow-inner">        
             <img src="One.png" alt="Cyclist" className="w-full h-full object-cover opacity-80" />
          </span>
          records of <span className="font-medium">culture that connect stories</span> people, and
          <img
            alt="Diamond"
            src="Vector.png"
            className="inline-flex items-center justify-center text-5xl align-middle mx-3 drop-shadow-md
          "/>
          meaning across generations.
        </h2>

        <p className="text-lg text-gray-600 font-clash mb-5">
          Used by people who believe culture deserves to last forever
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 font-clash">
          {['#Creators', '#Families', '#Communities', '#Collectors', '#Diaspora', '#Museums'].map((tag) => (
            <span key={tag} className="px-3 bg-gray-100/80 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Floating Mockup Area */}
      <div className="relative max-w-5xl mx-auto h-[500px] sm:h-[600px] md:h-[700px] flex justify-center items-center mt-10">

        {/* Central Phone Mockup - Static */}
        <div className="relative z-50">
          <img
            src="Screen.jpg"
            alt="Auvra Mobile App"
            className="border-5 rounded-4xl bg-white w-[250px] sm:w-[280px] md:w-[320px] h-[500px] sm:h-[580px] md:h-[650px] object-contain drop-shadow-2xl"
          />
          {/* iPhone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-7 sm:h-7 bg-black rounded-b-xl z-10 shadow-lg"></div>
        </div>

        {/* FLOATING CARDS - Notice the new animate-float classes added! */}    

        {/* Left Side Floating */}
        <div className="absolute left-[2%] sm:left-[5%] md:left-[5%] top-[40%] w-16 sm:w-20 md:w-24 bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-gray-100 text-center z-10 -translate-y-1/2 animate-float-normal">
          <div className="w-10 h-10 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-2 shadow-inner">🚶</div>
          <p className="text-[10px] font-medium leading-tight text-gray-600">Cultural footprint</p>
        </div>

        <div className="absolute left-[8%] sm:left-[15%] md:left-[15%] top-[25%] w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-3xl shadow-xl overflow-hidden z-0 rotate-[-5deg] animate-float-slow">
          <img src="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=200&auto=format&fit=crop" alt="Red harvest" className="w-full h-full object-cover" />
        </div>

        <div className="absolute left-[5%] sm:left-[8%] md:left-[8%] bottom-[15%] w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-3xl shadow-2xl overflow-hidden z-30 animate-float-fast">
          <img src="1img.jpg" alt="Elder" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Floating */}
        <div className="absolute right-[8%] sm:right-[15%] md:right-[15%] top-[25%] w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-3xl shadow-xl overflow-hidden z-0 rotate-[5deg] animate-float-normal" style={{ animationDelay: '1s' }}>   
          <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=200&auto=format&fit=crop" alt="Blue dancer" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-[2%] sm:right-[2%] md:right-[2%] top-[35%] w-20 sm:w-24 md:w-32 bg-white p-2 sm:p-3 md:p-4 rounded-3xl shadow-xl border border-gray-100 text-center z-10 animate-float-fast" style={{ animationDelay: '2s' }}>
          <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mx-auto bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg shadow-blue-200">A</div>
          <p className="text-[8px] sm:text-[10px] md:text-xs font-bold leading-tight text-gray-800">3 Languages documented</p>
        </div>

        <div className="absolute right-[5%] sm:right-[8%] md:right-[8%] bottom-[20%] w-16 sm:w-20 md:w-28 bg-white p-2 sm:p-3 md:p-4 rounded-3xl shadow-xl border border-gray-100 text-center z-30 animate-float-slow">
          <div className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-1 sm:mb-2 shadow-lg shadow-blue-200">🏆</div>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold leading-tight text-gray-800">New Badge claimed</p>
        </div>

      </div>
    </section>
  );
};

export default LivingRecordsSection;
