import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/HeadFoot/navbar.css";
import backgroundImage from "../../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <img src={backgroundImage} alt="Movie Express Logo" className="logo-image" />
            <div className="logo-text">
              <div className="logo-main">MOVIE EXPRESS</div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/movies" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Movies</Link>
          <Link to="/theaters" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Theaters</Link>
          <a href="/deals" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Deals</a>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          {/* Search Bar */}
          <div className="search-container">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="#999" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="#999" strokeWidth="2"/>
            </svg>
            <input type="text" placeholder="Search" className="search-input" />
          </div>

          {/* Buy Ticket Button */}
          <button className="buy-ticket-btn">
            <span className="btn-icon">🎫</span>
            <span className="btn-text">Buy Ticket</span>
          </button>

          {/* Profile Icon */}
          <div className="profile-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="#e91e63" strokeWidth="2"/>
              <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" stroke="#e91e63" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
