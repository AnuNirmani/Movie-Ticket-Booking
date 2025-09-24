import React from "react";
import "../../css/HeadFoot/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <div className="logo-container">
            <img 
              src="/src/assets/logo.png" 
              alt="Movie Express Logo" 
              className="footer-logo-img"
            />
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
          
          {/* App Download Section */}
          <div className="app-download">
            <h4>FIND US ON</h4>
            <div className="app-buttons">
              <a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-btn google-play"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="app-store-image"
                />
              </a>
              <a 
                href="https://apps.apple.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-btn app-store"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  className="app-store-image"
                />
              </a>
            </div>
          </div>
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
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
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
