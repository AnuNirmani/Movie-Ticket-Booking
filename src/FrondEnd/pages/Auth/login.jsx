import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logoImage from "../../../assets/logo.png";
import "../../css/Auth/login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home"); 
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
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="jone@gmail.com"
                defaultValue="jone@gmail.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input password-input"
                  placeholder="******"
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
          <div className="social-buttons">
            <button className="social-button facebook-button">
              <FaFacebook className="social-icon" />
              <span>Facebook</span>
            </button>
            <button className="social-button google-button">
              <FcGoogle className="social-icon" />
              <span>Google</span>
            </button>
          </div>

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
