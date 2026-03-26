const ProblemSection = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-white font-clash">
      {/* Headlines */}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-gray-900">
        Culture is disappearing.
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-red-500 mb-12">
        Stories are being lost.
      </h3>

      {/* Stat Row */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
        <div className="text-7xl font-bold text-red-500 leading-none">40%</div>
        <p className="text-lg text-gray-700 leading-relaxed font-sans">
          of the world's languages are endangered. According to UNESCO, at least one language dies every two weeks. When a language vanishes, it takes with it:
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-16 font-sans">
        {['Oral traditions', 'Master techniques', 'Visual arts', 'Dance', 'Music', 'Rituals & ceremonies'].map((tag) => (
          <span key={tag} className="px-5 py-2 rounded-full border border-gray-400 text-gray-800 text-sm shadow-sm">
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Antidote Card */}
      <div className="relative p-8 rounded-3xl  shadow-sm overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20">
        {/* Subtle gradient blob in background */}
        <div className="absolute -bottom-10 right-10 w-40 h-40 bg-purple-200 blur-3xl rounded-full opacity-40 pointer-events-none"></div>
        <p className="relative z-10 text-xl text-gray-800 leading-relaxed">
          <span className="font-bold">Auvra</span> is the antidote: a permanent verifiable and fair ecosystem built to ensure what matters today is here for tomorrow.
          <span className="ml-3 px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Not caged</span>
          <span className="ml-2 text-purple-700 font-medium">But lived</span>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;