import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/HeadFoot/navbar.css";
import backgroundImage from "../../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleBuyTicketClick = () => {
    navigate("/movie-selecting");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <button className="buy-ticket-btn" onClick={handleBuyTicketClick}>
            <span className="btn-icon">🎫</span>
            <span className="btn-text">Buy Ticket</span>
          </button>

          {/* Profile Icon with Dropdown */}
          <div className="profile-container" ref={profileRef}>
            <div className="profile-icon" onClick={toggleProfileDropdown}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="#e91e63" strokeWidth="2"/>
                <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" stroke="#e91e63" strokeWidth="2"/>
              </svg>
            </div>
            
            {/* Profile Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="profile-dropdown">
                <div className="dropdown-header">
                  <div className="user-avatar">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="4" stroke="#e91e63" strokeWidth="2"/>
                      <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" stroke="#e91e63" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="user-info">
                    <div className="user-name">Sakula Jayasingha</div>
                    <div className="user-email">Sack@gmail.com</div>
                  </div>
                </div>
                
                <div className="dropdown-divider"></div>
                
                <Link to="/profile" className="dropdown-item" onClick={() => setIsProfileDropdownOpen(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Profile</span>
                </Link>
                
                <Link to="/bookings" className="dropdown-item" onClick={() => setIsProfileDropdownOpen(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6H4M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6M20 6l-8 5-8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>My Bookings</span>
                </Link>
                
                <Link to="/favorites" className="dropdown-item" onClick={() => setIsProfileDropdownOpen(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Favorites</span>
                </Link>
                
                <Link to="/settings" className="dropdown-item" onClick={() => setIsProfileDropdownOpen(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Settings</span>
                </Link>
                
                <div className="dropdown-divider"></div>
                
                <Link to="/login" className="dropdown-item logout-item" onClick={() => setIsProfileDropdownOpen(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Logout</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
