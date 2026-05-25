import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';
import PartnersSection from '../partnerSection';

// Icon components for each value - RECTANGLE with rounded edges, white background
const Icons = {
  'Cultural Integrity.': (
    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.636 3.636a9 9 0 1 1 12.728 12.728M9 13h.01M15 13h.01M12 17h.01M12 2v1M2 12h1M21 12h1M5.636 5.636l-.707-.707M18.364 18.364l-.707-.707" />
      </svg>
    </div>
  ),
  'Universal Access.': (
    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
  ),
  'Lasting Stewardship.': (
    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z" />
      </svg>
    </div>
  ),
  'Trust Through Transparency.': (
    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </div>
  ),
  'User Empowerment.': (
    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </div>
  ),
  'Respectful Collaboration.': (
    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    </div>
  ),
  'Excellence in Craft.': (
    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    </div>
  ),
};

export default function About() {
	const values = [
		{
			title: 'Cultural Integrity.',
			description:
				'We treat cultural heritage with the utmost respect and reverence. We prioritize authentic storytelling, verifiable provenance, and ethical representation in everything we do.',
		},
		{
			title: 'Universal Access.',
			description:
				'We believe the tools to preserve and celebrate culture should be available to all. We break down technological and financial barriers through seamless design, gasless minting, and multi-currency support.',
		},
		{
			title: 'Lasting Stewardship.',
			description:
				'We are builders for the long term. We create sustainable economic models for creators and design digital artifacts meant to be cherished and preserved for generations to come.',
		},
		{
			title: 'Trust Through Transparency.',
			description:
				'We treat cultural heritage with the utmost respect and reverence. We prioritize authentic storytelling, verifiable provenance, and ethical representation in everything we do.',
		},
		{
			title: 'User Empowerment.',
			description:
				'We design with deep empathy for our users. We empower creators to own their narrative and monetize their work, and we empower collectors to discover, connect, and support meaningfully.',
		},
		{
			title: 'Respectful Collaboration.',
			description:
				'We believe in the power of community. We foster meaningful connections between creators and collectors and work collaboratively to build an ecosystem that benefits all participants.',
		},
		{
			title: 'Excellence in Craft.',
			description:
				'We honor culture through excellence. We pursue beautiful, immersive, and museum-quality design in every detail of our product experience, from the narrative to the interface.',
		},
	];

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.5,
				ease: "easeOut"
			}
		})
	};

	return (
		<div className='w-full bg-white pb-20'>
			<Helmet>
                <title>About Us | Auvra</title>
                <meta name="description" content="Learn about Auvra's mission to build the permanent infrastructure for human culture, language preservation, and digital heritage stewardship." />
                
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Us | Auvra" />
                <meta property="og:description" content="Learn about Auvra's mission to build the permanent infrastructure for human culture, language preservation, and digital heritage stewardship." />
                <meta property="og:image" content="https://goauvra.com/about-preview.png" />
                <meta property="og:url" content="https://goauvra.com/about" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us | Auvra" />
                <meta name="twitter:description" content="Learn about Auvra's mission to build the permanent infrastructure for human culture, language preservation, and digital heritage stewardship." />
                <meta name="twitter:image" content="https://goauvra.com/about-preview.png" />
            </Helmet>

			<Navbar />

			{/* 1. HERO SECTION */}
			<section className='max-w-7xl mx-auto pt-32 px-6 md:px-12 mb-24'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='max-w-5xl'
				>
					<h1 className='text-2xl text-center md:text-4xl font-clash font-medium text-black leading-tight tracking-tight mb-12 mt-8'>
						The stories we keep today become the foundation for tomorrow.
					</h1>
					<PartnersSection />
					<div className=' pt-7 md:text-xl text-black font-clash leading-relaxed space-y-12 max-w-3xl'>
						<p>
							The voices we record now will speak to generations not yet born.
							The culture we preserve is the only inheritance that truly
							matters.
						</p>
						<p className='font-medium text-black pt-4'>
							This is why Auvra exists.
						</p>
						<p>
							We are the permanent home for human culture. Infrastructure for
							creators, communities, and families to preserve what they love,
							own what they make, and pass it down.
						</p>
						<p className='font-normal text-black font-clash'>
							Not as a relic. Not as a file. But as something that lives.
						</p>
					</div>
				</motion.div>
			</section>

			{/* 2. THE PROBLEM SECTION */}
			<section className='w-full bg-gray-50 py-15'>
				<div className='max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24'>
					<div className='w-full md:w-1/3'>
						<h2 className='text-3xl md:text-4xl font-clash font-medium text-black leading-snug'>
							The Problem We Could Not Ignore
						</h2>
					</div>

					<div className='w-full md:w-2/3 space-y-8 text-lg md:text-xl text-black font-clash leading-relaxed'>
						<p>
							Every forty days, a language falls silent. With it, songs,
							rituals, techniques, and entire ways of seeing the world
							disappear.
						</p>
						<p>
							The platforms we trusted were never built for permanence. They
							were built for engagement. For algorithms. For fleeting attention.
						</p>
						<p>
							Creators lose most of what they earn. Families have nowhere
							private to store what matters most. When a platform ends, the
							culture ends with it.
						</p>
						<p className='font-medium text-black text-lg font-clash pt-4'>
							We refused to accept this.
						</p>
					</div>
				</div>
			</section>

			{/* 3. MISSION & VISION SECTION */}
			<section className='w-full bg-black py-24 text-white'>
				<div className='max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24'>
					<div>
						<h2 className='text-sm font-clash font-medium uppercase tracking-widest text-gray-400 mb-6'>
							Our Mission
						</h2>
						<p className='text-2xl md:text-4xl font-clash font-normal leading-relaxed'>
							To preserve, structure, and empower culture by giving creators,
							communities, and institutions the tools to own and pass down their
							cultural assets.
						</p>
					</div>

					<div>
						<h2 className='text-sm font-clash font-medium uppercase tracking-widest text-gray-400 mb-6'>
							Our Vision
						</h2>
						<p className='text-2xl md:text-4xl font-clash font-normal leading-relaxed text-gray-300'>
							To become the global infrastructure where human culture is
							permanently stored, intelligently understood, and generationally
							transferred.
						</p>
					</div>
				</div>
			</section>

			{/* 4. C.U.L.T.U.R.E. VALUES GRID */}
			<section className='max-w-7xl mx-auto px-6 md:px-12 py-24'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className='mb-12 max-w-3xl'
				>
					<h2 className='text-4xl md:text-5xl font-clash font-semibold text-black tracking-tight mb-4'>
						What Guides Us
					</h2>
					<p className='text-md text-black font-clash leading-relaxed'>
						At Auvra, our mission is powered by our C.U.L.T.U.R.E. values. These
						principles are the foundation of our product, our community, and our
						vision for a digitally-preserved heritage.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
					{values.map((value, index) => (
						<motion.div
							key={index}
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							// MAIN CARD = Light grey background with rounded edges
							className='bg-gray-50 rounded-xl p-5 md:p-6'
						>
							{/* ICON CONTAINER = White rectangle with rounded edges (not circle) */}
							<div className="mb-3">
								{Icons[value.title]}
							</div>
							
							<h3 className='text-lg md:text-xl font-clash font-medium text-black mb-2'>
								{value.title}
							</h3>
							
							<p className='text-gray-500 font-clash leading-relaxed text-sm'>
								{value.description}
							</p>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
}
