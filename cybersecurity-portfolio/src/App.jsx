import React, { useEffect } from 'react';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Effect hooks for animations and scroll behavior
  useEffect(() => {
    // Smooth scrolling for navigation links
    // Animation for elements on scroll
    // Navbar scrolling effect
    
    // (All the JavaScript functionality from main.js)
  }, []);

  return (
    <div>
      <MatrixBackground />
      <div className="container">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;