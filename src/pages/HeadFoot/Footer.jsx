// src/components/Footer.jsx
import React from "react";
import "../../css/HeadFoot/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Movie Express. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
