import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../HeadFoot/Navbar";
import Footer from "../../HeadFoot/Footer";
import "../../../css/Home/Booking/seatbooking.css";

const SeatBooking = () => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [activeShowtime, setActiveShowtime] = useState("04:00 pm");
  const [activeFormat, setActiveFormat] = useState("2D");
  const [fullTickets, setFullTickets] = useState(0);
  const [halfTickets, setHalfTickets] = useState(0);

  const dirLoungeSeats = ["DL12", "DL11", "DL10", "DL9", "DL8", "DL7", "DL6", "DL5", "DL4", "DL3", "DL2", "DL1"];
  const standardRows = ["J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
  const reservedSeats = ["DL8", "J15", "I12", "H9", "G6", "F3", "E10", "D7", "C4", "B1"];

  const toggleSeat = (seatId) => {
    if (reservedSeats.includes(seatId)) return;
    if (selectedSeats.includes(seatId)) {
      const newSelectedSeats = selectedSeats.filter((s) => s !== seatId);
      setSelectedSeats(newSelectedSeats);
      // Adjust ticket counts if they exceed the new seat count
      const totalTickets = fullTickets + halfTickets;
      if (totalTickets > newSelectedSeats.length) {
        const excess = totalTickets - newSelectedSeats.length;
        if (halfTickets >= excess) {
          setHalfTickets(halfTickets - excess);
        } else {
          setHalfTickets(0);
          setFullTickets(fullTickets - (excess - halfTickets));
        }
      }
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const incrementFullTickets = () => {
    if (fullTickets + halfTickets < selectedSeats.length) {
      setFullTickets(fullTickets + 1);
    }
  };

  const decrementFullTickets = () => {
    if (fullTickets > 0) {
      setFullTickets(fullTickets - 1);
    }
  };

  const incrementHalfTickets = () => {
    if (fullTickets + halfTickets < selectedSeats.length) {
      setHalfTickets(halfTickets + 1);
    }
  };

  const decrementHalfTickets = () => {
    if (halfTickets > 0) {
      setHalfTickets(halfTickets - 1);
    }
  };

  // Auto-assign first selected seat to full ticket
  useEffect(() => {
    if (selectedSeats.length === 1 && fullTickets === 0 && halfTickets === 0) {
      setFullTickets(1);
    }
  }, [selectedSeats.length, fullTickets, halfTickets]);

  const getSeatClass = (seatId) => {
    let seatClass = "seat";
    if (reservedSeats.includes(seatId)) {
      seatClass += " reserved";
    } else if (selectedSeats.includes(seatId)) {
      seatClass += " selected";
    } else {
      seatClass += " available";
    }
    return seatClass;
  };

  return (
    <>
      <Navbar />

      <div className="booking-container">
        {/* Header */}
        <div className="booking-header">
          <h2>LILO & STITCH | Monday, 29 May | CCC Cinemas</h2>

          {/* Format Buttons */}
          <div className="format-buttons">
            <button
              className={activeFormat === "2D" ? "format-btn active" : "format-btn"}
              onClick={() => setActiveFormat("2D")}
            >
              2D
            </button>
            <button
              className={activeFormat === "3D" ? "format-btn active" : "format-btn"}
              onClick={() => setActiveFormat("3D")}
            >
              3D
            </button>
          </div>

        {/* Showtimes */}
        <div className="showtimes">
          {["09:00 am", "12:30 pm", "04:00 pm"].map((time) => (
            <button
              key={time}
              className={activeShowtime === time ? "active" : ""}
              onClick={() => setActiveShowtime(time)}
            >
              {time}
            </button>
          ))}
        </div>
        </div>

        {/* Legend */}
        <div className="legend">
          <div className="legend-item">
            <span className="box reserved"></span> Reserved
          </div>
          <div className="legend-item">
            <span className="box available"></span> Available
          </div>
          <div className="legend-item">
            <span className="box selected"></span> Selected
          </div>
        </div>

       

        {/* Seat Grid */}
        <div className="seat-grid">

           {/* Ticket Price Display */}
        <div className="ticket-price-display">
          <h6>Ticket Price: {activeFormat === "3D" ? "ODC Full (LKR 600.00) / ODC Half (Age 3-12) (LKR 450.00)" : 
          " ODC Full (LKR 600.00) / ODC Half (Age 3-12) (LKR 450.00)"}</h6>
        </div>
        
          {/* DIR'S LOUNGE Section */}
          <div className="section">
            <h3 className="section-title">DIR'S LOUNGE</h3>
            <div className="dir-lounge-row">
              <div className="seat-block">
                {dirLoungeSeats.slice(0, 8).map((seatId) => (
                  <div
                    key={seatId}
                    className={getSeatClass(seatId)}
                    onClick={() => toggleSeat(seatId)}
                  >
                    {seatId}
                  </div>
                ))}
              </div>
              <div className="aisle-gap"></div>
              <div className="seat-block">
                {dirLoungeSeats.slice(8, 12).map((seatId) => (
                  <div
                    key={seatId}
                    className={getSeatClass(seatId)}
                    onClick={() => toggleSeat(seatId)}
                  >
                    {seatId}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STANDARD Section */}
          <div className="section">
            <h3 className="section-title">STANDARD</h3>
            {standardRows.map((row) => (
              <div key={row} className="seat-row">
                <span className="row-label">{row}</span>
                <div className="seat-block">
                  {[...Array(12)].map((_, i) => {
                    const seatNum = row === "J" || row === "I" || row === "H" ? 18 - i : 16 - i;
                    const seatId = `${row}${seatNum}`;
                    return (
                      <div
                        key={seatId}
                        className={getSeatClass(seatId)}
                        onClick={() => toggleSeat(seatId)}
                      >
                        {seatNum}
                      </div>
                    );
                  })}
                </div>
                <div className="central-aisle"></div>
                <div className="seat-block">
                  {row === "J" || row === "I" || row === "H"
                    ? [...Array(6)].map((_, i) => {
                        const seatNum = 6 - i;
                        const seatId = `${row}${seatNum}`;
                        return (
                          <div
                            key={seatId}
                            className={getSeatClass(seatId)}
                            onClick={() => toggleSeat(seatId)}
                          >
                            {seatNum}
                          </div>
                        );
                      })
                    : [...Array(4)].map((_, i) => {
                        const seatNum = 4 - i;
                        const seatId = `${row}${seatNum}`;
                        return (
                          <div
                            key={seatId}
                            className={getSeatClass(seatId)}
                            onClick={() => toggleSeat(seatId)}
                          >
                            {seatNum}
                          </div>
                        );
                      })}
                </div>
              </div>
            ))}
          </div>

          <div className="screen">SCREEN</div>
        </div>

        {/* Ticket selection */}
        <div className="ticket-selection">
          <p className="ticket-selection-header">
            ({selectedSeats.length}) ticket(s) selected. Please select attendance.
          </p>
          
          <div className="ticket-types">
            <div className="ticket-type-row">
              <label className="ticket-type-label">Full Tickets:</label>
              <div className="ticket-counter">
                <button 
                  className={`counter-btn ${fullTickets === 0 ? 'disabled' : ''}`}
                  onClick={decrementFullTickets}
                  disabled={fullTickets === 0}
                >
                  -
                </button>
                <div className="ticket-count">{fullTickets}</div>
                <button 
                  className={`counter-btn ${fullTickets + halfTickets >= selectedSeats.length ? 'disabled' : ''}`}
                  onClick={incrementFullTickets}
                  disabled={fullTickets + halfTickets >= selectedSeats.length}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="ticket-type-row">
              <label className="ticket-type-label">Half Tickets:</label>
              <div className="ticket-counter">
                <button 
                  className={`counter-btn ${halfTickets === 0 ? 'disabled' : ''}`}
                  onClick={decrementHalfTickets}
                  disabled={halfTickets === 0}
                >
                  -
                </button>
                <div className="ticket-count">{halfTickets}</div>
                <button 
                  className={`counter-btn ${fullTickets + halfTickets >= selectedSeats.length ? 'disabled' : ''}`}
                  onClick={incrementHalfTickets}
                  disabled={fullTickets + halfTickets >= selectedSeats.length}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          
          <p className="seat-numbers">Your Seat Number(s) : {selectedSeats.join(", ") || "None"}</p>
        </div>

        <div className="actions">
          <button className="cancel" onClick={() => navigate("/home")}>
            Cancel
          </button>
          <button className="next" onClick={() => navigate("/payment")}>
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SeatBooking;
