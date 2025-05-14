// File: src/components/Contact.jsx
import React from 'react';
import { FaTerminal, FaEnvelope, FaKey, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2>Contact</h2>
      </div>
      <div className="contact-content">
        <p>Interested in cybersecurity collaboration or consulting? Let's connect.</p>
        <a href="mailto:contact@example.com" className="contact-button">
          initiate_contact.sh <FaTerminal />
        </a>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope />
            <span>secure@aliseyed.com</span>
          </div>
          <div className="contact-item">
            <FaKey />
            <span>PGP: 0xF21A8F39B</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
