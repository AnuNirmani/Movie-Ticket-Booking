import React from "react";
import Navbar from "../HeadFoot/Navbar";
import Footer from "../HeadFoot/Footer";
import "../../css/Profile/mybooking.css";
const LandingPageAnimation = "/assets/LandingPageAnimation.png";

const MyBooking = () => {
  // Sample booking data - in a real app, this would come from an API
  const bookings = [
    {
      id: 1,
      movieName: "OPPENHEIMER",
      moviePoster: LandingPageAnimation,
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
      moviePoster: LandingPageAnimation,
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
          <h1>My Bookings</h1>
        </div>
        
        <div className="bookings-list">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-content">
                <div className="movie-poster">
                  <img src={booking.moviePoster} alt={booking.movieName} />
                </div>
                
                <div className="booking-details">
                  {/* Row 1: Movie Name - Single row */}
                  <div className="detail-row single-row">
                    <span className="detail-label">Movie Name :</span>
                    <span className="detail-value">{booking.movieName}</span>
                  </div>
                  
                  {/* Row 2: Booked Date - Single row */}
                  <div className="detail-row single-row">
                    <span className="detail-label">Booked Date :</span>
                    <span className="detail-value">{booking.bookedDate}</span>
                  </div>
                  
                  {/* Row 3: Location - Single row */}
                  <div className="detail-row single-row">
                    <span className="detail-label">Location :</span>
                    <span className="detail-value">{booking.location}</span>
                  </div>
                  
                  {/* Row 4: Price - Single row */}
                  <div className="detail-row single-row">
                    <span className="detail-label">Price :</span>
                    <span className="detail-value">{booking.price}</span>
                  </div>
                  
                  {/* Row 5: Tickets and Movie Time - Side by side */}
                  <div className="detail-row double-row">
                    <div className="detail-item">
                      <span className="detail-label">No of Ticket(s) :</span>
                      <span className="detail-value">{booking.noOfTickets}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Movie Time :</span>
                      <span className="detail-value">{booking.movieTime}</span>
                    </div>
                  </div>
                  
                  {/* Row 6: Seat Numbers and Movie Date - Side by side */}
                  <div className="detail-row double-row">
                    <div className="detail-item">
                      <span className="detail-label">Seat No(s) :</span>
                      <span className="detail-value">{booking.seatNumbers}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Movie Date :</span>
                      <span className="detail-value">{booking.movieDate}</span>
                    </div>
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
