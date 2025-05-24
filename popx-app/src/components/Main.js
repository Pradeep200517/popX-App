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
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{fullName}</h2>
            <p className="profile-email">{email}</p>
            <p className="company-info">{companyName}</p>
            <p className="agency-info">{isAgency ? 'Agency Account' : 'Individual Account'}</p>
          </div>
        </div>
        
        <div className="account-info">
          <h2 className="section-title">Account Information</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="label">Full Name</span>
              <span className="value">{fullName}</span>
            </div>
            <div className="detail-item">
              <span className="label">Email Address</span>
              <span className="value">{email}</span>
            </div>
            <div className="detail-item">
              <span className="label">Company Name</span>
              <span className="value">{companyName}</span>
            </div>
            <div className="detail-item">
              <span className="label">Account Type</span>
              <span className="value">{isAgency ? 'Agency' : 'Individual'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
