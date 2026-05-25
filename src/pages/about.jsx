import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';
import PartnersSection from '../partnerSection';

// Different icon wrappers for different sections
const WhiteIconWrapper = ({ children }) => (
  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center">
    {children}
  </div>
);

const GreyIconWrapper = ({ children }) => (
  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl flex items-center justify-center">
    {children}
  </div>
);

// Icons for C.U.L.T.U.R.E. values - WHITE background
const Icons = {
  'Cultural Integrity.': (
    <WhiteIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.636 3.636a9 9 0 1 1 12.728 12.728M9 13h.01M15 13h.01M12 17h.01M12 2v1M2 12h1M21 12h1M5.636 5.636l-.707-.707M18.364 18.364l-.707-.707" />
      </svg>
    </WhiteIconWrapper>
  ),
  'Universal Access.': (
    <WhiteIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </WhiteIconWrapper>
  ),
  'Lasting Stewardship.': (
    <WhiteIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z" />
      </svg>
    </WhiteIconWrapper>
  ),
  'Trust Through Transparency.': (
    <WhiteIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </WhiteIconWrapper>
  ),
  'User Empowerment.': (
    <WhiteIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </WhiteIconWrapper>
  ),
  'Respectful Collaboration.': (
    <WhiteIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    </WhiteIconWrapper>
  ),
  'Excellence in Craft.': (
    <WhiteIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    </WhiteIconWrapper>
  ),
};

// Icons for How We Achieve This - GREY background
const HowWeAchieveIcons = {
  blockchain: (
    <GreyIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </GreyIconWrapper>
  ),
  community: (
    <GreyIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    </GreyIconWrapper>
  ),
  storage: (
    <GreyIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375 7.444 2.25 12 2.25s8.25 1.847 8.25 4.125Zm0 0v5.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-5.25m16.5 7.875c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    </GreyIconWrapper>
  ),
  ai: (
    <GreyIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    </GreyIconWrapper>
  ),
};

// Icons for Our Approach section - GREY background
const ApproachIcons = {
  cocreated: (
    <GreyIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      </svg>
    </GreyIconWrapper>
  ),
  realworld: (
    <GreyIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    </GreyIconWrapper>
  ),
  permanence: (
    <GreyIconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    </GreyIconWrapper>
  ),
};

// Animated Card Component for How We Achieve
const AnimatedHowWeAchieveCard = ({ item, index, colorIndex, isTapped, onTap }) => {
  const colors = ['#ffffff', '#1e3a5f', '#0a0a0a', '#e8a735', '#ffffff'];
  const currentColor = colors[colorIndex % colors.length];
  
  // Different flash colors on tap
  const tapColors = ['#3b82f6', '#f59e0b', '#fbbf24'];
  
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { delay: index * 0.08, duration: 0.5, ease: "easeOut" } }
      }}
      animate={{
        backgroundColor: isTapped ? tapColors[Math.floor(Math.random() * tapColors.length)] : currentColor,
      }}
      transition={{
        backgroundColor: { duration: isTapped ? 0.2 : 0.8, ease: "easeInOut" }
      }}
      onClick={onTap}
      whileTap={{ scale: 0.98 }}
      className='bg-white rounded-2xl p-4 md:p-5 cursor-pointer transition-all duration-300'
      style={{ backgroundColor: currentColor }}
    >
      <div className="mb-3">{item.icon}</div>
      <h3 className='text-lg md:text-xl font-clash font-medium text-black mb-2' style={{ color: currentColor === '#ffffff' ? '#000' : '#fff' }}>
        {item.title}
      </h3>
      <p className='text-gray-700 font-clash leading-relaxed text-sm' style={{ color: currentColor === '#ffffff' ? '#374151' : '#e5e7eb' }}>
        {item.description}
      </p>
    </motion.div>
  );
};

