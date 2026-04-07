import { 
  Crown, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Users, 
  CalendarDays, 
  Box, 
  Sparkles, 
  MoreHorizontal,
  Mic,
  AudioLines,
  Plus,
  MapPin
} from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 max-w-[1200px] mx-auto font-clash">
      
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm font-sans">
          Built for preservation
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Everything you need to safeguard your heritage.
        </h2>
        <p className="text-lg text-gray-600 font-sans leading-relaxed">
          Auvra gives creators, communities, collectors, and families tools, not just storage. Every feature is designed to make cultural preservation sustainable and accessible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* =========================================
            CARD 1: COLLECTIBLE BADGES
        ========================================= */}
        <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm flex flex-col h-full text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <Crown className="text-indigo-600 fill-indigo-600 w-6 h-6" />
            <h3 className="text-2xl font-bold text-gray-900">Collectible Badges</h3>
          </div>
          <p className="text-gray-600 font-sans text-sm mb-10 leading-relaxed">
            Turn your art, music, or crafts into verifiable digital badges. Set your price, share its story, and earn from every sale with permanent provenance without losing your ownership or creative control.
          </p>
          
          {/* THE FIX: Added max-w-[340px] and mx-auto so it stays phone-sized! */}
          <div className="w-full max-w-[340px] mx-auto mt-auto bg-black rounded-3xl overflow-hidden relative h-[380px] shadow-lg">
            <img 
              src="/Frame 2609176.png" 
              alt="Dancer" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute top-0 w-full p-4 flex justify-between items-center text-white z-10">
               {/* <div>
                 <h4 className="font-bold text-sm flex items-center gap-1">BDigiT <span className="text-blue-400 text-xs">✔</span></h4>
                 <p className="text-xs text-gray-300">Sculptor</p>
               </div>
               <div className="flex items-center gap-2 text-sm font-sans">
                 <span>2h</span>
                 <MoreHorizontal className="w-5 h-5" />
               </div> */}
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-12 pb-6 px-5 flex flex-col justify-end">
               <h4 className="text-white text-2xl font-bold mb-1 flex items-center gap-2">
                 Afro-futurism <span className="text-indigo-400 text-sm">★</span>
               </h4>
               <p className="text-white/70 text-xs mb-4 font-sans">Celebrate the past, define the future</p>
               <div className="flex gap-2">
                 <button className="flex-1 py-2.5 bg-white/10 backdrop-blur-md rounded-xl text-white text-xs font-semibold border border-white/20 flex justify-center items-center gap-2">
                   <Crown className="w-3 h-3 text-yellow-500" /> 129k Honors
                 </button>
                 <button className="flex-1 py-2.5 bg-white/10 backdrop-blur-md rounded-xl text-white text-xs font-semibold border border-white/20">
                   Claim Badge
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* =========================================
            CARD 2: CONTRIBUTION BADGES
        ========================================= */}
        <div className="bg-black rounded-[2rem] p-8 text-white shadow-xl flex flex-col h-full border border-neutral-800 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <Crown className="text-yellow-500 fill-yellow-500 w-6 h-6" />
            <h3 className="text-2xl font-bold">Contribution Badges</h3>
          </div>
          <p className="text-gray-400 font-sans text-sm mb-10 leading-relaxed">
            For knowledge that belongs to everyone. Language, oral histories, rituals, traditions, and cultural artifacts shared by communities, collectively verified, and preserved as a living archive for future generations.
          </p>
          
          {/* THE FIX: max-w-[340px] mx-auto */}
          <div className="w-full max-w-[340px] mx-auto mt-auto bg-neutral-900 border border-neutral-800 rounded-3xl p-5 shadow-inner text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-neutral-800 rounded-full overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover opacity-80" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide">Yoruba Oriki Recitations</h4>
                <p className="text-[11px] text-gray-400 font-sans mt-0.5">Contributed by Ibadan Cultural society</p>
              </div>
            </div>
            
            <div className="space-y-2.5 mb-6">
              <div className="flex justify-between items-center bg-neutral-800/50 px-4 py-3.5 rounded-2xl text-xs font-sans border border-neutral-700/50">
                <span className="text-gray-300">Audio recordings</span>
                <span className="font-semibold text-white">14 files</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-800/50 px-4 py-3.5 rounded-2xl text-xs font-sans border border-neutral-700/50">
                <span className="text-gray-300">Transcriptions</span>
                <span className="font-semibold text-white">8 complete</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-800/50 px-4 py-3.5 rounded-2xl text-xs font-sans border border-neutral-700/50">
                <span className="text-gray-300">Community verifications</span>
                <span className="font-semibold text-white">23</span>
              </div>
            </div>
            
            <p className="text-xs font-sans text-gray-400 mb-6">Status: <span className="text-green-500 font-medium">Community Verified</span></p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-neutral-800/80 rounded-full text-[10px] font-sans text-gray-300 border border-neutral-700">Cultural Commons</span>
              <span className="px-3 py-1.5 bg-neutral-800/80 rounded-full text-[10px] font-sans text-gray-300 border border-neutral-700">Living Archive</span>
            </div>
          </div>
        </div>

        {/* =========================================
            CARD 3: COMMUNITY ARCHIVES
        ========================================= */}
        <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm flex flex-col h-full text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <ShieldCheck className="text-orange-500 fill-orange-500/20 w-6 h-6" />
            <h3 className="text-2xl font-bold text-gray-900">Community Archives</h3>
          </div>
          <p className="text-gray-600 font-sans text-sm mb-10 leading-relaxed">
            A digital home for your culture. Document oral histories, art, dance, food traditions, rituals, crafts, and everyday life. Manage contributions, verify authenticity, and engage your diaspora.
          </p>
          
          {/* THE FIX: max-w-[340px] mx-auto */}
          <div className="w-full max-w-[340px] mx-auto mt-auto bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-inner text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-900 rounded-xl overflow-hidden shrink-0 shadow-sm">
                 <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=100&auto=format&fit=crop" alt="Maasai" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Maasai Heritage Archive</h4>
                <p className="text-[11px] text-gray-500 font-sans">Est. 2024 &nbsp;•&nbsp; 100 members</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
               <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100">
                 <span className="font-bold text-gray-900 text-lg">342</span>
                 <span className="text-[10px] text-gray-500 font-sans">Items</span>
               </div>
               <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100">
                 <span className="font-bold text-gray-900 text-lg">28</span>
                 <span className="text-[10px] text-gray-500 font-sans">Verified</span>
               </div>
               <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100">
                 <span className="font-bold text-gray-900 text-lg">12</span>
                 <span className="text-[10px] text-gray-500 font-sans">Languages</span>
               </div>
            </div>

            <div className="space-y-2">
               <div className="bg-white px-4 py-3 rounded-xl text-xs font-sans text-gray-700 shadow-sm border border-gray-100 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div> Beadwork patterns
               </div>
               <div className="bg-white px-4 py-3 rounded-xl text-xs font-sans text-gray-700 shadow-sm border border-gray-100 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div> Migration songs
               </div>
            </div>
          </div>
        </div>

        {/* =========================================
            CARD 4: COLLABORATION HUB
        ========================================= */}
        <div className="bg-gradient-to-b from-gray-50 to-gray-100/50 rounded-[2rem] p-8 border border-gray-200 shadow-sm flex flex-col h-full text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <Zap className="text-yellow-600 fill-yellow-200 w-6 h-6" />
            <h3 className="text-2xl font-bold text-gray-900">Collaboration Hub</h3>
          </div>
          <p className="text-gray-600 font-sans text-sm mb-10 leading-relaxed">
            Create together with total clarity. Set ownership splits and usage rights before a project starts. Revenue shares automatically, and contributions stay transparent.
          </p>
          
          {/* THE FIX: max-w-[340px] mx-auto */}
          <div className="w-full max-w-[340px] mx-auto mt-auto bg-white/60 backdrop-blur-md border border-white rounded-3xl p-5 shadow-lg text-left">
             <div className="flex items-center gap-2 mb-4">
               <div className="flex gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
               </div>
               <span className="text-[10px] text-gray-500 font-sans font-medium ml-2">Collaboration Hub</span>
             </div>

             <div className="bg-gray-200/60 rounded-2xl p-4 mb-3">
                <p className="text-[10px] text-gray-500 font-sans font-medium uppercase tracking-wider mb-1">Active Project</p>
                <h4 className="font-bold text-gray-900 text-sm mb-2">West African Textile Archive</h4>
                <p className="text-[10px] text-gray-500 font-sans">3 collaborators &nbsp;•&nbsp; 12 badges</p>
             </div>

             <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                  <p className="text-[10px] text-indigo-900 font-sans mb-1">Revenue Split</p>
                  <p className="font-bold text-gray-900 text-sm">40 / 40 / 20</p>
                </div>
                <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                  <p className="text-[10px] text-yellow-700 font-sans mb-1">Earned (USDC)</p>
                  <p className="font-bold text-gray-900 text-sm">$2,340</p>
                </div>
             </div>
          </div>
        </div>

        {/* =========================================
            CARD 5: LENS AI (Spans both columns)
        ========================================= */}
        <div className="bg-[#0f1d14] rounded-[2.5rem] p-10 text-white shadow-xl md:col-span-2 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center border border-green-900/50 hover:border-green-800 transition">
          
          <img 
            src="/3img.jpg" 
            alt="Lens AI Background" 
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1d14] via-[#0f1d14]/80 to-transparent z-0 pointer-events-none"></div>
          
          {/* Text Section (Now explicitly w-full or md:w-1/2) */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center animate-float text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-green-950/80 backdrop-blur-md flex items-center justify-center text-yellow-200 border border-green-800/50">
                <Sparkles className="w-7 h-7 fill-yellow-200" />
              </div>
              <h3 className="text-3xl font-bold">Lens AI</h3>
            </div>
            <p className="text-gray-300 font-light text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Your cultural co-pilot. Lens enhances recordings, transcribes oral histories, translates languages, and connects your work to relevant communities. It handles the complexity.
            </p>
          </div>

          {/* THE FIX: max-w-[380px] on the chat UI so it doesn't stretch wide, and pushed to the right side */}
          <div className="relative z-10 w-full max-w-[380px] mx-auto md:mx-0 md:ml-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl flex flex-col h-[500px] animate-float text-left">
            
            <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center mb-8">
               <Sparkles className="w-4.5 h-4.5 text-white" />
            </div>

            <div className="flex justify-end mb-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 rounded-3xl rounded-tr-sm text-xs font-light text-white/90 shadow-lg max-w-[90%] leading-relaxed">
                "Enhance this village elder recording and transcribe to English..."
              </div>
            </div>
            
            <div className="flex justify-start mb-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-3xl rounded-tl-sm text-xs font-light text-gray-300 shadow-lg max-w-[95%] leading-relaxed relative">
                Transcription complete. Detected language: Igbo (Nsukka dialect). I've also found 3 related oral histories in the archive you may want to connect.
                <div className="flex items-center gap-1.5 mt-2.5 text-[10px] text-green-400 font-medium"> <MapPin className="w-3 h-3"/> Nigeria</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 w-full mb-8 mt-4">
               {["View transcription", "Connect related items"].map((text) => (
                 <button key={text} className="px-5 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-light text-left text-gray-300 hover:bg-white/10 transition flex items-center justify-between">
                   {text} <Plus className="w-3.5 h-3.5"/>
                 </button>
               ))}
            </div>
            
            <div className="mt-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl px-5 py-4 shadow-inner relative hover:border-white/20 transition cursor-text group">
              <div className="flex items-center gap-3.5">
                <Plus className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
                <span className="text-gray-400 text-sm font-light">Seek Insight...</span>
              </div>
              <div className="flex gap-3.5">
                <Mic className="w-5 h-5 text-gray-400 group-hover:text-white transition cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;