import React from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Footer/termsandconditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      <Navbar />
      <div className="terms-container">
        <div className="terms-header">
          <h1>TERMS & CONDITIONS</h1>
        </div>

        <div className="terms-content">
          <div className="terms-intro">
            <p>
              Welcome to Movie Express, your premier destination for online movie ticket booking. 
              By accessing or using our website, you agree to comply with and be bound by the following 
              Terms and Conditions. Please read these terms carefully before proceeding.
            </p>
          </div>

          <div className="terms-section">
            <h2>1. GENERAL TERMS</h2>
            <p>
              Movie Express is an online platform for booking movie tickets, operated by Movie Express Pvt Ltd. 
              These terms govern your use of our website, mobile app, and related services. By using our services, 
              you must be at least 18 years old or have parental consent.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. BOOKING AND PAYMENT</h2>
            <p>
              Tickets are subject to availability and may vary in price based on movie, showtime, theater, and seat selection. 
              Payment must be completed in full at the time of booking. We accept credit/debit cards, digital wallets, 
              and other approved payment methods. Once confirmed, no refunds or cancellations are allowed unless specified otherwise.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. REFUNDS AND CANCELLATIONS</h2>
            <p>
              Refunds are processed only if a show is canceled or rescheduled by the theater. Movie Express reserves 
              the right to cancel bookings and issue refunds in case of technical errors. No refunds are provided 
              for missed shows or late arrivals.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. USER RESPONSIBILITIES</h2>
            <p>
              Users must provide accurate personal and payment details during booking. Unauthorized use, fraud, 
              or misuse may result in legal action. Users are responsible for keeping their login credentials secure.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. PRIVACY POLICY</h2>
            <p>
              Movie Express collects personal data for booking and service improvement. Information will not be shared 
              with third parties without consent, except as required by law. Users agree to the Privacy Policy by using our services.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. LIMITATION OF LIABILITY</h2>
            <p>
              Movie Express is not liable for any technical errors, delays, or service interruptions. We do not guarantee 
              the accuracy of movie timings, theater policies, or seat availability. Users attend movies at their own risk, 
              and Movie Express is not responsible for any incidents at the theater.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. CHANGES TO TERMS</h2>
            <p>
              Movie Express reserves the right to modify these terms at any time. Continued use of the website after 
              changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="terms-section">
            <h2>8. GOVERNING LAW</h2>
            <p>
              These terms are governed by the laws of the jurisdiction where Movie Express operates. Disputes will be 
              resolved through arbitration or in a court of competent jurisdiction.
            </p>
          </div>

          <div className="terms-section">
            <h2>9. CONTACT US</h2>
            <p>
              For any queries or concerns regarding these Terms and Conditions, please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Customer Support:</strong> Movie Express Customer Support</p>
              <p><strong>Email:</strong> support@movieexpress.com</p>
              <p><strong>Phone:</strong> +94 77 123 4567</p>
            </div>
          </div>

          <div className="terms-conclusion">
            <p>
              By using Movie Express, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. 
              Thank you for choosing Movie Express for your movie ticket bookings. Enjoy the show!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
