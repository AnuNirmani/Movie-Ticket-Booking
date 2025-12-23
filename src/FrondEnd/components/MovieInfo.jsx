import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../pages/HeadFoot/Navbar";
import Footer from "../pages/HeadFoot/Footer";
import "./movieinfo.css";

const MovieInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const movie = location.state?.movie || {
    rating: "★★★★★",
     };


  if(!movie.title && !movie.movieName){
    movie.title = "Final Destination Bloodline";
  } else if(movie.movieName && !movie.title) {
    movie.title = movie.movieName;
  }
  
  // Always use your preferred duration format
  movie.duration = "2 HR 30 MIN";
  
  // Always use your preferred star rating format
  movie.rating = "★★★★★";
  // Add description if it doesn't exist in the passed movie data
  if (!movie.description) {
    movie.description = "Plagued by a recurring violent nightmare, a college student returns home to find the one person who can break the cycle and save her family from the horrific fate that inevitably awaits them.";
  }

  // Add language if it doesn't exist in the passed movie data
  if (!movie.language) {
    movie.language = "ENGLISH";
  }

  const handleBookNowClick = () => {
    navigate("/movie-selecting", { state: { movie } });
  };

  return (
    <div className="movie-info-page">
      <Navbar />

      {/* Movie Banner */}
      <div className="movie-banner" style={{ backgroundImage: `url(${movie.moviePoster || movie.poster})` }}>
        {/* <div className="banner-overlay"> */}
          <div className="banner-content">
            <h1 className="movie-title">{movie.title.toUpperCase()}</h1>
            <p className="movie-details">
              {movie.duration} &nbsp;&nbsp; {movie.language}
            </p>
            <p className="movie-rating">{movie.rating}</p>
            <p className="movie-description">{movie.description}</p>
            <div className="banner-buttons">
              <button className="buy-btn" onClick={handleBookNowClick}>
              🎫 Buy Ticket
              </button>
              <button className="trailer-btn">▶ Watch Trailer</button>
            </div>
          </div>
        {/* </div> */}
      </div>

      {/* Storyline & Details */}
      <div className="movie-info-content">
        <div className="storyline-section">
          <h2>Story Line</h2>
          <p style={{ fontSize: "18px" }}>
          Quinn Ackerman, a quirky and intelligent high school senior, works as a technical director for the Thunderbirds, her high school's elite dance team, which is well known around the state as the reigning champions of the Work It dance competition. When Quinn sets something on fire by accident, the ruthless leader of the Thunderbirds, Julliard Pembroke, fires her from the position.

Quinn's dream to attend Duke University, her late father's alma mater, is soured when the admissions counselor, Veronica Ramirez, informs that her chances of standing out to the admission's team are not good. Quinn misleads Ramirez into thinking that she is a dancer on the Thunderbirds, even though she only worked the lighting. Ramirez is instantly impressed, and vows to see her perform live at the Work It dance competition.

Though she considers confessing, Quinn instead decides to commit to it. She enlists her best friend Jasmine Hale's help, who is a dancer for the Thunderbirds herself, to teach her how to dance for the team's open auditions in two weeks. Quinn's dancing skills improve substantially, but Julliard still rejects her.

After Jasmine stands up to him and defends Quinn, Julliard sarcastically suggests that the two start their own dance team, which Quinn does. Jasmine reluctantly agrees to quit the Thunderbirds in favor of Quinn's new team.

Quinn and Jasmine research a former champion of the Work It competition, Jake Taylor, who stopped competing and vanished after a knee injury two years prior. Quinn tracks him down and approaches him at the dance studio where he now works. She asks him to be a choreographer for the team, but Jake rejects her, insisting that dance is done with passion, not learned by thinking.

Meanwhile, the girls round up a group of unknown dancers at their school who all differ in style. After seeing the team's potential during an informal dance meetup, Jake agrees to choreograph for the team, but only if they can win entry through the upcoming qualifying competition by themselves. Under the name "TBD", they cut qualifiers but on a technicality issue with an opposing team.

Jake and Quinn spend more time together, and one night, Jake takes her aside and decides to experiment with freestyle dancing with her. As they practice, Quinn's talent surfaces, and they kiss. With newfound confidence, Quinn takes it easier on herself and puts more effort into her dancing and teamwork.

Quinn emails Veronica Ramirez and informs her that she has started her own team and that they will be competing at Work It. However, when Julliard discovers that Jake is choreographing for Quinn's team, he turns them in for using the studio to practice without paying, and Jake loses his job.

Quinn's grades drop due to her dedication to the team, and she receives an email from the Duke admissions team informing her that Veronica no longer works there. Quinn confesses everything to her mom, and they agree that she should quit the dance team and bring her grades up before turning in her final transcript.

The team feels betrayed by Quinn's departure, especially Jasmine, who rejoins the Thunderbirds, and Quinn ends her romance with Jake. She later rediscovers her own passion for dance and reconciles with him, and they both decide to bring the team back together. Quinn reconciles with Jasmine, who quits the Thunderbirds and rejoins the TBDs.

The group begins to learn each other's unique dance styles, and Jake incorporates them into the choreography. On competition day, Quinn's mother discovers that she is still into dance, so she tries to stop her from leaving and even grounds her. Quinn points out that going to Duke and becoming a doctor is her parents' dream and not hers, then takes the car keys and leaves.

When Quinn arrives, the TBDs are already on stage, and she enters halfway through the act. The TBDs narrowly win the competition over the Thunderbirds, and both Jasmine and Julliard are approached by a scout from the New York Dance Academy. Quinn runs into Veronica, who is now working at NYU, and she invites her to apply for the fall semester.

          </p>
        </div>

        <div className="info-grid">
          {/* Team Section */}
          <div className="cast-section">
            <h3>Team</h3>
            <p><strong>Directed by:</strong> Zach Lipovsky, Adam B. Stein</p>
            <p><strong>Produced by:</strong> Toby Emmerich</p>
            <p><strong>Written by:</strong> Jeffrey Reddick</p>
            <p><strong>Music by:</strong> Shirley Walker</p>
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

          {/* Team Section */}
          <div className="cast-section">
            <h3>GENRES</h3>
            <p><strong>Drama</strong></p>
            <p><strong>Comedy</strong></p>
          </div>
          
        </div>
        
        
        <div className="banner-buttons" style={{ marginTop: "50px" }}>
              <button className="buy-btn" onClick={handleBookNowClick}>
                🎫 Buy Ticket
              </button>
              <button
                className="favourite-btn"
                onClick={() => alert("Added to favourites!")}
              >
                ❤️ Add to Favourites
              </button>
        </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default MovieInfo;
