// AllPieces.js
import React from 'react';
import './AllPieces.css';

function AllPieces() {
  return (
    <div className="container">
      <header>
        <h1>All Chess Pieces Moving Together</h1>
      </header>
      <section className="all-pieces">
        <div className="piece">
          <h3>King</h3>
          <img src="images/ChessKing.gif" alt="King Movement" />
          <p>The King can move one square in any direction...</p>
        </div>
      </section>
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default AllPieces;
