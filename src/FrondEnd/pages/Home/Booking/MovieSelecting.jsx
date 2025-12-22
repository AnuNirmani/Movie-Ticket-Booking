import React, { useState, useEffect, useRef } from "react";
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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);


  // Function to handle date picker toggle
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  // Function to handle date selection from calendar
  const handleDateSelect = (date) => {
    setCurrentDateObj(date);
    setSelectedDate(formatDate(date));
    setShowDatePicker(false);
  };

  // Function to generate calendar days
  const generateCalendarDays = () => {
    const today = new Date();
    const currentMonth = currentDateObj.getMonth();
    const currentYear = currentDateObj.getFullYear();
    
    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      days.push(date);
    }
    
    return days;
  };

  // Function to handle month navigation
  const handleMonthNavigation = (direction) => {
    const newDate = new Date(currentDateObj);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDateObj(newDate);
  };

  // Close date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };

    if (showDatePicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDatePicker]);

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
      poster: "/assets/LandingPageAnimation.png", // Placeholder - replace with actual poster
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
      poster: "/assets/LandingPageAnimation.png", // Placeholder - replace with actual poster
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
          <div className="date-selector" ref={datePickerRef}>
            <span 
              className="current-date clickable-date" 
              onClick={toggleDatePicker}
              title="Click to select date"
            >
              {selectedDate}
            </span>
            
            {/* Date Picker Modal */}
            {showDatePicker && (
              <div className="date-picker-modal">
                <div className="date-picker-header">
                  <button 
                    className="month-nav-arrow"
                    onClick={() => handleMonthNavigation(-1)}
                    aria-label="Previous month"
                  >
                    ‹
                  </button>
                  <span className="month-year">
                    {currentDateObj.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <button 
                    className="month-nav-arrow"
                    onClick={() => handleMonthNavigation(1)}
                    aria-label="Next month"
                  >
                    ›
                  </button>
                </div>
                
                <div className="date-picker-grid">
                  <div className="day-headers">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="day-header">{day}</div>
                    ))}
                  </div>
                  
                  <div className="calendar-days">
                    {generateCalendarDays().map((date, index) => {
                      if (!date) {
                        return <div key={index} className="empty-day"></div>;
                      }
                      
                      const today = new Date();
                      const isToday = date.toDateString() === today.toDateString();
                      const isSelected = date.toDateString() === currentDateObj.toDateString();
                      const isPast = date < today && !isToday;
                      
                      return (
                        <button
                          key={index}
                          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${isPast ? 'past' : ''}`}
                          onClick={() => handleDateSelect(date)}
                          disabled={isPast}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                <div className="date-picker-footer">
                  <button 
                    className="today-btn"
                    onClick={() => handleDateSelect(new Date())}
                  >
                    Today
                  </button>
                  <button 
                    className="close-btn"
                    onClick={() => setShowDatePicker(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
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
