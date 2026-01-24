import React from 'react';

// All Component Imports
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import Waveapp from './components/Waveapp'
import ProcessSteps from './components/ProcessSteps';
import FeaturesGrid from './components/FeaturesGrid';
import CoursesSection from './components/CoursesSection';
import FloatingButtons from './components/FloatingButtons';
import Faq from './components/Faqwave';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />
      
      {/* Main Hero Section */}
      <HeroSection />
      <Contact/>
      {/* Stats Bar */}
      <StatsBar />
      
      {/* Results Section */}
      
      
      {/* Process Steps */}
      <ProcessSteps />
      
      {/* About Section */}
      <FeaturesGrid />
      
      {/* Courses Section */}
      <CoursesSection />
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
       <Waveapp/>
        <Faq/>
      {/* Fo oter */}
      <Footer />
    </div>
  );
}

export default App;