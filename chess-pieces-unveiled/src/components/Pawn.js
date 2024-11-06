// src/components/ChessPieces/Pawn.js
import React, { useState } from 'react';
import './Pawn.css';
import PawnImage from '../images/ChessPawn.gif'; // Importing the image

function Pawn() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = () => {
    setLightboxImage(PawnImage);
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
        <h1>Pawn</h1>
      </header>

      {/* Pawn Description Section */}
      <section className="chess-piece-details">
        <p>The Pawn moves forward one square or two squares on its first move. It captures diagonally, and when it reaches the opposite end of the board, it can be promoted to any other piece except for a King.</p>
      </section>

      {/* Chessboard Image Section */}
      <section className="chessboard-section">
        <img 
          src={PawnImage} 
          alt="Pawn Movement" 
          className="chessboard-image" 
          onClick={openLightbox} 
        />
      </section>

      {/* Lightbox for enlarged image */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Enlarged Pawn" className="lightbox-img" />
        </div>
      )}

      {/* Navigation back to overview */}
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default Pawn;
