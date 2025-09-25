import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../HeadFoot/Navbar";
import Deals from "../../../components/Deals";
import Footer from "../../HeadFoot/Footer";
import "../../../css/Home/Booking/movieselecting.css";

const MovieSelecting = () => {
  const navigate = useNavigate();
  
  // Function to format date as "Day DD"
  const formatDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[date.getDay()];
    const dayNumber = date.getDate();
    return `${dayName} ${dayNumber}`;
  };

  // Initialize with current date
  const [selectedDate, setSelectedDate] = useState(() => formatDate(new Date()));
  const [currentDateObj, setCurrentDateObj] = useState(new Date());
  const [selectedMovie, setSelectedMovie] = useState("All Movies");
  const [selectedTheater, setSelectedTheater] = useState("All Theaters");
  const [selectedShowtime, setSelectedShowtime] = useState("");

  // Function to handle date navigation
  const handleDateNavigation = (direction) => {
    const newDate = new Date(currentDateObj);
    newDate.setDate(newDate.getDate() + direction);
    setCurrentDateObj(newDate);
    setSelectedDate(formatDate(newDate));
  };

  const handleShowtimeSelect = (showtime, movie, theater, format) => {
    setSelectedShowtime(showtime);
    // Navigate to seat booking with selected details
    navigate("/seat-booking", {
      state: {
        movie,
        theater,
        showtime,
        format,
        date: selectedDate
      }
    });
  };

  const movies = [
    {
      id: 1,
      title: "LILO & STITCH (English)",
      poster: "/src/assets/LandingPageAnimation.png", // Placeholder - replace with actual poster
      theaters: [
        {
          name: "Movie Express Cinemas - CCC Cinemas",
          showtimes: {
            "Digital 2D": ["09:00 am", "12:30 pm", "04:00 pm"],
            "Digital 3D": ["09:00 am", "12:30 pm", "04:00 pm"]
          }
        },
        {
          name: "Movie Express Cinemas - KCC Cinemas",
          showtimes: {
            "Digital 2D": ["09:00 am", "12:30 pm", "04:00 pm"],
            "Digital 3D": ["09:00 am", "12:30 pm", "04:00 pm"]
          }
        }
      ]
    },
    {
      id: 2,
      title: "KARATE KID: LEGENDS (English)",
      poster: "/src/assets/LandingPageAnimation.png", // Placeholder - replace with actual poster
      theaters: [
        {
          name: "Movie Express Cinemas - Reality Plaza",
          showtimes: {
            "Digital 2D": ["09:00 am", "12:30 pm", "04:00 pm"],
            "Digital 3D": ["12:30 pm", "04:00 pm"]
          }
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="movie-selecting-container">
        {/* Navigation Bar */}
        <div className="movie-nav-bar">
          <div className="date-selector">
            <button 
              className="nav-arrow" 
              onClick={() => handleDateNavigation(-1)}
              aria-label="Previous day"
            >
              ‹
            </button>
            <span className="current-date">{selectedDate}</span>
            <button 
              className="nav-arrow" 
              onClick={() => handleDateNavigation(1)}
              aria-label="Next day"
            >
              ›
            </button>
          </div>
          
          <div className="filter-dropdowns">
            <select 
              className="filter-dropdown"
              value={selectedMovie}
              onChange={(e) => setSelectedMovie(e.target.value)}
            >
              <option value="All Movies">All Movies</option>
              <option value="LILO & STITCH">LILO & STITCH</option>
              <option value="KARATE KID">KARATE KID: LEGENDS</option>
            </select>
            
            <select 
              className="filter-dropdown"
              value={selectedTheater}
              onChange={(e) => setSelectedTheater(e.target.value)}
            >
              <option value="All Theaters">All Theaters</option>
              <option value="CCC Cinemas">CCC Cinemas</option>
              <option value="KCC Cinemas">KCC Cinemas</option>
              <option value="Reality Plaza">Reality Plaza</option>
            </select>
            
            <select className="filter-dropdown">
              <option value="Deals">Deals</option>
            </select>
          </div>
        </div>

        {/* Movie Listings */}
        <div className="movie-listings">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-listing">
              {movie.theaters.map((theater, theaterIndex) => (
                <div key={theaterIndex} className="movie-showtime-section">
                  <div className="showtime-details">
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="theater-name">{theater.name}</p>
                    
                    <div className="showtime-formats">
                      {Object.entries(theater.showtimes).map(([format, times]) => (
                        <div key={format} className="format-section">
                          <h4 className="format-title">{format}</h4>
                          <div className="showtime-buttons">
                            {times.map((time, timeIndex) => (
                              <button
                                key={timeIndex}
                                className={`showtime-btn ${selectedShowtime === time ? 'selected' : ''}`}
                                onClick={() => handleShowtimeSelect(time, movie.title, theater.name, format)}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="movie-poster">
                    <img src={movie.poster} alt={movie.title} className="poster-image" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Deals Section */}
      <Deals />

      <Footer />
    </>
  );
};

export default MovieSelecting;
