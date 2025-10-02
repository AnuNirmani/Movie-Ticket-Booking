import React from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Footer/advertisements.css";

const Advertisements = () => {
  return (
    <div className="advertisements-page">
      <Navbar />
      
      <div className="advertisements-container">
        <div className="advertisements-header">
          <h1>ADVERTISEMENTS</h1>
        </div>

        <div className="advertisements-content">
          {/* First Advertisement - Colombo City Center */}
          <div className="advertisement-section">
            <div className="advertisement-image">
              <div className="cinema-image colombo-cinema">
                <div className="cinema-seats blue-seats"></div>
                <div className="cinema-screen"></div>
                <div className="neon-lighting pink-neon"></div>
              </div>
            </div>
            <div className="advertisement-text">
              <div className="text-content">
                <h2>Movie Express Cinemas - Colombo City Center</h2>
                <p>
                  Dedicated toward raising the bar in Sri Lanka's cinema experience, 
                  Movie Express Cinemas aims to provide our patrons with all the flare 
                  of old-school movie theaters, coupled with state-of-the-art modernity 
                  and comfort, consistent with international standards.
                </p>
              </div>
            </div>
          </div>

          {/* Second Advertisement - Kandy City Center */}
          <div className="advertisement-section">
            <div className="advertisement-image">
              <div className="cinema-image kandy-cinema">
                <div className="cinema-seats red-seats"></div>
                <div className="cinema-screen"></div>
                <div className="grid-lighting"></div>
              </div>
            </div>
            <div className="advertisement-text">
              <div className="text-content">
                <h2>Movie Express Cinemas - Kandy City Center</h2>
                <p>
                  Dedicated toward raising the bar in Sri Lanka's cinema experience, 
                  Movie Express Cinemas aims to provide our patrons with all the flare 
                  of old-school movie theaters, coupled with state-of-the-art modernity 
                  and comfort, consistent with international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Advertisements;
