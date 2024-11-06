// src/components/ChessPieces/King.js
import React from 'react';
import './King.css';
import KingImage from '../images/ChessKing.gif';

function King() {
  return (
    <div className="container">
      <header>
        <h1>King</h1>
      </header>
      <section className="chess-piece-details">
        <p>The King can move one square in any direction—horizontally, vertically, or diagonally.</p>
        <div className="chessboard-section">
          <img src={KingImage} alt="King Movement" className="chessboard-image" />
        </div>
      </section>
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default King;
