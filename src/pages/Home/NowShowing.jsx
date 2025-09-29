import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../HeadFoot/Navbar";
import Deals from "../../components/Deals";
import Footer from "../HeadFoot/Footer";
import "../../css/Home/NowShowing.css";

const NowShowing = () => {
  const navigate = useNavigate();

  // Demo movie data
  const movies = [
    { id: 1, title: "Final Destination", poster: "/src/assets/LandingPageAnimation.png" },
    { id: 2, title: "New Avengers", poster: "/src/assets/LandingPageAnimation.png" },
    { id: 3, title: "Ace (Tamil)", poster: "/src/assets/LandingPageAnimation.png" },
    { id: 4, title: "Devi Kusumasana", poster: "/src/assets/LandingPageAnimation.png" },
    { id: 5, title: "Lilo & Stitch", poster: "/src/assets/LandingPageAnimation.png" },
    { id: 6, title: "Walampoori", poster: "/src/assets/LandingPageAnimation.png" },
    { id: 7, title: "Sinners", poster: "/src/assets/LandingPageAnimation.png" },
    { id: 8, title: "A Minecraft Movie", poster: "/src/assets/LandingPageAnimation.png" },
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
            </select>
            <select>
              <option>Price Range</option>
            </select>
          </div>
          <button className="coming-soon">Coming Soon</button>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} className="poster" />

            <h3 className="title">{movie.title}</h3>

            <div className="stars">★★★★★</div>

            <div className="actions">
              <button
                className="buy-btn"
                onClick={() => navigate("/booking")}
              >
                🎟 Buy Ticket
              </button>
              <button className="trailer-btn">▶ Watch Trailer</button>
            </div>

            <button className="info-btn">ℹ More Information</button>
          </div>
        ))}
      </div>

      <Deals />
      <Footer />
    </div>
  );
};

export default NowShowing;
