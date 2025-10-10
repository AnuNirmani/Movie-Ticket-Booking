import React from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Profile/mybooking.css";

const MyBooking = () => {
  // Sample booking data - in a real app, this would come from an API
  const bookings = [
    {
      id: 1,
      movieName: "OPPENHEIMER",
      moviePoster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      bookedDate: "15th May 2025",
      movieDate: "15th May 2025",
      movieTime: "4.30 pm",
      location: "CCC Cinemas",
      price: "LKR 1600.00",
      noOfTickets: "2 Adult",
      seatNumbers: "F2, F3"
    },
    {
      id: 2,
      movieName: "BATMAN",
      moviePoster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      bookedDate: "16th May 2025",
      movieDate: "15th May 2025",
      movieTime: "4.30 pm",
      location: "CCC Cinemas",
      price: "LKR 1600.00",
      noOfTickets: "2 Adult",
      seatNumbers: "F2, F3"
    }
  ];

  return (
    <div className="mybooking-page">
      <Navbar />
      <div className="mybooking-container">
        <div className="mybooking-header">
          <h1>MyBookings</h1>
        </div>
        
        <div className="bookings-list">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-content">
                <div className="movie-poster">
                  <img src={booking.moviePoster} alt={booking.movieName} />
                </div>
                
                <div className="booking-details">
                  <div className="detail-row">
                    <span className="detail-label">Movie Name :</span>
                    <span className="detail-value">{booking.movieName}</span>
                  </div>
                  
                  <div className="detail-row">
                    <span className="detail-label">Booked Date :</span>
                    <span className="detail-value">{booking.bookedDate}</span>
                  </div>
                  
                  <div className="detail-row">
                    <span className="detail-label">Location :</span>
                    <span className="detail-value">{booking.location}</span>
                  </div>
                  
                  <div className="detail-row">
                    <span className="detail-label">Price :</span>
                    <span className="detail-value">{booking.price}</span>
                  </div>
                  
                  <div className="detail-row">
                    <span className="detail-label">No of Ticket(s) :</span>
                    <span className="detail-value">{booking.noOfTickets}</span>
                    <span className="detail-label movie-time-label">Movie Time :</span>
                    <span className="detail-value">{booking.movieTime}</span>
                  </div>
                  
                  <div className="detail-row">
                    <span className="detail-label">Seat No(s) :</span>
                    <span className="detail-value">{booking.seatNumbers}</span>
                    <span className="detail-label movie-date-label">Movie Date :</span>
                    <span className="detail-value">{booking.movieDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyBooking;
