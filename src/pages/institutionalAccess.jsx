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
              -webkit-text-size-adjust: 100% !important;
              touch-action: pan-y pinch-zoom !important;
            }
            
            /* FIX: Thank You / Success Page - NO SCROLLING, BLACK TEXT */
            body:has(.thank-you), 
            body:has([class*="success"]),
            body:has(.submission-success) {
              overflow-y: hidden !important;
              height: auto !important;
              min-height: auto !important;
            }
            
            .thank-you, [class*="thank"], [class*="success"], 
            .submission-message, .form-success-message,
            div[class*="success-message"] {
              color: #111827 !important;
              background: #ffffff !important;
              min-height: auto !important;
              height: auto !important;
              margin: 0 !important;
              padding: 20px !important;
              overflow: hidden !important;
            }
            
            .thank-you p, [class*="thank"] p, [class*="success"] p {
              color: #374151 !important;
            }
            
            .thank-you h1, .thank-you h2, .thank-you h3,
            [class*="thank"] h1, [class*="success"] h1 {
              color: #111827 !important;
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
            
            p:first-of-type, .description-text, .intro-text, 
            form > p:first-child, .form-description {
              margin-bottom: 32px !important;
              display: block !important;
              padding-bottom: 8px !important;
              border-bottom: 1px solid #f0f0f0 !important;
            }
            
            p {
              margin-bottom: 28px !important;
            }
            
            form > *:first-child {
              margin-bottom: 32px !important;
            }
            
            label, .label, .form-label, .question, [class*="question"] {
              color: #111827 !important;
              font-weight: 600 !important;
              margin-top: 8px !important;
              margin-bottom: 8px !important;
              display: block !important;
              font-size: 14px !important;
            }
            
            .required, .required-star, [class*="required"] {
              font-weight: 300 !important;
              font-style: italic !important;
              font-size: 12px !important;
              color: #6b7280 !important;
            }
            
            .description, .help-text, .hint, .subtext, 
            .form-text, .small-text, [class*="description"],
            .field-description, .field-help {
              color: #6b7280 !important;
              font-weight: 400 !important;
              font-size: 12px !important;
              margin-top: 4px !important;
              margin-bottom: 8px !important;
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
              margin-bottom: 20px !important;
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
              margin-top: 16px !important;
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
            
            span:not([class*="required"]), .text, .regular-text {
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
            
            .radio-group, .checkbox-group {
              margin-bottom: 16px !important;
            }
            
            .radio-group label, .checkbox-group label {
              font-weight: 500 !important;
              font-size: 13px !important;
              color: #374151 !important;
            }
            
            input[type="radio"], input[type="checkbox"] {
              width: 16px !important;
              height: 16px !important;
              margin-right: 8px !important;
            }
            
            .other-option, [class*="other"] {
              margin-left: 0 !important;
              margin-top: 8px !important;
              margin-bottom: 12px !important;
            }
            
            .form-group, .field-group {
              margin-bottom: 16px !important;
            }
            
            .row, .grid {
              gap: 12px !important;
            }
            
            .required-asterisk {
              display: none !important;
            }
            
            input, select, textarea {
              font-size: 16px !important;
            }
          </style>`
        );
        
        const finalHtml = styledHtml.replace(
          '</body>',
          `<script>
            document.querySelectorAll('label, .label, .form-label').forEach(function(label) {
              if (label.innerHTML && label.innerHTML.includes('*')) {
                label.innerHTML = label.innerHTML.replace(/\\*/g, '<span style="font-weight: 300; font-style: italic; font-size: 12px; color: #6b7280;"> (required)</span>');
              }
            });
            
            var firstParagraph = document.querySelector('form > p:first-child, .description-text, p');
            if (firstParagraph && firstParagraph.innerText.includes('Please complete this form')) {
              firstParagraph.style.marginBottom = '32px';
              firstParagraph.style.paddingBottom = '8px';
            }
            
            function addOtherInputs() {
              var otherCheckboxes = document.querySelectorAll('input[type="checkbox"][value*="Other"], input[type="checkbox"][value*="other"]');
              
              otherCheckboxes.forEach(function(otherInput) {
                var parentDiv = otherInput.closest('.checkbox-group');
                if (!parentDiv) {
                  parentDiv = otherInput.parentElement;
                }
                
                if (parentDiv && !parentDiv.querySelector('.other-input-field')) {
                  var textInput = document.createElement('input');
                  textInput.type = 'text';
                  textInput.placeholder = 'Please specify...';
                  textInput.className = 'other-input-field form-control';
                  textInput.style.marginTop = '8px';
                  textInput.style.marginLeft = '24px';
                  textInput.style.width = 'calc(100% - 24px)';
                  textInput.style.padding = '8px 12px';
                  textInput.style.border = '1px solid #e5e7eb';
                  textInput.style.borderRadius = '8px';
                  textInput.style.fontSize = '16px';
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
            
            function addOtherInputsForSelects() {
              var selects = document.querySelectorAll('select');
              selects.forEach(function(select) {
                var hasOther = false;
                var selectLabel = '';
                
                var labelElement = select.closest('.form-group')?.querySelector('label');
                if (labelElement) {
                  selectLabel = labelElement.innerText.toLowerCase();
                }
                
                for (var i = 0; i < select.options.length; i++) {
                  if (select.options[i].text.toLowerCase().includes('other') || 
                      (select.options[i].value && select.options[i].value.toLowerCase().includes('other'))) {
                    hasOther = true;
                    break;
                  }
                }
                
                if (hasOther && select.parentElement && !select.parentElement.querySelector('.other-select-input')) {
                  var textInput = document.createElement('input');
                  textInput.type = 'text';
                  
                  if (selectLabel.includes('institution') || selectLabel.includes('organization')) {
                    textInput.placeholder = 'Please specify your institution type...';
                  } else if (selectLabel.includes('country') || selectLabel.includes('region')) {
                    textInput.placeholder = 'Please specify your country/region...';
                  } else {
                    textInput.placeholder = 'Please specify...';
                  }
                  
                  textInput.className = 'other-select-input';
                  textInput.style.marginTop = '8px';
                  textInput.style.marginLeft = '0';
                  textInput.style.width = '100%';
                  textInput.style.padding = '10px 12px';
                  textInput.style.border = '1px solid #e5e7eb';
                  textInput.style.borderRadius = '10px';
                  textInput.style.fontSize = '16px';
                  textInput.style.display = 'none';
                  select.parentElement.appendChild(textInput);
                  
                  select.addEventListener('change', function() {
                    var selectedValue = select.options[select.selectedIndex]?.text || select.value;
                    if (selectedValue.toLowerCase().includes('other')) {
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
            addOtherInputsForSelects();
            setTimeout(addOtherInputs, 500);
            setTimeout(addOtherInputsForSelects, 500);
            setTimeout(addOtherInputs, 1000);
            setTimeout(addOtherInputsForSelects, 1000);
            
            var observer = new MutationObserver(function() { 
              addOtherInputs();
              addOtherInputsForSelects();
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
    document.title = 'Institution-Access | For museums and government bodies looking to preserve cultural heritage at scale.'
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
            ></div>
          </motion.div>
        </div>
      </main>
    </>
  );
}