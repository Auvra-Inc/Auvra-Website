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

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
	};

	const fadeInLeft = {
		hidden: { opacity: 0, x: -40 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
	};

	const fadeInRight = {
		hidden: { opacity: 0, x: 40 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2
			}
		}
	};

	const valueCardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
	};

	return (
		<div className='w-full bg-white pb-20 overflow-hidden'>
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
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
					className='max-w-5xl'
				>
					<motion.h1 
						variants={fadeInUp}
						className='text-2xl text-center md:text-4xl font-clash font-medium text-black leading-tight tracking-tight mb-12 mt-8'
					>
						The stories we keep today become the foundation for tomorrow.
					</motion.h1>
					
					<motion.div variants={fadeInUp}>
						<PartnersSection />
					</motion.div>
					
					<motion.div 
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className='pt-7 text-black font-clash leading-relaxed space-y-12 max-w-3xl'
					>
						<motion.p variants={fadeInRight} className='text-black'>
							The voices we record now will speak to generations not yet born.
							The culture we preserve is the only inheritance that truly
							matters.
						</motion.p>
						
						<motion.p 
							variants={fadeInRight}
							className='font-medium text-black pt-4'
							style={{ fontWeight: 450 }}
						>
							This is why Auvra exists.
						</motion.p>
						
						<motion.p variants={fadeInRight} className='text-black'>
							We are the permanent home for human culture. Infrastructure for
							creators, communities, and families to preserve what they love,
							own what they make, and pass it down.
						</motion.p>
						
						<motion.p 
							variants={fadeInRight}
							className='font-medium text-black font-clash'
							style={{ fontWeight: 450 }}
						>
							Not as a relic. Not as a file. But as something that lives.
						</motion.p>
					</motion.div>
				</motion.div>
			</section>

			{/* 2. THE PROBLEM SECTION */}
			<motion.section 
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className='w-full bg-gray-50 py-24'
			>
				<div className='max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24'>
					<motion.div 
						variants={fadeInLeft}
						className='w-full md:w-1/3'
					>
						<h2 className='text-3xl md:text-4xl font-clash font-semibold text-black leading-snug'>
							The Problem We Could Not Ignore
						</h2>
					</motion.div>

					<motion.div 
						variants={staggerContainer}
						className='w-full md:w-2/3 space-y-8 text-black font-clash leading-relaxed'
					>
						<motion.p variants={fadeInRight} className='text-lg md:text-xl text-black'>
							Every forty days, a language falls silent. With it, songs,
							rituals, techniques, and entire ways of seeing the world
							disappear.
						</motion.p>
						
						<motion.p variants={fadeInRight} className='text-lg md:text-xl text-black'>
							The platforms we trusted were never built for permanence. They
							were built for engagement. For algorithms. For fleeting attention.
						</motion.p>
						
						<motion.p variants={fadeInRight} className='text-lg md:text-xl text-black'>
							Creators lose most of what they earn. Families have nowhere
							private to store what matters most. When a platform ends, the
							culture ends with it.
						</motion.p>
						
						<motion.p 
							variants={fadeInRight}
							className='font-medium text-black text-lg md:text-xl font-clash pt-4'
							style={{ fontWeight: 450 }}
						>
							We refused to accept this.
						</motion.p>
					</motion.div>
				</div>
			</motion.section>

			{/* 3. MISSION & VISION SECTION */}
			<motion.section 
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className='w-full bg-black py-24 text-white'
			>
				<div className='max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24'>
					<motion.div 
						variants={fadeInLeft}
						className='group'
					>
						<motion.h2 
							className='text-sm font-clash font-semibold uppercase tracking-widest text-gray-400 mb-6'
							whileHover={{ x: 5 }}
						>
							Our Mission
						</motion.h2>
						<motion.p 
							className='text-2xl md:text-4xl font-clash font-medium leading-relaxed text-white'
							whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
						>
							To preserve, structure, and empower culture by giving creators,
							communities, and institutions the tools to own and pass down their
							cultural assets.
						</motion.p>
					</motion.div>

					<motion.div 
						variants={fadeInRight}
						className='group'
					>
						<motion.h2 
							className='text-sm font-clash font-semibold uppercase tracking-widest text-gray-400 mb-6'
							whileHover={{ x: 5 }}
						>
							Our Vision
						</motion.h2>
						<motion.p 
							className='text-2xl md:text-4xl font-clash font-medium leading-relaxed text-gray-200'
							whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
						>
							To become the global infrastructure where human culture is
							permanently stored, intelligently understood, and generationally
							transferred.
						</motion.p>
					</motion.div>
				</div>
			</motion.section>

			{/* 4. C.U.L.T.U.R.E. VALUES GRID */}
			<section className='max-w-7xl mx-auto px-6 md:px-12 py-24'>
				<motion.div 
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className='mb-16 max-w-3xl'
				>
					<motion.h2 
						variants={fadeInLeft}
						className='text-4xl md:text-5xl font-clash font-bold text-black tracking-tight mb-6'
					>
						What Guides Us
					</motion.h2>
					<motion.p 
						variants={fadeInLeft}
						className='text-md text-black font-clash leading-relaxed'
					>
						At Auvra, our mission is powered by our C.U.L.T.U.R.E. values. These
						principles are the foundation of our product, our community, and our
						vision for a digitally-preserved heritage.
					</motion.p>
				</motion.div>

				<motion.div 
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16'
				>
					{values.map((value, index) => (
						<motion.div
							key={index}
							variants={valueCardVariants}
							whileHover={{ y: -8, transition: { duration: 0.2 } }}
							className='flex flex-col border-t border-gray-200 pt-8 group cursor-pointer'
						>
							<motion.h3 
								className='text-2xl font-clash text-black mb-4 group-hover:text-gray-700 transition-colors duration-300'
								style={{ fontWeight: 500 }}
							>
								{value.title}
							</motion.h3>
							<motion.p 
								className='text-black font-clash leading-relaxed group-hover:text-gray-700 transition-colors duration-300'
							>
								{value.description}
							</motion.p>
						</motion.div>
					))}
				</motion.div>
			</section>
		</div>
	);
}
