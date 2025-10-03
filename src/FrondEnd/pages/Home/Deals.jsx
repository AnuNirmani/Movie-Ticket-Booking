import React from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Home/deals.css";

const Deals = () => {
  return (
    <div className="deals-page">
      <Navbar />
      
      <div className="deals-section">
        <div className="deals-container">
          <h3 className="deals-title">DEALS</h3>
          <div className="deals-grid">
            {/* Deal Card 1: Buy One Get One Free Offer */}
            <div className="deal-card">
              <div className="deal-banner najm-banner">
                <div className="deal-banner-content">
                  <div className="najm-logo">
                    <span className="najm-icon">n</span>
                    <span className="najm-text">najm</span>
                  </div>
                  
                  <div className="deal-text-overlay">
                    <h2 className="deal-main-text">
                      BUY ONE GET ONE FREE ON MOVIE TICKETS & POPCORN
                    </h2>
                  </div>
                  
                  <div className="najm-cards">
                    <div className="credit-card najm-grey-card">
                      <div className="card-info">
                        <div className="card-type">VOYAGER</div>
                        <div className="card-number">4582 0</div>
                      </div>
                    </div>
                    <div className="credit-card najm-black-card">
                      <div className="card-info">
                        <div className="card-type">ONE</div>
                        <div className="card-number">4592 00</div>
                      </div>
                      <div className="visa-logo">VISA</div>
                    </div>
                    <div className="credit-card najm-blue-card">
                      <div className="card-info">
                        <div className="card-type">VOYAGER</div>
                        <div className="card-number">4582 0</div>
                      </div>
                    </div>
                    <div className="credit-card najm-silver-card">
                      <div className="card-info">
                        <div className="card-type">ONE</div>
                        <div className="card-number">4592 00</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="popcorn-icon">🍿</div>
                </div>
              </div>
              <div className="deal-footer">
                <h3 className="deal-title">Buy One Get One Free</h3>
                <div className="deal-info-link">
                  <span className="info-icon">ℹ</span>
                  <span className="info-text">More Information</span>
                </div>
              </div>
            </div>

            {/* Deal Card 2: Student Offer */}
            <div className="deal-card">
              <div className="deal-banner student-banner">
                <div className="deal-banner-content">
                  <div className="student-images">
                    <div className="student-group-main">
                      <div className="student-circle"></div>
                    </div>
                    <div className="student-group-bg"></div>
                  </div>
                  
                  <div className="deal-text-overlay">
                    <h2 className="deal-main-text">
                      STUDENT SPECIAL OFFER
                    </h2>
                    <p className="deal-sub-text">
                      30% off on all movie tickets for students
                    </p>
                  </div>
                </div>
              </div>
              <div className="deal-footer">
                <h3 className="deal-title">Student Offer</h3>
                <div className="deal-info-link">
                  <span className="info-icon">ℹ</span>
                  <span className="info-text">More Information</span>
                </div>
              </div>
            </div>

            {/* Deal Card 3: Cash Back Offer */}
            <div className="deal-card">
              <div className="deal-banner cashback-banner">
                <div className="deal-banner-content">
                  <div className="deal-text-overlay">
                    <h2 className="deal-main-text">
                      <span className="highlight-text">50% CASH BACK</span> ON YOUR FIRST BOOKING
                    </h2>
                    <p className="deal-sub-text">
                      Get instant cash back on your first movie ticket purchase
                    </p>
                  </div>
                  
                  <div className="credit-cards">
                    <div className="credit-card red-card">
                      <div className="card-info">
                        <div className="card-type">VISA</div>
                        <div className="card-number">4582 0</div>
                        <div className="card-holder">CARD HOLDER</div>
                      </div>
                      <div className="visa-logo">VISA</div>
                    </div>
                    <div className="credit-card pink-card">
                      <div className="card-info">
                        <div className="card-type">MASTER</div>
                        <div className="card-number">4592 00</div>
                        <div className="card-holder">CARD HOLDER</div>
                      </div>
                    </div>
                    <div className="credit-card blue-card">
                      <div className="card-info">
                        <div className="card-type">VISA</div>
                        <div className="card-number">4582 0</div>
                        <div className="card-holder">CARD HOLDER</div>
                      </div>
                      <div className="visa-logo">VISA</div>
                    </div>
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
      </div>
      
      <Footer />
    </div>
  );
};

export default Deals;

