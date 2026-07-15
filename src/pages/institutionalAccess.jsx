import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';

const FORM_EMBED_URL = 'https://link.foorm.xyz/f/auvra-institutional-access';

export default function InstitutionalAccess() {
  const [loaded, setLoaded] = useState(false);

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

      <main className="min-h-screen bg-white pt-32 pb-12 px-2 md:px-3">
        <div className="w-full max-w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full"
          >
            {/* Skeleton shown until the iframe fires onLoad */}
            {!loaded && (
              <div className="w-full bg-white rounded-2xl p-6 animate-pulse" aria-busy="true" aria-label="Loading form...">
                <div className="h-5 bg-gray-100 rounded-lg w-2/3 mb-8" />
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="mb-6">
                    <div className="h-3.5 bg-gray-100 rounded w-1/3 mb-2" />
                    <div className="h-11 bg-gray-50 border border-gray-100 rounded-xl w-full" />
                  </div>
                ))}
                <div className="mb-6">
                  <div className="h-3.5 bg-gray-100 rounded w-1/4 mb-2" />
                  <div className="h-28 bg-gray-50 border border-gray-100 rounded-xl w-full" />
                </div>
                <div className="h-11 bg-gray-200 rounded-xl w-full mt-4" />
              </div>
            )}

            {/* The Foorm embed — always in the DOM so it starts loading immediately */}
            <iframe
              src={FORM_EMBED_URL}
              title="Auvra Institutional Access"
              onLoad={() => setLoaded(true)}
              style={{
                display: loaded ? 'block' : 'none',
                width: '100%',
                minHeight: '100vh',
                border: 'none',
                borderRadius: '16px',
                background: 'white',
              }}
              allow="clipboard-write"
            />
          </motion.div>
        </div>
      </main>
    </>
  );
}
