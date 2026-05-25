import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';
import PartnersSection from '../partnerSection';

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
				'We operate with honesty and clarity. From our onboarding flows to our blockchain transactions, we build trust by being open about our processes and holding ourselves to the highest ethical standards.',
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

	return (
		<div className='w-full bg-white  pb-20'>
			<Helmet>
                <title>About Us | Auvra</title>
                <meta name="description" content="Learn about Auvra's mission to build the permanent infrastructure for human culture, language preservation, and digital heritage stewardship." />
                
                {/* Open Graph / Social Media Platforms */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Us | Auvra" />
                <meta property="og:description" content="Learn about Auvra's mission to build the permanent infrastructure for human culture, language preservation, and digital heritage stewardship." />
                <meta property="og:image" content="https://goauvra.com/about-preview.png" />
                <meta property="og:url" content="https://goauvra.com/about" />

                {/* Twitter / LinkedIn Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us | Auvra" />
                <meta name="twitter:description" content="Learn about Auvra's mission to build the permanent infrastructure for human culture, language preservation, and digital heritage stewardship." />
                <meta name="twitter:image" content="https://goauvra.com/about-preview.png" />
            </Helmet>

			{/* NAVBAR */}
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
						<p className='font-semibold text-black pt-4'>
							This is why Auvra exists.
						</p>
						<p>
							We are the permanent home for human culture. Infrastructure for
							creators, communities, and families to preserve what they love,
							own what they make, and pass it down.
						</p>
						<p className='font-medium text-black font-clash'>
							Not as a relic. Not as a file. But as something that lives.
						</p>
					</div>
				</motion.div>
			</section>

			{/* 2. THE PROBLEM SECTION */}
			<section className='w-full bg-gray-50 py-15'>
				<div className='max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24'>
					<div className='w-full md:w-1/3'>
						<h2 className='text-3xl md:text-4xl font-clash font-semibold text-black leading-snug'>
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
						<p className='font-semibold text-black text-lg font-clash pt-4'>
							We refused to accept this.
						</p>
					</div>
				</div>
			</section>

			{/* 3. MISSION & VISION SECTION */}
			<section className='w-full bg-black py-24 text-white'>
				<div className='max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24'>
					<div>
						<h2 className='text-sm font-clash font-semibold uppercase tracking-widest text-gray-400 mb-6'>
							Our Mission
						</h2>
						<p className='text-2xl md:text-4xl font-clash font-medium leading-relaxed'>
							To preserve, structure, and empower culture by giving creators,
							communities, and institutions the tools to own and pass down their
							cultural assets.
						</p>
					</div>

					<div>
						<h2 className='text-sm font-clash font-semibold uppercase tracking-widest text-gray-400 mb-6'>
							Our Vision
						</h2>
						<p className='text-2xl md:text-4xl font-clash font-medium leading-relaxed text-gray-300'>
							To become the global infrastructure where human culture is
							permanently stored, intelligently understood, and generationally
							transferred.
						</p>
					</div>
				</div>
			</section>

			{/* 4. C.U.L.T.U.R.E. VALUES GRID */}
			<section className='max-w-7xl mx-auto px-6 md:px-12 py-24'>
				<div className='mb-16 max-w-3xl'>
					<h2 className='text-4xl md:text-5xl font-clash font-bold text-black tracking-tight mb-6'>
						What Guides Us
					</h2>
					<p className='text-md text-black font-clash leading-relaxed'>
						At Auvra, our mission is powered by our C.U.L.T.U.R.E. values. These
						principles are the foundation of our product, our community, and our
						vision for a digitally-preserved heritage.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16'>
					{values.map((value, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className='flex flex-col border-t border-gray-200 pt-8'
						>
							<h3 className='text-2xl font-clash font-semibold text-black mb-4'>
								{value.title}
							</h3>
							<p className='text-black font-clash leading-relaxed'>
								{value.description}
							</p>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
}
