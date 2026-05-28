// src/pages/institutions.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../reuseables/navbar';

export default function Institutions() {
  const sections = [
    {
      id: 'hero',
      bg: 'bg-black',
      textColor: 'text-white',
      title: 'Auvra for Institutions',
      subtitle: 'Permanent, verifiable infrastructure for museums, governments, and cultural organizations.',
      cta: true,
      isHero: true
    },
    {
      id: 'infrastructure',
      bg: 'bg-white',
      textColor: 'text-black',
      title: 'One infrastructure layer',
      subtitle: 'for all your preservation needs.',
      description: 'Whether you are a national museum, a government archive, or a university library, Auvra gives you the tools to preserve, verify, and share cultural heritage permanently. No more fragmented systems. No more lost provenance. No more closed access.',
      image: true
    },
    {
      id: 'immutable',
      bg: 'bg-gray-50',
      textColor: 'text-black',
      title: 'Permanent, immutable records',
      subtitle: 'Powered by blockchain for tamper‑proof provenance.',
      description: 'Every artifact, document, or oral history you preserve becomes an immutable record on the blockchain. Who created it. Who owned it. Who verified it. Forever.',
      image: true
    },
    {
      id: 'open-access',
      bg: 'bg-white',
      textColor: 'text-black',
      title: 'Open access by default',
      subtitle: 'Share your collections with the world.',
      description: 'The Auvra Registry makes every preserved asset publicly accessible. No login. No paywall. Researchers, journalists, and the diaspora can search, view, and verify your collections from anywhere.',
      image: true
    },
    {
      id: 'verification',
      bg: 'bg-gray-50',
      textColor: 'text-black',
      title: 'Community + institutional verification',
      subtitle: 'Faster, cheaper, more trusted than solo expert review.',
      description: 'Invite community elders, academic experts, and other institutions to verify authenticity. Consensus builds trust faster than a single signature.',
      image: true
    },
    {
      id: 'bulk-upload',
      bg: 'bg-white',
      textColor: 'text-black',
      title: 'Bulk upload at scale',
      subtitle: 'Preserve thousands of assets in minutes.',
      description: 'Upload collections via CSV, API, or our dashboard. We handle the blockchain and storage. You focus on curation.',
      image: true
    },
    {
      id: 'api',
      bg: 'bg-gray-50',
      textColor: 'text-black',
      title: 'API for everything',
      subtitle: 'Connect your existing systems to Auvra.',
      description: 'Pull records into your website. Push new discoveries to the registry. Automate preservation workflows. Your data, your systems, our infrastructure.',
      image: true
    },
    {
      id: 'specs',
      bg: 'bg-white',
      textColor: 'text-black',
      title: 'Made to last. Built to perform.',
      isSpecs: true
    },
    {
      id: 'control',
      bg: 'bg-gray-50',
      textColor: 'text-black',
      title: 'You\'re in control of your collections',
      isControl: true
    },
    {
      id: 'cta',
      bg: 'bg-white',
      textColor: 'text-black',
      title: 'Try Auvra for Institutions',
      isCta: true
    }
  ];

  const Section = ({ section, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    
    return (
      <motion.section 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`min-h-screen flex items-center justify-center ${section.bg}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          
          {/* Hero Section */}
          {section.isHero && (
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-clash font-light text-white mb-6 tracking-tight">
                {section.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                {section.subtitle}
              </p>
              <Link 
                to="/institutional-access"
                className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Apply for Institutional Access →
              </Link>
            </div>
          )}

          {/* Standard sections with two columns */}
          {section.image && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-clash font-light text-black">
                  {section.title}
                  <br />
                  <span className="text-gray-500">{section.subtitle}</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  {section.description}
                </p>
              </div>
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space for each section */}
              </div>
            </div>
          )}

          {/* Technical Specs Section */}
          {section.isSpecs && (
            <div>
              <h2 className="text-3xl md:text-4xl font-clash font-light text-black text-center mb-12">
                {section.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-3xl mx-auto">
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
          )}

          {/* Control Section */}
          {section.isControl && (
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-6">
                {section.title}
              </h2>
              <p className="text-gray-500 font-light mb-4">
                You control your collections. You control your data. You control who verifies.
              </p>
              <p className="text-gray-400 text-sm">
                The Auvra for Institutions dashboard gives you full control over your preservation workflow.
              </p>
            </div>
          )}

          {/* CTA Section */}
          {section.isCta && (
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-clash font-light text-black mb-4">
                {section.title}
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
          )}
        </div>
      </motion.section>
    );
  };

  return (
    <>
      <Helmet>
        <title>Auvra for Institutions | Auvra</title>
        <meta name="description" content="Permanent, verifiable infrastructure for museums, governments, and cultural organizations." />
      </Helmet>

      <Navbar />

      <main>
        {sections.map((section, index) => (
          <Section key={section.id} section={section} index={index} />
        ))}
      </main>
    </>
  );
}
