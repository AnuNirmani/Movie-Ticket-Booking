import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../HeadFoot/Navbar";
import Footer from "../../HeadFoot/Footer";
import "../../../css/Home/Booking/payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingData = location.state || {
    movie: "Lilo & Stitch",
    theater: "CCC Cinemas",
    date: "29th May",
    activeShowtime: "9.00 am",
    selectedSeats: ["A11"],
    fullTickets: 1,
    halfTickets: 0,
    totalTickets: 1,
    amount: 600.0,
  };

  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <>
      <Navbar />

      {/* Timer banner */}
      <div className="billing-banner">
        Billing Information (You have {timeLeft} seconds to complete the booking.)
      </div>

      <div className="payment-container">
        {/* Left: Form */}
        <div className="payment-form">
          <label>First Name</label>
          <input type="text" placeholder="Jone" />

          <label>Phone No</label>
          <input type="text" placeholder="+94" />

          <label>Email</label>
          <input type="email" placeholder="jone@gmail.com" />

          <label>Card type</label>
          <div className="card-options">
            <div className="card-option">
              <input type="radio" name="card" id="visa" />
              <label htmlFor="visa" className="card-label">
                <div className="card-logo visa-logo">VISA</div>
                <span className="card-name">Visa</span>
              </label>
            </div>
            
            <div className="card-option">
              <input type="radio" name="card" id="frimi" />
              <label htmlFor="frimi" className="card-label">
                <div className="card-logo frimi-logo">
                  <div className="frimi-text">FriMi</div>
                  <div className="frimi-subtitle">By Nations Trust Bank</div>
                  <div className="frimi-tagline">Live Effortlessly</div>
                </div>
                <span className="card-name">Visa</span>
              </label>
            </div>
            
            <div className="card-option">
              <input type="radio" name="card" id="mastercard" />
              <label htmlFor="mastercard" className="card-label">
                <div className="card-logo mastercard-logo">
                  <div className="mastercard-circles">
                    <div className="circle red"></div>
                    <div className="circle orange"></div>
                  </div>
                  <div className="mastercard-text">mastercard</div>
                </div>
                <span className="card-name">Mastercard</span>
              </label>
            </div>
            
            <div className="card-option">
              <input type="radio" name="card" id="amex" />
              <label htmlFor="amex" className="card-label">
                <div className="card-logo amex-logo">AMEX</div>
                <span className="card-name">Mastercard</span>
              </label>
            </div>
          </div>

          <div className="terms">
            <input type="checkbox" /> I agree to the all terms and conditions
          </div>

          <div className="form-actions">
            <button className="back" onClick={() => navigate(-1)}>
              Back
            </button>
            <button className="next">Next</button>
          </div>
        </div>

        {/* Right: Ticket summary */}
        <div className="ticket-summary">
          <h3>Tickets Summary</h3>
          <p><strong>Movie Name :</strong> {bookingData.movie}</p>
          <p><strong>Location :</strong> {bookingData.theater}</p>
          <p><strong>Adult :</strong> {bookingData.fullTickets}</p>
          <p><strong>Seat No(s) :</strong> {bookingData.selectedSeats?.join(", ")}</p>
          <p><strong>Date :</strong> {bookingData.date}</p>
          <p><strong>Time :</strong> {bookingData.activeShowtime}</p>

          <hr />

          <p className="note">
            <strong>Note;</strong><br />
            ALL SALES ARE FINAL and there will be NO REFUNDS, Cancellation and Amendment
            to the confirmed and finalized bookings
          </p>

          <div className="amount">
            <span>Amount Payable</span>
            <strong>LKR {bookingData.amount.toFixed(2)}</strong>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Payment;
