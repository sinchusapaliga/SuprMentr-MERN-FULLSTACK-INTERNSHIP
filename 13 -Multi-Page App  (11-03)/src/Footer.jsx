import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">VANGUARD<span>STUDIOS</span></h2>
          <p>Elevating digital experiences through creative design and innovative technology.</p>
        </div>
        <div className="footer-nav">
          <div className="footer-column">
            <h4>Agency</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2026 Vanguard Studios. All rights reserved.</p>
        <div className="footer-social">
          <a href="#">TW</a>
          <a href="#">IG</a>
          <a href="#">LI</a>
        </div>
      </div>
    </footer>
  );
}
