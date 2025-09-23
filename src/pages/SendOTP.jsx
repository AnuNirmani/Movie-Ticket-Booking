import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";
import "../css/sendotp.css";

function SendOTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple characters
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 4) {
      // Add your OTP verification logic here
      console.log("OTP entered:", otpValue);
      // Navigate to next page or show success message
    }
  };

  const handleResend = (e) => {
    e.preventDefault();
    // Add resend OTP logic here
    console.log("Resending OTP...");
  };

  const handleBackToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="send-otp-page">
      <div className="send-otp-modal">
        <h1 className="modal-title">Verification</h1>

        <div className="modal-content">
          <div className="logo-section">
            <div className="logo-image">
              <img src={logoImage} alt="Movie Express Logo" />
            </div>
            <div className="logo-text">MOVIE EXPRESS</div>
          </div>
          </div>

          <p className="instruction-text">
            Enter Verification Code
          </p>

          <form className="send-otp-form" onSubmit={handleSubmit}>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  className="otp-input"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  placeholder="0"
                  maxLength="1"
                />
              ))}
            </div>

            <div className="resend-section">
              <span className="resend-text">If you didn't get the code, </span>
              <a href="#" onClick={handleResend} className="resend-link">
                Resend
              </a>
            </div>

            <button type="submit" className="send-button">
              Send
            </button>
          </form>

          {/* Login Link */}
          <div className="login-section">
            <p className="login-text">
              Back to{" "}
              <a
                href="#"
                className="login-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Log In
              </a>
            </p>
          </div>

          
        </div>
      </div>
    );
}

export default SendOTP;
