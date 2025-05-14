// File: src/components/Header.jsx
import React from 'react';
import Terminal from './Terminal';
import { FaGithub, FaLinkedin, FaTwitter, FaHackerrank } from 'react-icons/fa';

function Header() {
    return (
        <header>
            <div className="hero">
                <div className="glitch"></div>
                <div className="hero-content">
                    <h1 className="glitch-text">Ali Seyed</h1>
                    <p className="tagline">Cybersecurity Engineer & Ethical Hacker</p>
                    <Terminal />
                    <div className="social-links">
                        <a href="https://github.com/" className="social-icon" aria-label="GitHub Profile"><FaGithub /></a>
                        <a href="https://linkedin.com/" className="social-icon" aria-label="LinkedIn Profile"><FaLinkedin /></a>
                        <a href="https://twitter.com/" className="social-icon" aria-label="Twitter Profile"><FaTwitter /></a>
                        <a href="https://hackerrank.com/" className="social-icon" aria-label="HackerRank Profile"><FaHackerrank /></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;