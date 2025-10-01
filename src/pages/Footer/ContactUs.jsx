import React, { useState } from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Footer/contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "Jone",
    email: "jone@gmail.com",
    phone: "+94 77 345 4356",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="contact-us-page">
      <Navbar />
      <div className="contact-us-container">
        <div className="contact-header">
          <h1>CONTACT US</h1>
        </div>
        <div className="contact-us-content">
        {/* Contact Form Section */}
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone No :</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message :</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows="5"
                placeholder="Enter your message here..."
              />
            </div>

            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>

        {/* Hot Line Section */}
        <div className="hotline-section">
          <h6 className="hotline-title">Hot Line</h6>
          
          <div className="contact-cards">
            <div className="contact-card">
              <h3 className="cinema-name">Movie Express Cinemas - CCC Cinemas</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">011 234 7569</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span className="contact-text">gangarama@movieexpresscinemas.com</span>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h3 className="cinema-name">Movie Express Cinemas - KCC Cinemas</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">011 234 7587</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span className="contact-text">gampola@movieexpresscinemas.com</span>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h3 className="cinema-name">Movie Express Cinemas - Liberty Plaza Cinemas</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">011 234 7599</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span className="contact-text">kadavatha@movieexpresscinemas.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
