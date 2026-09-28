import React from 'react';
import { featuresData } from './FeaturesData';

const FeaturesAndVideo = () => {
  return (
    <div style={styles.sectionWrapper}>
      
      {/* —— Section 1: Features Grid Layout —— */}
      <div style={styles.gridContainer}>
        {featuresData.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div key={feature.id} style={styles.cardItem}>
              <div style={styles.iconCircle}>
                <IconComponent size={22} color="#ffffff" />
              </div>
              <div style={styles.cardTextContent}>
                <h4 style={styles.featureTitle}>{feature.title}</h4>
                <p style={styles.featureDesc}>{feature.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div style={styles.videoContainer}>
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.videoLinkWrapper}
        >
          {/* FIXED: White Text Overlay instead of broken image link */}
          <div style={styles.textOverlay}>
            Jenkins Official Introduction Video
          </div>

          <div style={styles.playButtonOverlay}>
            <div style={styles.playTriangle}></div>
          </div>
        </a>
      </div>

    </div>
  );
};

// —— Pure Core CSS Styling Object ——
const styles = {
  sectionWrapper: {
    backgroundColor: '#ffffff',
    padding: '4rem 2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
    gap: '2.5rem 2rem',
    maxWidth: '1140px',
    width: '100%',
    marginBottom: '5rem',
  },
  cardItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.2rem',
    textAlign: 'left',
  },
  iconCircle: {
    backgroundColor: '#007acc', 
    borderRadius: '50%',
    minWidth: '46px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 2px 8px rgba(0,122,204,0.15)',
  },
  cardTextContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  featureTitle: {
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#24292e',
    margin: '0 0 0.5rem 0',
    lineHeight: '1.3',
  },
  featureDesc: {
    fontSize: '0.92rem',
    color: '#586069',
    lineHeight: '1.6',
    margin: 0,
  },
  videoContainer: {
    width: '100%',
    maxWidth: '850px', 
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 12px 35px rgba(0,0,0,0.15)',
    backgroundColor: '#000000',
    position: 'relative',
    aspectRatio: '16/9', 
  },
  videoLinkWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'block',
    cursor: 'pointer',
    textDecoration: 'none', // text ke neeche se default line hatane ke liye
  },
  coverImageStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    display: 'block',
    opacity: 0.4, // background image ko halka kiya taake white text saaf nazar aaye
  },
  // FIXED: Text styling setting for top side white cloud header layout
  textOverlay: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#ffffff', // Perfect white color setup
    fontSize: '1.2rem',
    fontWeight: '600',
    textAlign: 'center',
    width: '90%',
    textShadow: '0 2px 4px rgba(0,0,0,0.6)', // Text ke peeche shadow taake saaf parha jaye
  },
  playButtonOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#cc181e', 
    width: '76px',
    height: '52px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
  },
  playTriangle: {
    width: 0,
    height: 0,
    borderTop: '12px solid transparent',
    borderLeft: '22px solid #ffffff', 
    borderBottom: '12px solid transparent',
    marginLeft: '5px',
  }
};

export default FeaturesAndVideo;
