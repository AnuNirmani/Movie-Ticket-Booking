import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logoImage from "../assets/logo.png";
import MessageBox from "../components/MessageBox";
import "../css/newpassword.css";

function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [messageBox, setMessageBox] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "success"
  });
  const navigate = useNavigate();

  const showMessage = (title, message, type = "success") => {
    setMessageBox({
      isOpen: true,
      title,
      message,
      type
    });
  };

  const closeMessage = () => {
    setMessageBox(prev => ({ ...prev, isOpen: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!newPassword || !confirmPassword) {
      showMessage("Validation Error", "Please fill in all fields", "error");
      return;
    }
    
    if (newPassword !== confirmPassword) {
      showMessage("Password Mismatch", "Passwords do not match. Please try again.", "error");
      return;
    }
    
    if (newPassword.length < 6) {
      showMessage("Password Too Short", "Password must be at least 6 characters long", "error");
      return;
    }
    
    // Add your password update logic here
    console.log("New password:", newPassword);
    showMessage("Success!", "Your password has been updated successfully!", "success");
  };

  const handleSuccessConfirm = () => {
    closeMessage();
    navigate("/login");
  };

  const handleBackToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="new-password-page">
      <div className="new-password-modal">
        <h1 className="modal-title">New Password</h1>

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

          <form className="new-password-form" onSubmit={handleSubmit}>
            {/* New Password Field */}
            <div className="form-group">
              <label className="form-label">Enter New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showNewPassword ? "text" : "password"}
                  className="form-input password-input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="******"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-input password-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="******"
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

            <button type="submit" className="send-button">
              Send
            </button>
          </form>

          {/* Back to Login Link */}
          <div className="login-section">
            <p className="login-text">
              Back to{" "}
              <a
                href="#"
                className="login-link"
                onClick={handleBackToLogin}
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* MessageBox Component */}
      <MessageBox
        isOpen={messageBox.isOpen}
        onClose={closeMessage}
        title={messageBox.title}
        message={messageBox.message}
        type={messageBox.type}
        onConfirm={messageBox.type === "success" ? handleSuccessConfirm : undefined}
        confirmText={messageBox.type === "success" ? "Continue" : "OK"}
      />
    </div>
  );
}

export default NewPassword;
