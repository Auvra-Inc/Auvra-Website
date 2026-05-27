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
    iframe.style.cssText = 'width: 100%; height: 100%; min-height: 700px; border: none; border-radius: 24px; background: white; display: block;';
    iframe.title = 'Auvra Institutional Access';
    container.appendChild(iframe);

    fetch('https://pxodpeirilfuzqtlbhqf.supabase.co/functions/v1/embed-form?slug=auvra-institutional-access')
      .then(function(r) { return r.text(); })
      .then(function(html) { 
        // Complete CSS overhaul to ensure all text is visible
        const styledHtml = html.replace(
          '</head>',
          `<style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              background: #ffffff !important;
              font-family: system-ui, -apple-system, 'Inter', 'Segoe UI', sans-serif !important;
              color: #1a1a1a !important;
              padding: 24px !important;
              margin: 0 !important;
            }
            
            /* Hide all footers */
            footer, .foorm-footer, [class*="powered"], [class*="footer"], 
            div:has(> a[href*="foorm.xyz"]), .footer, .form-footer,
            .credit, .credits, [class*="credit"] {
              display: none !important;
            }
            
            /* Main container */
            .container, .form-container, main, .main {
              max-width: 100% !important;
              width: 100% !important;
              background: transparent !important;
            }
            
            /* Form elements */
            form {
              width: 100% !important;
              max-width: 100% !important;
            }
            
            /* Labels - Dark and visible */
            label, .label, .form-label {
              color: #1f2937 !important;
              font-weight: 500 !important;
              margin-bottom: 8px !important;
              display: block !important;
              font-size: 14px !important;
            }
            
            /* Input fields */
            input, select, textarea, .input, .form-control {
              width: 100% !important;
              padding: 12px 16px !important;
              border: 1px solid #d1d5db !important;
              border-radius: 12px !important;
              font-size: 16px !important;
              background: #ffffff !important;
              color: #111827 !important;
              margin-bottom: 16px !important;
              transition: all 0.2s ease !important;
            }
            
            input:focus, select:focus, textarea:focus {
              outline: none !important;
              border-color: #000000 !important;
              box-shadow: 0 0 0 3px rgba(0,0,0,0.1) !important;
            }
            
            /* Placeholder text */
            ::placeholder, .placeholder {
              color: #9ca3af !important;
            }
            
            /* Submit button */
            button[type="submit"], .submit-btn, .btn-primary {
              background: #000000 !important;
              color: #ffffff !important;
              padding: 14px 24px !important;
              border: none !important;
              border-radius: 14px !important;
              font-weight: 600 !important;
              font-size: 16px !important;
              cursor: pointer !important;
              width: 100% !important;
              margin-top: 8px !important;
              transition: background 0.2s ease !important;
            }
            
            button[type="submit"]:hover {
              background: #333333 !important;
            }
            
            /* Headings */
            h1, h2, h3, h4, .heading {
              color: #111827 !important;
            }
            
            /* Paragraphs and text */
            p, span, div:not([class*="icon"]):not([class*="button"]) {
              color: #374151 !important;
            }
            
            /* Radio and checkbox groups */
            .radio-group, .checkbox-group {
              color: #374151 !important;
            }
            
            input[type="radio"], input[type="checkbox"] {
              width: auto !important;
              margin-right: 8px !important;
            }
            
            /* Error messages */
            .error, .error-message {
              color: #dc2626 !important;
              font-size: 13px !important;
              margin-top: 4px !important;
            }
          </style></head>`
        );
        iframe.srcdoc = styledHtml;
      })
      .catch(function(error) {
        console.error('Error loading form:', error);
        container.innerHTML = `
          <div class="text-center py-16 bg-white rounded-2xl" style="background: white; border-radius: 24px; padding: 64px 24px;">
            <p style="color: #4b5563; margin-bottom: 20px;">Unable to load form. Please try again later.</p>
            <a href="https://link.foorm.xyz/f/auvra-institutional-access" 
               target="_blank" 
               rel="noopener noreferrer" 
               style="display: inline-block; background: #000000; color: white; padding: 12px 24px; border-radius: 14px; text-decoration: none; font-weight: 500;">
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-white pt-24 pb-16 px-4 md:px-6">
        <div className="w-full max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            <div 
              ref={containerRef} 
              className="w-full overflow-visible rounded-2xl bg-white"
              style={{ minHeight: '600px' }}
            ></div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
