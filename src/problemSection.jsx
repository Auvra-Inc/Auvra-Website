const ProblemSection = () => {
  return (
    // FIXED: Changed py-15 (not a standard tailwind class) to py-16, and added md:py-24 for desktop breathing room. Expanded max-w to 5xl.
    <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto bg-white font-clash">
      
      {/* Headlines */}
      <h2 className="text-3xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-2">
        Culture is disappearing.
      </h2>
      <h3 className="text-3xl md:text-6xl font-semibold tracking-tight text-red-500 mb-12 md:mb-20">
        Stories are being lost.
      </h3>

      {/* Stat Row */}
      {/* FIXED: Added md:items-center and md:gap-16 to balance the two sides on desktop */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center mb-10 md:mb-16 w-full">
        
        {/* Left Side: The 40% Stat */}
        <div className="flex items-center gap-6 md:w-1/2">
          <div className="text-7xl md:text-8xl font-bold text-red-500 leading-none">40%</div>
          {/* FIXED: w-30 is not a standard class, changed to w-32 for mobile and w-48 for desktop */}
          <span className="text-lg md:text-xl text-gray-700 leading-snug w-32 md:w-48">
            of the world's languages are endangered.
          </span>
        </div>
        
        {/* Right Side: The text */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-clash text-justify md:text-left md:w-1/2">
           According to UNESCO, at least one language dies every two weeks. When a language vanishes, it takes with it:
        </p>
      </div>

      {/* Tags */}
      {/* FIXED: Added slightly more padding on desktop for the tags to look premium */}
      <div className="flex flex-wrap gap-3 md:gap-4 mb-10 font-clash">
        {['Oral traditions', 'Master techniques', 'Visual arts', 'Dance', 'Music', 'Rituals & ceremonies'].map((tag) => (
          <span key={tag} className="px-4 py-1.5 md:px-5 md:py-2 bg-gray-100/80 rounded-full text-sm md:text-base font-medium text-gray-700 border border-gray-200 shadow-sm">
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Antidote Card */}
      {/* THE BIG FIX: Removed w-[350px] and replaced it with w-full md:max-w-2xl so it stretches beautifully on desktop */}
      <div className="relative p-8 md:p-10 w-full md:max-w-2xl text-justify md:text-left rounded-3xl shadow-sm overflow-hidden bg-gray-50/50 backdrop-blur-xl border border-gray-100">
        
        {/* Subtle gradient blob in background */}
        <div className="absolute -bottom-10 right-10 w-40 h-40 bg-purple-200 blur-3xl rounded-full opacity-40 pointer-events-none"></div>
        
        {/* FIXED: Restructured the text and pills so they stack nicely on mobile but flow perfectly on desktop */}
        <div className="relative z-10 text-md md:text-lg text-gray-800 leading-relaxed font-clash">
          <span>
            <span className="font-semibold">Auvra</span> is the antidote: a permanent verifiable and fair ecosystem built to ensure what matters today is here for tomorrow.
          </span>
          
          <div className="flex items-center gap-3 mt-4 md:mt-5 md:inline-flex md:ml-3">
            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium shadow-sm">
              Not caged
            </span>
            <span className="text-purple-700 font-medium italic">
              But lived.
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProblemSection;