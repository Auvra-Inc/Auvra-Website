import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';

const IFRAME_CSS = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #ffffff !important;
    font-family: system-ui, -apple-system, 'Inter', sans-serif !important;
    color: #1a1a1a !important;
    padding: 16px !important;
    overflow-y: auto !important;
    -webkit-text-size-adjust: 100% !important;
  }

  /* Success/Thank You Page Overrides */
  body:has(.thank-you), body:has([class*="success"]) {
    overflow-y: hidden !important;
    height: auto !important;
  }
  .thank-you, [class*="thank"], [class*="success"] {
    color: #111827 !important; background: #ffffff !important;
    padding: 20px !important; overflow: hidden !important;
  }
  
  /* Hide branding & footers */
  footer, .foorm-footer, [class*="powered"], .footer { display: none !important; }
  
  /* Layout & Forms */
  .container, form { width: 100% !important; max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
  p:first-of-type, form > p:first-child { margin-bottom: 32px !important; padding-bottom: 8px !important; border-bottom: 1px solid #f0f0f0 !important; }
  p { margin-bottom: 28px !important; }
  
  /* Typography & Labels */
  label, .question { color: #111827 !important; font-weight: 600 !important; margin: 8px 0 !important; display: block !important; font-size: 14px !important; }
  .required { font-weight: 300 !important; font-style: italic !important; font-size: 12px !important; color: #6b7280 !important; }
  .description { color: #6b7280 !important; font-weight: 400 !important; font-size: 12px !important; margin: 4px 0 8px !important; line-height: 1.4 !important; }
  
  /* Inputs */
  input, select, textarea {
    width: 100% !important; padding: 10px 12px !important;
    border: 1px solid #e5e7eb !important; border-radius: 10px !important;
    font-size: 16px !important; background: #ffffff !important;
    color: #111827 !important; margin-bottom: 20px !important; font-weight: 400 !important;
  }
  input:focus, select:focus, textarea:focus { outline: none !important; border-color: #000000 !important; }
  ::placeholder { color: #9ca3af !important; font-size: 13px !important; }
  
  /* Buttons */
  button[type="submit"] {
    background: #000000 !important; color: #ffffff !important;
    padding: 12px 16px !important; border: none !important;
    border-radius: 12px !important; font-weight: 500 !important;
    font-size: 14px !important; cursor: pointer !important;
    width: 100% !important; margin-top: 16px !important;
  }
  button[type="submit"]:hover { background: #333333 !important; }
  
  /* Radios & Checkboxes */
  .card { padding: 12px !important; margin-bottom: 12px !important; background: #f9fafb !important; border-radius: 12px !important; }
  .radio-group, .checkbox-group { margin-bottom: 16px !important; }
  input[type="radio"], input[type="checkbox"] { width: 16px !important; height: 16px !important; margin-right: 8px !important; }
  .required-asterisk { display: none !important; }
`;

// ==========================================
// 2. IFRAME SCRIPT (Optimized for Performance)
// ==========================================
const IFRAME_SCRIPT = `
  // Format labels safely
  document.querySelectorAll('label, .label').forEach(label => {
    if (label.innerHTML && label.innerHTML.includes('*')) {
      label.innerHTML = label.innerHTML.replace(/\\*/g, '<span style="font-weight: 300; font-style: italic; font-size: 12px; color: #6b7280;"> (required)</span>');
    }
  });

  // Handle "Other" inputs for Checkboxes
  function addOtherInputs() {
    document.querySelectorAll('input[type="checkbox"][value*="Other"], input[type="checkbox"][value*="other"]').forEach(input => {
      const parentDiv = input.closest('.checkbox-group') || input.parentElement;
      if (parentDiv && !parentDiv.querySelector('.other-input-field')) {
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.placeholder = 'Please specify...';
        textInput.className = 'other-input-field form-control';
        textInput.style.cssText = 'margin-top: 8px; margin-left: 24px; width: calc(100% - 24px); padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 8px; display: none;';
        parentDiv.appendChild(textInput);
        
        input.addEventListener('change', function() {
          textInput.style.display = this.checked ? 'block' : 'none';
          if (!this.checked) textInput.value = '';
        });
      }
    });
  }

  // Handle "Other" inputs for Select dropdowns
  function addOtherInputsForSelects() {
    document.querySelectorAll('select').forEach(select => {
      const hasOther = Array.from(select.options).some(opt => opt.text.toLowerCase().includes('other'));
      if (hasOther && select.parentElement && !select.parentElement.querySelector('.other-select-input')) {
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.placeholder = 'Please specify...';
        textInput.className = 'other-select-input';
        textInput.style.cssText = 'margin-top: 8px; width: 100%; padding: 10px 12px; border: 1px solid #e5e7eb; border-radius: 10px; display: none;';
        select.parentElement.appendChild(textInput);
        
        select.addEventListener('change', function() {
          const selectedText = this.options[this.selectedIndex]?.text || '';
          textInput.style.display = selectedText.toLowerCase().includes('other') ? 'block' : 'none';
          if (!selectedText.toLowerCase().includes('other')) textInput.value = '';
        });
      }
    });
  }

  // Execute DOM manipulators
  addOtherInputs();
  addOtherInputsForSelects();

  // FIX: Optimize MutationObserver to prevent infinite loops (The cause of the lag)
  let timeout;
  const observer = new MutationObserver(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      addOtherInputs();
      addOtherInputsForSelects();
    }, 300); // Debounce ensures it doesn't fire 100 times a second
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Handle iframe resizing
  const sendHeight = () => window.parent.postMessage({ type: 'resize', height: document.body.scrollHeight }, '*');
  window.addEventListener('load', sendHeight);
  window.addEventListener('resize', sendHeight);
  new MutationObserver(sendHeight).observe(document.body, { childList: true, subtree: true });
`;

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function InstitutionalAccess() {
  const containerRef = useRef(null);
  const isScriptLoaded = useRef(false);

  useEffect(() => {
    if (!containerRef.current || isScriptLoaded.current) return;
    
    isScriptLoaded.current = true;
    const container = containerRef.current;
    
    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'foorm-embed-auvra-institutional-access';
    iframe.title = 'Auvra Institutional Access';
    iframe.style.cssText = 'width: 100%; border: none; border-radius: 16px; background: white; display: block; height: auto;';
    container.appendChild(iframe);

    // Fetch and process form data
    fetch('https://pxodpeirilfuzqtlbhqf.supabase.co/functions/v1/embed-form?slug=auvra-institutional-access')
      .then(res => res.text())
      .then(html => { 
        // Inject clean CSS
        const styledHtml = html.replace('</head>', `<style>${IFRAME_CSS}</style></head>`);
        
        // Inject clean Script
        const finalHtml = styledHtml.replace('</body>', `<script>${IFRAME_SCRIPT}</script></body>`);
        
        iframe.srcdoc = finalHtml;
        
        // Listen for resize messages from iframe
        window.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'resize') {
            iframe.style.height = event.data.height + 'px';
          }
        });
      })
      .catch(error => {
        console.error('Error loading form:', error);
        container.innerHTML = `
          <div class="text-center py-12 bg-white rounded-2xl" style="padding: 40px 20px;">
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
            />
          </motion.div>
        </div>
      </main>
    </>
  );
}