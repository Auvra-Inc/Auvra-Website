// src/pages/institutions.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../reuseables/navbar';
import FooterSection from '../reuseables/footerSection';

export default function Institutions() {
  return (
    <>
      <Helmet>
        <title>Auvra for Institutions | Auvra</title>
        <meta name="description" content="Permanent, verifiable infrastructure for museums, governments, and cultural organizations. Preserve cultural assets at scale. Verify provenance with blockchain." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-20">
        
        {/* HERO SECTION - Two column layout */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold text-black mb-6 tracking-tight"
                >
                  Permanent infrastructure for cultural preservation
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                >
                  Preserve, verify, and share cultural heritage at scale. Blockchain provenance. Open access. No fragmented systems.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link 
                    to="/institutional-access"
                    className="inline-block bg-black text-white px-8 py-4 rounded-xl font-clash font-medium hover:bg-gray-800 transition-colors"
                  >
                    Apply for Institutional Access →
                  </Link>
                </motion.div>
              </div>
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
            </div>
          </div>
        </section>

        {/* ONE INFRASTRUCTURE LAYER */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-clash font-semibold text-black mb-4"
                >
                  One infrastructure layer for all your preservation needs.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 leading-relaxed"
                >
                  Whether you are a national museum, a government archive, or a university library, Auvra gives you the tools to preserve, verify, and share cultural heritage permanently. No more fragmented systems. No more lost provenance. No more closed access.
                </motion.p>
              </div>
              <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
            </div>
          </div>
        </section>

        {/* PERMANENT, IMMUTABLE RECORDS */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-clash font-semibold text-black mb-4"
                >
                  Permanent, immutable records
                </motion.h2>
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
            </div>
          </div>
        </section>

        {/* OPEN ACCESS BY DEFAULT */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-clash font-semibold text-black mb-4"
                >
                  Open access by default
                </motion.h2>
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
              <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY + INSTITUTIONAL VERIFICATION */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-clash font-semibold text-black mb-4"
                >
                  Community + institutional verification
                </motion.h2>
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
            </div>
          </div>
        </section>

        {/* BULK UPLOAD AT SCALE */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-clash font-semibold text-black mb-4"
                >
                  Bulk upload at scale
                </motion.h2>
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
              <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
            </div>
          </div>
        </section>

        {/* API FOR EVERYTHING */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-clash font-semibold text-black mb-4"
                >
                  API for everything
                </motion.h2>
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
            </div>
          </div>
        </section>

        {/* PUBLIC REGISTRY, OPEN API */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-clash font-semibold text-black mb-4"
                >
                  Public registry, open API
                </motion.h2>
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
              <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
            </div>
          </div>
        </section>

        {/* NAVIGATE LIFE WITH CONFIDENCE - 4 column grid like Talksign */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-clash font-bold text-black text-center mb-12"
            >
              Preserve with confidence
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375 7.444 2.25 12 2.25s8.25 1.847 8.25 4.125Zm0 0v5.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-5.25" />
                  </svg>
                </div>
                <h3 className="font-semibold text-black mb-2">Bulk upload</h3>
                <p className="text-sm text-gray-500">Preserve thousands of assets at once</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-black mb-2">Blockchain verified</h3>
                <p className="text-sm text-gray-500">Tamper-proof provenance forever</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-black mb-2">Open access</h3>
                <p className="text-sm text-gray-500">Share collections with the world</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-black mb-2">API access</h3>
                <p className="text-sm text-gray-500">Connect your existing systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* MADE TO LAST. BUILT TO PERFORM. - Technical specs grid */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
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
              <div>
                <h3 className="font-semibold text-black mb-2">Blockchain provenance</h3>
                <p className="text-gray-500 text-sm mb-6">Every record is immutable. No disputes. No lost history.</p>
                <h3 className="font-semibold text-black mb-2">Arweave permanent storage</h3>
                <p className="text-gray-500 text-sm mb-6">Pay once. Store forever. No recurring fees. No data loss.</p>
                <h3 className="font-semibold text-black mb-2">Public registry</h3>
                <p className="text-gray-500 text-sm">Open access by default. Your collections visible to the world.</p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Institutional API</h3>
                <p className="text-gray-500 text-sm mb-6">Connect Auvra to your existing systems. Automate workflows.</p>
                <h3 className="font-semibold text-black mb-2">Community verification</h3>
                <p className="text-gray-500 text-sm mb-6">Trust through consensus. Faster and cheaper than solo experts.</p>
                <h3 className="font-semibold text-black mb-2">Bulk upload dashboard</h3>
                <p className="text-gray-500 text-sm">Preserve thousands of assets in minutes, not months.</p>
              </div>
            </div>
          </div>
        </section>

        {/* YOU'RE IN CONTROL */}
        <section className="px-4 md:px-8 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-clash font-bold text-black mb-6"
            >
              You're in control of your collections
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 mb-8"
            >
              You control your collections. You control your data. You control who verifies.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-sm"
            >
              The Auvra for Institutions dashboard gives you full control over your preservation workflow. Assign verifiers. Track progress. Export reports. Manage API keys.
            </motion.p>
          </div>
        </section>

        {/* CTA SECTION - Try Auvra for Institutions */}
        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/institutional-access"
                className="inline-block bg-black text-white px-8 py-4 rounded-xl font-clash font-medium hover:bg-gray-800 transition-colors"
              >
                Apply for Institutional Access →
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <FooterSection />
    </>
  );
}
