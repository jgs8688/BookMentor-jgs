import React from "react";
import "../styles/Footer.css"; // make sure this matches your file location

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer1">
          <div className="footer-col">
            <h2>Book Mentor</h2>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Partnership</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>Information</h2>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>Policies</h2>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Download App</h3>
            <img src="src/assets/gp.jpg" alt="Google Play" className="app-badge" />
            <img src="src/assets/ap.jpg" alt="App Store" className="app-badge" />
          </div>
        </div>

        <div className="footer2">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} Book Mentor. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="https://linkedin.com"><img src="src/assets/linkedin.png" alt="LinkedIn" /></a>
            <a href="https://twitter.com"><img src="src/assets/twitter.png" alt="Twitter" /></a>
            <a href="https://youtube.com"><img src="src/assets/youtube.png" alt="YouTube" /></a>
            <a href="https://instagram.com"><img src="src/assets/instagram.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
