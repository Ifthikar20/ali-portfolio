
// File: src/components/ProjectCarousel.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaShieldAlt, FaChartLine, FaLock, FaKey, FaFileAlt, FaSearch, FaBug, FaFilePdf } from 'react-icons/fa';

function ProjectCarousel({ id, slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Set up auto slide
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  // Pause on hover
  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const getIconForSlide = (iconName) => {
    switch (iconName) {
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaChartLine': return <FaChartLine />;
      case 'FaLock': return <FaLock />;
      case 'FaKey': return <FaKey />;
      case 'FaFileAlt': return <FaFileAlt />;
      case 'FaSearch': return <FaSearch />;
      case 'FaBug': return <FaBug />;
      case 'FaFilePdf': return <FaFilePdf />;
      default: return <FaShieldAlt />;
    }
  };

  return (
    <div className="carousel-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="carousel-track" id={`carousel-${id}`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <div className="carousel-image">
              <div className="placeholder-project">
                {getIconForSlide(slide.icon)}
                <p>{slide.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="carousel-nav">
        <button className="carousel-prev" data-carousel={`carousel-${id}`} onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="carousel-dots" id={`dots-${id}`}>
          {slides.map((_, index) => (
            <div 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`} 
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <button className="carousel-next" data-carousel={`carousel-${id}`} onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ProjectCarousel;
