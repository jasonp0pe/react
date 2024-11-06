// src/components/ChessPieces/King.js
import React, { useState } from 'react';
import './King.css';
import KingImage from '../images/ChessKing.gif';

function King() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = () => {
    setLightboxImage(KingImage);
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
        <h1>KING</h1>
      </header>

      {/* King Description Section */}
      <section className="chess-piece-details">
        <p>The King is the most important piece in chess. It can move one square in any direction—horizontally, vertically, or diagonally.</p>
        <div className="chessboard-section">
          <img 
            src={KingImage} 
            alt="King Movement" 
            className="chessboard-image" 
            onClick={openLightbox} 
          />
        </div>
      </section>

      {/* Lightbox for enlarged image */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Enlarged King" className="lightbox-img" />
        </div>
      )}

      {/* Navigation back to the overview */}
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default King;
