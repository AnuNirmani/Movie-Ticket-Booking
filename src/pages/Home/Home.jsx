// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="hero-section">
        <img src="/images/hero-banner.jpg" alt="Hero Banner" className="hero-image" />
      </div>

      <div className="section">
        <h2>Now Playing</h2>
        <div className="movie-grid">
          <img src="/images/movie1.jpg" alt="Movie 1" />
          <img src="/images/movie2.jpg" alt="Movie 2" />
          <img src="/images/movie3.jpg" alt="Movie 3" />
        </div>
      </div>

      <div className="section">
        <h2>Coming Soon</h2>
        <div className="movie-grid">
          <img src="/images/movie4.jpg" alt="Movie 4" />
          <img src="/images/movie5.jpg" alt="Movie 5" />
          <img src="/images/movie6.jpg" alt="Movie 6" />
          <img src="/images/movie7.jpg" alt="Movie 7" />
        </div>
      </div>

      <div className="section">
        <h2>Deals</h2>
        <div className="deals-grid">
          <div className="deal-card">50% Cashback on Tickets</div>
          <div className="deal-card">Student Offer</div>
          <div className="deal-card">Buy One Get One Free</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
