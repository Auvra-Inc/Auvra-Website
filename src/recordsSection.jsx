import React from 'react';

const LivingRecordsSection = () => {
  return (
    <section className="py-15 px-6 overflow-hidden bg-white font-clash">        

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-gray-900">
          Build living
          {/* UPDATED: Cyclist Pill - Responsive sizing and vertical alignment */}
          <span className="inline-block w-16 h-8 md:w-24 md:h-12 lg:w-28 lg:h-14 bg-orange-200 rounded-full align-middle mx-2 md:mx-3 overflow-hidden shadow-inner -translate-y-1">        
             <img src="One.png" alt="Cyclist" className="w-full h-full object-cover opacity-80" />
          </span>
          records of <span className="font-medium">culture that connect stories</span> people, and
          {/* UPDATED: Diamond Image - Explicit smaller responsive heights */}
          <img
            alt="Diamond"
            src="Vector.png"
            className="inline-block h-6 md:h-8 lg:h-10 w-auto align-middle mx-2 md:mx-3 drop-shadow-md -translate-y-1"
          />
          meaning across generations.
        </h2>

        <p className="text-md text-gray-600 font-clash mb-5">
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
        <div className="relative z-20">
          <img
            src="Screen.jpg"
            alt="Auvra Mobile App"
            className="border-5 rounded-4xl bg-white w-[250px] sm:w-[280px] md:w-[320px] h-[500px] sm:h-[580px] md:h-[650px] object-contain drop-shadow-2xl"
          />
          {/* iPhone Notch */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-4 sm:w-28 md:w-32 h-7 sm:h-7 bg-black rounded-2xl z-10 shadow-lg"></div>
        </div>

        {/* FLOATING CARDS */}    

        {/* Left Side Floating */}
        <div className="absolute left-[2%] sm:left-[5%] md:left-[5%] top-[50%] w-16 sm:w-20 md:w-24 bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-gray-100 text-center z-10 -translate-y-1/2 animate-float-normal">
          <img src="li.clone-item .png" className="w-full h-full object-cover rounded-xl" />
      
        </div>

        <div className="absolute left-[-4%] sm:left-[15%] md:left-[15%] top-[25%] w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-3xl shadow-xl overflow-hidden z-0  animate-float-slow">
          <img src="1img.jpg" alt="Red harvest" className="w-full h-full object-cover" />
        </div>

        <div className="absolute left-[-1%] sm:left-[8%] md:left-[8%] bottom-[15%] w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-3xl shadow-2xl overflow-hidden z-10 animate-float-fast">
          <img src="li.clone-item3.png" alt="Elder" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Floating */}
        <div className="absolute right-[-4%] sm:right-[15%] md:right-[15%] top-[25%] w-25 sm:w-25 md:w-32 h-20 sm:h-24 md:h-32 rounded-3xl shadow-xl overflow-hidden z-0  animate-float-normal" style={{ animationDelay: '1s' }}>   
          <img src="li.clone-item 4.png" alt="Blue dancer" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-[-4%] sm:right-[2%] md:right-[2%] top-[50%] w-20 sm:w-24 md:w-32 bg-white p-2 sm:p-3 md:p-4 rounded-3xl shadow-xl border border-gray-100 text-center z-10 animate-float-fast" style={{ animationDelay: '2s' }}>
          <img src="li.clone-item.png" alt="Library" className="w-full h-full object-cover rounded-2xl" />
        </div>  

        <div className="absolute right-[-4%] sm:right-[8%] md:right-[8%] bottom-[20%] w-25 sm:w-20 md:w-28 bg-white p-2 sm:p-3 md:p-4 rounded-3xl shadow-xl border border-gray-100 text-center z-10 animate-float-slow">
          <img src="Default.png" alt="Library" className="w-full h-full object-cover rounded-2xl" />
        </div>

      </div>
    </section>
  );
};

export default LivingRecordsSection;