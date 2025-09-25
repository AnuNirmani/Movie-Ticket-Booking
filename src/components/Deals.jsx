import React from "react";
import "./Deals.css";

const Deals = () => {
  return (
    <div className="deals-section">
      <div className="deals-container">
        <h3 className="deals-title">DEALS</h3>
        <div className="deals-grid">
          {/* Deal Card 1: 50% Cash Back Offer */}
          <div className="deal-card">
            <div className="deal-banner" style={{
              backgroundImage: "url('/src/assets/LandingPageAnimation.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="deal-banner-content">
                <div className="deal-text-overlay">
                </div>
              </div>
            </div>
            <div className="deal-footer">
              <h3 className="deal-title">50% Cash Back Offer</h3>
              <div className="deal-info-link">
                <span className="info-icon">ℹ</span>
                <span className="info-text">More Information</span>
              </div>
            </div>
          </div>

          {/* Deal Card 2: Student Offer */}
          <div className="deal-card">
            <div className="deal-banner student-banner" style={{
              backgroundImage: "url('/src/assets/LandingPageAnimation.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>              
            </div>
            <div className="deal-footer">
              <h3 className="deal-title">Student Offer</h3>
              <div className="deal-info-link">
                <span className="info-icon">ℹ</span>
                <span className="info-text">More Information</span>
              </div>
            </div>
          </div>

          {/* Deal Card 3: Buy One & Get Free PopCorn */}
          <div className="deal-card">
            <div className="deal-banner popcorn-banner" style={{
              backgroundImage: "url('/src/assets/LandingPageAnimation.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>  

            </div>
            <div className="deal-footer">
              <h3 className="deal-title">Buy One & Get Free PopCorn</h3>
              <div className="deal-info-link">
                <span className="info-icon">ℹ</span>
                <span className="info-text">More Information</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
