// src/components/News/News.js
import React, { useState } from 'react';
import './News.css';
import WorldChampionshipImage from '../images/2024world.jpg';
import OnlineChessImage from '../images/onlinechess.png';
import MagnusImage from '../images/magnuz.jpg';

function News() {
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
        <h1>Chess News</h1>
      </header>

      {/* Latest Chess News */}
      <section className="news-moments">
        <div className="news-item">
          <img src={WorldChampionshipImage} alt="World Chess Championship" />
          <h3>2024: World Chess Championship</h3>
          <p>The 2024 World Chess Championship saw the battle between two top players, continuing the age-old tradition of determining the chess world champion. Exciting new strategies were seen this year.</p>
        </div>
        <div className="news-item">
          <img src={OnlineChessImage} alt="Online Chess Tournaments" />
          <h3>2023: Rise of Online Chess Tournaments</h3>
          <p>Online chess has exploded in popularity due to the COVID-19 pandemic, with major platforms like Chess.com and Lichess hosting record-breaking tournaments, attracting millions of players globally.</p>
        </div>
        <div className="news-item">
          <img src={MagnusImage} alt="Magnus Carlsen" />
          <h3>2022: Magnus Carlsen's Retirement from Classical Chess</h3>
          <p>Five-time World Champion Magnus Carlsen announced that he would not defend his World Chess Championship title, marking the end of an era in classical chess domination.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default News;
