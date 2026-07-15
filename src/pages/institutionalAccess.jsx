import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';

const FORM_URL = 'https://app.foorm.xyz/f/auvra-institutional-access';

export default function InstitutionalAccess() {
  return (
    <>
      <Helmet>
        <title>Institutional Access | Auvra</title>
        <meta
          name="description"
          content="Apply for institutional and government access to Auvra's cultural preservation infrastructure."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white pt-40 pb-20 px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-2xl mx-auto text-center"
        >
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10 md:p-16 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-clash font-medium text-black mb-4">
              Institutional Application
            </h2>
            <p className="text-gray-500 font-light text-lg mb-10 max-w-lg mx-auto">
              Our application form is hosted on a secure, dedicated portal. Click below to begin your application process for Auvra's cultural preservation infrastructure.
            </p>
            
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Open Secure Application
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <p className="text-gray-400 text-sm mt-6">
              Opens in a new, secure tab.
            </p>
          </div>
        </motion.div>
      </main>
    </>
  );
}