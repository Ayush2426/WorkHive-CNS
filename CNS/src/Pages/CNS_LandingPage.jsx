// CodeverseLandingPage.jsx

import React from 'react';
import '../CSS/CNS_LandingPage.css'; 
import { WiSnowflakeCold } from "react-icons/wi";

const CNSLandingPage = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <div>
      <header>
        <div className="container header-inner">
          <h1 className="logo">CNS</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">Dashboard</a>
            <a href="#dashboard">Services</a>
            <a href="#services">Blogs</a>
            <a href="#projects">Contact</a>
            <a href="#contact">About</a>
          </nav>
          <button onClick={toggleTheme} className="toggle-btn">Theme<WiSnowflakeCold /></button>
        </div>
      </header>

      <section id="home" className="hero">
        <span>CNS - CyberNest Solutions</span>
        <h2>Empowering the Next Generation of Coders</h2>
        <p>Training. Projects. Career-Ready Skills.</p>
        <a
          href="https://wa.me/+917903859277?text=Hi!%20I'm%20interested%20in%20your%20training%20program!"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          Chat with Us on WhatsApp
        </a>
      </section>

      <section id="dashboard" className="dashboard">
        <h2>Startup Dashboard</h2>
        <div className="dashboard-grid">
          <div className="card">
            <h3>150+</h3>
            <p>Students Trained</p>
          </div>
          <div className="card">
            <h3>20+</h3>
            <p>Live Projects</p>
          </div>
          <div className="card">
            <h3>15+</h3>
            <p>Workshops Conducted</p>
          </div>
          <div className="card">
            <h3>10+</h3>
            <p>Partner Colleges</p>
          </div>
          <div className="card">
            <h3>5+</h3>
            <p>Internships Offered</p>
          </div>
          <div className="card">
            <h3>50+</h3>
            <p>Cloud Projects Deployed</p>
          </div>
          <div className="card">
            <h3>100+</h3>
            <p>Kids Trained</p>
          </div>
          <div className="card">
            <h3>25+</h3>
            <p>Security Bootcamps</p>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {[
            {
              title: 'Full Stack Development',
              text: 'End-to-end training with hands-on projects in Java, Spring Boot, MERN, and Flutter.'
            },
            {
              title: 'Cybersecurity Bootcamps',
              text: 'Practical training in network security, ethical hacking, SOC operations, and more.'
            },
            {
              title: 'Industry-based Projects',
              text: 'Real projects from vendors involving student teams for experience and income.'
            },
            {
              title: 'Workshops in Colleges',
              text: 'Organize interactive training in remote areas or government institutions.'
            },
            {
              title: 'Cloud & DevOps Training',
              text: 'CI/CD pipelines, Kubernetes, Docker, AWS essentials, and deployment practices.'
            },
            {
              title: 'Tech for Kids',
              text: 'Beginner courses for school kids on programming, AI, and game development.'
            },
            {
              title: 'Internships & Job Placements',
              text: 'Internships and job placements in reputed companies for our students.'
            },
            {
              title: 'Skill Development',
              text: 'Skill development programs in collaboration with government initiatives.'
            }
          ].map((service, index) => (
            <div className="card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="feedback">
        <h2>Feedback</h2>
        <form className="feedback-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Feedback" required></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </section>

      <a
        href="https://wa.me/+917903859277?text=Hi!%20I'm%20interested%20in%20your%20training%20program!"
        className="whatsapp-float"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
        />
      </a>

      <footer>
        <p>&copy; 2025 WorkHive. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CNSLandingPage;
