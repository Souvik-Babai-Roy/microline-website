import React from 'react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="pt-20">
      {/* Breadcrumb Hero */}
      <div className="about-hero bg-gradient-dark">
        <div
          className="about-hero-overlay"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1200')",
          }}
        />
        <div className="container about-hero-content">
          <p className="small text-primary text-uppercase mb-2" style={{ letterSpacing: '1px' }}>
            <button onClick={() => onNavigate('home')} className="breadcrumb-link">
              Home
            </button>
            {' / About Us'}
          </p>
          <h1 className="text-white display-4 font-weight-bolder">About Microline India</h1>
        </div>
      </div>

      <div className="section py-16">
        <div className="container">
          {/* Who We Are */}
          <div className="grid lg-grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Who We Are
              </h2>
              <p className="text-secondary mb-4">
                Microline India, a name resonant with innovation in microwave technology, offers a cutting-edge technology in visualization of electromagnetic waves. Since 1997 we are providing innovative Microwave and RF solutions, advancing the technology to global reach with new heights.
              </p>
              <p className="text-secondary mb-4">
                With the designing experience and innovations ideas backed by skilled manpower, Microline produces finest quality products designed in-house assuring the products to be versatile and rugged in trend with modern technologies.
              </p>
              <p className="text-secondary">
                Our distinction is our satisfied customers; we take all efforts to serve them with best of our expertise.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Microline India Office"
                className="about-image"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm-grid-cols-4 gap-8 mb-20">
            <div className="stats-card">
              <i className="fas fa-award"></i>
              <span className="stats-value">Since 1997</span>
              <span className="stats-label">Delivering Innovation</span>
            </div>
            <div className="stats-card">
              <i className="fas fa-microchip"></i>
              <span className="stats-value">In-house</span>
              <span className="stats-label">Design & Development</span>
            </div>
            <div className="stats-card">
              <i className="fas fa-check-circle"></i>
              <span className="stats-value">Custom Solutions</span>
              <span className="stats-label">As Per Requirement</span>
            </div>
            <div className="stats-card">
              <i className="fas fa-globe"></i>
              <span className="stats-value">Pan India</span>
              <span className="stats-label">Support</span>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md-grid-cols-2 gap-8 mb-20">
            <div className="mission-card">
              <h3 className="text-xl font-weight-bolder">
                <i className="fas fa-bullseye mr-2"></i> Our Mission
              </h3>
              <p>
                To deliver world-class microwave and RF solutions that empower research institutions, defence organizations, and industries across India and beyond, through relentless innovation and unwavering commitment to quality.
              </p>
            </div>
            <div className="vision-card">
              <h3 className="text-xl font-weight-bolder">
                <i className="fas fa-eye mr-2"></i> Our Vision
              </h3>
              <p>
                To become the leading indigenous manufacturer of microwave and RF instruments in India, recognized globally for precision engineering, customer satisfaction, and technological excellence.
              </p>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="text-center mb-12">
            <h2 className="section-title">
              Our <span className="text-primary">Core Strengths</span>
            </h2>
          </div>

          <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-6 mb-16">
            <div className="strength-card">
              <h3>In-House Design</h3>
              <p>End-to-end product design from concept to prototype, ensuring optimal performance.</p>
            </div>
            <div className="strength-card">
              <h3>Advanced Manufacturing</h3>
              <p>State-of-the-art fabrication facilities for precision microwave components.</p>
            </div>
            <div className="strength-card">
              <h3>Quality Testing</h3>
              <p>Rigorous testing protocols to ensure every product meets the highest standards.</p>
            </div>
            <div className="strength-card">
              <h3>Custom Solutions</h3>
              <p>Tailored microwave and RF solutions designed to meet specific client requirements.</p>
            </div>
            <div className="strength-card">
              <h3>Technical Support</h3>
              <p>Expert guidance and after-sales support from our skilled engineering team.</p>
            </div>
            <div className="strength-card">
              <h3>R&D Capabilities</h3>
              <p>Continuous research and development to stay at the forefront of RF technology.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="about-cta">
            <button onClick={() => onNavigate('contact')} className="btn btn-primary">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
          <p className="text-muted small">&copy; 2024 Microline India. All rights reserved.</p>
          <button onClick={() => onNavigate('contact')} className="btn btn-primary">
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
}