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
    // IMPORTANT: Remove fixed height to let iframe expand naturally
    iframe.style.cssText = 'width: 100%; border: none; border-radius: 16px; background: white; display: block;';
    iframe.title = 'Auvra Institutional Access';
    
    // Set initial height, will auto-adjust to content
    iframe.style.height = 'auto';
    container.appendChild(iframe);

    fetch('https://pxodpeirilfuzqtlbhqf.supabase.co/functions/v1/embed-form?slug=auvra-institutional-access')
      .then(function(r) { return r.text(); })
      .then(function(html) { 
        // Modify the iframe content to communicate its height
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
              padding: 12px !important;
              margin: 0 !important;
              overflow-y: auto !important;
            }
            
            /* Hide all footers */
            footer, .foorm-footer, [class*="powered"], [class*="footer"], 
            div:has(> a[href*="foorm.xyz"]), .footer, .form-footer,
            .credit, .credits, [class*="credit"] {
              display: none !important;
            }
            
            .container, .form-container, main, .main {
              max-width: 100% !important;
              width: 100% !important;
              background: transparent !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            
            form {
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            
            /* LABELS / QUESTIONS - BOLD */
            label, .label, .form-label, .question, [class*="question"] {
              color: #111827 !important;
              font-weight: 600 !important;
              margin-bottom: 6px !important;
              display: block !important;
              font-size: 14px !important;
            }
            
            /* SUB-BODY TEXT - Normal weight */
            .description, .help-text, .hint, .subtext, 
            .form-text, .small-text, [class*="description"],
            .field-description, .field-help {
              color: #6b7280 !important;
              font-weight: 400 !important;
              font-size: 12px !important;
              margin-top: 2px !important;
              margin-bottom: 6px !important;
              line-height: 1.4 !important;
            }
            
            input, select, textarea, .input, .form-control {
              width: 100% !important;
              padding: 10px 12px !important;
              border: 1px solid #e5e7eb !important;
              border-radius: 10px !important;
              font-size: 14px !important;
              background: #ffffff !important;
              color: #111827 !important;
              margin-bottom: 12px !important;
              font-weight: 400 !important;
            }
            
            input:focus, select:focus, textarea:focus {
              outline: none !important;
              border-color: #000000 !important;
            }
            
            ::placeholder {
              color: #9ca3af !important;
              font-size: 13px !important;
              font-weight: 400 !important;
            }
            
            button[type="submit"], .submit-btn, .btn-primary {
              background: #000000 !important;
              color: #ffffff !important;
              padding: 12px 16px !important;
              border: none !important;
              border-radius: 12px !important;
              font-weight: 500 !important;
              font-size: 14px !important;
              cursor: pointer !important;
              width: 100% !important;
              margin-top: 8px !important;
            }
            
            button[type="submit"]:hover {
              background: #333333 !important;
            }
            
            h1, h2, h3, h4, .heading {
              color: #111827 !important;
              font-size: 18px !important;
              font-weight: 600 !important;
              margin-bottom: 12px !important;
            }
            
            p, span, .text, .regular-text {
              color: #4b5563 !important;
              font-weight: 400 !important;
              font-size: 13px !important;
            }
            
            .card, [class*="card"] {
              padding: 12px !important;
              margin-bottom: 12px !important;
              background: #f9fafb !important;
              border-radius: 12px !important;
            }
            
            .radio-group label, .checkbox-group label {
              font-weight: 500 !important;
              font-size: 13px !important;
              color: #374151 !important;
            }
            
            .radio-group, .checkbox-group {
              margin-bottom: 8px !important;
            }
            
            input[type="radio"], input[type="checkbox"] {
              width: 16px !important;
              height: 16px !important;
              margin-right: 8px !important;
            }
            
            .form-group, .field-group {
              margin-bottom: 14px !important;
            }
            
            .row, .grid {
              gap: 12px !important;
            }
          </style>`
        );
        
        // Add script to auto-resize iframe height based on content
        const finalHtml = styledHtml.replace(
          '</body>',
          `<script>
            function sendHeight() {
              const height = document.body.scrollHeight;
              window.parent.postMessage({ type: 'resize', height: height }, '*');
            }
            window.addEventListener('load', sendHeight);
            window.addEventListener('resize', sendHeight);
            setTimeout(sendHeight, 100);
            new MutationObserver(sendHeight).observe(document.body, { childList: true, subtree: true, attributes: true });
          <\/script></body>`
        );
        
        iframe.srcdoc = finalHtml;
        
        // Listen for height messages from iframe
        window.addEventListener('message', function(event) {
          if (event.data && event.data.type === 'resize') {
            iframe.style.height = event.data.height + 'px';
          }
        });
      })
      .catch(function(error) {
        console.error('Error loading form:', error);
        container.innerHTML = `
          <div class="text-center py-12 bg-white rounded-2xl" style="background: white; border-radius: 16px; padding: 40px 20px;">
            <p style="color: #4b5563; margin-bottom: 16px; font-size: 14px;">Unable to load form. Please try again later.</p>
            <a href="https://link.foorm.xyz/f/auvra-institutional-access" 
               target="_blank" 
               rel="noopener noreferrer" 
               style="display: inline-block; background: #000000; color: white; padding: 10px 20px; border-radius: 12px; text-decoration: none; font-size: 14px;">
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

      <main className="min-h-screen bg-white pt-32 pb-12 px-2 md:px-3">
        <div className="w-full max-w-full mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            <div 
              ref={containerRef} 
              className="w-full overflow-visible rounded-xl bg-white"
            ></div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
