import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';
import FooterSection from '../reuseables/footerSection';

export default function InstitutionalAccess() {
  const containerRef = useRef(null);
  const isScriptLoaded = useRef(false);

  useEffect(() => {
    if (!containerRef.current || isScriptLoaded.current) return;
    
    isScriptLoaded.current = true;
    
    const container = containerRef.current;
    const iframe = document.createElement('iframe');
    iframe.id = 'foorm-embed-auvra-institutional-access';
    iframe.style.cssText = 'width: 100%; height: 750px; border: none; border-radius: 24px;';
    iframe.title = 'Auvra Institutional Access';
    container.appendChild(iframe);

    fetch('https://pxodpeirilfuzqtlbhqf.supabase.co/functions/v1/embed-form?slug=auvra-institutional-access')
      .then(function(r) { return r.text(); })
      .then(function(html) { 
        const styledHtml = html.replace(
          '</head>',
          `<style>
            /* Hide the iframe's own footer */
            footer, .foorm-footer, [class*="powered"], [class*="footer"]:has(a), 
            div:has(> a[href*="foorm.xyz"]), .footer, .form-footer {
              display: none !important;
            }
            body {
              margin: 0;
              padding: 0;
              background: transparent !important;
            }
            .container, .form-container {
              max-width: 100% !important;
              width: 100% !important;
            }
            form {
              width: 100% !important;
              max-width: 100% !important;
              padding: 0 !important;
            }
            input, select, textarea {
              width: 100% !important;
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
      if (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
      isScriptLoaded.current = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Institutional Access | Auvra</title>
        <meta name="description" content="Apply for institutional and government access to Auvra's cultural preservation infrastructure." />
      </Helmet>

      <Navbar />

      <main className="pt-28 pb-16 px-4 md:px-8">
        <div className="w-full max-w-5xl mx-auto">
          {/* No title - removed completely */}
          
          {/* Form Container - No card background, just rounded iframe */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="w-full"
          >
            <div ref={containerRef} className="w-full rounded-2xl overflow-hidden"></div>
          </motion.div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
