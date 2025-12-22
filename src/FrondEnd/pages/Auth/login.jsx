import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../css/Auth/login.css";

const logoImage = "/assets/logo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError("");
    setPasswordError("");
    
    let hasErrors = false;
    
    // Validate email
    if (!email.trim()) {
      setEmailError("required");
      hasErrors = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasErrors = true;
    }
    
    // Validate password
    if (!password.trim()) {
      setPasswordError("required");
      hasErrors = true;
    } else if (!validatePassword(password)) {
      setPasswordError("Password is wrong");
      hasErrors = true;
    }
    
    // If no errors, proceed with login
    if (!hasErrors) {
      navigate("/home");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          {/* Header */}
          <div className="login-header">
            <h1 className="login-title">Nice To See You Again</h1>
            <p className="login-subtitle">Log in to your account</p>
          </div>

          {/* Logo */}
          <div className="logo-section">
            <div className="logo-image">
              <img src={logoImage} alt="Movie Express Logo" />
            </div>
            <div className="logo-text">MOVIE EXPRESS</div>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">
                Email
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

            <div className="form-group">
              <label className="form-label">
                Password
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

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" className="checkbox" />
                <span className="checkbox-label">Remember Me</span>
              </label>

              <a
                href="#"
                className="forgot-password"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/forgot-password");
                }}
              >
                Forget Password?
              </a>
            </div>

            <button type="submit" className="login-button">Login</button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span className="divider-text">or</span>
          </div>

          {/* Social */}
          {/* <div className="social-buttons">
            <button className="social-button facebook-button">
              <FaFacebook className="social-icon" />
              <span>Facebook</span>
            </button>
            <button className="social-button google-button">
              <FcGoogle className="social-icon" />
              <span>Google</span>
            </button>
          </div> */}

          {/* Sign Up */}
          <div className="signup-section">
            <p className="signup-text">
              Don't have an account?{" "}
              <a
                href="#"
                className="signup-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signup");
                }}
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
