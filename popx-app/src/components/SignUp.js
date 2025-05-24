import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'no'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    // Redirect to main page
    window.location.href = '/main';
  };

  return (
    <div className="signup-container">
      <div className="card">
        <h1 className="title-text">Create Account</h1>
        <p className="description">Join PopX to unlock exclusive features and connect with our amazing community!</p>
        
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="fullName" className="label-text">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label-text">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label-text">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              placeholder="Create a strong password"
              required
              minLength="8"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company" className="label-text">Company Name *</label>
            <input
              type="text"
              id="company"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your company name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="agency" className="label-text">Are you an Agency? *</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  id="agencyYes"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  id="agencyNo"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>

          <div className="form-footer">
            <p className="terms-text">
              By creating an account, you agree to our{' '}
              <a href="#" className="link">Terms of Service</a>{' '}
              and{' '}
              <a href="#" className="link">Privacy Policy</a>
            </p>
            <p className="login-link">
              Already have an account?{' '}
              <a href="/signin" className="link">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
