import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../HeadFoot/Navbar";
import Footer from "../../HeadFoot/Footer";
import Deals from "../../../components/Deals";
import "../../../css/Home/Booking/seatbooking.css";

const SeatBooking = () => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Seat configuration
  const rows = ["H", "G", "F", "E", "D", "C", "B", "A"];
  const cols = 12;
  
  // Sample reserved seats
  const reservedSeats = ["E6", "E7", "E8", "E9", "F12"];

  const handleBackToHome = () => {
    navigate("/home");
  };

  const toggleSeat = (seatId) => {
    if (reservedSeats.includes(seatId)) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleCancel = () => {
    navigate("/home");
  };

  const handleNext = () => {
    // Navigate to next step (payment or confirmation)
    console.log("Selected seats:", selectedSeats);
    // You can add navigation to payment page here
  };

  return (
    <>
      <Navbar />
      
      <div className="booking-container">
        {/* Header */}
        <div className="booking-header">
          <button className="back-btn" onClick={handleBackToHome}>
            ← Back to Movies
          </button>
          <h3>LILO & STITCH | Monday, 29 May | CCC Cinemas - 2D</h3>
          <div className="legend">
            <span className="box reserved"></span> Reserved
            <span className="box available"></span> Available
            <span className="box selected"></span> Selected
          </div>
        </div>

        {/* Showtimes */}
        <div className="showtimes">
          <button>09:00 am</button>
          <button>12:30 pm</button>
          <button className="active">04:00 pm</button>
        </div>

        {/* Seat Grid */}
        <div className="seat-grid">
          {rows.map((row) => (
            <div key={row} className="seat-row">
              <span className="row-label">{row}</span>
              {[...Array(cols)].map((_, i) => {
                const seatId = `${row}${i + 1}`;
                let seatClass = "seat";

                if (reservedSeats.includes(seatId)) {
                  seatClass += " reserved";
                } else if (selectedSeats.includes(seatId)) {
                  seatClass += " selected";
                } else {
                  seatClass += " available";
                }

                return (
                  <div
                    key={seatId}
                    className={seatClass}
                    onClick={() => toggleSeat(seatId)}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="screen">SCREEN THIS WAY</div>

        {/* Ticket selection */}
        <div className="ticket-selection">
          <p>
            ({selectedSeats.length}) seat(s) selected. Please select attendees.
          </p>
          <div className="ticket-types">
            <div>
              <label>Full Tickets</label>
              <input type="number" min="0" max={selectedSeats.length} />
            </div>
            <div>
              <label>Half Tickets</label>
              <input type="number" min="0" max={selectedSeats.length} />
            </div>
          </div>
          <p>Your Seat Number(s): {selectedSeats.join(", ") || "None"}</p>
        </div>

        <div className="actions">
          <button className="cancel" onClick={handleCancel}>Cancel</button>
          <button className="next" onClick={handleNext}>Next</button>
        </div>
      </div>

      {/* Deals Section */}
      <Deals />
      
      <Footer />
    </>
  );
};

export default SeatBooking;
