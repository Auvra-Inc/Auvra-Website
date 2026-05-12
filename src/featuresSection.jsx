import {
  Crown,
  Zap,
  Lock,
  Users,
  Sparkles,
  Mic,
  Plus,
  BadgeCheck,
  Volume2,
  ClipboardList,
  Wallet
} from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className='py-20 px-6 max-w-[1200px] mx-auto font-clash'>
      {/* Header */}
      <div className='mb-16 max-w-2xl'>
        <div className='inline-block px-4 py-1.5 rounded-full border border-gray-300 text-md font-medium tracking-widest uppercase mb-6 shadow-sm font-clash'>
          Built for preservation
        </div>
        <h2 className='text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-6'>
          Everything you need to safeguard your heritage.
        </h2>
        <p className='text-lg text-gray-600 font-clash leading-relaxed'>
          Auvra gives creators, communities, collectors, and families tools, not
          just storage. Every feature is designed to make cultural preservation
          sustainable and accessible.
        </p>
      </div>

      {/* THE GRID: 1 column on mobile, 2 columns on desktop */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        
        {/* CARD 1: COLLECTIBLE BADGES */}
        <div className='bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm flex flex-col h-full'>
          <div className='flex items-center gap-2 mb-4'>
            <Crown className='text-indigo-600 fill-indigo-600 w-6 h-6' />
            <h3 className='text-xl font-semibold text-gray-900'>Collectible Badges</h3>
          </div>
          <p className='text-gray-600 font-clash text-md mb-10 leading-relaxed'>
            Turn your art, music, or crafts into verifiable digital badges. Set
            your price, share its story, and earn from every sale with permanent
            provenance without losing your creative control.
          </p>
          <div className='w-full max-w-[340px] mx-auto mt-auto bg-black rounded-3xl overflow-hidden shadow-lg'>
            <img src='/framer.png' alt='Collectible' className='w-full h-full object-contain opacity-90' />
          </div>
        </div>

        {/* CARD 2: CONTRIBUTION BADGES */}
        <div className='bg-black rounded-[2rem] p-8 text-white shadow-xl flex flex-col h-full border border-neutral-800'>
          <div className='flex items-center gap-3 mb-4'>
            <Crown className='text-yellow-500 fill-yellow-500 w-6 h-6' />
            <h3 className='text-xl font-semibold'>Contribution Badges</h3>
          </div>
          <p className='text-gray-400 font-clash text-sm mb-10 leading-relaxed'>
            For knowledge that belongs to everyone. Language, oral histories,
            rituals, and traditions shared by communities, collectively verified, 
            and preserved as a living archive.
          </p>
          <div className='w-full max-w-[340px] mx-auto mt-auto bg-gradient-to-b from-black to-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 shadow-inner'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-neutral-800 rounded-full overflow-hidden shrink-0'>
                <img src='https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=100&auto=format&fit=crop' alt='Profile' className='w-full h-full object-cover' />
              </div>
              <div>
                <h4 className='font-bold text-sm tracking-wide'>Yoruba Oriki Recitations</h4>
                <p className='text-[11px] text-gray-400'>Contributed by Ibadan Cultural society</p>
              </div>
            </div>
            <div className='space-y-2.5 mb-6 text-xs'>
              <div className='flex justify-between items-center bg-neutral-800/50 px-4 py-3 rounded-2xl border border-neutral-700/50'>
                <span className='text-gray-300'>Audio recordings</span>
                <span className='font-semibold'>14 files</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: COLLABORATION HUB */}
        <div className='bg-gradient-to-b from-[#F9F9F9] to-[#EBEBEB] rounded-[2.5rem] p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col'>
          <div className='flex items-center gap-3 mb-4'>
            <Zap className='w-6 h-6 text-yellow-500 fill-yellow-500' />
            <h2 className='font-clash text-xl font-semibold text-gray-900'>Collaboration Hub</h2>
          </div>
          <p className='font-clash text-[15px] text-gray-700 leading-relaxed mb-10'>
            Create together with total clarity. Set ownership splits and usage rights before a project starts.
          </p>
          <div className='flex flex-col gap-6 mb-10'>
            <div className='flex gap-4 items-start'>
              <Lock className='w-5 h-5 text-indigo-500 mt-1' />
              <div>
                <h3 className='font-medium text-gray-900'>Locked Agreements</h3>
                <p className='text-[13px] text-gray-500'>Ownership and rights recorded upfront.</p>
              </div>
            </div>
            <div className='flex gap-4 items-start'>
              <Wallet className='w-5 h-5 text-green-600 mt-1' />
              <div>
                <h3 className='font-medium text-gray-900'>Flexible Value Sharing</h3>
                <p className='text-[13px] text-gray-500'>Distribute revenue or ensure fair credit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4: LENS AI */}
        <div className='bg-[#0f1d14] rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden flex flex-col border border-green-900/50'>
          <img src='/3img.jpg' alt='Lens AI' className='absolute inset-0 w-full h-full object-cover opacity-40' />
          <div className='relative z-10'>
            <div className='flex items-center gap-3 mb-5'>
              <Sparkles className='w-7 h-7 text-[#FBBF24] fill-[#FBBF24]' />
              <h3 className='text-3xl font-medium'>Lens AI</h3>
            </div>
            <p className='text-gray-300 text-[15px] leading-relaxed mb-8'>
              Your cultural co-pilot. Lens enhances recordings and transcribes oral histories.
            </p>
            {/* AI Mockup UI */}
            <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-5 shadow-2xl'>
               <div className='text-[13px] text-white/90 mb-4 bg-white/10 p-3 rounded-2xl rounded-tr-sm'>
                 &quot;Enhance this village elder recording...&quot;
               </div>
               <div className='text-[13px] text-gray-300 bg-white/10 p-3 rounded-2xl rounded-tl-sm'>
                 Transcription complete. I&apos;ve found 3 related oral histories.
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;