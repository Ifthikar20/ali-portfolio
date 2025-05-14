// File: src/components/About.jsx
import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="profile-image">
          <div className="image-container">
            <div className="placeholder-image">AS</div>
          </div>
        </div>
        <div className="about-text">
          <p>Hi there! I'm Ali, a dedicated cybersecurity professional with expertise in network security, vulnerability assessment, penetration testing, and digital forensics.</p>
          <p>My mission is to secure digital environments against evolving cyber threats through innovative solutions and a proactive security mindset.</p>
          <div className="skills">
            <div className="skill-tag">Penetration Testing</div>
            <div className="skill-tag">Network Security</div>
            <div className="skill-tag">Malware Analysis</div>
            <div className="skill-tag">SIEM</div>
            <div className="skill-tag">Python</div>
            <div className="skill-tag">Ethical Hacking</div>
            <div className="skill-tag">Cryptography</div>
            <div className="skill-tag">Incident Response</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;