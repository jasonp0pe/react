// src/components/AllPieces.js
import React, { useState } from 'react';
import './AllPieces.css'; // Ensure you have your CSS for styling

// Import images
import KingImage from '../images/ChessKing.gif';
import QueenImage from '../images/ChessQueen.gif';
import RookImage from '../images/ChessRook.gif';
import BishopImage from '../images/ChessBishop.gif';
import KnightImage from '../images/ChessKnight.gif';
import PawnImage from '../images/ChessPawn.gif';

function AllPieces() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
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
        <h1>All Chess Pieces Moving Together</h1>
      </header>

      {/* Chess Pieces Sections */}
      <section className="all-pieces">
        {/* King */}
        <div className="piece">
          <h3>King</h3>
          <img src={KingImage} alt="King Movement" onClick={() => openLightbox(KingImage)} />
          <p>The King can move one square in any direction.</p>
        </div>

        {/* Queen */}
        <div className="piece">
          <h3>Queen</h3>
          <img src={QueenImage} alt="Queen Movement" onClick={() => openLightbox(QueenImage)} />
          <p>The Queen can move in any direction as far as possible.</p>
        </div>

        {/* Rook */}
        <div className="piece">
          <h3>Rook</h3>
          <img src={RookImage} alt="Rook Movement" onClick={() => openLightbox(RookImage)} />
          <p>The Rook moves horizontally or vertically through any number of unoccupied squares.</p>
        </div>

        {/* Bishop */}
        <div className="piece">
          <h3>Bishop</h3>
          <img src={BishopImage} alt="Bishop Movement" onClick={() => openLightbox(BishopImage)} />
          <p>The Bishop moves diagonally through any number of unoccupied squares.</p>
        </div>

        {/* Knight */}
        <div className="piece">
          <h3>Knight</h3>
          <img src={KnightImage} alt="Knight Movement" onClick={() => openLightbox(KnightImage)} />
          <p>The Knight moves in an "L" shape and can jump over other pieces.</p>
        </div>

        {/* Pawn */}
        <div className="piece">
          <h3>Pawn</h3>
          <img src={PawnImage} alt="Pawn Movement" onClick={() => openLightbox(PawnImage)} />
          <p>The Pawn moves forward one square or two squares on its first move.</p>
        </div>
      </section>

      {/* Lightbox for enlarged images */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Enlarged" className="lightbox-img" />
        </div>
      )}

      {/* Back to Chess Pieces Overview */}
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default AllPieces;
