// Cybersecurity Portfolio JavaScript

// Matrix background effect
const createMatrixBackground = () => {
    const matrixBg = document.querySelector('.matrix-background');
    const rows = 50;
    const columns = 100;
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        
        const randomDelay = Math.floor(Math.random() * 2000);
        const randomSpeed = Math.floor(Math.random() * 15) + 5;
        
        column.style.animationDelay = `${randomDelay}ms`;
        column.style.animationDuration = `${randomSpeed}s`;
        
        matrixBg.appendChild(column);
    }
};

// Terminal typing effect
const initTerminal = () => {
    const lines = document.querySelectorAll('.terminal .line');
    
    let currentLine = 0;
    let currentChar = 0;
    let isTyping = false;
    
    // Hide all lines initially except the prompt
    lines.forEach((line, index) => {
        if (index !== 0 && index !== lines.length - 1) {
            line.style.opacity = '0';
            line.style.display = 'none';
        }
    });
    
    const typeNextChar = () => {
        const commandSpan = lines[currentLine].querySelector('.command');
        if (!commandSpan) return;
        
        const text = commandSpan.textContent;
        if (currentChar < text.length) {
            commandSpan.textContent = text.substring(0, currentChar + 1);
            currentChar++;
            setTimeout(typeNextChar, 50 + Math.random() * 50);
        } else {
            isTyping = false;
            setTimeout(showNextLine, 500);
        }
    };
    
    const showNextLine = () => {
        currentLine++;
        if (currentLine < lines.length - 1) {
            lines[currentLine].style.display = 'flex';
            setTimeout(() => {
                lines[currentLine].style.opacity = '1';
                
                if (lines[currentLine].querySelector('.command')) {
                    currentChar = 0;
                    isTyping = true;
                    setTimeout(typeNextChar, 300);
                } else {
                    setTimeout(showNextLine, 300);
                }
            }, 100);
        } else {
            // Show last line with blinking cursor
            lines[lines.length - 1].style.display = 'flex';
            setTimeout(() => {
                lines[lines.length - 1].style.opacity = '1';
            }, 100);
        }
    };
    
    // Start typing
    setTimeout(() => {
        isTyping = true;
        typeNextChar();
    }, 500);
};

// Carousel functionality
const initCarousels = () => {
    const carousels = document.querySelectorAll('.carousel-track');
    
    carousels.forEach((carousel, index) => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dotsContainer = document.getElementById(`dots-${index + 1}`);
        const prevButton = document.querySelector(`[data-carousel="carousel-${index + 1}"].carousel-prev`);
        const nextButton = document.querySelector(`[data-carousel="carousel-${index + 1}"].carousel-next`);
        
        let currentIndex = 0;
        
        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = i === 0 ? 'dot active' : 'dot';
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
        
        // Go to specific slide
        const goToSlide = (index) => {
            currentIndex = index;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update dots
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        };
        
        // Next slide
        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            goToSlide(currentIndex);
        };
        
        // Previous slide
        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(currentIndex);
        };
        
        // Add event listeners
        if (prevButton) prevButton.addEventListener('click', prevSlide);
        if (nextButton) nextButton.addEventListener('click', nextSlide);
        
        // Auto slide
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Pause on hover
        carousel.parentElement.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        carousel.parentElement.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize terminal effect
    initTerminal();
    
    // Initialize carousels
    initCarousels();
    
    // Animation for elements on scroll
    const animateElements = () => {
        const elements = document.querySelectorAll('.section-title, .project-showcase, .achievement-item, .contact-content, .about-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initialize animations
    document.querySelectorAll('.section-title, .project-showcase, .achievement-item, .contact-content, .about-content').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', animateElements);
    
    // Run animation on page load
    setTimeout(animateElements, 300);
    
    // Add pulse effect to skills
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('active-skill');
        });
    });
    
    // Create artificial hacking text effect for security elements
    document.querySelectorAll('.project-header h3').forEach(title => {
        title.addEventListener('mouseover', () => {
            const originalText = title.textContent;
            let iterations = 0;
            
            const interval = setInterval(() => {
                title.textContent = originalText
                    .split('')
                    .map((letter, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return String.fromCharCode(65 + Math.floor(Math.random() * 62));
                    })
                    .join('');
                
                if (iterations >= originalText.length) {
                    clearInterval(interval);
                    title.textContent = originalText;
                }
                
                iterations += 1 / 3;
            }, 30);
        });
    });
    
    // Navbar scrolling effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        // Update last scroll position
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        // Add background only when not at the top
        if (scrollTop > 50) {
            navbar.style.backgroundColor = 'rgba(10, 14, 23, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 14, 23, 0.9)';
        }
    });
});

// Add CSS class for animations and effects
const style = document.createElement('style');
style.textContent = `
    .hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .active-skill {
        background-color: var(--primary);
        color: var(--dark);
        transform: translateY(-3px);
        box-shadow: var(--glow);
    }
    
    .navbar {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }
    
    @keyframes matrixRain {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);