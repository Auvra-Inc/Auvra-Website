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
	MapPin,
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
				<p className='bg-white/90 shadow-md w-full '></p>
				<p className='text-lg text-gray-600 font-clash leading-relaxed'>
					Auvra gives creators, communities, collectors, and families tools, not
					just storage. Every feature is designed to make cultural preservation
					sustainable and accessible.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{/* =========================================
            CARD 1: COLLECTIBLE BADGES
        ========================================= */}
				<div className='bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm flex flex-col h-full text-center md:text-left'>
					<div className='flex items-center justify-center md:justify-start gap-2 mb-4'>
						<Crown className='text-indigo-600 fill-indigo-600 w-6 h-6' />
						<h3 className='text-xl font-semi-bold text-gray-900'>
							Collectible Badges
						</h3>
					</div>
					<p className='text-gray-600 font-clash text-md mb-10 leading-relaxed text-left'>
						Turn your art, music, or crafts into verifiable digital badges. Set
						your price, share its story, and earn from every sale with permanent
						provenance without losing your ownership or creative control.
					</p>

					{/* THE FIX: Added max-w-[340px] and mx-auto so it stays phone-sized! */}
					<div className='w-full max-w-[340px] mx-auto mt-auto bg-black rounded-3xl overflow-hidden relative shadow-lg'>
						<img
							src='/framer.png'
							alt='Dancer'
							className='w-full h-full object-contain opacity-90'
						/>
						<div className='absolute top-0 w-full p-4 flex justify-between items-center text-white z-10'>
							{/* <div>
                 <h4 className="font-bold text-sm flex items-center gap-1">BDigiT <span className="text-blue-400 text-xs">✔</span></h4>
                 <p className="text-xs text-gray-300">Sculptor</p>
               </div>
               <div className="flex items-center gap-2 text-sm font-sans">
                 <span>2h</span>
                 <MoreHorizontal className="w-5 h-5" />
               </div> */}
						</div>
					</div>
				</div>

				{/* =========================================
            CARD 2: CONTRIBUTION BADGES
        ========================================= */}
				<div className='bg-black rounded-[2rem] p-8 text-white shadow-xl flex flex-col h-full border border-neutral-800 text-center md:text-left'>
					<div className='flex items-center justify-center md:justify-start gap-3 mb-4'>
						<Crown className='text-yellow-500 fill-yellow-500 w-6 h-6' />
						<h3 className='text-xl font-semi-bold'>Contribution Badges</h3>
					</div>
					<p className='text-gray-400 font-clash text-sm mb-10 leading-relaxed text-left'>
						For knowledge that belongs to everyone. Language, oral histories,
						rituals, traditions, and cultural artifacts shared by communities,
						collectively verified, and preserved as a living archive for future
						generations.
					</p>

					{/* THE FIX: max-w-[340px] mx-auto */}
					<div className='w-full max-w-[340px] mx-auto mt-auto  bg-gradient-to-b from-black to-white/10 backdrop-blur-md text-white text-md font-medium  transition-all border border-white/20 shadow-sm rounded-3xl p-5 shadow-inner text-left'>
						<div className='flex items-center gap-3 mb-6'>
							<div className='w-12 h-12 bg-neutral-800 rounded-full overflow-hidden shrink-0'>
								<img
									src='https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=100&auto=format&fit=crop'
									alt='Profile'
									className='w-full h-full object-cover opacity-80'
								/>
							</div>
							<div>
								<h4 className='font-bold text-sm tracking-wide'>
									Yoruba Oriki Recitations
								</h4>
								<p className='text-[11px] text-gray-400 font-sans mt-0.5'>
									Contributed by Ibadan Cultural society
								</p>
							</div>
						</div>

						<div className='space-y-2.5 mb-6'>
							<div className='flex justify-between items-center bg-neutral-800/50 px-4 py-3.5 rounded-2xl text-xs font-clash border border-neutral-700/50'>
								<span className='text-gray-300'>Audio recordings</span>
								<span className='font-semibold text-white'>14 files</span>
							</div>
							<div className='flex justify-between items-center bg-neutral-800/50 px-4 py-3.5 rounded-2xl text-xs font-clash border border-neutral-700/50'>
								<span className='text-gray-300'>Transcriptions</span>
								<span className='font-semibold text-white'>8 completed</span>
							</div>
							<div className='flex justify-between items-center bg-neutral-800/50 px-4 py-3.5 rounded-2xl text-xs font-clash border border-neutral-700/50'>
								<span className='text-gray-300'>Community verifications</span>
								<span className='font-semibold text-white'>23</span>
							</div>
						</div>

						<p className='text-xs font-clash text-gray-400 mb-6'>
							Status:{' '}
							<span className='text-green-500 font-medium'>
								Community Verified
							</span>
						</p>
					</div>
					<div className='flex flex-wrap gap-2 mt-3'>
						<span className='px-3 py-1.5 bg-neutral-800/80 rounded-full text-md font-clash  bg-white/20 backdrop-blur-md text-white  font-medium hover:bg-white/20 transition-all border border-white/20 shadow-sm'>
							Cultural Commons
						</span>
						<span className='px-3 py-1.5 bg-neutral-800/80 rounded-full text-md font-clash  bg-white/20 backdrop-blur-md text-white  font-medium hover:bg-white/20 transition-all border border-white/20 shadow-sm'>
							Community-Verified
						</span>
						<span className='px-3 py-1.5 bg-neutral-800/80 rounded-full text-md font-clash  bg-white/20 backdrop-blur-md text-white  font-medium hover:bg-white/20 transition-all border border-white/20 shadow-sm'>
							Living Archive
						</span>
					</div>
				</div>

				{/* =========================================
            CARD 3:  COLLABORATION HUB
        ========================================= */}
				<div className='w-full max-w-md bg-gradient-to-b from-[#F9F9F9] to-[#EBEBEB] rounded-[2.5rem] p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col'>
					{/* HEADER SECTION */}
					<div className='flex items-center gap-3 mb-4'>
						<div className='w-8 h-8 flex items-center justify-center'>
							<Zap className='w-6 h-6 text-yellow-500 fill-yellow-500' />
						</div>
						<h2 className='font-clash text-xl font-semi-bold text-gray-900'>
							Collaboration Hub
						</h2>
					</div>

					<p className='font-clash text-[15px] text-gray-700 leading-relaxed mb-10'>
						Create together with total clarity. Set ownership splits and usage
						rights before a project starts. Revenue shares automatically, and
						contributions stay transparent and fairly credited.
					</p>

					{/* FEATURES LIST */}
					<div className='flex flex-col gap-8 mb-10'>
						{/* Item 1 */}
						<div className='flex gap-4 items-start'>
							<div className='mt-0.5'>
								<Lock className='w-5 h-5 text-indigo-500' />
							</div>
							<div>
								<h3 className='font-clash text-[16px] font-medium text-gray-900 mb-1'>
									Locked Agreements
								</h3>
								<p className='font-clash text-[13px] text-gray-500 leading-relaxed'>
									Ownership, rights, and contribution terms set upfront and
									transparently recorded.
								</p>
							</div>
						</div>

						{/* Item 2 */}
						<div className='flex gap-4 items-start'>
							<div className='mt-0.5'>
								<Users className='w-5 h-5 text-yellow-500' />
							</div>
							<div>
								<h3 className='font-clash text-[16px] font-medium text-gray-900 mb-1'>
									Find Your Team
								</h3>
								<p className='font-clash text-[13px] text-gray-500 leading-relaxed'>
									Discover creators, communities, or experts to collaborate on
									any project.
								</p>
							</div>
						</div>

						{/* Item 3 */}
						<div className='flex gap-4 items-start'>
							<div className='mt-0.5'>
								<ClipboardList className='w-5 h-5 text-purple-600' />
							</div>
							<div>
								<h3 className='font-clash text-[16px] font-medium text-gray-900 mb-1'>
									Shared Workspace
								</h3>
								<p className='font-clash text-[13px] text-gray-500 leading-relaxed'>
									Tasks, files, and conversations in one clear, shared project
									space.
								</p>
							</div>
						</div>

						{/* Item 4 */}
						<div className='flex gap-4 items-start'>
							<div className='mt-0.5'>
								<Wallet className='w-5 h-5 text-green-600' />
							</div>
							<div>
								<h3 className='font-clash text-[16px] font-medium text-gray-900 mb-1'>
									Flexible Value Sharing
								</h3>
								<p className='font-clash text-[13px] text-gray-500 leading-relaxed'>
									Distribute revenue when applicable, or ensure fair credit and
									recognition for every contribution.
								</p>
							</div>
						</div>
					</div>

					{/* MOCKUP UI WIDGET */}
					<div className='w-full bg-[#EAEAEA] rounded-3xl p-5 border border-white/40 shadow-inner mt-auto relative'>
						{/* Mac Dots & Header */}
						<div className='flex items-center justify-center mb-4 relative'>
							<div className='absolute left-0 flex gap-1.5'>
								<div className='w-2.5 h-2.5 rounded-full bg-red-400'></div>
								<div className='w-2.5 h-2.5 rounded-full bg-yellow-400'></div>
								<div className='w-2.5 h-2.5 rounded-full bg-green-400'></div>
							</div>
							<span className='font-clash text-[10px] font-medium text-gray-500'>
								Collaboration Hub
							</span>
						</div>

						{/* Active Project Card */}
						<div className='bg-[#D9D9D9]/50 rounded-2xl p-4'>
							<p className='font-clash text-[9px] font-bold text-gray-500 tracking-wider mb-1'>
								ACTIVE PROJECT
							</p>
							<h4 className='font-clash text-lg font-medium text-gray-900 mb-1'>
								West African Textile Archive
							</h4>
							<p className='font-clash text-[11px] text-gray-600'>
								3 collaborators &nbsp;•&nbsp; 12 badges created
							</p>
						</div>

						{/* Stats Row */}
						<div className='flex gap-3 mt-3'>
							{/* Revenue Split */}
							<div className='flex-1  rounded-xl p-3 shadow-sm border border-gray-100 flex flex-col justify-center'>
								<p className='font-clash text-[10px] font-semibold text-blue-800 mb-1'>
									Revenue Split
								</p>
								<p className='font-clash text-[15px] font-medium text-gray-900 leading-none'>
									40 / 40 / 20
								</p>
							</div>

							{/* Earned */}
							<div className='flex-1 rounded-xl p-3 shadow-sm border border-gray-100 flex flex-col justify-center'>
								<p className='font-sans text-[10px] font-semibold text-yellow-700 mb-1'>
									Earned (USDC)
								</p>
								<p className='font-clash text-[15px] font-medium text-gray-900 leading-none'>
									$2,340
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* =========================================
    CARD 4: LENS AI (Spans both columns)
