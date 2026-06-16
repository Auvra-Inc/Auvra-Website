import React, { useState, useEffect } from 'react';

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load Tally widget script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for form submission
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
      {/* Background Image - covers entire screen */}
      <div style={styles.backgroundImage}></div>

      {/* Dark Overlay - matches image size */}
      <div style={styles.darkOverlay}></div>

      {/* Content */}
      <div style={styles.container}>
        <div style={styles.header}>
          <a href="/" style={styles.logoLink}>
            <span style={styles.logo}>Auvra<span style={styles.dot}>.</span></span>
          </a>
        </div>

        <div style={styles.content}>
          <h1 style={styles.title}>
            The permanent home for human culture is coming.
          </h1>
          <p style={styles.subtitle}>
            We are building a place where stories are kept, traditions endure,
            and creation becomes legacy.
          </p>
          <p style={styles.subtitle2}>
            Join the waitlist. Be the first to experience it.
          </p>
        </div>

        {!submitted ? (
          <div style={styles.formWrapper}>
            <iframe
              src="https://tally.so/embed/1AB0YL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
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
            <h2 style={styles.thankTitle}>You are on the list.</h2>
            <p style={styles.thankSub}>
              We will notify you the moment we launch.
            </p>
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
    fontFamily: '"Season", "Clash Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },

  // Background Image - covers entire screen without zoom
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

  // Dark Overlay - matches image size exactly
  darkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    zIndex: 1,
  },

  container: {
    maxWidth: '560px',
    width: '100%',
    padding: '48px 40px',
    backgroundColor: 'rgba(20, 20, 20, 0.0)', // Fully transparent
    borderRadius: '24px',
    border: 'none',
    boxShadow: 'none',
    position: 'relative',
    zIndex: 2,
  },

  header: {
    marginBottom: '32px',
    textAlign: 'center',
  },

  logoLink: {
    textDecoration: 'none',
  },

  logo: {
    fontSize: '2rem',
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
    marginBottom: '32px',
  },

  title: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '1.2',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
    fontFamily: '"Clash Display", sans-serif',
  },

  subtitle: {
    fontSize: '1.05rem',
    color: '#d1d5db',
    lineHeight: '1.6',
    maxWidth: '480px',
    margin: '0 auto 8px',
    fontFamily: '"Season", serif',
  },

  subtitle2: {
    fontSize: '1.05rem',
    color: '#f3f4f6',
    lineHeight: '1.6',
    maxWidth: '480px',
    margin: '0 auto',
    fontWeight: '500',
    fontFamily: '"Season", serif',
  },

  formWrapper: {
    width: '100%',
    marginBottom: '24px',
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
    marginBottom: '24px',
  },

  checkmark: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '16px',
  },

  thankTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '8px',
    fontFamily: '"Clash Display", sans-serif',
  },

  thankSub: {
    fontSize: '1rem',
    color: '#d1d5db',
    lineHeight: '1.6',
    fontFamily: '"Season", serif',
  },

  footer: {
    textAlign: 'center',
    marginTop: '8px',
  },

  backLink: {
    fontSize: '0.875rem',
    color: '#9ca3af',
    textDecoration: 'none',
    transition: 'color 0.2s',
    fontFamily: '"Season", sans-serif',
  },
};
