import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../HeadFoot/Navbar";
import Deals from "../../components/Deals";
import Footer from "../HeadFoot/Footer";

const NowShowing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="now-showing-container">
        <h1 className="page-heading">Coming Soon</h1>
        <p className="page-subtitle">Discover the latest movies coming soon to theaters</p>
      </div>
      <Deals />
      <Footer />
    </div>
  );
};

export default NowShowing;
