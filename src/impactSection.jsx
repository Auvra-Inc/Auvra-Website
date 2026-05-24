import React, { useState, useEffect, useRef } from 'react';

// --- CUSTOM HOOK FOR COUNTING NUMBERS (WITH SCROLL SENSOR) ---
const AnimatedCounter = ({ target, duration = 600 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null); 
  const [hasAnimated, setHasAnimated] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime = null;
          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const current = Math.min(Math.floor((progress / duration) * target), target);
            setCount(current);
            if (current < target) {
              requestAnimationFrame(animateCount);
            }
          };
          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.5 } 
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, [target, duration, hasAnimated]);

  return <span ref={countRef}>{count}</span>;
};

export default function ImpactSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      src: "/fitness.mp4",
      label: "Preserving Motion",
      title: "Dance rituals preserved in every frame",
      description:
        "Auvra captures movement, rhythm, and ancestry so traditional performances stay alive for future generations.",
    },
    {
      src: "/digital.mp4",
      label: "Shared Knowledge",
      title: "Digital stories, shared across cultures",
      description:
        "Each clip becomes a living record of community heritage, language, and craftsmanship curated in one place.",
    },
    {
      src: "/software.mp4",
      label: "Creative Play",
      title: "Tools to document, remix, and protect culture",
      description:
        "From software to sound, Auvra gives creators a secure place to build, verify, and share cultural innovation.",
    },
    {
      src: "/nG8aNSXF9bVc3wia1eVPP35Z5c8.mp4",
      label: "Audio Legacy",
      title: "Voices and ceremonies archived beautifully",
      description:
        "Auvra turns oral histories into permanent cultural anchors with captions, context, and trusted attribution.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const currentVideo = carouselItems[currentSlide];

  return (
		<section className='w-full bg-white text-gray-900 py-20 px-6 flex flex-col items-center overflow-hidden'>
			{/* =========================================
          PLANET SPIN 3D GLOBE STYLES
      ========================================= */}
			<style>{`
        @keyframes spinEarth {
          /* We horizontally offset the background map from far left to far right */
          from { background-position: -200% 0; }
          to { background-position: 0 0; }
        }
        .real-3d-globe {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          /* We continue using your pre-shaped earth ball texture */
          background-image: url('/earth-ball.png');
          
          /* CRITICAL FOR SPIN: We must use 'cover' or specific scaling, not 'contain',
             to allow the texture to repeat seamlessly. */
          background-size: cover; 
          background-position: center;
          background-repeat: repeat-x; /* Repeats horizontally for infinite spin */
          
          /* Adds a premium depth shadow to simulate light hitting a sphere */
          filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1));
          
          /* The Planet Spin Animation: smooth, continuous sideways movement */
          animation: spinEarth 20s linear infinite;
        }
      `}</style>

			{/* =========================================
          SECTION 1: THE CAROUSEL
      ========================================= */}
			<div className='max-w-md w-full flex flex-col items-center mb-32'>
				<span className='text-xs font-medium font-clash uppercase tracking-widest text-gray-400 mb-4 border border-gray-200 rounded-full px-4 py-1'>
					A shared task
				</span>
				<h2 className='font-clash text-4xl font-medium text-center leading-tight mb-2'>
					How people use <br /> Auvra every day
				</h2>

				<div className='flex items-center gap-2 mb-10 text-sm'>
					<span className='font-bold font-clash'>4.8/5</span>
					<div className='flex text-yellow-400 text-xs'>★★★★★</div>
					<span className='text-gray-500 font-clash'>
						(Trusted by 10.0k+ people)
					</span>
				</div>

				<div className='relative w-full aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-xl mb-8'>
					<div className='absolute inset-x-0 top-4 z-20 px-6'>
						<span className='inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white font-semibold'>
							{currentVideo.label}
						</span>
					</div>
					{carouselItems.map((item, index) => (
						<video
							key={index}
							src={item.src}
							autoPlay
							muted
							loop
							playsInline
							className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
							index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
						}`}
						/>
					))}
					<div className='absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/70 to-transparent px-6 py-6'>
						<h3 className='text-xl font-clash font-semibold text-white mb-2'>
							{currentVideo.title}
						</h3>
						<p className='text-sm text-gray-200 leading-relaxed'>
							{currentVideo.description}
						</p>
					</div>				</div>
				<div className='flex gap-4'>
					<button
						onClick={prevSlide}
						className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition active:scale-95'
					>
						←
					</button>
					<button
						onClick={nextSlide}
						className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition active:scale-95'
					>
						→
					</button>
				</div>
			</div>

			{/* =========================================
          SECTION 2: THE GLOBE & STATS
      ========================================= */}
			<div className='max-w-md w-full flex flex-col items-center text-center'>
				<span className='text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4'>
					Preservation numbers
				</span>
				<h2 className='font-clash text-4xl font-medium leading-tight mb-16'>
					How culture stays <br /> alive on Auvra
				</h2>

				<div className='mb-8 relative'>
					<h3 className='font-clash text-[5.5rem] font-medium leading-none text-[#FF5A1F] drop-shadow-[0_0_20px_rgba(255,90,31,0.4)]'>
						<AnimatedCounter target={100} />+
					</h3>
					<p className='text-gray-600 font-medium text-lg mt-2'>
						Languages documented
					</p>
				</div>

				{/* THE NEW FLOATING PRE-SHAPED EARTH */}
				<div className='w-full max-w-[320px] aspect-square my-10 relative'>
					<div className='real-3d-globe'></div>
				</div>

				<div className='mb-16 mt-6'>
					<h3 className='font-clash text-5xl font-medium leading-none text-gray-900'>
						<AnimatedCounter target={94} />
						<span className='text-purple-600'>%</span>
					</h3>
					<p className='text-gray-500 text-sm font-clash max-w-[200px] mx-auto mt-2 leading-relaxed'>
						of cultural records verified by community elders
					</p>
				</div>

				<div className='mb-16'>
					<h3 className='font-clash text-5xl font-medium leading-none text-gray-900'>
						<AnimatedCounter target={52} />
						<span className='text-blue-500'>+</span>
					</h3>
					<p className='text-gray-500 font-clash text-sm mt-2'>
						elders sharing their stories
					</p>
				</div>

				<div className='mb-10'>
					<h3 className='font-clash text-5xl font-medium leading-none text-gray-900'>
						<AnimatedCounter target={87} />
						<span className='text-purple-600'>%</span>
					</h3>
					<p className='text-gray-500 font-clash text-sm max-w-[200px] mx-auto mt-2 leading-relaxed'>
						of languages have active contributors
					</p>
				</div>
			</div>
		</section>
	);
}