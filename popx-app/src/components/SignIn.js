import React from 'react';
import './SignIn.css';

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    window.location.href = '/main'
    
    // Get user data from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Find user with matching email
    const user = users.find(u => u.email === email);
    
    if (user && user.password === password) {
      // Store user data in localStorage
      localStorage.setItem('currentUser', JSON.stringify({
        ...user,
        isAuthenticated: true
      }));
      
      // Redirect to main page
      window.location.href = '/main';
    } else {
      alert('Invalid email or password');
    }
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
