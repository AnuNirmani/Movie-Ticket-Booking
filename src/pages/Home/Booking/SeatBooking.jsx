import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../HeadFoot/Navbar";
import Footer from "../../HeadFoot/Footer";
import Deals from "../../../components/Deals";
import "../../../css/Home/Booking/seatbooking.css";

const SeatBooking = () => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [activeShowtime, setActiveShowtime] = useState("04:00 pm");
  const [activeFormat, setActiveFormat] = useState("2D");

  const dirLoungeSeats = ["DL12", "DL11", "DL10", "DL9", "DL8", "DL7", "DL6", "DL5", "DL4", "DL3", "DL2", "DL1"];
  const standardRows = ["J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
  const reservedSeats = ["DL8", "J15", "I12", "H9", "G6", "F3", "E10", "D7", "C4", "B1"];

  const toggleSeat = (seatId) => {
    if (reservedSeats.includes(seatId)) return;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

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

        {/* Seat Grid */}
        <div className="seat-grid">
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
          <button className="cancel" onClick={() => navigate("/home")}>
            Cancel
          </button>
          <button className="next" onClick={() => console.log(selectedSeats)}>
            Next
          </button>
        </div>
      </div>

      <Deals />
      <Footer />
    </>
  );
};

export default SeatBooking;
