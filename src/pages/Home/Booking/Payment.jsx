import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../HeadFoot/Navbar";
import Footer from "../../HeadFoot/Footer";
// import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  console.log("Payment component loaded");
  console.log("Location state:", location.state);
  
  return (
    <>
      <Navbar />
      
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Payment Page</h1>
      </div>

      <Footer />
    </>
  );
};

export default Payment;
