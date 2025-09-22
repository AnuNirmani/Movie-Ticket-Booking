import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "../css/login.css"; // ✅ CSS import

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-box">
        {/* Heading */}
        <h2 className="login-title">Nice To See You Again</h2>
        <p className="login-subtitle">Log in to your account</p>

        {/* Logo */}
        <div className="login-logo">
          <img src="/logo.png" alt="Movie Express" />
        </div>

        {/* Form */}
        <form className="login-form">
          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="jone@gmail.com" />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="******"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>

          {/* Remember + Forget */}
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forgot-link">
              Forget Password?
            </a>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider">or</div>

        {/* Social Login */}
        <div className="social-login">
          <button className="social-btn facebook">
            <FaFacebook /> Facebook
          </button>
          <button className="social-btn google">
            <FaGoogle /> Google
          </button>
        </div>

        {/* Sign up link */}
        <p className="signup-text">
          Don’t have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
