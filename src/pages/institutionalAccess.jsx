import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';

const FORM_URL = 'https://link.foorm.xyz/f/auvra-institutional-access';

export default function InstitutionalAccess() {
  const containerRef = useRef(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const iframe = document.createElement('iframe');
    iframe.id = 'foorm-embed-auvra-institutional-access';
    iframe.title = 'Auvra Institutional Access';
    iframe.src = FORM_URL;
    iframe.loading = 'eager';
    iframe.style.cssText = 'width: 100%; min-height: 900px; border: none; border-radius: 16px; background: white; display: block;';
    container.appendChild(iframe);

    let settled = false;
    const markLoaded = () => {
      if (settled) return;
      settled = true;
      setShowFallback(false);
    };

    const handleMessage = (event) => {
      if (event.data && event.data.type === 'resize' && typeof event.data.height === 'number') {
        iframe.style.height = `${event.data.height}px`;
      }
    };

    const fallbackTimer = window.setTimeout(() => {
      if (!settled) {
        setShowFallback(true);
      }
    }, 4500);

    iframe.addEventListener('load', markLoaded);
    iframe.addEventListener('error', () => {
      if (!settled) {
        settled = true;
        setShowFallback(true);
      }
    });
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
      iframe.removeEventListener('load', markLoaded);
      window.clearTimeout(fallbackTimer);
      if (container.contains(iframe)) {
        container.removeChild(iframe);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Institutional Access | Auvra</title>
        <meta name="description" content="Apply for institutional and government access to Auvra's cultural preservation infrastructure." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-12 px-2 md:px-3">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full"
          >
            {showFallback ? (
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10 text-center shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500 mb-3">
                  Institutional access form
                </p>
                <h1 className="text-2xl md:text-3xl font-clash font-light text-black mb-4">
                  Open the access form directly
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
                  The embed is temporarily unavailable, so we’ve switched to a direct link to keep the application flow moving.
                </p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                  Open form in new tab
                </a>
              </div>
            ) : (
              <div ref={containerRef} className="w-full overflow-visible rounded-2xl bg-white" />
            )}
          </motion.div>
        </div>
      </main>
    </>
  );
}