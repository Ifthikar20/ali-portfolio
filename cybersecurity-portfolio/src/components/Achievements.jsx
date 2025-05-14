// File: src/components/Achievements.jsx
import React from 'react';

function Achievements() {
  const achievements = [
    {
      year: '2023',
      title: 'OSCP Certification',
      description: 'Achieved Offensive Security Certified Professional certification with a perfect score in the 24-hour penetration testing exam.'
    },
    {
      year: '2022',
      title: 'CTF Champion - DefCon',
      description: 'Ranked in the top 10 in the prestigious DefCon CTF competition, solving complex challenges in web exploitation and reverse engineering.'
    },
    {
      year: '2021',
      title: 'Published Security Research',
      description: 'Discovered and responsibly disclosed critical vulnerabilities in popular IoT devices, leading to security patches that protected millions of users.'
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="section-title">
        <h2>Certifications & Achievements</h2>
      </div>
      <div className="achievements-timeline">
        {achievements.map((achievement, index) => (
          <div className="achievement-item" key={index}>
            <div className="achievement-date">{achievement.year}</div>
            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