========================================= */}
				<div className='bg-[#0f1d14] rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl md:col-span-2 relative overflow-hidden flex flex-col md:flex-row gap-10 md:gap-16 items-center border border-green-900/50 hover:border-green-800 transition'>
					{/* Background Image */}
					<img
						src='/3img.jpg'
						alt='Lens AI Background'
						className='absolute inset-0 w-full h-full object-cover z-0 opacity-80'
					/>
					<div className='absolute inset-0 bg-gradient-to-r from-[#0f1d14] via-[#0f1d14]/90 to-[#0f1d14]/40 z-0 pointer-events-none'></div>

					{/* Left Text Section */}
					<div className='relative z-10 w-full md:w-[45%] flex flex-col justify-center text-left pt-4 md:pt-0'>
						<div className='flex items-center gap-3 mb-5'>
							<Sparkles className='w-7 h-7 text-[#FBBF24] fill-[#FBBF24]' />
							<h3 className='text-3xl font-clash font-medium text-white tracking-wide'>
								Lens AI
							</h3>
						</div>
						<p className='text-gray-300 font-clash text-[15px] leading-relaxed max-w-sm'>
							Your cultural co-pilot. Lens enhances recordings, transcribes oral
							histories, translates languages, and connects your work to
							relevant communities. It handles the complexity.
						</p>
					</div>

					{/* Right Chat UI Section (Perfected Fit) */}
					<div className='relative z-10 w-full max-w-[420px] mx-auto md:ml-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-5 sm:p-6 shadow-2xl flex flex-col h-[520px]'>
						{/* Aperture Header Icon */}
						<div className='mb-4'>
							<img
								src='/Vector .png'
								alt='Aperture Icon'
								className='w-8 h-8 object-contain'
							/>
						</div>

						{/* Right User Chat Bubble */}
						<div className='flex justify-end mb-4'>
							{/* Changed to px-4 py-3 and leading-normal to save vertical space */}
							<div className='bg-white/10 border border-white/10 px-4 py-2 rounded-3xl rounded-tr-sm text-[13px] font-clash text-white/90 shadow-lg max-w-[85%] leading-normal'>
								"Enhance this village elder recording and transcribe to
								English."
							</div>
						</div>

						{/* Left Lens AI Chat Bubble */}
						<div className='flex justify-start mb-4'>
							{/* Changed to px-4 py-3 and leading-normal */}
							<div className='bg-white/10 border border-white/10 px-4 py-3 rounded-3xl rounded-tl-sm text-[13px] font-clash text-gray-300 shadow-lg max-w-[90%] leading-normal'>
								Transcription complete. Detected language: Igbo (Nsukka
								dialect). I've also found 3 related oral histories in the
								archive you may want to connect.
							</div>
						</div>

						{/* Stacked Action Pills */}
						<div className='grid grid-cols-2 gap-2 w-full mb-4'>
							{[
								'View transcription',
								'Connect related items',
								'Translate to French',
							].map((text) => (
								<button
									key={text}
									className='w-max px-2 py-2 bg-transparent border border-white/30 rounded-full text-[10px] font-clash text-gray-300 hover:bg-white/10 hover:text-white transition'
								>
									{text}
								</button>
							))}
						</div>

						{/* Bottom Input Bar - Stays perfectly at bottom due to mt-auto */}
						<div className='mt-auto flex items-center justify-between bg-transparent border border-white/30 rounded-2xl px-4 py-3 hover:border-white/50 transition cursor-text'>
							<div className='flex items-center gap-3'>
								<Plus className='w-5 h-5 text-gray-400' />
								<span className='text-gray-400 text-[13px] font-clash'>
									Seek Cultural Insight...
								</span>
							</div>
							<div className='flex items-center gap-3'>
								<Mic className='w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition' />
								<div className='w-7 h-7 bg-black rounded-full flex items-center justify-center shadow-md'>
									<Volume2 className='w-4 h-4 text-white cursor-pointer' />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* =========================================
            CARD 5: COMMUNITY ARCHIVES
        ========================================= */}
				<div className='w-full max-w-md bg-gradient-to-b from-[#FDFDFD] to-[#EAEAEA] rounded-[2.5rem] p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col'>
					{/* HEADER SECTION */}
					<div className='flex items-center gap-3 mb-4'>
						{/* Lucide BadgeCheck with orange fill and white checkmark */}
						<BadgeCheck className='w-8 h-8 text-white fill-[#FF7518]' />
						<h2 className='font-clash text-xl font-semi-bold text-gray-900'>
							Community Archives
						</h2>
					</div>

					<p className='font-clash text-[15px] text-gray-700 leading-relaxed mb-8'>
						A digital home for your culture. Document oral histories, art,
						dance, food traditions, rituals, crafts, and everyday life. Manage
						contributions, verify authenticity, and engage your diaspora all
						governed by the community.
					</p>

					{/* MOCKUP UI WIDGET */}
					<div className='w-full bg-gradient-to-b from-[#F4F4F4] to-[#E0E0E0] rounded-[2rem] p-5 md:p-6 border border-white/60 shadow-inner mt-auto'>
						{/* Archive Profile Header */}
						<div className='flex items-center gap-3 mb-6'>
							<div className='w-10 h-10 rounded-xl overflow-hidden shadow-sm bg-red-900'>
								{/* Swap this src for whatever image you want to use for the Maasai icon */}
								<img
									src='/1img.jpg'
									alt='Maasai Heritage'
									className='w-full h-full object-cover'
								/>
							</div>
							<div>
								<h4 className='font-clash text-[15px] font-light text-gray-900 leading-tight'>
									Maasai Heritage Archive
								</h4>
								<p className='font-clash text-[11px] text-gray-500 mt-0.5'>
									Est. 2024 &nbsp;•&nbsp; 100 members
								</p>
							</div>
						</div>

						{/* 3-Column Stats Row */}
						<div className='grid grid-cols-3 gap-3 mb-6'>
							<div className=' rounded-2xl py-3.5 flex flex-col items-center shadow-sm'>
								<span className='font-clash text-lg font-medium text-gray-900 leading-none mb-1'>
									342
								</span>
								<span className='font-clash text-[11px] text-gray-500'>
									Items
								</span>
							</div>
							<div className=' rounded-2xl py-3.5 flex flex-col items-center shadow-sm'>
								<span className='font-clash text-lg font-medium text-gray-900 leading-none mb-1'>
									28
								</span>
								<span className='font-clash text-[11px] text-gray-500'>
									Verified
								</span>
							</div>
							<div className=' rounded-2xl py-3.5 flex flex-col items-center shadow-sm'>
								<span className='font-clash text-lg font-medium text-gray-900 leading-none mb-1'>
									12
								</span>
								<span className='font-clash text-[11px] text-gray-500'>
									Languages
								</span>
							</div>
						</div>

						{/* Content List Items */}
						<div className='flex flex-col gap-2.5'>
							<div className=' rounded-xl px-4 py-3 shadow-sm flex items-center gap-3'>
								<div className='w-1.5 h-1.5 bg-black rounded-full'></div>
								<span className='font-clash text-[12px] text-gray-800'>
									Beadwork patterns (38 items)
								</span>
							</div>

							<div className=' rounded-xl px-4 py-3 shadow-sm flex items-center gap-3'>
								<div className='w-1.5 h-1.5 bg-black rounded-full'></div>
								<span className='font-clash text-[12px] text-gray-800'>
									Migration songs (14 recordings)
								</span>
							</div>

							<div className=' rounded-xl px-4 py-3 shadow-sm flex items-center gap-3'>
								<div className='w-1.5 h-1.5 bg-black rounded-full'></div>
								<span className='font-clash text-[12px] text-gray-800'>
									Cattle branding marks (22 photos)
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
