import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logoImage from "../../../assets/logo.png";
import "../../css/Auth/signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false); // to show message box
  const [showSuccessModal, setShowSuccessModal] = useState(false); // to show success message box
  
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Error state
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Reset all errors
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPhoneError("");
    setPasswordError("");
    setConfirmPasswordError("");
    
    let hasErrors = false;
    
    // Validate First Name
    if (!firstName.trim()) {
      setFirstNameError("First Name is required");
      hasErrors = true;
    }
    
    // Validate Last Name
    if (!lastName.trim()) {
      setLastNameError("Last Name is required");
      hasErrors = true;
    }
    
    // Validate Email
    if (!email.trim()) {
      setEmailError("Email is required");
      hasErrors = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasErrors = true;
    }
    
    // Validate Phone
    if (!phone.trim()) {
      setPhoneError("Phone number is required");
      hasErrors = true;
    } else if (!validatePhone(phone)) {
      setPhoneError("Phone number must start with + and have 11 digits total");
      hasErrors = true;
    }
    
    // Validate Password
    if (!password.trim()) {
      setPasswordError("Password is required");
      hasErrors = true;
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long");
      hasErrors = true;
    }
    
    // Validate Confirm Password
    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm Password is required");
      hasErrors = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasErrors = true;
    }
    
    // If no errors, proceed with signup
    if (!hasErrors) {
      setShowConfirmModal(true);
    }
  };

  const handleConfirmAccount = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCancelAccount = () => {
    setShowConfirmModal(false);
    // navigate("/login");
  };

  const handleSuccessOK = () => {
    setShowSuccessModal(false);
    navigate("/login");
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
            <div className="logo-text">
              {/* <span className="logo-movie">MOVIE</span> */}
              <span className="logo-express">MOVIE EXPRESS</span>
            </div>
          </div>

          {/* Form */}
          <form className="signup-form" onSubmit={handleSignup}>
            {/* First Name */}
            <div className="form-group">
              <label className="form-label">
                First Name <span className="required">*</span>
                {firstNameError && <span className="error-message-inline">{firstNameError}</span>}
              </label>
              <input 
                type="text" 
                className={`form-input ${firstNameError ? 'error' : ''}`}
                placeholder="Jone"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label className="form-label">
                Last Name <span className="required">*</span>
                {lastNameError && <span className="error-message-inline">{lastNameError}</span>}
              </label>
              <input 
                type="text" 
                className={`form-input ${lastNameError ? 'error' : ''}`}
                placeholder="Fernando"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">
                Email <span className="required">*</span>
                {emailError && <span className="error-message-inline">{emailError}</span>}
              </label>
              <input 
                type="email" 
                className={`form-input ${emailError ? 'error' : ''}`}
                placeholder="jone@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">
                Phone No <span className="required">*</span>
                {phoneError && <span className="error-message-inline">{phoneError}</span>}
              </label>
              <input 
                type="tel" 
                className={`form-input ${phoneError ? 'error' : ''}`}
                placeholder="+94"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label">
                Password <span className="required">*</span>
                {passwordError && <span className="error-message-inline">{passwordError}</span>}
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-input password-input ${passwordError ? 'error' : ''}`}
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <label className="form-label">
                Confirm Password <span className="required">*</span>
                {confirmPasswordError && <span className="error-message-inline">{confirmPasswordError}</span>}
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`form-input password-input ${confirmPasswordError ? 'error' : ''}`}
                  placeholder="******"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              {/* <button 
                className="modal-close"
                onClick={handleCancelAccount}
              >
              </button> */}
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


      {/* Success Modal (the message box that pops up after click confirm) */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="success-modal">
            <div className="success-icon">
              <div className="checkmark-circle">
                <span className="checkmark">✓</span>
              </div>
            </div>
            <div className="success-message">
              <p>Account Created Successfully</p>
            </div>
            <button 
              className="success-ok-btn"
              onClick={handleSuccessOK}
            >
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Signup;
