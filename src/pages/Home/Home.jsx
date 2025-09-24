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
                      <span className="btn-icon">▶ </span>
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

      {/* Coming Soon Scrolling Section */}
      <div className="coming-soon-section">
        <div className="coming-soon-container">
          <h2 className="section-title">COMING SOON</h2>
          <div className="movie-scroll-container">
            <div className="coming-soon-scroll" id="coming-soon-scroll">
              {/* Coming Soon Movies */}
              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/inside-out-2-poster.jpg" alt="Inside Out 2" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">INSIDE OUT 2</h3>
                <p className="release-date">13TH JUNE</p>
              </div>

              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/m3gan-2-poster.jpg" alt="M3GAN 2.0" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">M3GAN 2.0</h3>
                <p className="release-date">IN CINEMAS 27TH JUNE</p>
              </div>

              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/httyd-poster.jpg" alt="How to Train Your Dragon" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">HOW TO TRAIN YOUR DRAGON</h3>
                <p className="release-date">IN CINEMAS 4TH JULY</p>
              </div>

              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/thug-life-poster.jpg" alt="Thug Life (Tamil)" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">THUG LIFE (TAMIL)</h3>
                <p className="release-date">IN CINEMAS 5TH JUNE</p>
              </div>

              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/28-years-later-poster.jpg" alt="28 Years Later" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">28 YEARS LATER</h3>
                <p className="release-date">IN CINEMAS 28TH JUNE</p>
              </div>

              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/ballerina-poster.jpg" alt="Ballerina" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">BALLERINA</h3>
                <p className="release-date">IN CINEMAS SOON</p>
              </div>

              {/* Duplicate set for infinite scroll */}
              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/inside-out-2-poster.jpg" alt="Inside Out 2" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">INSIDE OUT 2</h3>
                <p className="release-date">13TH JUNE</p>
              </div>

              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/m3gan-2-poster.jpg" alt="M3GAN 2.0" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">M3GAN 2.0</h3>
                <p className="release-date">IN CINEMAS 27TH JUNE</p>
              </div>

              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/httyd-poster.jpg" alt="How to Train Your Dragon" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">HOW TO TRAIN YOUR DRAGON</h3>
                <p className="release-date">IN CINEMAS 4TH JULY</p>
              </div>

              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/thug-life-poster.jpg" alt="Thug Life (Tamil)" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">THUG LIFE (TAMIL)</h3>
                <p className="release-date">IN CINEMAS 5TH JUNE</p>
              </div>

              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/28-years-later-poster.jpg" alt="28 Years Later" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">28 YEARS LATER</h3>
                <p className="release-date">IN CINEMAS 28TH JUNE</p>
              </div>

              <div className="coming-soon-card">
                <div className="movie-poster-container">
                  <img src="/src/assets/ballerina-poster.jpg" alt="Ballerina" className="movie-poster-img" />
                  <div className="movie-overlay-card">
                    <button className="action-btn watch-trailer">
                      <span className="btn-icon">▶</span>
                      Watch Trailer
                    </button>
                    <button className="action-btn more-info">
                      <span className="btn-icon">ℹ</span>
                      More Information
                    </button>
                  </div>
                </div>
                <h3 className="movie-card-title">BALLERINA</h3>
                <p className="release-date">IN CINEMAS SOON</p>
              </div>
            </div>
          </div>
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
