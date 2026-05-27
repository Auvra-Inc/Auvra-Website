import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';

export default function InstitutionalAccess() {
  const containerRef = useRef(null);
  const isScriptLoaded = useRef(false);

  useEffect(() => {
    if (!containerRef.current || isScriptLoaded.current) return;
    
    isScriptLoaded.current = true;
    
    const container = containerRef.current;
    const iframe = document.createElement('iframe');
    iframe.id = 'foorm-embed-auvra-institutional-access';
    iframe.style.cssText = 'width: 100%; height: 750px; border: none; border-radius: 24px; background: white;';
    iframe.title = 'Auvra Institutional Access';
    container.appendChild(iframe);

    fetch('https://pxodpeirilfuzqtlbhqf.supabase.co/functions/v1/embed-form?slug=auvra-institutional-access')
      .then(function(r) { return r.text(); })
      .then(function(html) { 
        // Inject CSS to make the form look professional
        const styledHtml = html.replace(
          '</head>',
          `<style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              background: white !important;
              font-family: system-ui, -apple-system, 'Inter', sans-serif !important;
              color: #111827 !important;
              padding: 20px !important;
            }
            
            /* Hide any footers */
            footer, .foorm-footer, [class*="powered"], [class*="footer"], 
            div:has(> a[href*="foorm.xyz"]), .footer, .form-footer {
              display: none !important;
            }
            
            /* Form styling */
            form, .form-container {
              max-width: 100% !important;
              width: 100% !important;
            }
            
            label {
              color: #374151 !important;
              font-weight: 500 !important;
              margin-bottom: 6px !important;
              display: block !important;
            }
            
            input, select, textarea {
              width: 100% !important;
              padding: 12px 16px !important;
              border: 1px solid #e5e7eb !important;
              border-radius: 12px !important;
              font-size: 16px !important;
              background: white !important;
              color: #111827 !important;
            }
            
            input:focus, select:focus, textarea:focus {
              outline: none !important;
              border-color: #111827 !important;
              ring: 2px solid #111827 !important;
            }
            
            button[type="submit"] {
              background: #111827 !important;
              color: white !important;
              padding: 14px 24px !important;
              border: none !important;
              border-radius: 14px !important;
              font-weight: 600 !important;
              cursor: pointer !important;
              width: 100% !important;
            }
            
            h1, h2, h3 {
              color: #111827 !important;
            }
          </style></head>`
        );
        iframe.srcdoc = styledHtml;
      })
      .catch(function(error) {
        console.error('Error loading form:', error);
        container.innerHTML = `
          <div class="text-center py-16 bg-white rounded-2xl">
            <p class="text-gray-600 mb-4">Unable to load form. Please try again later.</p>
            <a href="https://link.foorm.xyz/f/auvra-institutional-access" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="inline-block bg-black text-white px-6 py-3 rounded-xl font-medium">
              Open Form in New Tab
            </a>
          </div>
        `;
      });
      
    return () => {
      if (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
      isScriptLoaded.current = false;
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

      <main className="min-h-screen bg-white pt-28 pb-16 px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            <div ref={containerRef} className="w-full overflow-hidden rounded-2xl bg-white"></div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
