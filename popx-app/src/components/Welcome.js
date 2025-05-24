import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="card">
        <div className="brand-logo">
          <h1 className="logo-text">PopX</h1>
          <p className="tagline">Your Digital Transformation Partner</p>
        </div>
        <div className="welcome-content">
          <h2 className="welcome-title">Welcome to PopX</h2>
          <p className="welcome-description">
            Transform your business with our innovative solutions and expert support.
          </p>
          <div className="cta-buttons">
            <a href="/signup" className="btn-primary">
              Get Started
            </a>
            <a href="/signin" className="btn-secondary">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
