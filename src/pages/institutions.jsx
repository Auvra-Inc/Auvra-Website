// src/pages/institutions.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';
import FooterSection from '../reuseables/footerSection';

export default function Institutions() {
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionType: '',
    country: '',
    email: '',
    assetTypes: [],
    estimatedVolume: '',
    primaryGoal: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const assetOptions = [
    'Artifacts', 'Oral Histories', 'Documents & Manuscripts', 
    'Photographs', 'Audio & Video', 'Languages', 
    'Rituals & Ceremonies', 'Textiles & Fashion'
  ];

  const handleCheckboxChange = (value) => {
    setFormData(prev => ({
      ...prev,
      assetTypes: prev.assetTypes.includes(value)
        ? prev.assetTypes.filter(v => v !== value)
        : [...prev.assetTypes, value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@goauvra.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Institutional Access Application',
          _template: 'table'
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          institutionName: '',
          institutionType: '',
          country: '',
          email: '',
          assetTypes: [],
          estimatedVolume: '',
          primaryGoal: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Auvra for Institutions | Auvra</title>
        <meta name="description" content="Permanent, verifiable infrastructure for museums, governments, and cultural organizations. Preserve cultural assets at scale. Verify provenance with blockchain." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="px-4 mb-24">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold text-black mb-6 tracking-tight"
            >
              Auvra for Institutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-6"
            >
              Permanent, verifiable infrastructure for museums, governments, and cultural organizations.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              Preserve cultural assets at scale. Verify provenance with blockchain. Give the world open access to your collections. All without changing how you work.
            </motion.p>
          </div>
        </section>

        {/* SPACE FOR IMAGE 1 */}
        <div className="max-w-6xl mx-auto px-4 mb-24">
          <div className="aspect-[16/9] bg-gray-100 rounded-3xl overflow-hidden">
            {/* Add your image here */}
          </div>
        </div>

        {/* CORE VALUE PROPOSITION */}
        <section className="px-4 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-clash font-semibold text-black mb-6"
            >
              One infrastructure layer for all your preservation needs.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Whether you are a national museum, a government archive, or a university library, Auvra gives you the tools to preserve, verify, and share cultural heritage permanently. No more fragmented systems. No more lost provenance. No more closed access.
            </motion.p>
          </div>
        </section>

        {/* SPACE FOR IMAGE 2 */}
        <div className="max-w-6xl mx-auto px-4 mb-24">
          <div className="aspect-[16/9] bg-gray-100 rounded-3xl overflow-hidden">
            {/* Add your image here */}
          </div>
        </div>

        {/* PERMANENT, IMMUTABLE RECORDS */}
        <section className="px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-clash font-semibold text-black mb-4"
                >
                  Permanent, immutable records
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  Powered by blockchain for tamper‑proof provenance.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-500"
                >
                  Every artifact, document, or oral history you preserve becomes an immutable record on the blockchain. Who created it. Who owned it. Who verified it. Forever.
                </motion.p>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  {/* Add your image here */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OPEN ACCESS BY DEFAULT */}
        <section className="px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  {/* Add your image here */}
                </div>
              </div>
              <div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-clash font-semibold text-black mb-4"
                >
                  Open access by default
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  Share your collections with the world.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-500"
                >
                  The Auvra Registry makes every preserved asset publicly accessible. No login. No paywall. Researchers, journalists, and the diaspora can search, view, and verify your collections from anywhere.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY + INSTITUTIONAL VERIFICATION */}
        <section className="px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-clash font-semibold text-black mb-4"
                >
                  Community + institutional verification
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  Faster, cheaper, more trusted than solo expert review.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-500"
                >
                  Invite community elders, academic experts, and other institutions to verify authenticity. Consensus builds trust faster than a single signature.
                </motion.p>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  {/* Add your image here */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BULK UPLOAD AT SCALE */}
        <section className="px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  {/* Add your image here */}
                </div>
              </div>
              <div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-clash font-semibold text-black mb-4"
                >
                  Bulk upload at scale
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  Preserve thousands of assets in minutes.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-500"
                >
                  Upload collections via CSV, API, or our dashboard. We handle the blockchain and storage. You focus on curation.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* API FOR EVERYTHING */}
        <section className="px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-clash font-semibold text-black mb-4"
                >
                  API for everything
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  Connect your existing systems to Auvra.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-500"
                >
                  Pull records into your website. Push new discoveries to the registry. Automate preservation workflows. Your data, your systems, our infrastructure.
                </motion.p>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  {/* Add your image here */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PUBLIC REGISTRY, OPEN API */}
        <section className="px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  {/* Add your image here */}
                </div>
              </div>
              <div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-clash font-semibold text-black mb-4"
                >
                  Public registry, open API
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  Transparency is not optional. It is the default.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-500"
                >
                  Every preserved asset gets a permanent URL and a public record. Anyone can verify authenticity. Researchers can query our API. Your institution gains credibility through openness.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* SPACE FOR IMAGE 3 */}
        <div className="max-w-6xl mx-auto px-4 mb-24">
          <div className="aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden">
            {/* Add your image here */}
          </div>
        </div>

        {/* BREAK BARRIERS. BUILD CONNECTIONS. */}
        <section className="px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-clash font-bold text-black text-center mb-12"
            >
              Preserve without silos. Verify without delays.
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Preserve without silos</h4>
                <p className="text-sm text-gray-500">Your collections live in one permanent, global registry. Not on a disconnected server.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Verify without delays</h4>
                <p className="text-sm text-gray-500">Community and institutional verification happens in days, not months.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 018.25 21a5.972 5.972 0 01-3.75-1.11 5.972 5.972 0 01-1.11-3.75c0-2.602.985-4.83 2.418-6.446A9.976 9.976 0 0112 3c4.97 0 9 3.694 9 8.25z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Share without barriers</h4>
                <p className="text-sm text-gray-500">Open access means your culture reaches the people who need it most.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-3h6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Fund without grants</h4>
                <p className="text-sm text-gray-500">Sell limited digital editions (Collectible Badges) to sustain your preservation work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SPACE FOR IMAGE 4 */}
        <div className="max-w-6xl mx-auto px-4 mb-24">
          <div className="aspect-[16/9] bg-gray-100 rounded-3xl overflow-hidden">
            {/* Add your image here */}
          </div>
        </div>

        {/* TECHNICAL SPECIFICATIONS */}
        <section className="px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-clash font-bold text-black text-center mb-12"
            >
              Made to last. Built to perform.
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-black mb-2">Blockchain provenance</h4>
                <p className="text-gray-500 text-sm">Every record is immutable. No disputes. No lost history.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-black mb-2">Arweave permanent storage</h4>
                <p className="text-gray-500 text-sm">Pay once. Store forever. No recurring fees. No data loss.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-black mb-2">Public registry</h4>
                <p className="text-gray-500 text-sm">Open access by default. Your collections visible to the world.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-black mb-2">Institutional API</h4>
                <p className="text-gray-500 text-sm">Connect Auvra to your existing systems. Automate workflows.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-black mb-2">Community verification</h4>
                <p className="text-gray-500 text-sm">Trust through consensus. Faster and cheaper than solo experts.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-black mb-2">Bulk upload dashboard</h4>
                <p className="text-gray-500 text-sm">Preserve thousands of assets in minutes, not months.</p>
              </div>
            </div>
          </div>
        </section>

        {/* YOU'RE IN CONTROL */}
        <section className="px-4 mb-24">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-clash font-bold text-black mb-6"
            >
              You control your collections
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              You control your collections. You control your data. You control who verifies.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto"
            >
              The Auvra for Institutions dashboard gives you full control over your preservation workflow. Assign verifiers. Track progress. Export reports. Manage API keys.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-500 max-w-2xl mx-auto mt-4"
            >
              Transparent by design. Every action is logged. Every verification is recorded. Every asset has a permanent, public record. Your institution gains trust through transparency.
            </motion.p>
          </div>
        </section>

        {/* APPLICATION FORM SECTION */}
        <section className="px-4 mb-24">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-clash font-bold text-black mb-4"
              >
                Try Auvra for Institutions
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-500 mb-8"
              >
                Be among the first to build on permanent, verifiable infrastructure for cultural heritage.
              </motion.p>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <p className="text-green-700">Application submitted successfully! Our team will contact you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <p className="text-red-700">Unable to submit. Please email info@goauvra.com directly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institution Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.institutionName}
                    onChange={(e) => setFormData({...formData, institutionName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="e.g., National Museum of History"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Institution Type *</label>
                    <select
                      required
                      value={formData.institutionType}
                      onChange={(e) => setFormData({...formData, institutionType: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="">Select type...</option>
                      <option value="museum">Museum / Archive</option>
                      <option value="university">University / Academic</option>
                      <option value="government">Government Body</option>
                      <option value="ngo">NGO / Non-Profit</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                      placeholder="Country"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                    placeholder="name@institution.org"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Asset Types *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {assetOptions.map(asset => (
                      <label key={asset} className="flex items-center gap-2 cursor-pointer text-sm">
                        <input
                          type="checkbox"
                          checked={formData.assetTypes.includes(asset)}
                          onChange={() => handleCheckboxChange(asset)}
                          className="w-4 h-4 accent-black"
                        />
                        <span className="text-gray-700">{asset}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Collection Volume</label>
                    <select
                      value={formData.estimatedVolume}
                      onChange={(e) => setFormData({...formData, estimatedVolume: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                    >
                      <option value="">Select volume...</option>
                      <option value="under-100">Under 100 assets</option>
                      <option value="100-1000">100 - 1,000 assets</option>
                      <option value="1000-10000">1,000 - 10,000 assets</option>
                      <option value="over-10000">Over 10,000 assets</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Goal</label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({...formData, primaryGoal: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                    >
                      <option value="">Select goal...</option>
                      <option value="preservation">Digital Preservation</option>
                      <option value="access">Public Access</option>
                      <option value="verification">Provenance Verification</option>
                      <option value="research">Academic Research</option>
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white font-clash font-medium py-4 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 mt-4"
                >
                  {isSubmitting ? 'Submitting...' : 'Apply for Institutional Access'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
