import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../HeadFoot/Navbar";
import Deals from "../../components/Deals";
import Footer from "../HeadFoot/Footer";
import "../../css/Home/comingsoon.css";

const CommingSoon = () => {
  const navigate = useNavigate();

  const movies = [
    { 
      id: 1, 
      title: "Final Destination", 
      subtitle: "13TH JUNE",
      poster: "/src/assets/LandingPageAnimation.png",
      genre: "Horror/Thriller",
      duration: "98 min",
      rating: "R",
      year: "2024",
      director: "James Cameron",
    },
    { 
      id: 2, 
      title: "New Avengers", 
      subtitle: "13TH JUNE",
      poster: "/src/assets/LandingPageAnimation.png",
      genre: "Action/Sci-Fi",
      duration: "142 min",
      rating: "PG-13",
      year: "2024",
      director: "Marvel Studios",
    },
    { 
      id: 3, 
      title: "Ace (Tamil)", 
      subtitle: "13TH JUNE",
      poster: "/src/assets/LandingPageAnimation.png",
      genre: "Action/Drama",
      duration: "165 min",
      rating: "U/A",
      year: "2024",
      director: "Rajesh Selva",
    },
    { 
      id: 4, 
      title: "Devi Kusumasana", 
      subtitle: "13TH JUNE",
      poster: "/src/assets/LandingPageAnimation.png",
      genre: "Drama/Family",
      duration: "128 min",
      rating: "U",
      year: "2024",
      director: "Priya Sharma",
    },
    { 
      id: 5, 
      title: "Lilo & Stitch", 
      subtitle: "13TH JUNE",
      poster: "/src/assets/LandingPageAnimation.png",
      genre: "Animation/Family",
      duration: "85 min",
      rating: "G",
      year: "2024",
      director: "Disney Animation",
    },
    { 
      id: 6, 
      title: "Walampoori", 
      subtitle: "13TH JUNE",
      poster: "/src/assets/LandingPageAnimation.png",
      genre: "Comedy/Drama",
      duration: "112 min",
      rating: "U/A",
      year: "2024",
      director: "Suresh Kumar",
    },
    { 
      id: 7, 
      title: "Sinners", 
      subtitle: "13TH JUNE",
      poster: "/src/assets/LandingPageAnimation.png",
      genre: "Thriller/Crime",
      duration: "135 min",
      rating: "A",
      year: "2024",
      director: "Michael Chen",
    },
    { 
      id: 8, 
      title: "A Minecraft Movie", 
      subtitle: "13TH JUNE",
      poster: "/src/assets/LandingPageAnimation.png",
      genre: "Adventure/Family",
      duration: "95 min",
      rating: "PG",
      year: "2024",
      director: "Warner Bros",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Heading + Filters */}
      <div className="now-showing-header">
        <h1 className="heading">COMING SOON MOVIES</h1>
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
          <button className="now-showing"
          onClick={() => navigate("/now-showing")}
          >Now Showing</button>
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
            <p className="subtitle">{movie.subtitle}</p>

            <div className="actions">
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

export default CommingSoon;
