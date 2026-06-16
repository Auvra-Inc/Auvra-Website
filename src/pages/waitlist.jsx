import React, { useState, useEffect } from 'react';

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (event) => {
      if (event.data && event.data.type === 'tally-submission') {
        setSubmitted(true);
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div style={styles.page}>
      {/* Background Image */}
      <div style={styles.backgroundImage}></div>

      {/* Glass Effect - matches image size exactly */}
      <div style={styles.glassOverlay}></div>

      {/* Content */}
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>
            Your culture deserves a permanent home.
          </h1>
          <p style={styles.subtitle}>
            Discover new ways to preserve, own, and pass down what matters. Join the waitlist for Auvra.
          </p>
        </div>

        {!submitted ? (
          <div style={styles.formWrapper}>
            <iframe
              src="https://tally.so/embed/1AB0YL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&textColor=ffffff&primaryColor=8b5cf6"
              width="100%"
              height="380"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Join the Auvra Waitlist"
              style={styles.iframe}
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

  // Background Image - covers entire screen
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

  // Glass Effect - matches image size exactly
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

  // Container - no extra background, just content
  container: {
    maxWidth: '480px',
    width: '100%',
    padding: '60px 20px 20px',
    position: 'relative',
    zIndex: 2,
  },

  content: {
    textAlign: 'center',
    marginBottom: '24px',
  },

  title: {
    fontSize: '2.8rem',
    fontWeight: '500',
    color: '#ffffff',
    lineHeight: '1.1',
    marginBottom: '12px',
    letterSpacing: '-0.02em',
    fontFamily: '"Season", serif',
    textShadow: '0 4px 30px rgba(0,0,0,0.6)',
  },

  subtitle: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.5',
    maxWidth: '440px',
    margin: '0 auto',
    fontFamily: '"Clash Display", sans-serif',
    fontWeight: '400',
    textShadow: '0 2px 20px rgba(0,0,0,0.5)',
  },

  formWrapper: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '12px',
    padding: '4px',
  },

  iframe: {
    width: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    borderRadius: '12px',
  },

  thankYou: {
    textAlign: 'center',
    padding: '30px 20px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: '16px',
    backdropFilter: 'blur(8px)',
  },

  checkmark: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '12px',
  },

  thankTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: '6px',
    fontFamily: '"Season", serif',
  },

  thankSub: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: '1.6',
    fontFamily: '"Clash Display", sans-serif',
  },
};
