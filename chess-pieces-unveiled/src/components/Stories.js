// src/components/Stories/Stories.js
import React, { useState } from 'react';
import './Stories.css';
import JudithImage from '../images/judith.jpg';
import BobbyImage from '../images/bobby.jpg';
import MauriceImage from '../images/maurice.jpg'; // Make sure to import Maurice's image

function Stories() {
  const [isNavOpen, setNavOpen] = useState(false); // State for navbar toggle

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-logo">Chess Pieces Unveiled</a>
          <button className="nav-toggle" onClick={() => setNavOpen(!isNavOpen)} aria-label="Toggle navigation menu">
            &#9776;
          </button>
          <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
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
        <h1>Player's Stories</h1>
      </header>

      {/* Story Sections */}
      <section className="stories-moments">
        <div className="story-item">
          <img src={JudithImage} alt="Judit Polgar Breaking Barriers" />
          <h3>Judit Polgar: Breaking Barriers in Chess</h3>
          <p>Judit Polgar is considered the strongest female chess player of all time. She shattered the notion that women couldn't compete with men by defeating 11 world champions throughout her career.</p>
        </div>

        <div className="story-item">
          <img src={BobbyImage} alt="Bobby Fischer The Lone Genius" />
          <h3>Bobby Fischer: The Lone Genius</h3>
          <p>Bobby Fischer rose from humble beginnings to become the 11th World Chess Champion in 1972. His enigmatic personality and unmatched skills made him a legend in the chess world.</p>
        </div>

        <div className="story-item">
          <img src={MauriceImage} alt="Maurice Ashley First Black Grandmaster" />
          <h3>Maurice Ashley: First Black Grandmaster</h3>
          <p>Maurice Ashley made history as the first Black chess Grandmaster. He has inspired a new generation of players from underrepresented communities to pursue excellence in chess.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default Stories;
