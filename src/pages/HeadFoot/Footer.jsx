import React from "react";
import "../../css/HeadFoot/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <div className="logo-container">
            <div className="movie-ticket">
              <div className="ticket-perforations"></div>
              <div className="ticket-content">
                <div className="film-strip"></div>
                <div className="motion-lines"></div>
              </div>
            </div>
            <div className="logo-text">
              <h2 className="movie-text">MOVIE EXPRESS</h2>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          {/* <h4>Navigation</h4> */}
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/theaters">Theaters</a></li>
            <li><a href="/deals">Deals</a></li>
          </ul>
        </div>

        {/* Company Information */}
        <div className="footer-company">
          {/* <h4>Company</h4> */}
          <ul>
            <li><a href="/advertisements">Advertisements</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter & Social Media */}
        <div className="footer-newsletter">
          <h4>Subscribe For Newsletter</h4>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" className="email-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="social-media">
            <a href="#" className="social-icon instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </a>
            <a href="#" className="social-icon facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="app-download">
        <h4>FIND US ON</h4>
        <div className="app-buttons">
          <a href="#" className="app-btn google-play">
            <div className="app-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
            </div>
            <div className="app-text">
              <span className="app-label">GET IT ON</span>
              <span className="app-name">Google Play</span>
            </div>
          </a>
          <a href="#" className="app-btn app-store">
            <div className="app-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
            </div>
            <div className="app-text">
              <span className="app-label">Download on the</span>
              <span className="app-name">App Store</span>
            </div>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>©2025 Movie Express All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
