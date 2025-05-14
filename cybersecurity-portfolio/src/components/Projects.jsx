// File: src/components/Projects.jsx
import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import { FaGithub, FaExternalLinkAlt, FaDownload, FaFileAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Network Intrusion Detection System',
      tags: ['Python', 'Machine Learning', 'Network Security'],
      slides: [
        { icon: 'FaShieldAlt', title: 'Dashboard Overview' },
        { icon: 'FaChartLine', title: 'Network Map' },
        { icon: 'FaChartLine', title: 'Alert Statistics' }
      ],
      description: 'A custom-built network intrusion detection system that uses machine learning algorithms to identify suspicious network activities and potential security breaches in real-time.',
      features: [
        'Real-time network traffic analysis using packet capture',
        'Anomaly detection using supervised machine learning',
        'Custom rule engine for known attack pattern recognition',
        'Comprehensive dashboard with alert prioritization',
        'Automated response capabilities for threat mitigation'
      ],
      technical: 'Built using Python with Scikit-learn for ML models, Scapy for packet analysis, and Flask for the web dashboard. The system was tested against the DARPA dataset and achieved 97% accuracy in detecting known attack vectors.',
      links: [
        { icon: <FaGithub />, text: 'Source Code', url: '#' },
        { icon: <FaExternalLinkAlt />, text: 'Live Demo', url: '#' }
      ]
    },
    {
      id: 2,
      title: 'Secure File Encryption Tool',
      tags: ['Python', 'Cryptography', 'GUI Application'],
      slides: [
        { icon: 'FaLock', title: 'Encryption Interface' },
        { icon: 'FaKey', title: 'Key Management' },
        { icon: 'FaFileAlt', title: 'File Browser' }
      ],
      description: 'A secure file encryption application that uses modern encryption algorithms to protect sensitive files with a user-friendly interface.',
      features: [
        'AES-256 encryption with secure key management',
        'Password-based key derivation with PBKDF2',
        'File integrity verification using HMAC',
        'Secure deletion of original files',
        'Cross-platform compatibility (Windows, MacOS, Linux)'
      ],
      technical: 'Developed using Python with the cryptography library for encryption operations and PyQt5 for the GUI. The application follows cryptographic best practices and has undergone security auditing to identify and mitigate potential vulnerabilities.',
      links: [
        { icon: <FaGithub />, text: 'Source Code', url: '#' },
        { icon: <FaDownload />, text: 'Download', url: '#' }
      ]
    },
    {
      id: 3,
      title: 'Vulnerability Scanner and Reporter',
      tags: ['Python', 'Network Security', 'Web Security'],
      slides: [
        { icon: 'FaSearch', title: 'Scan Interface' },
        { icon: 'FaBug', title: 'Vulnerability Details' },
        { icon: 'FaFilePdf', title: 'Report Generation' }
      ],
      description: 'An automated vulnerability assessment tool designed to scan networks and web applications for security vulnerabilities, with comprehensive reporting and remediation guidance.',
      features: [
        'Comprehensive port scanning and service enumeration',
        'Web application vulnerability scanning (SQLi, XSS, CSRF)',
        'SSL/TLS configuration analysis',
        'Misconfigurations and outdated software detection',
        'Detailed reports with severity ratings and remediation steps'
      ],
      technical: 'Built with Python, leveraging libraries like Nmap, SQLmap, and OpenVAS through APIs. The scanner maintains a regularly updated vulnerability database and generates detailed HTML and PDF reports using Jinja2 templates and ReportLab.',
      links: [
        { icon: <FaGithub />, text: 'Source Code', url: '#' },
        { icon: <FaFileAlt />, text: 'Documentation', url: '#' }
      ]
    }
  ];

  // Create text scramble effect for project titles
  React.useEffect(() => {
    const createTextScramble = (element, originalText) => {
      let iterations = 0;
      const interval = setInterval(() => {
        element.textContent = originalText
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
          element.textContent = originalText;
        }
        
        iterations += 1 / 3;
      }, 30);
    };

    document.querySelectorAll('.project-header h3').forEach(title => {
      title.addEventListener('mouseover', () => {
        const originalText = title.textContent;
        createTextScramble(title, originalText);
      });
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>Cybersecurity Projects</h2>
      </div>
      
      {projects.map((project) => (
        <div className="project-showcase" key={project.id}>
          <div className="project-header">
            <h3>{project.title}</h3>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="project-carousel">
            <ProjectCarousel id={project.id} slides={project.slides} />
            
            <div className="project-details">
              <div className="project-description">
                <p>{project.description}</p>
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h4>Technical Implementation:</h4>
                <p>{project.technical}</p>
              </div>
              <div className="project-links">
                {project.links.map((link, index) => (
                  <a href={link.url} className="project-link" key={index}>
                    {link.icon} {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
