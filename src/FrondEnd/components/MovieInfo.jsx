import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../pages/HeadFoot/Navbar";
import Footer from "../pages/HeadFoot/Footer";
import "./movieinfo.css";

const MovieInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const movie = location.state?.movie || {
    title: "Final Destination Bloodline",
    duration: "2 HR 30 MIN",
    language: "ENGLISH",
    rating: "★★★★★",
    description:
      "Plagued by a recurring violent nightmare, a college student returns home to find the one person who can break the cycle and save her family from the horrific fate that inevitably awaits them.",
    storyLine:
      "Plagued by a recurring violent nightmare, a college student returns home to find the one person who can break the cycle and save her family from the horrific fate that inevitably awaits them.",
    poster: "/src/assets/movies/final.jpg",
  };

  const handleBookNowClick = () => {
    navigate("/movie-selecting", { state: { movie } });
  };

  return (
    <div className="movie-info-page">
      <Navbar />

      {/* Movie Banner */}
      <div className="movie-banner" style={{ backgroundImage: `url(${movie.poster})` }}>
        <div className="banner-overlay">
          <div className="banner-content">
            <h1 className="movie-title">{movie.title.toUpperCase()}</h1>
            <p className="movie-details">
              {movie.duration} &nbsp;&nbsp; {movie.language}
            </p>
            <p className="movie-rating">{movie.rating}</p>
            <div className="banner-buttons">
              <button className="buy-btn" onClick={handleBookNowClick}>
                🎟 Buy Ticket
              </button>
              <button className="trailer-btn">▶ Watch Trailer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Storyline & Details */}
      <div className="movie-info-content">
        <div className="storyline-section">
          <h2>Story Line</h2>
          <p>{movie.storyLine}</p>
        </div>

        <div className="info-grid">
          {/* Team Section */}
          <div className="team-section">
            <h3>Team</h3>
            <p><strong>Directed by:</strong> Zach Lipovsky, Adam B. Stein</p>
            <p><strong>Produced by:</strong> Toby Emmerich</p>
            <p><strong>Written by:</strong> Jeffrey Reddick</p>
            <p><strong>Music by:</strong> Shirley Walker</p>
            <button className="buy-btn">🎟 Buy Ticket</button>
          </div>

          {/* Now Showing Section */}
          <div className="showing-section">
            <h3>Now Showing At</h3>
            <div className="cinema-logos">
              <img src="/src/assets/cinemas/kcc.png" alt="KCC" />
              <img src="/src/assets/cinemas/ccc.png" alt="CCC" />
              <img src="/src/assets/cinemas/liberty.png" alt="Liberty" />
            </div>
          </div>

          {/* Cast Section */}
          <div className="cast-section">
            <h3>Cast</h3>
            <div className="cast-grid">
              <div>
                <p><strong>Actors</strong></p>
                <p>Tony Todd</p>
                <p>Brec Bassinger</p>
                <p>April Telek</p>
              </div>
              <div>
                <p><strong>Characters</strong></p>
                <p>William Bludworth</p>
                <p>Iris Campbell</p>
                <p>Aunt Brenda</p>
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
