// src/components/ChessPieces/Bishop.js
import React from 'react';
import './Bishop.css';
import BishopImage from '../images/ChessBishop.gif';

function Bishop() {
  return (
    <div className="container">
      <header>
        <h1>Bishop</h1>
      </header>
      <section className="chess-piece-details">
        <p>The Bishop moves diagonally through any number of unoccupied squares.</p>
        <div className="chessboard-section">
          <img src={BishopImage} alt="Bishop Movement" className="chessboard-image" />
        </div>
      </section>
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default Bishop;
