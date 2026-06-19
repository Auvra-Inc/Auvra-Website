import React, { useState, useEffect } from 'react';

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    // Load Tally widget script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      // Once script loads, load the embeds and show the form
      if (window.Tally) {
        window.Tally.loadEmbeds();
        setFormLoaded(true);
      }
    };
    document.body.appendChild(script);

    // Fallback: if script doesn't fire, show form after 3 seconds anyway
    const timeout = setTimeout(() => {
      setFormLoaded(true);
    }, 3000);

    // Listen for form submission
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'tally-submission') {
        setSubmitted(true);
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.backgroundImage}></div>
      <div style={styles.glassOverlay}></div>

      <div style={styles.container}>
        <div style={styles.glassButtonWrapper}>
          <div style={styles.glassButton}>
            <span style={styles.glassButtonText}>JOIN OUR FOUNDING TESTERS</span>
          </div>
        </div>

        <div style={styles.content}>
          <h1 style={styles.title}>
            Your culture
            <br />
            deserves a
            <br />
            <span style={styles.italicPurple}>permanent</span> home.
          </h1>
          <p style={styles.subtitle}>
            Discover new ways to preserve, own, and pass down what matters.
          </p>
        </div>

        {!submitted ? (
          <div style={styles.formWrapper}>
            {!formLoaded && (
              <div style={styles.loadingPlaceholder}>
                <span style={styles.loadingSpinner}></span>
                <p style={styles.loadingText}>Loading form...</p>
              </div>
            )}
            <iframe
              src="https://tally.so/embed/1AB0YL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&textColor=ffffff&primaryColor=8b5cf6"
              width="100%"
              height="280"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Join the Auvra Founding Tester Program"
              style={{
                ...styles.iframe,
                opacity: formLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
          </div>
        ) : (
          <div style={styles.thankYou}>
            <span style={styles.checkmark}>🎉</span>
            <h2 style={styles.thankTitle}>You're on the list.</h2>
            <p style={styles.thankSub}>We'll notify you at launch.</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    margin: 0,
    fontFamily: '"Clash Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#0a0a0a',
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/WaitlistIMG.JPG)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
  },

  glassOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    zIndex: 1,
  },

  container: {
    maxWidth: '400px',
    width: '100%',
    padding: '40px 16px 20px',
    position: 'relative',
    zIndex: 2,
  },

  glassButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '32px',
    width: '100%',
  },

  glassButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 18px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '30px',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  },

  glassButtonText: {
    fontSize: '0.55rem',
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: '0.1em',
    fontFamily: '"Clash Display", sans-serif',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },

  content: {
    textAlign: 'center',
    marginBottom: '28px',
  },

  title: {
    fontSize: '2.6rem',
    fontWeight: '500',
    color: '#ffffff',
    lineHeight: '1.15',
    marginBottom: '14px',
    letterSpacing: '-0.01em',
    fontFamily: '"Season", serif',
    textShadow: '0 4px 30px rgba(0,0,0,0.6)',
  },

  italicPurple: {
    fontStyle: 'italic',
    color: '#a78bfa',
  },

  subtitle: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.5',
    maxWidth: '360px',
    margin: '0 auto',
    fontFamily: '"Clash Display", sans-serif',
    fontWeight: '400',
    textShadow: '0 2px 20px rgba(0,0,0,0.5)',
    paddingTop: '4px',
  },

  formWrapper: {
    width: '100%',
    marginTop: '8px',
    position: 'relative',
    minHeight: '280px',
  },

  iframe: {
    width: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
  },

  loadingPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },

  loadingSpinner: {
    width: '32px',
    height: '32px',
    border: '3px solid rgba(255, 255, 255, 0.1)',
    borderTop: '3px solid #a78bfa',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },

  loadingText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '0.75rem',
    marginTop: '12px',
    fontFamily: '"Clash Display", sans-serif',
  },

  thankYou: {
    textAlign: 'center',
    padding: '20px 0',
  },

  checkmark: {
    fontSize: '2.5rem',
    display: 'block',
    marginBottom: '12px',
  },

  thankTitle: {
    fontSize: '1.3rem',
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: '4px',
    fontFamily: '"Season", serif',
  },

  thankSub: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: '1.5',
    fontFamily: '"Clash Display", sans-serif',
  },
};

// Add this to your global CSS or include it in the page
// You can also add a style tag for the keyframes
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);
