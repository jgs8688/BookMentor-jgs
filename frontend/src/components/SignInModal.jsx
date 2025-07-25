import React from 'react';
import "../styles/Auth.css";
import "./Modal.css";

export default function SignInModal({ onClose, onSwitchToSignUp }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="auth-title">Sign In to Book Mentor</h2>
        <form className="auth-form">
          <div>
            <label className="auth-label">Email</label>
            <input type="email" className="auth-input" required />
          </div>
          <div>
            <label className="auth-label">Password</label>
            <input type="password" className="auth-input" required />
          </div>
          <button type="submit" className="auth-button">Sign In</button>
        </form>
        <p className="auth-footer">
          Don’t have an account? <span onClick={onSwitchToSignUp} style={{ color: '#00ffb3', cursor: 'pointer' }}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}
