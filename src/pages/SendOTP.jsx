import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";
import "../css/sendotp.css";

function SendOTP() {
  const [email, setEmail] = useState("jone@gmail.com");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your OTP sending logic here
    navigate("/send-otp");
    // You can add navigation to OTP verification page here
  };

  const handleBackToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="send-otp-page">
      <div className="send-otp-modal">
        <h1 className="modal-title">Send OTP</h1>

        <div className="modal-content">
          <div className="logo-section">
            <div className="logo-image">
              <img src={logoImage} alt="Movie Express Logo" />
            </div>
            <div className="logo-text">MOVIE EXPRESS</div>
          </div>

          <p className="instruction-text">
            Please enter the email address you'd like your password reset information sent to:
          </p>

          <form className="send-otp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jone@gmail.com"
                required
              />
            </div>

            <button type="submit" className="send-otp-button">
              Send OTP
            </button>
          </form>

          <div className="back-to-login">
            <a href="#" onClick={handleBackToLogin} className="back-link">
              Back To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendOTP;
