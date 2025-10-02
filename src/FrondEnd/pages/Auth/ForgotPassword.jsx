import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../../assets/logo.png";
import "../../css/Auth/forgotpassword.css";

function ForgotPassword() {
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
    <div className="forgot-password-page">
      <div className="forgot-password-modal">
        <h1 className="modal-title">Forgot your password?</h1>
        
        <div className="modal-content">
          <div className="logo-section">
            <div className="logo-image">
              <img src={logoImage} alt="Movie Express Logo" />
            </div>
            <div className="logo-text">
              {/* <span className="logo-movie">MOVIE</span> */}
              <span className="logo-express">MOVIE EXPRESS</span>
            </div>
          </div>

          <p className="instruction-text">
            Please enter the email address you'd like your password reset information sent to:
          </p>

          <form className="forgot-password-form" onSubmit={handleSubmit}>
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
    </div>
  );
}

export default ForgotPassword;
