import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";
import "../css/signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false); // to show message box
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const handleConfirmAccount = () => {
    setShowConfirmModal(false);
    navigate("/login");
  };

  const handleCancelAccount = () => {
    setShowConfirmModal(false);
    // navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-box">
          {/* Header */}
          <div className="signup-header">
            <h1 className="signup-title">Welcome To Movie Express</h1>
            <p className="signup-subtitle">Create your account</p>
          </div>

          {/* Logo */}
          <div className="logo-section">
            <div className="logo-image">
              <img src={logoImage} alt="Movie Express Logo" />
            </div>
            <div className="logo-text">MOVIE EXPRESS</div>
          </div>

          {/* Form */}
          <form className="signup-form" onSubmit={handleSignup}>
            {/* First Name */}
            <div className="form-group">
              <label className="form-label">First Name <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Jone"
                defaultValue="Jone"
                required 
              />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label className="form-label">Last Name <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Fernando"
                defaultValue="Fernando"
                required 
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">Email <span className="required">*</span></label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="jone@gmail.com"
                defaultValue="jone@gmail.com"
                required 
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">Phone No <span className="required">*</span></label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="+94"
                defaultValue="+94"
                required 
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label">Password <span className="required">*</span></label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input password-input"
                  placeholder="******"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label className="form-label">Confirm Password <span className="required">*</span></label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-input password-input"
                  placeholder="******"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>

          {/* Already have account */}
          <div className="signin-section">
            <p className="signin-text">
              Have an account?{" "}
              <a 
                href="#" 
                className="signin-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>


      {/* Confirmation Modal (the message box that pops up after signing up)*/}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="confirmation-modal">
            <div className="modal-header">
              <h3 className="modal-title">Confirm Account Creation</h3>
              <button 
                className="modal-close"
                onClick={handleCancelAccount}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <div className="modal-buttons">
                <button 
                  className="confirm-btn"
                  onClick={handleConfirmAccount}
                >
                  Confirm
                </button>
                <button 
                  className="cancel-btn"
                  onClick={handleCancelAccount}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}

export default Signup;
