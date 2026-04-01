import React from 'react';

const LivingRecordsSection = () => {
  return (
    <section className="py-24 px-6 overflow-hidden bg-white font-clash">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 text-gray-900">
          Build living 
          <span className="inline-flex items-center justify-center w-20 h-10 bg-orange-200 rounded-full align-middle mx-3 overflow-hidden shadow-inner">
             <img src="One.png" alt="Cyclist" className="w-full h-full object-cover opacity-80" />
          </span>records of 
           <span className="font-medium"> culture that connect stories,</span> people, and 
          <img 
            alt="Diamond"
            src="Vector.png"
            className="inline-flex items-center justify-center text-5xl align-middle mx-3 drop-shadow-md 
          md: text-6xl"/> 
          meaning across generations.
        </h2>

        <p className="text-lg text-gray-600 font-clash mb-8">
          Used by people who believe culture deserves to last forever
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center items-center gap-3 font-clash font-medium">
          {['#Creators', '#Families', '#Communities', '#Collectors', '#Diaspora', '#Museums'].map((tag) => (
            <span key={tag} className="px-5 py-2.5 bg-gray-100/80 rounded-full text-md font-medium text-gray-700 border border-gray-200 shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Floating Mockup Area */}
      <div className="relative max-w-5xl mx-auto h-[500px] sm:h-[600px] md:h-[700px] flex justify-center items-center mt-10">
        
        {/* Central Phone Mockup - CSS Rebuilt */}
        <div className="relative z-50 w-[250px] sm:w-[280px] md:w-[320px] drop-shadow-2xl">
          {/* Phone Body */}
          <div className="bg-black rounded-[40px] p-3 shadow-2xl" style={{ aspectRatio: '9/19' }}>
            
            {/* Screen */}
            <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-[35px] overflow-hidden flex flex-col">
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>
              
              {/* Status Bar */}
              <div className="h-8 px-4 pt-2 flex justify-between items-center text-xs font-semibold text-gray-800">
                <span>9:41</span>
                <div className="flex gap-1">📶 🔋</div>
              </div>
              
              {/* App Header */}
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-sm font-bold text-gray-900">Auvra</h3>
                <p className="text-xs text-orange-600">Your cultural archive</p>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {/* Record Card 1 */}
                <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-base">🎬</div>
                    <span className="text-xs font-semibold text-gray-800">Family Stories</span>
                  </div>
                  <p className="text-xs text-gray-600">12 records saved</p>
                </div>
                
                {/* Record Card 2 */}
                <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-base">📍</div>
                    <span className="text-xs font-semibold text-gray-800">Locations</span>
                  </div>
                  <p className="text-xs text-gray-600">5 places documented</p>
                </div>
                
                {/* Record Card 3 */}
                <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-base">🏆</div>
                    <span className="text-xs font-semibold text-gray-800">Achievements</span>
                  </div>
                  <p className="text-xs text-gray-600">3 badges earned</p>
                </div>
              </div>
              
              {/* Bottom Action */}
              <div className="px-4 py-3 border-t border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 rounded-b-[32px]">
                <button className="w-full bg-orange-500 text-white text-xs font-bold py-2 rounded-xl">
                  + Add Record
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING CARDS - Better Aligned & Professional Icons */}
        
        {/* Top Left Card - Footprint */}
        <div className="absolute left-0 sm:left-[8%] md:left-[10%] top-[5%] sm:top-[10%] w-20 sm:w-24 md:w-32 bg-gradient-to-br from-orange-50 to-orange-100 p-3 sm:p-4 rounded-3xl shadow-2xl border border-orange-200 text-center z-20 animate-float-normal hover:shadow-orange-300/50 transition-shadow">
          <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-2 shadow-lg">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
          </div>
          <p className="text-[10px] sm:text-xs font-bold leading-tight text-orange-900">Cultural Footprint</p>
        </div>
        
        {/* Top Right Card - Languages */}
        <div className="absolute right-0 sm:right-[8%] md:right-[10%] top-[8%] sm:top-[12%] w-20 sm:w-24 md:w-32 bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 rounded-3xl shadow-2xl border border-blue-200 text-center z-20 animate-float-fast hover:shadow-blue-300/50 transition-shadow" style={{ animationDelay: '0.5s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-2 shadow-lg">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.87 15.07L10.33 12.56 10 16h3l-.13-4.93zM17.6 11.57L16.6 14.9l.9 2.36h1.98l2.07-5.69h1.98L19.6 12.93 18.56 9h-1.96l.04 2.57zM12 8L5.5 20h3l1.54-4h5.92l1.54 4h3L12 8zm6-7H10v5h8V1z"/>
            </svg>
          </div>
          <p className="text-[10px] sm:text-xs font-bold leading-tight text-blue-900">3 Languages</p>
        </div>
        
        {/* Bottom Left Card - Stories */}
        <div className="absolute left-0 sm:left-[10%] md:left-[12%] bottom-[5%] sm:bottom-[8%] w-20 sm:w-24 md:w-32 bg-gradient-to-br from-purple-50 to-purple-100 p-3 sm:p-4 rounded-3xl shadow-2xl border border-purple-200 text-center z-20 animate-float-slow hover:shadow-purple-300/50 transition-shadow" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-purple-600 text-white rounded-2xl flex items-center justify-center mb-2 shadow-lg">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
          <p className="text-[10px] sm:text-xs font-bold leading-tight text-purple-900">12 Stories</p>
        </div>
        
        {/* Bottom Right Card - Badges */}
        <div className="absolute right-0 sm:right-[10%] md:right-[12%] bottom-[2%] sm:bottom-[5%] w-20 sm:w-24 md:w-32 bg-gradient-to-br from-amber-50 to-amber-100 p-3 sm:p-4 rounded-3xl shadow-2xl border border-amber-200 text-center z-20 animate-float-normal hover:shadow-amber-300/50 transition-shadow" style={{ animationDelay: '1.5s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-2 shadow-lg">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <p className="text-[10px] sm:text-xs font-bold leading-tight text-amber-900">5 Badges</p>
        </div>

      </div>
    </section>
  );
};

export default LivingRecordsSection;