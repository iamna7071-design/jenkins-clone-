import React from 'react';

const Hero = () => {

  // Simple Notification Handlers
  const handleDownloadClick = () => {
    alert(" Thank you for downloading Jenkins! Your setup file is getting ready.");
  };

  const handleDocsClick = () => {
    alert(" Opening Official Jenkins Documentation and Learning Guides.");
  };

  return (
    <section style={styles.heroSection}>
      <div style={styles.heroContainer}>
        
        {/* Left Side: Logo */}
        <div style={styles.imageWrapper}>
          <img 
            src="https://www.jenkins.io/images/logos/jenkins/jenkins.svg" 
            alt="Jenkins Logo" 
            style={styles.logoImage} 
          />
        </div>

        {/* Right Side: Text Context */}
        <div style={styles.contentWrapper}>
          <h1 style={styles.mainHeading}> Zaid Ali</h1>
          <h3 style={styles.subHeading}>Build great things at any scale</h3>
          
          <p style={styles.description}>
            The leading open source automation server, Jenkins provides hundreds of 
            plugins to support building, deploying and automating any project.
          </p>

          {/* Action Buttons with Alerts */}
          <div style={styles.btnGroup}>
            <button onClick={handleDownloadClick} style={styles.downloadBtn}>
              Download
            </button>
            <button onClick={handleDocsClick} style={styles.docsBtn}>
              Documentation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

// Clean UI Styles 
const styles = {
  heroSection: {
    backgroundColor: '#f8f9fa',
    padding: '4rem 2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1100px',
    gap: '3rem',
    width: '100%',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    minWidth: '280px',
  },
  logoImage: {
    width: '100%',
    maxWidth: '320px',
    height: 'auto',
  },
  contentWrapper: {
    flex: '1.2',
    minWidth: '300px',
    textAlign: 'left',
  },
  mainHeading: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#333333',
    margin: '0 0 0.5rem 0',
    fontFamily: 'Georgia, serif',
  },
  subHeading: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#444444',
    margin: '0 0 1.5rem 0',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555555',
    margin: '0 0 2rem 0',
    maxWidth: '500px',
  },
  btnGroup: {
    display: 'flex',
    gap: '12px',
  },
  downloadBtn: {
    display: 'inline-block',
    padding: '0.65rem 1.5rem',
    backgroundColor: '#ffffff',
    color: '#4a7bb0',
    borderRadius: '4px',
    fontWeight: '500',
    fontSize: '1rem',
    border: '1px solid #ced4da',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    cursor: 'pointer',
  },
  docsBtn: {
    display: 'inline-block',
    padding: '0.65rem 1.5rem',
    backgroundColor: '#ffffff',
    color: '#4a7bb0',
    borderRadius: '4px',
    fontWeight: '500',
    fontSize: '1rem',
    border: '1px solid #ced4da',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    cursor: 'pointer',
  },
};

export default Hero;
