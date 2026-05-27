import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';
import FooterSection from '../reuseables/footerSection';

export default function InstitutionalAccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Institutional Access | Auvra</title>
        <meta name="description" content="Apply for institutional and government access to Auvra's cultural preservation infrastructure." />
      </Helmet>

      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-clash font-bold text-black mb-4 tracking-tight">
              Institutional Access
            </h1>
            <p className="text-lg text-gray-600 font-clash max-w-xl mx-auto leading-relaxed">
              For museums, universities, and government bodies looking to preserve cultural heritage at scale.
            </p>
          </motion.div>

          {/* Embedded Foorm Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-white rounded-[2rem] p-4 md:p-6 shadow-sm border border-gray-100"
          >
            <iframe 
              src="https://link.foorm.xyz/f/auvra-institutional-access"
              title="Institutional Access Application Form"
              className="w-full min-h-[700px] md:min-h-[800px] rounded-xl"
              frameBorder="0"
              loading="lazy"
              allow="fullscreen"
            />
          </motion.div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
