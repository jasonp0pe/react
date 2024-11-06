// src/components/History/History.js
import React from 'react';
import './History.css'; // Import your CSS for this component
import ChaturangaImage from '../images/chatu.jpg';
import ShatranjImage from '../images/shatranj.jpg';

function History() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-logo">Chess Pieces Unveiled</a>
          <button className="nav-toggle" aria-label="Toggle navigation menu">
            &#9776;
          </button>
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
        <h1>History of Chess</h1>
      </header>

      {/* Key Moments in Chess History */}
      <section className="history-moments">
        <div className="history-item">
        <img src={ChaturangaImage} alt="Chaturanga" />
          <h3>6th Century: Origin in India</h3>
          <p>The game began as chaturanga in India, representing four military divisions: infantry, cavalry, elephantry, and chariotry.</p>
        </div>
        <div className="history-item">
         <img src={ShatranjImage} alt="Shatranj" />
          <h3>7th Century: Spread to Persia</h3>
          <p>As the game spread to Persia, it evolved into shatranj, where the pieces took on familiar forms.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default History;
