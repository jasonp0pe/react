// src/components/ChessPieces/Knight.js
import React from 'react';
import './Knight.css';
import KnightImage from '../images/ChessKnight.gif';

function Knight() {
  return (
    <div className="container">
      <header>
        <h1>Knight</h1>
      </header>
      <section className="chess-piece-details">
        <p>The Knight moves in an "L" shape and can jump over other pieces.</p>
        <div className="chessboard-section">
          <img src={KnightImage} alt="Knight Movement" className="chessboard-image" />
        </div>
      </section>
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default Knight;
