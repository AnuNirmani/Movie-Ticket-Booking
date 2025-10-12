import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Profile/favorites.css";
import LandingPageAnimation from "../../../assets/LandingPageAnimation.png";

const Favorites = () => {
  const navigate = useNavigate();

  // Sample favorites data - in a real app, this would come from an API
  const favorites = [
    {
      id: 1,
      movieName: "OPPENHEIMER",
      moviePoster: LandingPageAnimation,
      genre: "Biography, Drama, History",
      duration: "3h 0min",
      rating: 8.5,
      releaseDate: "July 21, 2023",
      description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
    },
    {
      id: 2,
      movieName: "THE DARK KNIGHT",
      moviePoster: LandingPageAnimation,
      genre: "Action, Crime, Drama",
      duration: "2h 32min",
      rating: 9.0,
      releaseDate: "July 18, 2008",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
    }
  ];

  const handleRemoveFavorite = (id) => {
    // Handle remove from favorites logic
    console.log("Removing favorite with id:", id);
  };

  // Star Rating Component
  const StarRating = ({ rating }) => {
    const stars = [];
    const maxStars = 5;
    const normalizedRating = (rating / 10) * maxStars; // Convert rating from 10 to 5 scale
    
    for (let i = 1; i <= maxStars; i++) {
      if (i <= Math.floor(normalizedRating)) {
        // Full star
        stars.push(
          <svg key={i} className="star full" width="20" height="20" viewBox="0 0 24 24" fill="#ffd700" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      } else if (i === Math.ceil(normalizedRating) && normalizedRating % 1 !== 0) {
        // Half star
        stars.push(
          <svg key={i} className="star half" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="50%" stopColor="#666" />
              </linearGradient>
            </defs>
            <path fill={`url(#half-${i})`} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      } else {
        // Empty star
        stars.push(
          <svg key={i} className="star empty" width="20" height="20" viewBox="0 0 24 24" fill="#666" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      }
    }
    
    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  };

  return (
    <div className="favorites-page">
      <Navbar />
      <div className="favorites-container">
        <div className="favorites-header">
          <h1>My Favorites</h1>
        </div>
        
        <div className="favorites-list">
          {favorites.map((movie) => (
            <div key={movie.id} className="favorite-card">
              <div className="favorite-content">
                <div className="movie-poster">
                  <img src={movie.moviePoster} alt={movie.movieName} />
                </div>
                
                <div className="movie-details">
                  <div className="movie-header">
                    <h2>{movie.movieName}</h2>
                    <button 
                      className="remove-favorite-btn"
                      onClick={() => handleRemoveFavorite(movie.id)}
                      title="Remove from favorites"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#e91e63" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </button>
                  </div>

                  <div className="movie-info-rows">
                    {/* Row 1: Genre - Single row */}
                    <div className="detail-row single-row">
                      <span className="detail-label">Genre :</span>
                      <span className="detail-value">{movie.genre}</span>
                    </div>
                    
                    {/* Row 2: Duration and Rating - Side by side */}
                    <div className="detail-row double-row">
                      <div className="detail-item">
                        <span className="detail-label">Duration :</span>
                        <span className="detail-value">{movie.duration}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Rating :</span>
                        <StarRating rating={movie.rating} />
                      </div>
                    </div>
                    
                    {/* Row 3: Release Date - Single row */}
                    <div className="detail-row single-row">
                      <span className="detail-label">Release Date :</span>
                      <span className="detail-value">{movie.releaseDate}</span>
                    </div>
                    
                    {/* Description section - Full width */}
                    <div className="movie-description">
                      <p>{movie.description}</p>
                    </div>
                    
                    {/* Action button */}
                    <div className="action-buttons">
                      <button 
                        className="info-btn"
                        onClick={() => navigate("/movie-info", { state: { movie } })}
                      >
                        More Information
                        <span className="info-icon">ℹ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;

