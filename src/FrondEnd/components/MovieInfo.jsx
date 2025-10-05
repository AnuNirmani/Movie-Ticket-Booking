import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../pages/HeadFoot/Navbar";
import Footer from "../pages/HeadFoot/Footer";
import "./MovieInfo.css";

const MovieInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const movie = location.state?.movie || {
   
  };

  const handleBookNowClick = () => {
    navigate("/movie-selecting", { state: { movie } });
  };

  const handleBackClick = () => navigate(-1);

  return (
    <div className="movie-info-page">
      <Navbar />

      

      {/* Content Sections */}
      <div className="mi-content">
        <div className="mi-grid">
          <div className="mi-story">
            <div className="mi-section-title">Story Line</div>
            <p className="mi-story-text">{movie.description}</p>
            <button className="mi-btn mi-primary sm-only" onClick={handleBookNowClick}>
              Buy Ticket
            </button>
          </div>


        </div>


      </div>

      <Footer />
    </div>
  );
};

export default MovieInfo;
