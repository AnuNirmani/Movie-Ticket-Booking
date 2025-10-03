import React from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Home/deals.css";

const Deals = () => {
  return (
    <div className="deals-page">
      <Navbar />
      

        <div className="deals-container">
          <h1 className="deals-header">DEALS</h1>
          <div className="deals-grid">
            {/* Deal Card 1: Buy One Get One Free Offer */}
              <div className="deal-card">
                <div className="deal-banner" style={{
                  backgroundImage: "url('/src/assets/LandingPageAnimation.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}>
                 <div className="deal-banner-content">                           
                 </div>
                </div>
              <div className="deal-footer">
                <h3 className="deal-title">Buy One Get One Free</h3>
              </div>
            </div>

          </div>
          
          {/* Deal Details Section */}
          <div className="deal-details">
            <div className="deal-details-content">
              <h4>Deal Details</h4>
              <p>Enjoy an exclusive Buy 1 Get 1 FREE offer on movie tickets and popcorn at Movie Express!</p>
              <p><strong>Validity:</strong> This exciting promotion is valid from 1st June to 31st July 2025 for all purchases made using Najm Credit Cards — both online and at Movie Express counters.</p>
              
              <h5>Terms & Conditions:</h5>
              <ul>
                <li>Offer valid for locally issued Najm Credit Cards only.</li>
                <li>Cardholder must make the full payment using their Najm Visa or Mastercard to be eligible for the offer.</li>
                <li>The Buy 1 Get 1 Free offer applies to:</li>
                <ul>
                  <li>Standard 2D and 3D movie tickets, and</li>
                  <li>Regular-sized popcorn combos.</li>
                </ul>
              </ul>
              
              <button className="get-deal-btn">Get Deal</button>
            </div>
          </div>
        </div>

      
      <Footer />
    </div>
  );
};

export default Deals;