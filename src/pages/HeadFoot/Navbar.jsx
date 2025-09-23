// src/components/Navbar.jsx
import React from "react";
import "../../css/HeadFoot/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🎬 Movie Express</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/theatres">Theatres</a></li>
        <li><a href="/deals">Deals</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
