import React from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import Deals from "../../components/Deals";
import "../../css/Home/theaters.css";

const Theaters = () => {
  const theaters = [
    {
      id: 1,
      name: "Movie Express Cinemas",
      location: "Colombo City Center",
      image: "/src/assets/LandingPageAnimation.png",
      address: "Colombo City Center, Colombo 03",
      phone: "+94 11 123 4567",
      facilities: ["IMAX", "Dolby Atmos", "Reclining Seats", "Food Court"]
    },
    {
      id: 2,
      name: "Movie Express Cinemas",
      location: "Kandy City Center",
      image: "/src/assets/LandingPageAnimation.png",
      address: "Kandy City Center, Kandy",
      phone: "+94 81 123 4567",
      facilities: ["4DX", "Dolby Vision", "Premium Seats", "Snack Bar"]
    },
    {
      id: 3,
      name: "Movie Express Cinemas",
      location: "Reality Plaza",
      image: "/src/assets/LandingPageAnimation.png",
      address: "Reality Plaza, Colombo 04",
      phone: "+94 11 234 5678",
      facilities: ["IMAX", "Dolby Atmos", "VIP Lounge", "Parking"]
    },
    {
      id: 4,
      name: "Movie Express Cinemas",
      location: "Liberty Plaza",
      image: "/src/assets/LandingPageAnimation.png",
      address: "Liberty Plaza, Colombo 03",
      phone: "+94 11 345 6789",
      facilities: ["4DX", "Dolby Vision", "Premium Seats", "Restaurant"]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="theaters-container">
      <div className="theaters-header">
        <h1 className="theaters-title">THEATERS</h1>
        <p className="theaters-subtitle">Experience the magic of cinema at our premium locations</p>
      </div>

      <div className="theaters-grid">
        {theaters.map((theater) => (
          <div key={theater.id} className="theater-card">
            <div className="theater-image">
              <img src={theater.image} alt={theater.location} />
              <div className="theater-overlay">
                <div className="theater-facilities">
                  {theater.facilities.map((facility, index) => (
                    <span key={index} className="facility-tag">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="theater-info">
              <div className="theater-header">
                <h3 className="theater-name">{theater.name}</h3>
                <div className="location-info">
                  <svg className="location-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#e91e63"/>
                  </svg>
                  <span className="theater-location">{theater.location}</span>
                </div>
              </div>
              
              <div className="theater-details">
                <div className="detail-item">
                  <svg className="detail-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#999"/>
                  </svg>
                  <span>{theater.address}</span>
                </div>
                
                <div className="detail-item">
                  <svg className="detail-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#999"/>
                  </svg>
                  <span>{theater.phone}</span>
                </div>
              </div>
              
              <button className="view-location-btn">
                View Location
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="theaters-footer">
        <div className="contact-info">
          <h3>Need Help Finding a Theater?</h3>
          <p>Contact our customer service team for assistance</p>
          <div className="contact-buttons">
            <button className="contact-btn primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
              </svg>
              Call Us
            </button>
            <button className="contact-btn secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
              </svg>
              Email Us
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Deals Section */}
      <Deals />

      <Footer />
    </>
  );
};

export default Theaters;
