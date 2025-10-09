import React, { useState } from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Profile/profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Jone",
    lastName: "Fernando",
    email: "jone@gmail.com",
    phone: "+94 77 345 4356",
    password: "******"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
    // Here you would typically send the data to your backend
    console.log("Updated profile data:", formData);
  };

  const handleChangePassword = () => {
    // Handle password change logic
    console.log("Change password clicked");
  };

  const handleDeleteCard = () => {
    // Handle card deletion logic
    console.log("Delete card clicked");
  };

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <h1>YOUR ACCOUNT INFORMATION</h1>
        </div>
      
      <div className="profile-content">
        {/* Left Section - Personal and Password Information */}
        <div className="left-section">
          {/* Personal Information */}
          <div className="personal-info-section">
            <div className="form-group">
              <label>First Name :</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={isEditing ? "editable" : ""}
              />
            </div>
            
            <div className="form-group">
              <label>Last Name :</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={isEditing ? "editable" : ""}
              />
            </div>
            
            <div className="form-group">
              <label>Email :</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={isEditing ? "editable" : ""}
              />
            </div>
            
            <div className="form-group">
              <label>Phone No :</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={isEditing ? "editable" : ""}
              />
            </div>
            
            <div className="button-group">
              <button 
                className="edit-profile-btn" 
                onClick={handleEditProfile}
                disabled={isEditing}
              >
                Edit Profile
              </button>
              <button 
                className="update-btn" 
                onClick={handleUpdate}
                disabled={!isEditing}
              >
                Update
              </button>
            </div>
          </div>
          
          {/* Password Section */}
          <div className="password-section">
            <h3>Password</h3>
            <div className="form-group">
              <label>Password :</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                disabled={true}
              />
            </div>
            <button className="change-password-btn" onClick={handleChangePassword}>
              Change Password
            </button>
          </div>
        </div>
        
        {/* Divider Line */}
        <div className="divider"></div>
        
        {/* Right Section - Loyalty and Card Information */}
        <div className="right-section">
          {/* Loyalty Information */}
          <div className="loyalty-section">
            <h3>Loyalty Information</h3>
            <div className="info-item">
              <span className="label">Membership ID :</span>
              <span className="value">1912</span>
            </div>
            <div className="info-item">
              <span className="label">Available Points :</span>
              <span className="value">100</span>
            </div>
          </div>
          
          {/* Saved Card Information */}
          <div className="card-section">
            <h3>Saved Card Information</h3>
            <div className="info-item">
              <span className="label">Card Number :</span>
              <span className="value">1001 5678 3498</span>
            </div>
            <div className="info-item">
              <span className="label">Card Holder Name :</span>
              <span className="value">J Fernando</span>
            </div>
            <div className="info-item">
              <span className="label">Card Type :</span>
              <span className="value">Visa</span>
            </div>
            <button className="delete-card-btn" onClick={handleDeleteCard}>
              Delete
            </button>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
