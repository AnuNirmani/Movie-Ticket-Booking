import React, { useState } from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Profile/changepassword.css";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = "New password must be different from current password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      console.log("Password change request:", {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword
      });
      
      // Show success message (you could add a toast notification here)
      alert("Password changed successfully!");
      
      // Navigate back to profile
      navigate("/profile");
      
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Failed to change password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <div className="change-password-page">
      <Navbar />
      <div className="change-password-container">
        <div className="change-password-header">
          <h1>CHANGE PASSWORD</h1>
        </div>
        
        <div className="change-password-content">
          <form onSubmit={handleChangePassword} className="change-password-form">
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                className={errors.currentPassword ? "error" : ""}
                placeholder="Enter current password"
              />
              {errors.currentPassword && (
                <span className="error-message">{errors.currentPassword}</span>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                className={errors.newPassword ? "error" : ""}
                placeholder="Enter new password"
              />
              {errors.newPassword && (
                <span className="error-message">{errors.newPassword}</span>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={errors.confirmPassword ? "error" : ""}
                placeholder="Confirm new password"
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
            
            <div className="button-group">
              <button 
                type="submit" 
                className="change-password-btn"
                disabled={isLoading}
              >
                {isLoading ? "Changing..." : "Change Password"}
              </button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={handleCancel}
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
