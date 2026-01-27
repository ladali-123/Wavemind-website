import React from 'react';
import { Routes, Route } from 'react-router-dom';

// All Component Imports
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Olympiad from './components/Olympiad';
import IITJEE from './components/IIT';
import StatsBar from './components/StatsBar';
import Waveapp from './components/Waveapp'
import ProcessSteps from './components/ProcessSteps';
import FeaturesGrid from './components/FeaturesGrid';
import CoursesSection from './components/CoursesSection';
import FloatingButtons from './components/FloatingButtons';
import Faq from './components/Faqwave';
import Footer from './components/Footer';
import Contact from './components/Contact';

function HomePage() {
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
      {/* Footer */}
      <Footer />
    </div>
  );
}

function OlympiadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Olympiad Section */}
      <Olympiad />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function IITJEEPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* IIT JEE Section */}
      <IITJEE />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/olympiad" element={<OlympiadPage />} />
      <Route path="/iit" element={<IITJEEPage />} />
    </Routes>
  );
}

export default App;
