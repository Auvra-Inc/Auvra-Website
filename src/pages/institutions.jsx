// src/pages/institutions.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../reuseables/navbar';

// Icon wrapper component - GREY with shadow
const IconWrapper = ({ children }) => (
  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm">
    {children}
  </div>
);

// Icons matching the words
const Icons = {
  blockchain: (
    <IconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </IconWrapper>
  ),
  storage: (
    <IconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375 7.444 2.25 12 2.25s8.25 1.847 8.25 4.125Zm0 0v5.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-5.25" />
      </svg>
    </IconWrapper>
  ),
  open: (
    <IconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    </IconWrapper>
  ),
  api: (
    <IconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </IconWrapper>
  ),
  community: (
    <IconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    </IconWrapper>
  ),
  bulk: (
    <IconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M9 4v2m6-2v2M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    </IconWrapper>
  ),
  layer: (
    <IconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </IconWrapper>
  ),
  record: (
    <IconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    </IconWrapper>
  ),
  speed: (
    <IconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    </IconWrapper>
  ),
  growth: (
    <IconWrapper>
      <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m15-1.5v.75c0 .414.336.75.75.75h.75M3.75 9h15m-15 3h15m-15 3h15M12 3v15" />
      </svg>
    </IconWrapper>
  ),
};

