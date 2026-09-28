import React from 'react';
import { majorSponsors, supportOrganizations } from './SponsorsData';

const SponsorsSection = () => {
  return (
    <div style={styles.sectionContainer}>
      
      {/* —— Top Layout Area: Corporate Sponsors Board —— */}
      <div style={styles.sponsorsBoard}>
        <p style={styles.boardHeading}>
          We thank the following organizations for their major commitments to support the Jenkins project.
        </p>
        
        {/* FIXED: Live Stable Digital Brand Logos Display */}
        <div style={styles.logoGrid}>
          {majorSponsors.map((brand) => (
            <div key={brand.id} style={styles.logoItem}>
              <img 
                src={brand.logo} 
                alt={brand.name} 
                style={styles.sponsorImage} 
                onError={(e) => {
                  // Fallback agar kisi client par svg cache issue ho
                  e.target.style.display = 'none';
                }}
              />
              <span style={styles.fallbackLabel}>{brand.name}</span>
            </div>
          ))}
        </div>

        <p style={styles.boardHeadingSub}>
          We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.
        </p>

        {/* Text Links Group Mapping Row */}
        <div style={styles.linksFlexWrapper}>
          {supportOrganizations.map((name, index) => (
            <a key={index} href={`#${name.toLowerCase()}`} style={styles.supportInlineLink}>
              {name}
            </a>
          ))}
        </div>
      </div>

      {/* —— FIXED: Card Wrapper completely centered layout —— */}
      <div style={styles.contributorCardSection}>
        <div style={styles.thankYouCard}>
          <div style={styles.contributorAvatarFrame}>
            <svg viewBox="0 0 100 100" style={styles.purpleGitSvg}>
              <path fill="#a44cd3" d="M30,20 h40 v20 h-40 z M20,50 h20 v30 h-20 z M60,50 h20 v30 h-20 z" />
            </svg>
          </div>
          
          <div style={styles.thankYouContent}>
            <p style={styles.thankYouText}>
              Thank you <a href="#user" style={styles.profileLink}>DasTapan09</a> for making 1 pull request to the <a href="#repo" style={styles.profileLink}>sedstart-runner-plugin</a> repo in August 2026!
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

// —— Pure Core CSS Style Objects Layout ——
const styles = {
  sectionContainer: {
    backgroundColor: '#f8f9fa', 
    padding: '4rem 2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    gap: '4rem',
  },
  sponsorsBoard: {
    maxWidth: '1140px',
    width: '100%',
    textAlign: 'center',
  },
  boardHeading: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#24292e',
    marginBottom: '2.5rem',
  },
  logoGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
    marginBottom: '3.5rem',
  },
  logoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    minWidth: '100px',
  },
  sponsorImage: {
    height: '100%',
    maxWidth: '120px',
    objectFit: 'contain',
    opacity: 0.75, // Perfect watermark-type corporate blending styling
  },
  fallbackLabel: {
    fontSize: '0.75rem',
    color: '#666',
    marginTop: '4px',
    fontWeight: '500',
  },
  boardHeadingSub: {
    fontSize: '0.92rem',
    fontWeight: '600',
    color: '#24292e',
    marginBottom: '1.5rem',
    lineHeight: '1.5',
  },
  linksFlexWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.6rem 1.2rem',
    flexWrap: 'wrap',
    maxWidth: '950px',
    margin: '0 auto',
  },
  supportInlineLink: {
    color: '#0066cc', 
    textDecoration: 'none',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
  },
  contributorCardSection: {
    width: '100%',
    maxWidth: '1140px',
    display: 'flex',
    justifyContent: 'center', 
  },
  thankYouCard: {
    backgroundColor: '#f5f0eb', 
    border: '1px solid #eadecf',
    borderRadius: '12px',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    maxWidth: '460px',
    width: '100%',
    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
    boxSizing: 'border-box',
    textAlign: 'left',
  },
  contributorAvatarFrame: {
    backgroundColor: '#eadecf',
    borderRadius: '8px',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  purpleGitSvg: {
    width: '42px',
    height: '42px',
  },
  thankYouContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  thankYouText: {
    fontSize: '0.95rem',
    color: '#333333',
    lineHeight: '1.5',
    margin: 0,
  },
  profileLink: {
    color: '#0066cc',
    textDecoration: 'none',
  }
};

export default SponsorsSection;
