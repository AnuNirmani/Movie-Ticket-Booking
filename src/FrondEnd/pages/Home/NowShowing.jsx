import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../HeadFoot/Navbar";
import Deals from "../../components/Deals";
import Footer from "../HeadFoot/Footer";
import "../../css/Home/nowshowing.css";

const NowShowing = () => {
  const navigate = useNavigate();

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

  // Demo movie data
  const movies = [
    { 
      id: 1, 
      title: "Final Destination", 
      poster: "/assets/LandingPageAnimation.png",
      genre: "Horror/Thriller",
      duration: "98 min",
      rating: 7.5,
      ageRating: "R",
      year: "2024",
      director: "James Cameron",
    },
    { 
      id: 2, 
      title: "New Avengers", 
      poster: "/assets/LandingPageAnimation.png",
      genre: "Action/Sci-Fi",
      duration: "142 min",
      rating: 8.8,
      ageRating: "PG-13",
      year: "2024",
      director: "Marvel Studios",
    },
    { 
      id: 3, 
      title: "Ace (Tamil)", 
      poster: "/assets/LandingPageAnimation.png",
      genre: "Action/Drama",
      duration: "165 min",
      rating: 8.2,
      ageRating: "U/A",
      year: "2024",
      director: "Rajesh Selva",
    },
    { 
      id: 4, 
      title: "Devi Kusumasana", 
      poster: "/assets/LandingPageAnimation.png",
      genre: "Drama/Family",
      duration: "128 min",
      rating: 7.8,
      ageRating: "U",
      year: "2024",
      director: "Priya Sharma",
    },
    { 
      id: 5, 
      title: "Lilo & Stitch", 
      poster: "/assets/LandingPageAnimation.png",
      genre: "Animation/Family",
      duration: "85 min",
      rating: 8.5,
      ageRating: "G",
      year: "2024",
      director: "Disney Animation",
    },
    { 
      id: 6, 
      title: "Walampoori", 
      poster: "/assets/LandingPageAnimation.png",
      genre: "Comedy/Drama",
      duration: "112 min",
      rating: 7.0,
      ageRating: "U/A",
      year: "2024",
      director: "Suresh Kumar",
    },
    { 
      id: 7, 
      title: "Sinners", 
      poster: "/assets/LandingPageAnimation.png",
      genre: "Thriller/Crime",
      duration: "135 min",
      rating: 8.0,
      ageRating: "A",
      year: "2024",
      director: "Michael Chen",
    },
    { 
      id: 8, 
      title: "A Minecraft Movie", 
      poster: "/assets/LandingPageAnimation.png",
      genre: "Adventure/Family",
      duration: "95 min",
      rating: 7.3,
      ageRating: "PG",
      year: "2024",
      director: "Warner Bros",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Heading + Filters */}
      <div className="now-showing-header">
        <h1 className="heading">NOW PLAYING MOVIES</h1>
        <div className="filters-row">
          <div className="filters-left">
            <select>
              <option>Genre</option>
              <option>Genre</option>
              <option>Genre</option>
              <option>Genre</option>
            </select>
            <select>
              <option>Price Range</option>
              <option>Price Range</option>
              <option>Price Range</option>
              <option>Price Range</option>
            </select>
          </div>
          <button className="coming-soon"
          onClick={() => navigate("/coming-soon")}>
          Coming Soon</button>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className="poster-container">
              <img src={movie.poster} alt={movie.title} className="poster" />
              
              {/* Hover Overlay */}
              <div className="movie-overlay">
                <div className="overlay-content">
                  <div className="movie-details">
                    <div className="detail-row">
                      <span className="detail-label">Genre:</span>
                      <span className="detail-value">{movie.genre}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{movie.duration}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Age Rating:</span>
                      <span className="detail-value rating-badge">{movie.ageRating}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Year:</span>
                      <span className="detail-value">{movie.year}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Director:</span>
                      <span className="detail-value">{movie.director}</span>
                    </div>
                  </div>
                  <div className="movie-description">
                    <p>{movie.description}</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="title">{movie.title}</h3>

            <StarRating rating={movie.rating} />

            <div className="actions">
              <button
                className="buy-btn"
                onClick={() => navigate("/movie-selecting")}
              >
                🎫 Buy Ticket
              </button>
              <button className="trailer-btn">▶ Watch Trailer</button>
            </div>

            <button 
              className="info-btn"
              onClick={() => navigate("/movie-info", { state: { movie } })}
            > 
              More Information
              <span className="info-icon">ℹ</span>
            </button>
          </div>
        ))}
      </div>

      <Deals />
      <Footer />
    </div>
  );
};

export default NowShowing;
