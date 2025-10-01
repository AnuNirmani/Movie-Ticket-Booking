import React from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Footer/aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Navbar />
      <div className="about-us-container">
        <div className="about-header">
          <h1>ABOUT MOVIE EXPRESS CINEMA</h1>
        </div>

        <div className="about-content">
          <div className="about-description">
            <p>
              Movie Express Cinemas Ltd. is the largest and the most premium film exhibition company in Sri Lanka. Since its inception in 1987, the brand has redefined the cinema industry and the
              way people watch movies in the country. The company acquired Cinemax in 2012 and had taken over DT Cinemas in the year 2016 serving 100 million + patrons annually. Currently
              Movie Express Cinemas operates a cinema circuit of 845 Screens at 176 Properties in 71 Cities.
            </p>
          </div>

          <div className="vision-mission">
            <div className="vision-section">
              <h2>Our Vision;</h2>
              <p>
                "To revolutionize the way people experience cinema by providing seamless, hassle-free ticket booking, personalized recommendations, and exclusive access to the best films, events, and
                entertainment worldwide."
              </p>
            </div>

            <div className="mission-section">
              <h2>Our Mission;</h2>
              <p>
                "To empower movie lovers with a seamless, one-stop platform for effortless ticket booking, exclusive deals, and personalized recommendations, enhancing every cinematic experience with
                convenience, affordability, and joy."
              </p>
            </div>
          </div>

          <div className="team-section">
            <h4>Our Team</h4>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" alt="Mr Poal De Silva" />
                </div>
                <div className="member-info">
                  <h3>Mr Poal De Silva</h3>
                  <p>Chairman and Managing Director</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop" alt="Mr Dev Silva" />
                </div>
                <div className="member-info">
                  <h3>Mr Dev Silva</h3>
                  <p>Managing Director</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" alt="Miss Sandali Gunasekara" />
                </div>
                <div className="member-info">
                  <h3>Miss Sandali Gunasekara</h3>
                  <p>Executive Director</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" alt="Mr Samadi Perera" />
                </div>
                <div className="member-info">
                  <h3>Mr Samadi Perera</h3>
                  <p>Non Executive Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

