import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function InstitutionalAccessModal({ isOpen, onClose }) {
  const containerRef = useRef(null);
  const isScriptLoaded = useRef(false);

  useEffect(() => {
    if (!isOpen || !containerRef.current || isScriptLoaded.current) return;
    
    isScriptLoaded.current = true;
    
    // Clear any existing content
    containerRef.current.innerHTML = '';
    
    // Create the iframe
    const container = containerRef.current;
    const iframe = document.createElement('iframe');
    iframe.id = 'foorm-embed-auvra-institutional-access';
    iframe.style.cssText = 'width: 100%; height: 600px; border: none; border-radius: 16px;';
    iframe.title = 'Auvra Institutional Access';
    container.appendChild(iframe);

    // Fetch the form HTML
    fetch('https://pxodpeirilfuzqtlbhqf.supabase.co/functions/v1/embed-form?slug=auvra-institutional-access')
      .then(function(r) { return r.text(); })
      .then(function(html) { 
        // Hide the "Powered by" footer from the iframe
        const styledHtml = html.replace(
          '</head>',
          `<style>
            footer, .foorm-footer, [class*="powered"], [class*="footer"]:has(a) {
              display: none !important;
            }
          </style></head>`
        );
        iframe.srcdoc = styledHtml;
      })
      .catch(function(error) {
        console.error('Error loading form:', error);
        container.innerHTML = '<div class="text-center py-12"><p class="text-red-500">Unable to load form. Please try again later.</p><button onclick="window.open(\'https://link.foorm.xyz/f/auvra-institutional-access\', \'_blank\')" class="inline-block mt-4 bg-black text-white px-6 py-3 rounded-xl">Open Form in New Tab</button></div>';
      });
      
    return () => {
      if (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
      isScriptLoaded.current = false;
    };
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[201] w-[90vw] max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <h2 className="text-xl font-clash font-semibold text-black">Institutional Access</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Body - Form */}
            <div ref={containerRef} className="p-0"></div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
