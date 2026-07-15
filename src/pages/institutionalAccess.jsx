import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar';

const FORM_URL = 'https://pxodpeirilfuzqtlbhqf.supabase.co/functions/v1/embed-form?slug=auvra-institutional-access';
const FORM_DIRECT_URL = 'https://link.foorm.xyz/f/auvra-institutional-access';
const MAX_RETRIES = 2;

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

const IFRAME_SCRIPT = `
  document.querySelectorAll('label, .label').forEach(label => {
    if (label.innerHTML && label.innerHTML.includes('*')) {
      label.innerHTML = label.innerHTML.replace(/\\*/g, '<span style="font-weight: 300; font-style: italic; font-size: 12px; color: #6b7280;"> (required)</span>');
    }
  });

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

  addOtherInputs();
  addOtherInputsForSelects();

  let timeout;
  const observer = new MutationObserver(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      addOtherInputs();
      addOtherInputsForSelects();
    }, 300);
  });
  observer.observe(document.body, { childList: true, subtree: true });

  const sendHeight = () => window.parent.postMessage({ type: 'resize', height: document.body.scrollHeight }, '*');
  window.addEventListener('load', sendHeight);
  window.addEventListener('resize', sendHeight);
  new MutationObserver(sendHeight).observe(document.body, { childList: true, subtree: true });
`;

// Skeleton shown while the form is loading
function FormSkeleton() {
  return (
    <div className="w-full bg-white rounded-2xl p-6 animate-pulse" aria-label="Loading form..." aria-busy="true">
      {/* Title bar */}
      <div className="h-5 bg-gray-100 rounded-lg w-2/3 mb-8" />

      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="mb-6">
          <div className="h-3.5 bg-gray-100 rounded w-1/3 mb-2" />
          <div className="h-11 bg-gray-50 border border-gray-100 rounded-xl w-full" />
        </div>
      ))}

      {/* Textarea */}
      <div className="mb-6">
        <div className="h-3.5 bg-gray-100 rounded w-1/4 mb-2" />
        <div className="h-28 bg-gray-50 border border-gray-100 rounded-xl w-full" />
      </div>

      {/* Submit button */}
      <div className="h-11 bg-gray-200 rounded-xl w-full mt-4" />
    </div>
  );
}

// Error state with retry button
function FormError({ onRetry, attempt }) {
  return (
    <div className="text-center py-14 bg-white rounded-2xl px-6">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
      </div>
      <p className="text-gray-800 font-medium mb-1 text-sm">Couldn't load the form</p>
      <p className="text-gray-400 text-xs mb-6">
        {attempt >= MAX_RETRIES
          ? 'Please open it directly or try again later.'
          : 'Check your connection and try again.'}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {attempt < MAX_RETRIES && (
          <button
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Try again
          </button>
        )}
        <a
          href={FORM_DIRECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gray-100 text-black px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          Open in new tab
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function InstitutionalAccess() {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const messageListenerRef = useRef(null);

  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    async function loadForm() {
      setStatus('loading');

      // Remove any previous iframe
      if (iframeRef.current && container.contains(iframeRef.current)) {
        container.removeChild(iframeRef.current);
        iframeRef.current = null;
      }
      // Remove old message listener
      if (messageListenerRef.current) {
        window.removeEventListener('message', messageListenerRef.current);
        messageListenerRef.current = null;
      }

      try {
        const res = await fetch(FORM_URL);

        if (!res.ok) {
          // Non-200 (e.g. 404) — treat as an error rather than injecting a broken page
          throw new Error(`Form endpoint returned ${res.status}`);
        }

        const html = await res.text();

        // Sanity-check: the response should contain an HTML document
        if (!html.includes('</head>') && !html.includes('</body>')) {
          throw new Error('Response does not look like a valid HTML document');
        }

        if (cancelled) return;

        const styledHtml = html.replace('</head>', `<style>${IFRAME_CSS}</style></head>`);
        const finalHtml = styledHtml.replace('</body>', `<script>${IFRAME_SCRIPT}</script></body>`);

        const iframe = document.createElement('iframe');
        iframe.id = 'foorm-embed-auvra-institutional-access';
        iframe.title = 'Auvra Institutional Access';
        iframe.style.cssText = 'width: 100%; border: none; border-radius: 16px; background: white; display: block; min-height: 400px;';
        iframeRef.current = iframe;
        container.appendChild(iframe);
        iframe.srcdoc = finalHtml;

        const onMessage = (event) => {
          if (event.data?.type === 'resize' && iframeRef.current) {
            iframeRef.current.style.height = event.data.height + 'px';
          }
        };
        messageListenerRef.current = onMessage;
        window.addEventListener('message', onMessage);

        setStatus('ready');
      } catch (err) {
        if (cancelled) return;
        console.error('[InstitutionalAccess] Failed to load form:', err.message);
        setStatus('error');
      }
    }

    loadForm();

    return () => {
      cancelled = true;
      if (messageListenerRef.current) {
        window.removeEventListener('message', messageListenerRef.current);
        messageListenerRef.current = null;
      }
    };
    // Re-run when the user clicks "Try again" (attempt increments)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  const handleRetry = () => setAttempt((a) => a + 1);

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
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full"
          >
            {/* Loading skeleton — shown until form is ready or errored */}
            {status === 'loading' && <FormSkeleton />}

            {/* Error state */}
            {status === 'error' && (
              <FormError onRetry={handleRetry} attempt={attempt} />
            )}

            {/* The iframe container — always mounted so the ref is available,
                but hidden while loading/erroring to avoid a flash of empty space */}
            <div
              ref={containerRef}
              className="w-full overflow-visible rounded-xl bg-white"
              style={{ display: status === 'ready' ? 'block' : 'none' }}
            />
          </motion.div>
        </div>
      </main>
    </>
  );
}
