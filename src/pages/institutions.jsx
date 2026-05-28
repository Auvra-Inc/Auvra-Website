// src/pages/institutions.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../reuseables/navbar';

// Icon wrapper component (same as About page)
const IconWrapper = ({ children }) => (
  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
    {children}
  </div>
);

export default function Institutions() {
  return (
    <>
      <Helmet>
        <title>Auvra for Institutions | Auvra</title>
        <meta name="description" content="Permanent, verifiable infrastructure for museums, governments, and cultural organizations." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-20">
        
        {/* HERO SECTION - With overlay image */}
        <div className="relative min-h-[80vh] flex items-center justify-center bg-black mb-16">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 bg-gray-800">
            {/* Your hero image here */}
          </div>
          <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-light text-white mb-6 tracking-tight">
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

        {/* ONE INFRASTRUCTURE LAYER */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                One infrastructure layer
                <br />
                <span className="text-gray-500">for all your preservation needs.</span>
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Whether you are a national museum, a government archive, or a university library, Auvra gives you the tools to preserve, verify, and share cultural heritage permanently. No more fragmented systems. No more lost provenance. No more closed access.
              </p>
            </div>
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              {/* Image space */}
            </div>
          </div>
        </section>

        {/* PERMANENT, IMMUTABLE RECORDS */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                  Permanent, immutable records
                  <br />
                  <span className="text-gray-500">Powered by blockchain for tamper‑proof provenance.</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Every artifact, document, or oral history you preserve becomes an immutable record on the blockchain. Who created it. Who owned it. Who verified it. Forever.
                </p>
              </div>
              <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
            </div>
          </div>
        </section>

        {/* OPEN ACCESS BY DEFAULT */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                Open access by default
                <br />
                <span className="text-gray-500">Share your collections with the world.</span>
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                The Auvra Registry makes every preserved asset publicly accessible. No login. No paywall. Researchers, journalists, and the diaspora can search, view, and verify your collections from anywhere.
              </p>
            </div>
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              {/* Image space */}
            </div>
          </div>
        </section>

        {/* COMMUNITY + INSTITUTIONAL VERIFICATION */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                  Community + institutional verification
                  <br />
                  <span className="text-gray-500">Faster, cheaper, more trusted than solo expert review.</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Invite community elders, academic experts, and other institutions to verify authenticity. Consensus builds trust faster than a single signature.
                </p>
              </div>
              <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
            </div>
          </div>
        </section>

        {/* BULK UPLOAD AT SCALE */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                Bulk upload at scale
                <br />
                <span className="text-gray-500">Preserve thousands of assets in minutes.</span>
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Upload collections via CSV, API, or our dashboard. We handle the blockchain and storage. You focus on curation.
                </p>
            </div>
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              {/* Image space */}
            </div>
          </div>
        </section>

        {/* API FOR EVERYTHING */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-clash font-light text-black mb-4">
                  API for everything
                  <br />
                  <span className="text-gray-500">Connect your existing systems to Auvra.</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Pull records into your website. Push new discoveries to the registry. Automate preservation workflows. Your data, your systems, our infrastructure.
                </p>
              </div>
              <div className="order-1 md:order-2 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {/* Image space */}
              </div>
            </div>
          </div>
        </section>

        {/* PRESERVE WITH CONFIDENCE - 4 CARDS (styled like About page) */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-clash font-light text-black text-center mb-12">
            Preserve with confidence
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            
            {/* Card 1 - Bulk upload */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="mb-4 flex justify-center">
                <IconWrapper>
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375 7.444 2.25 12 2.25s8.25 1.847 8.25 4.125Zm0 0v5.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-5.25" />
                  </svg>
                </IconWrapper>
              </div>
              <h3 className="text-lg font-clash font-medium text-black mb-1">Bulk upload</h3>
              <p className="text-gray-500 text-sm">Thousands of assets at once</p>
            </div>

            {/* Card 2 - Blockchain verified */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="mb-4 flex justify-center">
                <IconWrapper>
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </IconWrapper>
              </div>
              <h3 className="text-lg font-clash font-medium text-black mb-1">Blockchain verified</h3>
              <p className="text-gray-500 text-sm">Tamper-proof provenance</p>
            </div>

            {/* Card 3 - Open access */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="mb-4 flex justify-center">
                <IconWrapper>
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </IconWrapper>
              </div>
              <h3 className="text-lg font-clash font-medium text-black mb-1">Open access</h3>
              <p className="text-gray-500 text-sm">Share with the world</p>
            </div>

            {/* Card 4 - API access */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="mb-4 flex justify-center">
                <IconWrapper>
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </IconWrapper>
              </div>
              <h3 className="text-lg font-clash font-medium text-black mb-1">API access</h3>
              <p className="text-gray-500 text-sm">Connect your systems</p>
            </div>

          </div>
        </div>

        {/* TECHNICAL SPECS */}
        <div className="bg-gray-50 py-20">
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
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
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
