import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../pages/HeadFoot/Navbar";
import Footer from "../pages/HeadFoot/Footer";
import "./movieinfo.css";

const MovieInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get movie data from navigation state or use default
  const movie = location.state?.movie || {
    id: 1,
    title: "Movie Title",
    subtitle: "Release Date",
    poster: "/src/assets/LandingPageAnimation.png",
    genre: "Genre",
    duration: "Duration",
    rating: "Rating",
    year: "Year",
    director: "Director",
    description: "Movie description will be displayed here. This is a placeholder for the actual movie description that would come from your data source."
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  const handleBookNowClick = () => {
    // Navigate to booking flow with movie data
    navigate("/movie-selecting", { state: { movie } });
  };

  return (
    <div className="movie-info-page">
      <Navbar />
      
      <div className="movie-info-container">
        {/* Back Button */}
        <button className="back-btn" onClick={handleBackClick}>
          ← Back
        </button>

        <div className="movie-info-content">
          {/* Movie Poster */}
          <div className="movie-poster-section">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <div className="movie-rating">
              <span className="rating-badge">{movie.rating}</span>
            </div>
          </div>

          {/* Movie Details */}
          <div className="movie-details-section">
            <h1 className="movie-title">{movie.title}</h1>
            <p className="movie-subtitle">{movie.subtitle}</p>
            
            <div className="movie-meta">
              <div className="meta-item">
                <span className="meta-label">Genre:</span>
                <span className="meta-value">{movie.genre}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration:</span>
                <span className="meta-value">{movie.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Year:</span>
                <span className="meta-value">{movie.year}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Director:</span>
                <span className="meta-value">{movie.director}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Rating:</span>
                <span className="meta-value">{movie.rating}</span>
              </div>
            </div>

            <div className="movie-description">
              <h3>Synopsis</h3>
              <p>{movie.description}</p>
            </div>

            <div className="movie-actions">
              <button className="trailer-btn">
                ▶ Watch Trailer
              </button>
              <button className="book-now-btn" onClick={handleBookNowClick}>
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Movie Information */}
        <div className="additional-info">
          <div className="info-section">
            <h3>Cast & Crew</h3>
            <div className="cast-list">
              <div className="cast-item">
                <span className="role">Director:</span>
                <span className="name">{movie.director}</span>
              </div>
              <div className="cast-item">
                <span className="role">Producer:</span>
                <span className="name">Production Company</span>
              </div>
              <div className="cast-item">
                <span className="role">Writer:</span>
                <span className="name">Screenplay Writer</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Technical Details</h3>
            <div className="technical-details">
              <div className="detail-item">
                <span className="detail-label">Aspect Ratio:</span>
                <span className="detail-value">16:9</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Sound:</span>
                <span className="detail-value">Dolby Digital</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Color:</span>
                <span className="detail-value">Color</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieInfo;
