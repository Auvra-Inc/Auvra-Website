// src/pages/institutions.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';
import FooterSection from '../reuseables/footerSection';

export default function Institutions() {
  return (
    <>
      <Helmet>
        <title>Auvra for Institutions | Auvra</title>
        <meta name="description" content="Permanent, verifiable infrastructure for museums, governments, and cultural organizations." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-clash font-bold text-black mb-4">
              Auvra for Institutions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Permanent, verifiable infrastructure for museums, governments, and cultural organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Bulk Upload</h3>
              <p className="text-gray-500">Upload thousands of cultural assets at once.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Verification Dashboard</h3>
              <p className="text-gray-500">Review and manage cultural records.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">API Access</h3>
              <p className="text-gray-500">Integrate with your existing systems.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Public Registry</h3>
              <p className="text-gray-500">Showcase preserved cultural heritage.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
            <p className="text-gray-500 mb-6">Contact our team to discuss your institution's needs.</p>
            <a 
              href="/institutional-access" 
              className="inline-block bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
            >
              Apply for Institutional Access
            </a>
          </div>
        </div>
      </main>

      <FooterSection />
    </>
  );
}
