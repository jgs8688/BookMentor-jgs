import React from 'react';
import "../styles/Auth.css";
import "./Modal.css";

export default function SignUpModal({ onClose, onSwitchToSignIn }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="auth-title">Create Your Account</h2>
        <form className="auth-form">
          <div>
            <label className="auth-label">Full Name</label>
            <input type="text" className="auth-input" required />
          </div>
          <div>
            <label className="auth-label">Email</label>
            <input type="email" className="auth-input" required />
          </div>
          <div>
            <label className="auth-label">Password</label>
            <input type="password" className="auth-input" required />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <span onClick={onSwitchToSignIn} style={{ color: '#00ffb3', cursor: 'pointer' }}>Sign In</span>
        </p>
      </div>
    </div>
  );
}
