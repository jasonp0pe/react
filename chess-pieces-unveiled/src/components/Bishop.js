// src/components/ChessPieces/Bishop.js
import React, { useState } from 'react';
import './Bishop.css';
import BishopImage from '../images/ChessBishop.gif'; // Importing the image

function Bishop() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = () => {
    setLightboxImage(BishopImage);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-logo">Chess Pieces Unveiled</a>
          <button className="nav-toggle" aria-label="Toggle navigation menu">&#9776;</button>
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/king">King</a></li>
            <li><a href="/queen">Queen</a></li>
            <li><a href="/rook">Rook</a></li>
            <li><a href="/bishop">Bishop</a></li>
            <li><a href="/knight">Knight</a></li>
            <li><a href="/pawn">Pawn</a></li>
            <li><a href="/allpieces">View All Pieces</a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/stories">Stories</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header>
        <h1>Bishop</h1>
      </header>

      {/* Bishop Description Section */}
      <section className="chess-piece-details">
        <p>The Bishop moves diagonally through any number of unoccupied squares. Each Bishop starts on either a light or dark square and stays on that color throughout the game.</p>
      </section>

      {/* Chessboard Image Section */}
      <section className="chessboard-section">
        <img 
          src={BishopImage} 
          alt="Bishop Movement" 
          className="chessboard-image" 
          onClick={openLightbox} 
        />
      </section>

      {/* Lightbox for enlarged image */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Enlarged Bishop" className="lightbox-img" />
        </div>
      )}

      {/* Navigation back to overview */}
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default Bishop;