// Animated Card Component for Our Approach with full description reveal
const AnimatedApproachCard = ({ item, index, colorIndex, isTapped, onTap, activeCardIndex, setActiveCardIndex }) => {
  const isActive = activeCardIndex === index;
  const colors = ['#ffffff', '#1e3a5f', '#0a0a0a', '#e8a735', '#ffffff'];
  const currentColor = colors[colorIndex % colors.length];
  const tapColors = ['#3b82f6', '#f59e0b', '#fbbf24'];
  
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { delay: index * 0.15, duration: 0.6, ease: "easeOut" } }
      }}
      animate={{
        backgroundColor: isTapped ? tapColors[Math.floor(Math.random() * tapColors.length)] : currentColor,
      }}
      transition={{
        backgroundColor: { duration: isTapped ? 0.2 : 0.8, ease: "easeInOut" }
      }}
      onClick={() => {
        onTap();
        setActiveCardIndex(isActive ? null : index);
      }}
      whileTap={{ scale: 0.98 }}
      className='bg-white rounded-2xl p-4 md:p-5 cursor-pointer transition-all duration-300'
      style={{ backgroundColor: currentColor }}
    >
      <div className="mb-3">{item.icon}</div>
      <h3 className='text-lg md:text-xl font-clash font-medium mb-2' style={{ color: currentColor === '#ffffff' ? '#000' : '#fff' }}>
        {item.title}
      </h3>
      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.p
            key="full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='font-clash leading-relaxed text-sm'
            style={{ color: currentColor === '#ffffff' ? '#374151' : '#e5e7eb' }}
          >
            {item.fullDescription}
          </motion.p>
        ) : (
          <motion.p
            key="short"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='font-clash leading-relaxed text-sm'
            style={{ color: currentColor === '#ffffff' ? '#374151' : '#e5e7eb' }}
          >
            {item.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function About() {
  const [howWeAchieveColors, setHowWeAchieveColors] = useState([0, 0, 0, 0]);
  const [approachColors, setApproachColors] = useState([0, 0, 0]);
  const [howWeAchieveTaps, setHowWeAchieveTaps] = useState([false, false, false, false]);
  const [approachTaps, setApproachTaps] = useState([false, false, false]);
  const [activeApproachCard, setActiveApproachCard] = useState(null);
  
  const colorIntervalRef = useRef(null);
  const tapResetTimeouts = useRef([]);

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

  const howWeAchieveData = [
    {
      title: 'Blockchain for immutable provenance',
      description: 'Records cannot be altered or deleted.',
      icon: HowWeAchieveIcons.blockchain,
    },
    {
      title: 'Community verification for authenticity',
      description: 'Elders decide what is real. Not algorithms.',
      icon: HowWeAchieveIcons.community,
    },
    {
      title: 'Decentralized storage for permanence',
      description: 'Media lives on IPFS and Arweave. Not on corporate servers.',
      icon: HowWeAchieveIcons.storage,
    },
    {
      title: 'AI for accessibility',
      description: 'Lens AI transcribes and translates oral histories. Built for African languages.',
      icon: HowWeAchieveIcons.ai,
    },
  ];

  const approachData = [
    {
      title: 'Co-created with communities.',
      description: 'Co-created with communities.',
      fullDescription: 'We work alongside cultural custodians, elders, and diaspora groups. Transparent, respectful, and accountable by design.',
      icon: ApproachIcons.cocreated,
    },
    {
      title: 'Built for the real world.',
      description: 'Built for the real world.',
      fullDescription: 'Our infrastructure works offline and in low-connectivity environments. Mobile-first. Private by default. No crypto complexity.',
      icon: ApproachIcons.realworld,
    },
    {
      title: 'Designed for permanence.',
      description: 'Designed for permanence.',
      fullDescription: 'Not engagement. Not algorithms. Not speculation. Blockchain and decentralized storage ensure what you preserve today outlasts us all.',
      icon: ApproachIcons.permanence,
    },
  ];

  // Color cycling effect - runs continuously
  useEffect(() => {
    colorIntervalRef.current = setInterval(() => {
      setHowWeAchieveColors(prev => prev.map(v => v + 1));
      setApproachColors(prev => prev.map(v => v + 1));
    }, 4000);
    
    return () => {
      if (colorIntervalRef.current) clearInterval(colorIntervalRef.current);
      tapResetTimeouts.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const handleHowWeAchieveTap = (index) => {
    setHowWeAchieveTaps(prev => {
      const newTaps = [...prev];
      newTaps[index] = true;
      return newTaps;
    });
    
    const timeout = setTimeout(() => {
      setHowWeAchieveTaps(prev => {
        const newTaps = [...prev];
        newTaps[index] = false;
        return newTaps;
      });
    }, 300);
    tapResetTimeouts.current.push(timeout);
  };

  const handleApproachTap = (index) => {
    setApproachTaps(prev => {
      const newTaps = [...prev];
      newTaps[index] = true;
      return newTaps;
    });
    
    const timeout = setTimeout(() => {
      setApproachTaps(prev => {
        const newTaps = [...prev];
        newTaps[index] = false;
        return newTaps;
      });
    }, 300);
    tapResetTimeouts.current.push(timeout);
  };

  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    })
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    })
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    })
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
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
          <div className='pt-7 md:text-xl text-black font-clash leading-relaxed space-y-12 max-w-3xl'>
            <p>The voices we record now will speak to generations not yet born. The culture we preserve is the only inheritance that truly matters.</p>
            <p className='font-medium text-black pt-4'>This is why Auvra exists.</p>
            <p>We are the permanent home for human culture. Infrastructure for creators, communities, and families to preserve what they love, own what they make, and pass it down.</p>
            <p className='font-normal text-black font-clash'>Not as a relic. Not as a file. But as something that lives.</p>
          </div>
        </motion.div>
      </section>

      {/* 2. THE PROBLEM SECTION */}
      <section className='w-full bg-gray-50 py-15'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeftVariants}
            custom={0}
            className='w-full md:w-1/3'
          >
            <h2 className='text-3xl md:text-4xl font-clash font-medium text-black leading-snug'>The Problem We Could Not Ignore</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRightVariants}
            custom={0}
            className='w-full md:w-2/3 space-y-8 text-lg md:text-xl text-black font-clash leading-relaxed'
          >
            <p>Every forty days, a language falls silent. With it, songs, rituals, techniques, and entire ways of seeing the world disappear.</p>
            <p>The platforms we trusted were never built for permanence. They were built for engagement. For algorithms. For fleeting attention.</p>
            <p>Creators lose most of what they earn. Families have nowhere private to store what matters most. When a platform ends, the culture ends with it.</p>
            <p className='font-medium text-black text-lg font-clash pt-4'>We refused to accept this.</p>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
      <section className='w-full bg-black py-24 text-white'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeftVariants}
            custom={0}
          >
            <h2 className='text-sm font-clash font-medium uppercase tracking-widest text-gray-400 mb-6'>Our Mission</h2>
            <p className='text-2xl md:text-4xl font-clash font-normal leading-relaxed'>To preserve, structure, and empower culture by giving creators, communities, and institutions the tools to own and pass down their cultural assets.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRightVariants}
            custom={0}
          >
            <h2 className='text-sm font-clash font-medium uppercase tracking-widest text-gray-400 mb-6'>Our Vision</h2>
            <p className='text-2xl md:text-4xl font-clash font-normal leading-relaxed text-gray-300'>To become the global infrastructure where human culture is permanently stored, intelligently understood, and generationally transferred.</p>
          </motion.div>
        </div>
      </section>

      {/* 4. HOW WE ACHIEVE THIS SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className='w-full bg-gray-50 py-16'
      >
        <div className='max-w-7xl mx-auto px-6 md:px-12'>
          <div className='text-center mb-12'>
            <h2 className='text-sm md:text-base font-clash font-medium tracking-widest text-gray-500 uppercase mb-6'>HOW WE ACHIEVE THIS</h2>
            <p className='text-3xl md:text-4xl lg:text-5xl font-serif font-light text-black leading-tight max-w-4xl mx-auto italic'>
              We are building the permanent infrastructure where culture is preserved, structured, owned, and passed down across generations.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6'>
            {howWeAchieveData.map((item, index) => (
              <AnimatedHowWeAchieveCard
                key={index}
                item={item}
                index={index}
                colorIndex={howWeAchieveColors[index]}
                isTapped={howWeAchieveTaps[index]}
                onTap={() => handleHowWeAchieveTap(index)}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. OUR APPROACH SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className='w-full bg-gray-50 pt-6 pb-16'
      >
        <div className='max-w-7xl mx-auto px-6 md:px-12'>
          <div className='text-center mb-12'>
            <h2 className='text-sm md:text-base font-clash font-medium tracking-widest text-gray-500 uppercase'>OUR APPROACH</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6'>
            {approachData.map((item, index) => (
              <AnimatedApproachCard
                key={index}
                item={item}
                index={index}
                colorIndex={approachColors[index]}
                isTapped={approachTaps[index]}
                onTap={() => handleApproachTap(index)}
                activeCardIndex={activeApproachCard}
                setActiveCardIndex={setActiveApproachCard}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. C.U.L.T.U.R.E. VALUES GRID */}
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-16'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={0}
          className='mb-12 max-w-3xl'
        >
          <h2 className='text-3xl md:text-4xl font-clash font-medium text-black tracking-tight mb-3'>What Guides Us</h2>
          <p className='text-md text-black font-clash leading-relaxed'>At Auvra, our mission is powered by our C.U.L.T.U.R.E. values. These principles are the foundation of our product, our community, and our vision for a digitally-preserved heritage.</p>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
          {values.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleVariants}
              className='bg-gray-50 rounded-2xl p-4 md:p-5'
            >
              <div className="mb-3">{Icons[value.title]}</div>
              <h3 className='text-lg md:text-xl font-clash font-medium text-black mb-2'>{value.title}</h3>
              <p className='text-gray-700 font-clash leading-relaxed text-sm'>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
