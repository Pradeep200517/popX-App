import React from 'react';
import './Main.css';

const Main = () => {
  // Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem('userData')) || {
    fullName: 'Guest User',
    email: 'guest@example.com',
    companyName: 'Not specified',
    isAgency: 'no'
  };

  return (
    <div className="main-container">
      <div className="card">
        <h1 className="title">Welcome, {userData.fullName.split(' ')[0]}</h1>
        <div className="profile-section">
          <div className="profile-pic">
            <svg className="user-icon" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <div className="camera-icon">
              <svg className="camera-icon-svg" viewBox="0 0 24 24">
                <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{userData.fullName}</h2>
            <p className="profile-email">{userData.email}</p>
            <p className="company-info">Company: {userData.companyName}</p>
            <p className="agency-info">Agency: {userData.isAgency === 'yes' ? 'Yes' : 'No'}</p>
          </div>
        </div>
        
        <div className="account-details">
          <h2 className="section-title">Account Information</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="label">Full Name</span>
              <span className="value">{userData.fullName}</span>
            </div>
            <div className="detail-item">
              <span className="label">Email Address</span>
              <span className="value">{userData.email}</span>
            </div>
            <div className="detail-item">
              <span className="label">Company Name</span>
              <span className="value">{userData.companyName}</span>
            </div>
            <div className="detail-item">
              <span className="label">Agency Status</span>
              <span className="value">{userData.isAgency === 'yes' ? 'Yes' : 'No'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
