import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';
import FooterSection from '../reuseables/footerSection';

export default function InstitutionalAccess() {
  const containerRef = useRef(null);
  const isScriptLoaded = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (isScriptLoaded.current || !containerRef.current) return;
    
    isScriptLoaded.current = true;
    
    // Create the iframe
    const container = containerRef.current;
    const iframe = document.createElement('iframe');
    iframe.id = 'foorm-embed-auvra-institutional-access';
    iframe.style.cssText = 'width: 100%; height: 650px; border: none; min-height: 500px; border-radius: 12px;';
    iframe.title = 'Auvra Institutional Access';
    container.appendChild(iframe);

    // Fetch the form HTML
    fetch('https://pxodpeirilfuzqtlbhqf.supabase.co/functions/v1/embed-form?slug=auvra-institutional-access')
      .then(function(r) { return r.text(); })
      .then(function(html) { 
        // Inject CSS to hide the "Powered by" footer from the iframe
        const styledHtml = html.replace(
          '</head>',
          `<style>
            footer:has(a[href*="foorm.xyz"]), 
            div:has(> a[href*="foorm.xyz"]),
            .foorm-footer,
            [class*="powered"],
            [class*="footer"]:has(a) {
              display: none !important;
            }
            /* Hide any element containing "Powered by" */
            body > div:last-child:contains("Powered by"),
            body > div:last-child:contains("powered by") {
              display: none !important;
            }
          </style></head>`
        );
        iframe.srcdoc = styledHtml;
      })
      .catch(function(error) {
        console.error('Error loading form:', error);
        container.innerHTML = '<div class="text-center py-12"><p class="text-red-500">Unable to load form. Please try again later.</p><a href="https://link.foorm.xyz/f/auvra-institutional-access" target="_blank" rel="noopener noreferrer" class="inline-block mt-4 bg-black text-white px-6 py-3 rounded-xl">Open Form in New Tab</a></div>';
      });
      
    return () => {
      // Cleanup
      if (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
      isScriptLoaded.current = false;
    };
  }, []);

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

          {/* Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-white rounded-[2rem] p-4 md:p-6 shadow-sm border border-gray-100"
          >
            <div 
              id="talksign-form-auvra-institutional-access" 
              ref={containerRef}
              className="w-full"
            ></div>
          </motion.div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
