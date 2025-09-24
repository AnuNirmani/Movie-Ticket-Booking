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
                  <p className="movie-subtitle">Now Showing</p>
                <button className="watch-trailer-btn">
                  <span className="play-icon">▶</span>
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Now Playing Scrolling Section */}
      <div className="now-playing-section">
        <div className="now-playing-container">
          <h2 className="section-title">NOW PLAYING</h2>
          <div className="movie-scroll-container">
            <div className="movie-scroll">
              {/* First set of movies */}
              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/avengers-poster.jpg" alt="New Avengers" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">NEW AVENGERS</h3>
              </div>

              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/final-destination-poster.jpg" alt="Final Destination Bloodlines" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">FINAL DESTINATION BLOODLINES</h3>
              </div>

              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/walampura-poster.jpg" alt="වාලම්පුර" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">වාලම්පුර</h3>
              </div>

              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/disney-poster.jpg" alt="Disney Movie" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">DISNEY ADVENTURE</h3>
              </div>

              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/action-movie-poster.jpg" alt="Action Movie" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">ACTION THRILLER</h3>
              </div>

              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/romance-movie-poster.jpg" alt="Romance Movie" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">ROMANCE DRAMA</h3>
              </div>

              {/* Duplicate set for infinite scroll */}
              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/avengers-poster.jpg" alt="New Avengers" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">NEW AVENGERS</h3>
              </div>

              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/final-destination-poster.jpg" alt="Final Destination Bloodlines" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">FINAL DESTINATION BLOODLINES</h3>
              </div>

              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/walampura-poster.jpg" alt="වාලම්පුර" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">වාලම්පුර</h3>
              </div>

              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/disney-poster.jpg" alt="Disney Movie" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">DISNEY ADVENTURE</h3>
              </div>

              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/action-movie-poster.jpg" alt="Action Movie" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">ACTION THRILLER</h3>
              </div>

              <div className="movie-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/romance-movie-poster.jpg" alt="Romance Movie" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn buy-ticket">
                      <span className="btn-icon">🎫</span>
                      Buy Ticket
                    </button>
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">ROMANCE DRAMA</h3>
              </div>
            </div>
          </div>
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
