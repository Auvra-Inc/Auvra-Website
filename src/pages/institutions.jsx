// src/pages/institutions.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../reuseables/navbar';

export default function Institutions() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    {
      title: "One infrastructure layer",
      subtitle: "for all your preservation needs.",
      description: "Whether you are a national museum, a government archive, or a university library, Auvra gives you the tools to preserve, verify, and share cultural heritage permanently."
    },
    {
      title: "Permanent, immutable records",
      subtitle: "Powered by blockchain for tamper‑proof provenance.",
      description: "Every artifact, document, or oral history you preserve becomes an immutable record on the blockchain. Who created it. Who owned it. Who verified it. Forever."
    },
    {
      title: "Open access by default",
      subtitle: "Share your collections with the world.",
      description: "The Auvra Registry makes every preserved asset publicly accessible. No login. No paywall."
    },
    {
      title: "Community + institutional verification",
      subtitle: "Faster, cheaper, more trusted.",
      description: "Invite community elders, academic experts, and other institutions to verify authenticity. Consensus builds trust faster than a single signature."
    },
    {
      title: "Bulk upload at scale",
      subtitle: "Preserve thousands of assets in minutes.",
      description: "Upload collections via CSV, API, or our dashboard. We handle the blockchain and storage."
    },
    {
      title: "API for everything",
      subtitle: "Connect your existing systems to Auvra.",
      description: "Pull records into your website. Push new discoveries to the registry. Automate preservation workflows."
    }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const index = Math.min(
        Math.floor(latest * sections.length),
        sections.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, sections.length]);

  return (
    <>
      <Helmet>
        <title>Auvra for Institutions | Auvra</title>
        <meta name="description" content="Permanent, verifiable infrastructure for museums, governments, and cultural organizations." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white">
        
        {/* HERO SECTION - Full image, NOT cut */}
        <div className="relative h-screen flex items-center justify-center bg-black">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 bg-gray-800">
            {/* Your full hero image here - NOT CUT */}
            <img 
              src="/hero-image.jpg" 
              alt="Auvra for Institutions" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-clash font-light text-white mb-6 tracking-tight">
              Auvra for Institutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light mb-8 max-w-2xl mx-auto">
              Permanent, verifiable infrastructure for museums, governments, and cultural organizations.
            </p>
            <Link 
              to="/institutional-access"
              className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Apply for Institutional Access →
            </Link>
          </div>
        </div>

        {/* SCROLL-TRIGGERED CARD STACK - Changes as you scroll */}
        <div ref={containerRef} className="relative bg-white">
          <div className="h-[15vh]" />
          
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - changing text */}
                <div className="space-y-4">
                  <motion.h2 
                    key={activeIndex + "-title"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl md:text-4xl font-clash font-light text-black"
                  >
                    {sections[activeIndex].title}
                    <br />
                    <span className="text-gray-500">{sections[activeIndex].subtitle}</span>
                  </motion.h2>
                  <motion.p 
                    key={activeIndex + "-desc"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-gray-500 font-light leading-relaxed"
                  >
                    {sections[activeIndex].description}
                  </motion.p>
                </div>
                
                {/* Right side - fixed image space */}
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  {/* Image stays in place while text changes */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[15vh]" />
        </div>

        {/* FEATURE CARDS SECTION - Clean card grid */}
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-clash font-light text-black text-center mb-12">
            Preserve with confidence
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375 7.444 2.25 12 2.25s8.25 1.847 8.25 4.125Zm0 0v5.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-5.25" />
                </svg>
              </div>
              <h3 className="font-medium text-black text-sm mb-1">Bulk upload</h3>
              <p className="text-gray-400 text-xs">Thousands of assets at once</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-black text-sm mb-1">Blockchain verified</h3>
              <p className="text-gray-400 text-xs">Tamper-proof provenance</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-black text-sm mb-1">Open access</h3>
              <p className="text-gray-400 text-xs">Share with the world</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-black text-sm mb-1">API access</h3>
              <p className="text-gray-400 text-xs">Connect your systems</p>
            </div>
          </div>
        </div>

        {/* TECHNICAL SPECS SECTION */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-clash font-light text-black text-center mb-12">
              Made to last. Built to perform.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div>
                <h3 className="font-medium text-black text-sm mb-1">Blockchain provenance</h3>
                <p className="text-gray-400 text-xs">Every record is immutable. No disputes. No lost history.</p>
              </div>
              <div>
                <h3 className="font-medium text-black text-sm mb-1">Arweave permanent storage</h3>
                <p className="text-gray-400 text-xs">Pay once. Store forever. No recurring fees. No data loss.</p>
              </div>
              <div>
                <h3 className="font-medium text-black text-sm mb-1">Public registry</h3>
                <p className="text-gray-400 text-xs">Open access by default. Your collections visible to the world.</p>
              </div>
              <div>
                <h3 className="font-medium text-black text-sm mb-1">Institutional API</h3>
                <p className="text-gray-400 text-xs">Connect Auvra to your existing systems. Automate workflows.</p>
              </div>
              <div>
                <h3 className="font-medium text-black text-sm mb-1">Community verification</h3>
                <p className="text-gray-400 text-xs">Trust through consensus. Faster and cheaper than solo experts.</p>
              </div>
              <div>
                <h3 className="font-medium text-black text-sm mb-1">Bulk upload dashboard</h3>
                <p className="text-gray-400 text-xs">Preserve thousands of assets in minutes, not months.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTROL SECTION */}
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-6">
            You're in control of your collections
          </h2>
          <p className="text-gray-500 font-light mb-4">
            You control your collections. You control your data. You control who verifies.
          </p>
          <p className="text-gray-400 text-sm">
            The Auvra for Institutions dashboard gives you full control over your preservation workflow.
          </p>
        </div>

        {/* FINAL CTA */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-clash font-light text-black mb-4">
              Try Auvra for Institutions
            </h2>
            <p className="text-gray-500 font-light mb-6">
              Be among the first to build on permanent, verifiable infrastructure for cultural heritage.
            </p>
            <Link 
              to="/institutional-access"
              className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Apply for Institutional Access →
            </Link>
          </div>
        </div>

      </main>
    </>
  );
}
