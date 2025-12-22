import React from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import Deals from "../../components/Deals";
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
               <img 
                 src="/assets/LandingPageAnimation.png" 
                 alt="Movie Express Cinemas - Colombo City Center" 
                 className="cinema-ad-image"
               />
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
               <img 
                 src="/assets/LandingPageAnimation.png" 
                 alt="Movie Express Cinemas - Kandy City Center" 
                 className="cinema-ad-image"
               />
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

      {/* Deals Section */}
      <Deals />

      <Footer />
    </div>
  );
};

export default Advertisements;
