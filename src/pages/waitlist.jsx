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

      {/* Glass Overlay */}
      <div style={styles.glassOverlay}></div>

      {/* Content */}
      <div style={styles.container}>
        <div style={styles.header}>
          <a href="/" style={styles.logoLink}>
            <span style={styles.logo}>Auvra<span style={styles.dot}>.</span></span>
          </a>
        </div>

        <div style={styles.content}>
          <h1 style={styles.title}>
            Discover new ways to preserve culture.
          </h1>
          <p style={styles.subtitle}>
            Join the waitlist for the permanent home of human culture.
          </p>
        </div>

        {!submitted ? (
          <div style={styles.formWrapper}>
            <iframe
              src="https://tally.so/embed/1AB0YL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&textColor=ffffff&primaryColor=8b5cf6"
              width="100%"
              height="400"
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

        <div style={styles.footer}>
          <a href="/" style={styles.backLink}>← Back to Auvra</a>
        </div>
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
    fontFamily: '"Clash Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden',
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
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    zIndex: 1,
  },

  container: {
    maxWidth: '560px',
    width: '100%',
    padding: '40px 32px',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    position: 'relative',
    zIndex: 2,
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  },

  header: {
    marginBottom: '28px',
    textAlign: 'center',
  },

  logoLink: {
    textDecoration: 'none',
  },

  logo: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: '-0.02em',
    fontFamily: '"Clash Display", sans-serif',
  },

  dot: {
    color: '#8b5cf6',
  },

  content: {
    textAlign: 'center',
    marginBottom: '28px',
  },

  title: {
    fontSize: '2.4rem',
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: '1.15',
    marginBottom: '12px',
    letterSpacing: '-0.02em',
    fontFamily: '"Season", serif',
  },

  subtitle: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: '1.6',
    maxWidth: '440px',
    margin: '0 auto',
    fontFamily: '"Clash Display", sans-serif',
    fontWeight: '400',
  },

  formWrapper: {
    width: '100%',
    marginBottom: '20px',
  },

  iframe: {
    width: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
  },

  thankYou: {
    textAlign: 'center',
    padding: '20px 0',
    marginBottom: '20px',
  },

  checkmark: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '12px',
  },

  thankTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
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

  footer: {
    textAlign: 'center',
    marginTop: '8px',
  },

  backLink: {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.4)',
    textDecoration: 'none',
    transition: 'color 0.2s',
    fontFamily: '"Clash Display", sans-serif',
  },
};
