import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';  // Make sure this file has the updated CSS

const Header = () => {
  return (
    <header className="header-container">
      {/* Top Row: Logo + Sign Up */}
      <div className="header-top">
        <Link to="/" className="logo">📚 Book Mentor</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
      </div>

      {/* Bottom Row: Navigation */}
      <nav className="header-bottom">
        <Link to="/">Home</Link>
        <Link to="/recommend">Recommend</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
