import React from 'react';
import './SignIn.css';

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // For now, redirect to main page
    window.location.href = '/main';
  };

  return (
    <div className="signin-container">
      <div className="card">
        <h1 className="title-text">
          Sign in to your <span className="brand">PopX</span> account
        </h1>
        <p className="description">
          Welcome back! Please enter your details.
        </p>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label-text">Email Address</label>
            <input type="email" className="input-field" placeholder="Enter email address" />
          </div>
          <div className="form-group">
            <label className="label-text">Password</label>
            <input type="password" className="input-field" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn-gradient">
            Login
          </button>
          <p className="signup-link">
            Don't have an account?{' '}
            <a href="/signup">Create one</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
