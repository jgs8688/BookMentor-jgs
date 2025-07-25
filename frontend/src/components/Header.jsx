import React, { useState } from 'react';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const closeModals = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <>
      <header className="header-container">
        <div className="header-top">
          <Link to="/" className="logo">📚 Book Mentor</Link>
          <div className="auth-buttons">
            <button className="signin" onClick={() => setShowSignIn(true)}>Sign In</button>
          </div>
        </div>
        <nav className="header-bottom">
          <Link to="/">Home</Link>
          <Link to="/recommend">Recommend</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {showSignIn && (
        <SignInModal
          onClose={closeModals}
          onSwitchToSignUp={() => {
            setShowSignIn(false);
            setShowSignUp(true);
          }}
        />
      )}

      {showSignUp && (
        <SignUpModal
          onClose={closeModals}
          onSwitchToSignIn={() => {
            setShowSignUp(false);
            setShowSignIn(true);
          }}
        />
      )}
    </>
  );
};

export default Header;
