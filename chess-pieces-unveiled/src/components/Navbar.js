import React from 'react';
import './Navbar.css'; // Create this file to add your styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">Chess Pieces Unveiled</a>
        <button className="nav-toggle" aria-label="Toggle navigation menu">
          &#9776;
        </button>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#king">King</a></li>
          <li><a href="#queen">Queen</a></li>
          <li><a href="#rook">Rook</a></li>
          <li><a href="#bishop">Bishop</a></li>
          <li><a href="#knight">Knight</a></li>
          <li><a href="#pawn">Pawn</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#stories">Stories</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
