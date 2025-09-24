// src/pages/Home.jsx
import React from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Home/home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Featured Movie Section */}
      <div className="featured-movie-section">
        <div className="featured-movie-container">
          <div className="featured-movie-poster">
            <img src="/src/assets/LandingPageAnimation.png" alt="Elio Movie Poster" className="movie-poster" />
            <div className="movie-overlay">
              <div className="movie-info">
                <h3 className="movie-title">ELIO</h3>
                <p className="movie-subtitle">Disney • PIXAR</p>
                <p className="movie-description">An intergalactic adventure awaits as Elio embarks on an extraordinary journey through space.</p>
                <button className="watch-trailer-btn">
                  <span className="play-icon">▶</span>
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
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
