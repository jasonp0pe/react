// src/components/ChessPieces/Queen.js
import React from 'react';
import './Queen.css';
import QueenImage from '../images/ChessQueen.gif';

function Queen() {
  return (
    <div className="container">
      <header>
        <h1>Queen</h1>
      </header>
      <section className="chess-piece-details">
        <p>The Queen can move in any direction as far as possible.</p>
        <div className="chessboard-section">
          <img src={QueenImage} alt="Queen Movement" className="chessboard-image" />
        </div>
      </section>
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default Queen;
