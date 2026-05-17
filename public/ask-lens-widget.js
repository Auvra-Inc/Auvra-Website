// Ask Lens AI Widget – Professional UI/UX
(function() {
  const LENS_API_URL = 'https://lens-ai-production-ebd0.up.railway.app';
  const BUTTON_TEXT = 'Ask Lens AI';
  
  // Inject modern styles
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600&family=Clash+Display:wght@400;500;600&display=swap');
    
    .ask-lens-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    .ask-lens-modal-overlay.active {
      opacity: 1;
      visibility: visible;
    }
    .ask-lens-modal {
      max-width: 560px;
      width: 90%;
      background: #ffffff;
      border-radius: 32px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      transform: scale(0.95);
      transition: transform 0.3s ease;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    .ask-lens-modal-overlay.active .ask-lens-modal {
      transform: scale(1);
    }
    .ask-lens-header {
      padding: 24px 28px 16px 28px;
      border-bottom: 1px solid #f0f2f5;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .ask-lens-header h2 {
      margin: 0;
      font-family: 'Clash Display', 'Inter', sans-serif;
      font-size: 1.75rem;
      font-weight: 600;
      background: linear-gradient(135deg, #1e293b 0%, #2d3a5e 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .ask-lens-close {
      background: #f8fafc;
      border: none;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
      color: #64748b;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ask-lens-close:hover {
      background: #f1f5f9;
      color: #1e293b;
    }
    .ask-lens-body {
      padding: 24px 28px 32px 28px;
    }
    .ask-lens-description {
      color: #475569;
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 24px;
    }
    .ask-lens-input-group {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
      background: #f8fafc;
      border-radius: 60px;
      padding: 4px;
      border: 1px solid #e2e8f0;
      transition: all 0.2s ease;
    }
    .ask-lens-input-group:focus-within {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
    }
    .ask-lens-input {
      flex: 1;
      padding: 14px 20px;
      background: transparent;
      border: none;
      font-size: 1rem;
      font-family: 'Inter', sans-serif;
      outline: none;
      color: #1e293b;
    }
    .ask-lens-input::placeholder {
      color: #94a3b8;
    }
    .ask-lens-mic-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ask-lens-mic-btn:hover {
      background: #f1f5f9;
      transform: scale(1.02);
    }
    .ask-lens-mic-btn.listening {
      background: #ef4444;
      color: white;
      border-color: #ef4444;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.4); }
      70% { box-shadow: 0 0 0 10px rgba(239,68,68,0); }
      100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); }
    }
    .ask-lens-submit {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      border: none;
      padding: 0 28px;
      border-radius: 60px;
      color: white;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.9rem;
    }
    .ask-lens-submit:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(59,130,246,0.3);
    }
    .ask-lens-submit:disabled {
      opacity: 0.6;
      transform: none;
    }
    .ask-lens-error {
      padding: 14px 18px;
      background: #fef2f2;
      border-radius: 20px;
      color: #dc2626;
      font-size: 0.85rem;
      margin-bottom: 20px;
      border-left: 3px solid #ef4444;
    }
    .ask-lens-answer {
      background: #f8fafc;
      padding: 24px;
      border-radius: 24px;
      margin-top: 16px;
      border: 1px solid #f0f2f5;
    }
    .ask-lens-answer-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      color: #3b82f6;
      margin-bottom: 12px;
    }
    .ask-lens-answer-text {
      margin: 0;
      line-height: 1.6;
      color: #1e293b;
      font-size: 0.95rem;
    }
    .ask-lens-disclaimer {
      font-size: 0.7rem;
      color: #94a3b8;
      margin-top: 16px;
      padding-top: 12px;
      border-top: 1px solid #e2e8f0;
    }
    .ask-lens-loading {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 16px;
      color: #3b82f6;
      font-size: 0.85rem;
    }
    .ask-lens-loading-dot {
      width: 8px;
      height: 8px;
      background: #3b82f6;
      border-radius: 50%;
      animation: bounce 0.8s infinite;
    }
    .ask-lens-loading-dot:nth-child(2) { animation-delay: 0.2s; }
    .ask-lens-loading-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); opacity: 0.3; }
      50% { transform: translateY(-6px); opacity: 1; }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
  
  // Find or create button
  let lensButton = null;
  const existingLinks = document.querySelectorAll('a, button, span, div');
  for (let el of existingLinks) {
    if (el.innerText && el.innerText.trim() === BUTTON_TEXT) {
      lensButton = el;
      break;
    }
  }
  
  if (!lensButton) {
    const navs = document.querySelectorAll('nav, header, .navbar, .navigation, [role="navigation"]');
    for (let nav of navs) {
      const newLink = document.createElement('a');
      newLink.href = '#';
      newLink.textContent = BUTTON_TEXT;
      newLink.style.cursor = 'pointer';
      newLink.style.margin = '0 16px';
      newLink.style.textDecoration = 'none';
      newLink.style.fontWeight = '500';
      nav.appendChild(newLink);
      lensButton = newLink;
      break;
    }
  }
  
  if (!lensButton) {
    lensButton = document.createElement('button');
    lensButton.textContent = BUTTON_TEXT;
    lensButton.style.position = 'fixed';
    lensButton.style.bottom = '24px';
    lensButton.style.right = '24px';
    lensButton.style.padding = '14px 28px';
    lensButton.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
    lensButton.style.color = 'white';
    lensButton.style.border = 'none';
    lensButton.style.borderRadius = '60px';
    lensButton.style.fontWeight = '600';
    lensButton.style.fontFamily = 'Inter, sans-serif';
    lensButton.style.cursor = 'pointer';
    lensButton.style.boxShadow = '0 10px 25px -5px rgba(59,130,246,0.4)';
    lensButton.style.zIndex = '9999';
    document.body.appendChild(lensButton);
  }
  
  let modalOverlay = null;
  let isModalActive = false;
  
  function createModal() {
    if (modalOverlay) return;
    
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'ask-lens-modal-overlay';
    modalOverlay.innerHTML = `
      <div class="ask-lens-modal">
        <div class="ask-lens-header">
          <h2>Ask Lens AI</h2>
          <button class="ask-lens-close">✕</button>
        </div>
        <div class="ask-lens-body">
          <p class="ask-lens-description">Your cultural intelligence co-pilot. Ask about traditions, languages, artifacts, or anything cultural.</p>
          <div class="ask-lens-input-group">
            <input type="text" id="ask-lens-question" class="ask-lens-input" placeholder="E.g., What is the meaning of Adinkra symbols?">
            <button type="button" id="ask-lens-mic-btn" class="ask-lens-mic-btn">🎤</button>
            <button type="button" id="ask-lens-submit" class="ask-lens-submit">Ask</button>
          </div>
          <div id="ask-lens-error" class="ask-lens-error" style="display: none;"></div>
          <div id="ask-lens-answer" style="display: none;"></div>
          <div id="ask-lens-loading" class="ask-lens-loading" style="display: none;">
            <div class="ask-lens-loading-dot"></div>
            <div class="ask-lens-loading-dot"></div>
            <div class="ask-lens-loading-dot"></div>
            <span>Lens is thinking...</span>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modalOverlay);
    
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    
    modalOverlay.querySelector('.ask-lens-close').addEventListener('click', closeModal);
    
    const questionInput = modalOverlay.querySelector('#ask-lens-question');
    const submitBtn = modalOverlay.querySelector('#ask-lens-submit');
    const micBtn = modalOverlay.querySelector('#ask-lens-mic-btn');
    const errorDiv = modalOverlay.querySelector('#ask-lens-error');
    const answerDiv = modalOverlay.querySelector('#ask-lens-answer');
    const loadingDiv = modalOverlay.querySelector('#ask-lens-loading');
    
    let recognition = null;
    let isListening = false;
    
    micBtn.addEventListener('click', toggleListening);
    submitBtn.addEventListener('click', () => handleAsk(questionInput.value));
    questionInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleAsk(questionInput.value);
    });
    
    function toggleListening() {
      if (isListening) {
        if (recognition) recognition.stop();
        return;
      }
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showError('Speech recognition not supported in this browser.');
        return;
      }
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onstart = () => {
        isListening = true;
        micBtn.textContent = '⏹️';
        micBtn.classList.add('listening');
        hideError();
      };
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        questionInput.value = transcript;
        isListening = false;
        micBtn.textContent = '🎤';
        micBtn.classList.remove('listening');
        setTimeout(() => handleAsk(transcript), 100);
      };
      
      recognition.onerror = (event) => {
        showError(`Voice error: ${event.error}`);
        isListening = false;
        micBtn.textContent = '🎤';
        micBtn.classList.remove('listening');
      };
      
      recognition.onend = () => {
        isListening = false;
        micBtn.textContent = '🎤';
        micBtn.classList.remove('listening');
      };
      
      recognition.start();
    }
    
    async function handleAsk(question) {
      if (!question || !question.trim()) return;
      
      submitBtn.disabled = true;
      hideError();
      hideAnswer();
      showLoading();
      
      try {
        const response = await fetch(`${LENS_API_URL}/ask?question=${encodeURIComponent(question)}&style=general`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        if (data.error) {
          showError(data.error);
        } else {
          showAnswer(data.answer);
        }
      } catch (err) {
        showError('Could not connect to Lens AI. Please try again later.');
      } finally {
        submitBtn.disabled = false;
        hideLoading();
      }
    }
    
    function showError(msg) {
      errorDiv.textContent = msg;
      errorDiv.style.display = 'block';
    }
    
    function hideError() {
      errorDiv.style.display = 'none';
    }
    
    function showAnswer(answer) {
      answerDiv.innerHTML = `
        <div class="ask-lens-answer">
          <div class="ask-lens-answer-label">LENS AI RESPONDS</div>
          <p class="ask-lens-answer-text">${escapeHtml(answer)}</p>
          <div class="ask-lens-disclaimer">AI-generated – please verify with community experts</div>
        </div>
      `;
      answerDiv.style.display = 'block';
    }
    
    function hideAnswer() {
      answerDiv.style.display = 'none';
    }
    
    function showLoading() {
      loadingDiv.style.display = 'flex';
    }
    
    function hideLoading() {
      loadingDiv.style.display = 'none';
    }
    
    function escapeHtml(str) {
      return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
      });
    }
  }
  
  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      setTimeout(() => {
        if (modalOverlay) modalOverlay.remove();
        modalOverlay = null;
        isModalActive = false;
      }, 300);
    }
  }
  
  function openModal() {
    if (modalOverlay) {
      closeModal();
      setTimeout(openModal, 350);
      return;
    }
    createModal();
    isModalActive = true;
    setTimeout(() => {
      if (modalOverlay) modalOverlay.classList.add('active');
    }, 10);
  }
  
  if (lensButton) {
    lensButton.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }
})();
