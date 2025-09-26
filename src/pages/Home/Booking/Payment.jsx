import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../HeadFoot/Navbar";
import Footer from "../../HeadFoot/Footer";
import "../../../css/Home/Booking/payment.css";
// import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  console.log("Payment component loaded");
  console.log("Location state:", location.state);
  

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
            <label>
              <input type="radio" name="card" /> <span className="visa">VISA</span> 
            </label>
            <label>
              <input type="radio" name="card" /> <span className="master">Mastercard</span>
            </label>
            <label>
              <input type="radio" name="card" /> <span className="amex">AMEX</span>
            </label>
          </div>

          <div className="terms">
            <input type="checkbox" /> I agree to the all terms and conditions
          </div>

          <div className="form-actions">
            <button className="back" onClick={() => navigate(-1)}>Back</button>
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
            ALL SALES ARE FINAL and there will be NO REFUNDS, Cancellation and Amendment to the confirmed and finalized bookings
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
