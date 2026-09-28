import React from 'react';
import Navbar from './Components/Navbar'; 
import Hero from './Components/Hero'; 
import Carousel from './Components/Carousel'; 
import FeaturesAndVideo from './Components/FeaturesAndVideo'; 
import RecentPosts from './Components/RecentPosts'; 
import SponsorsSection from './Components/SponsorsSection'; 
import Footer from './Components/Footer'; 

function App() {
  return (
    <div>
      {/* 1. Header Navigation Wrapper */}
      <Navbar />
      
      {/* 2. Hero Body Section */}
      <Hero />

      {/* 3. Orange Slider Section */}
      <Carousel />

      {/* 4. Features and Video Box */}
      <FeaturesAndVideo />

      {/* 5. Recent Blog Posts Grid Section */}
      <RecentPosts />

      {/* 6. Organizations Sponsors Board Centered Box */}
      <SponsorsSection />

      {/* 7.Footer */}
      <Footer />
    </div>
  );
}

export default App;