// Fade up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Institutions() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scrollSections = [
    { title: "Bulk upload", description: "Upload thousands of cultural assets at once via CSV, API, or our dashboard. We handle the infrastructure.", icon: Icons.bulk },
    { title: "Blockchain verification", description: "Every asset becomes a tamper-proof, immutable record on the blockchain. Who created it. Who owned it. Who verified it. Forever.", icon: Icons.blockchain },
    { title: "Open access registry", description: "Make your collections publicly accessible to researchers, journalists, and the diaspora. No login. No paywall.", icon: Icons.open },
    { title: "API integration", description: "Connect Auvra to your existing systems. Pull records into your website. Push discoveries to the registry. Automate workflows.", icon: Icons.api }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const index = Math.min(Math.floor(latest * scrollSections.length), scrollSections.length - 1);
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, scrollSections.length]);

  return (
    <>
      <Helmet>
        <title>Institutional Access | Auvra</title>
        <meta property="og:title" content="Apply for Institutional Access | Auvra" />
        <meta property="og:description" content="For museums and government bodies looking to preserve cultural heritage at scale." />
        <meta property="og:image" content="https://goauvra.com/institutional-preview.png" />
        <meta property="og:url" content="https://goauvra.com/institutions" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white">
        
        {/* HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-screen w-full flex items-center justify-center bg-black"
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gray-800"></div>
          <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-clash font-light text-white mb-6 tracking-tight"
            >
              Auvra for Institutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-200 font-light mb-8 max-w-2xl mx-auto"
            >
              Permanent, verifiable infrastructure for museums, governments, and cultural organizations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/institutional-access"
                className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Apply for Institutional Access →
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ONE INFRASTRUCTURE LAYER */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">{Icons.layer}</div>
              <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                One infrastructure layer
                <br />
                <span className="text-gray-500">for all your preservation needs.</span>
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Whether you are a national museum, a government archive, or a university library, Auvra gives you the tools to preserve, verify, and share cultural heritage permanently. No more fragmented systems. No more lost provenance. No more closed access.
              </p>
            </div>
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden"></div>
          </div>
        </motion.section>

        {/* PERMANENT, IMMUTABLE RECORDS */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-gray-50 py-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-4">{Icons.record}</div>
                <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                  Permanent, immutable records
                  <br />
                  <span className="text-gray-500">Powered by blockchain for tamper‑proof provenance.</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Every artifact, document, or oral history you preserve becomes an immutable record on the blockchain. Who created it. Who owned it. Who verified it. Forever.
                </p>
              </div>
              <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden"></div>
            </div>
          </div>
        </motion.section>

        {/* OPEN ACCESS BY DEFAULT */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">{Icons.open}</div>
              <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                Open access by default
                <br />
                <span className="text-gray-500">Share your collections with the world.</span>
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                The Auvra Registry makes every preserved asset publicly accessible. No login. No paywall. Researchers, journalists, and the diaspora can search, view, and verify your collections from anywhere.
              </p>
            </div>
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden"></div>
          </div>
        </motion.section>

        {/* COMMUNITY + INSTITUTIONAL VERIFICATION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-gray-50 py-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-4">{Icons.community}</div>
                <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                  Community + institutional verification
                  <br />
                  <span className="text-gray-500">Faster, cheaper, more trusted.</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Invite community elders, academic experts, and other institutions to verify authenticity. Consensus builds trust faster than a single signature.
                </p>
              </div>
              <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden"></div>
            </div>
          </div>
        </motion.section>

        {/* BULK UPLOAD AT SCALE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">{Icons.bulk}</div>
              <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                Bulk upload at scale
                <br />
                <span className="text-gray-500">Preserve thousands of assets in minutes.</span>
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Upload collections via CSV, API, or our dashboard. We handle the blockchain and storage. You focus on curation.
              </p>
            </div>
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden"></div>
          </div>
        </motion.section>

        {/* API FOR EVERYTHING */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-gray-50 py-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-4">{Icons.api}</div>
                <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                  API for everything
                  <br />
                  <span className="text-gray-500">Connect your existing systems to Auvra.</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Pull records into your website. Push new discoveries to the registry. Automate preservation workflows. Your data, your systems, our infrastructure.
                </p>
              </div>
              <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden"></div>
            </div>
          </div>
        </motion.section>

        {/* PRESERVE WITH CONFIDENCE - SCROLL CHANGING CARDS */}
        <div className="relative bg-white" style={{ height: `${scrollSections.length * 100}vh` }}>
          <div ref={containerRef} className="sticky top-0 h-screen flex items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-clash font-light text-black mb-8"
                >
                  Preserve with confidence
                </motion.h2>
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 text-center max-w-2xl mx-auto shadow-sm"
                  >
                    <div className="mb-4 flex justify-center">{scrollSections[activeIndex].icon}</div>
                    <h3 className="text-xl font-clash font-medium text-black mb-3">{scrollSections[activeIndex].title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{scrollSections[activeIndex].description}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MADE TO LAST. BUILT TO PERFORM. */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-gray-50 py-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-clash font-light text-black text-center mb-12">
              Made to last. Built to perform.
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 flex gap-4 items-start shadow-sm border border-gray-50">
                <div className="flex-shrink-0">{Icons.blockchain}</div>
                <div>
                  <h3 className="font-medium text-black mb-1 text-sm">Blockchain provenance</h3>
                  <p className="text-gray-400 text-xs">Every record is immutable. No disputes. No lost history.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 flex gap-4 items-start shadow-sm border border-gray-50">
                <div className="flex-shrink-0">{Icons.storage}</div>
                <div>
                  <h3 className="font-medium text-black mb-1 text-sm">Arweave permanent storage</h3>
                  <p className="text-gray-400 text-xs">Pay once. Store forever. No recurring fees. No data loss.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 flex gap-4 items-start shadow-sm border border-gray-50">
                <div className="flex-shrink-0">{Icons.open}</div>
                <div>
                  <h3 className="font-medium text-black mb-1 text-sm">Public registry</h3>
                  <p className="text-gray-400 text-xs">Open access by default. Your collections visible to the world.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 flex gap-4 items-start shadow-sm border border-gray-50">
                <div className="flex-shrink-0">{Icons.api}</div>
                <div>
                  <h3 className="font-medium text-black mb-1 text-sm">Institutional API</h3>
                  <p className="text-gray-400 text-xs">Connect Auvra to your existing systems. Automate workflows.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 flex gap-4 items-start shadow-sm border border-gray-50">
                <div className="flex-shrink-0">{Icons.community}</div>
                <div>
                  <h3 className="font-medium text-black mb-1 text-sm">Community verification</h3>
                  <p className="text-gray-400 text-xs">Trust through consensus. Faster and cheaper than solo experts.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 flex gap-4 items-start shadow-sm border border-gray-50">
                <div className="flex-shrink-0">{Icons.bulk}</div>
                <div>
                  <h3 className="font-medium text-black mb-1 text-sm">Bulk upload dashboard</h3>
                  <p className="text-gray-400 text-xs">Preserve thousands of assets in minutes, not months.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* WHY AUVRA FOR INSTITUTIONS - OSMO STYLE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-6">
              Why Auvra for Institutions?
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-8">
              Level up your preservation infrastructure and join a community of museums, governments, and cultural organizations that refuse to let heritage disappear.
            </p>
          </div>
        </motion.section>

        {/* PRESERVE FASTER AND BETTER - OSMO STYLE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-gray-50 py-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">{Icons.speed}</div>
                <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                  Preserve faster and better
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Our infrastructure saves you years of building from scratch. Every tool is made for real-world cultural assets, so you can focus on preserving what matters.
                </p>
              </div>
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden"></div>
            </div>
          </div>
        </motion.section>

        {/* SPEED UP YOUR PROCESS - OSMO STYLE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-4">{Icons.speed}</div>
              <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                Speed up your process
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                This is not a stripped-down archive. Every feature is built to be fast, flexible, and production-ready. Preserve thousands of assets without trading quality for time.
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden"></div>
          </div>
        </motion.section>

        {/* A LIVING AND GROWING SYSTEM - OSMO STYLE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-gray-50 py-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">{Icons.growth}</div>
                <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                  A living and growing system
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  We keep adding new capabilities every month. The infrastructure evolves with you and your needs. Your toolkit never stops expanding.
                </p>
              </div>
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden"></div>
            </div>
          </div>
        </motion.section>

        {/* YOU'RE IN CONTROL SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6 py-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-6">
            You're in control of your collections
          </h2>
          <p className="text-gray-500 font-light mb-4">
            You control your collections. You control your data. You control who verifies.
          </p>
          <p className="text-gray-400 text-sm">
            The Auvra for Institutions dashboard gives you full control over your preservation workflow.
          </p>
        </motion.div>

        {/* PRICING SECTION - OSMO STYLE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-gray-50 py-20"
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-clash font-light text-black text-center mb-4">
              Pricing
            </h2>
            <p className="text-gray-500 text-center mb-12">
              One platform. Enterprise-ready. Flexible terms.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <h3 className="text-xl font-clash font-medium text-black mb-2">Member</h3>
                <p className="text-gray-400 text-sm mb-4">Institutions getting started with digital preservation</p>
                <p className="text-2xl font-clash font-light text-black">Custom pricing</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <h3 className="text-xl font-clash font-medium text-black mb-2">Enterprise</h3>
                <p className="text-gray-400 text-sm mb-4">Large museums, government archives, national libraries</p>
                <p className="text-2xl font-clash font-light text-black">Custom pricing</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <h3 className="text-xl font-clash font-medium text-black mb-2">Lifetime</h3>
                <p className="text-gray-400 text-sm mb-4">Long-term partnerships, multi-year commitments</p>
                <p className="text-2xl font-clash font-light text-black">Custom pricing</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                Become a member. Join once. Stay part of the preservation community forever. All future updates included.
              </p>
            </div>
          </div>
        </motion.section>

        {/* BENEFITS SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 py-20"
        >
          <h2 className="text-3xl md:text-4xl font-clash font-light text-black text-center mb-12">
            Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-600 text-sm">Blockchain provenance included</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-600 text-sm">Permanent Arweave storage</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-600 text-sm">Public registry access</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-600 text-sm">API integration</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-600 text-sm">Community verification tools</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-600 text-sm">Bulk upload dashboard</span>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <Link to="/institutional-access" className="text-black text-sm underline hover:no-underline">
              View all benefits
            </Link>
          </div>
        </motion.div>

        {/* FINAL CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-gray-50 py-20"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-clash font-light text-black mb-4">
              Try Auvra for Institutions
            </h2>
            <p className="text-gray-500 font-light mb-4">
              Be among the first to build on permanent, verifiable infrastructure for cultural heritage.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Join once. Preserve forever. All future updates included.
            </p>
            <Link 
              to="/institutional-access"
              className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Apply for Institutional Access →
            </Link>
          </div>
        </motion.div>

      </main>
    </>
  );
}
