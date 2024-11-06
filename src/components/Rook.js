// src/components/ChessPieces/Rook.js
import React from 'react';
import './Rook.css';
import RookImage from '../images/ChessRook.gif'; // Importing the image

function Rook() {
  return (
    <div className="container">
      <header>
        <h1>Rook</h1>
      </header>
      <section className="chess-piece-details">
        <p>The Rook moves horizontally or vertically through any number of unoccupied squares...</p>
        <div className="chessboard-section">
          <img src={RookImage} alt="Rook Movement" className="chessboard-image" /> {/* Using imported image */}
        </div>
      </section>
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default Rook;

