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
    iframe.style.cssText = 'width: 100%; border: none; border-radius: 16px; background: white; display: block;';
    iframe.title = 'Auvra Institutional Access';
    iframe.style.height = 'auto';
    container.appendChild(iframe);

    fetch('https://pxodpeirilfuzqtlbhqf.supabase.co/functions/v1/embed-form?slug=auvra-institutional-access')
      .then(function(r) { return r.text(); })
      .then(function(html) { 
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
              padding: 16px !important;
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
            
            /* INTRODUCTION TEXT - No underline */
            p:first-of-type, .description-text, .intro-text, 
            form > p:first-child, .form-description {
              margin-bottom: 28px !important;
              display: block !important;
              border-bottom: none !important;
              padding-bottom: 0 !important;
            }
            
            /* LABELS / QUESTIONS - BOLD */
            label, .label, .form-label, .question, [class*="question"] {
              color: #111827 !important;
              font-weight: 600 !important;
              margin-bottom: 6px !important;
              margin-top: 0 !important;
              display: block !important;
              font-size: 14px !important;
            }
            
            /* Required field indicator - THIN, italic */
            .required, .required-star, [class*="required"], 
            span:has(> .required), span.required {
              font-weight: 200 !important;
              font-style: italic !important;
              font-size: 11px !important;
              color: #9ca3af !important;
            }
            
            /* Input fields */
            input, select, textarea, .input, .form-control {
              width: 100% !important;
              padding: 10px 12px !important;
              border: 1px solid #e5e7eb !important;
              border-radius: 10px !important;
              font-size: 14px !important;
              background: #ffffff !important;
              color: #111827 !important;
              margin-bottom: 16px !important;
              font-weight: 400 !important;
            }
            
            input:focus, select:focus, textarea:focus {
              outline: none !important;
              border-color: #000000 !important;
            }
            
            ::placeholder {
              color: #9ca3af !important;
              font-size: 13px !important;
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
            
            /* CHECKBOX AND RADIO GROUPS - REDUCED BREADTH (smaller width) */
            .radio-group, .checkbox-group {
              margin-bottom: 12px !important;
              display: flex !important;
              align-items: center !important;
              gap: 8px !important;
              width: auto !important;
              max-width: 280px !important;
            }
            
            .radio-group label, .checkbox-group label {
              font-weight: 400 !important;
              font-size: 14px !important;
              color: #374151 !important;
              margin-bottom: 0 !important;
              white-space: nowrap !important;
            }
            
            input[type="radio"], input[type="checkbox"] {
              width: 16px !important;
              height: 16px !important;
              margin: 0 !important;
              accent-color: #000000 !important;
              flex-shrink: 0 !important;
            }
            
            /* Make checkbox items appear in two columns for compactness */
            .form-group:has(.checkbox-group) {
              display: grid !important;
              grid-template-columns: repeat(2, auto) !important;
              gap: 8px 24px !important;
              margin-bottom: 16px !important;
            }
            
            .form-group, .field-group {
              margin-bottom: 16px !important;
            }
            
            /* Remove any borders/lines */
            hr, .divider, .separator, .border-top {
              display: none !important;
            }
            
            .required-asterisk {
              display: none !important;
            }
          </style>`
        );
        
        const finalHtml = styledHtml.replace(
          '</body>',
          `<script>
            // Convert asterisk to (required) with THIN italic style
            document.querySelectorAll('label, .label, .form-label').forEach(function(label) {
              if (label.innerHTML && label.innerHTML.includes('*')) {
                label.innerHTML = label.innerHTML.replace(/\\*/g, '<span style="font-weight: 200; font-style: italic; font-size: 11px; color: #9ca3af;"> (required)</span>');
              }
            });
            
            // Remove underline from intro text
            var firstPara = document.querySelector('form > p:first-child');
            if (firstPara) {
              firstPara.style.borderBottom = 'none';
              firstPara.style.paddingBottom = '0';
            }
            
            // Wrap checkbox groups in a grid container for 2-column layout
            function organizeCheckboxes() {
              var checkboxGroups = document.querySelectorAll('.checkbox-group');
              if (checkboxGroups.length > 0) {
                var parent = checkboxGroups[0].parentElement;
                if (parent && !parent.classList.contains('checkbox-grid-wrapper')) {
                  parent.classList.add('checkbox-grid-wrapper');
                  parent.style.display = 'grid';
                  parent.style.gridTemplateColumns = 'repeat(2, auto)';
                  parent.style.gap = '8px 24px';
                  parent.style.marginBottom = '16px';
                }
              }
            }
            
            organizeCheckboxes();
            
            // Add other input functionality
            function addOtherInputs() {
              var otherRadios = document.querySelectorAll('input[type="radio"][value*="Other"], input[type="radio"][value*="other"]');
              var otherCheckboxes = document.querySelectorAll('input[type="checkbox"][value*="Other"], input[type="checkbox"][value*="other"]');
              var allOthers = [...otherRadios, ...otherCheckboxes];
              
              allOthers.forEach(function(otherInput) {
                var parentDiv = otherInput.closest('.radio-group, .checkbox-group, .form-group, div');
                if (parentDiv && !parentDiv.querySelector('.other-input-field')) {
                  var textInput = document.createElement('input');
                  textInput.type = 'text';
                  textInput.placeholder = 'Please specify...';
                  textInput.className = 'other-input-field form-control';
                  textInput.style.marginTop = '6px';
                  textInput.style.marginLeft = '24px';
                  textInput.style.width = 'calc(100% - 24px)';
                  textInput.style.padding = '8px 12px';
                  textInput.style.fontSize = '13px';
                  textInput.style.border = '1px solid #e5e7eb';
                  textInput.style.borderRadius = '8px';
                  textInput.style.display = 'none';
                  parentDiv.appendChild(textInput);
                  
                  otherInput.addEventListener('change', function() {
                    if (this.checked) {
                      textInput.style.display = 'block';
                    } else {
                      textInput.style.display = 'none';
                      textInput.value = '';
                    }
                  });
                }
              });
            }
            
            addOtherInputs();
            setTimeout(addOtherInputs, 500);
            
            var observer = new MutationObserver(function() { 
              organizeCheckboxes();
              addOtherInputs();
            });
            observer.observe(document.body, { childList: true, subtree: true });
            
            function sendHeight() {
              var height = document.body.scrollHeight;
              window.parent.postMessage({ type: 'resize', height: height }, '*');
            }
            window.addEventListener('load', sendHeight);
            window.addEventListener('resize', sendHeight);
            setTimeout(sendHeight, 100);
            new MutationObserver(sendHeight).observe(document.body, { childList: true, subtree: true, attributes: true });
          <\/script></body>`
        );
        
        iframe.srcdoc = finalHtml;
        
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
