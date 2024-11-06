// src/components/ChessPieces/Pawn.js
import React from 'react';
import './Pawn.css';
import PawnImage from '../images/ChessPawn.gif';

function Pawn() {
  return (
    <div className="container">
      <header>
        <h1>Pawn</h1>
      </header>
      <section className="chess-piece-details">
        <p>The Pawn moves forward one square or two squares on its first move.</p>
        <div className="chessboard-section">
          <img src={PawnImage} alt="Pawn Movement" className="chessboard-image" />
        </div>
      </section>
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default Pawn;
