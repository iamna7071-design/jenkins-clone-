import React, { useState } from 'react';
import { sliderData } from './SliderData';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  // Next aur Previous slides ke togglers
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  // Button hilne (shake) wala custom function
  const handleButtonClick = () => {
    setIsShaking(true);
    // 300ms baad shaking effect ko band karne ke liye timeout
    setTimeout(() => {
      setIsShaking(false);
    }, 300);
  };

  // Current active slide data container
  const currentSlide = sliderData[currentIndex];

  return (
    <div style={styles.sliderSection}>
      {/* Left Navigation Arrow */}
      <button onClick={prevSlide} style={styles.arrowLeft}>‹</button>

      {/* Main Slide Content Area */}
      <div style={styles.slideContainer}>
        {/* Left Content Column */}
        <div style={styles.textColumn}>
          <h2 style={styles.heading}>{currentSlide.title}</h2>
          <p style={styles.description}>{currentSlide.desc}</p>
          
          <button 
            onClick={handleButtonClick}
            style={{
              ...styles.moreInfoBtn,
              animation: isShaking ? 'shakeBtn 0.3s ease-in-out' : 'none'
            }}
          >
            {currentSlide.btnText}
          </button>
        </div>

        {/* Right Image Column */}
        <div style={styles.imageColumn}>
          <img src={currentSlide.image} alt={currentSlide.title} style={styles.slideImage} />
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <button onClick={nextSlide} style={styles.arrowRight}>›</button>

      {/* Bottom Dots Indicator Bar */}
      <div style={styles.dotsContainer}>
        {sliderData.map((slide, index) => (
          <span 
            key={slide.id} 
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.dot,
              backgroundColor: index === currentIndex ? '#ffffff' : 'rgba(255,255,255,0.4)',
              width: index === currentIndex ? '24px' : '8px'
            }}
          />
        ))}
      </div>

      {/* CSS Animation Keyframes Injector */}
      <style>{`
        @keyframes shakeBtn {
          0% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          50% { transform: translateX(6px); }
          75% { transform: translateX(-4px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

// —— Orange Layout Styles ——
const styles = {
  sliderSection: {
    background: 'radial-gradient(circle, #f05a28 0%, #d9381e 100%)', // Orange textured-like dynamic base gradient
    padding: '3rem 4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    minHeight: '380px',
    color: '#ffffff',
    fontFamily: 'sans-serif',
    overflow: 'hidden',
  },
  arrowLeft: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '3rem',
    cursor: 'pointer',
    opacity: 0.7,
    zIndex: 10,
  },
  arrowRight: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '3rem',
    cursor: 'pointer',
    opacity: 0.7,
    zIndex: 10,
  },
  slideContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1000px',
    width: '100%',
    gap: '4rem',
  },
  textColumn: {
    flex: '1.2',
    textAlign: 'left',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    marginBottom: '1.8rem',
    opacity: 0.95,
  },
  moreInfoBtn: {
    padding: '0.6rem 1.4rem',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    color: '#ffffff',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.95rem',
    transition: 'background-color 0.2s',
  },
  imageColumn: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
  },
  slideImage: {
    maxWidth: '340px',
    width: '100%',
    height: 'auto',
    maxHeight: '260px',
    objectFit: 'contain',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
  },
  dot: {
    height: '8px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }
};

export default Carousel;

