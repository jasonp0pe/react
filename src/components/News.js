// src/components/News/News.js
import React from 'react';
import './News.css';
import WorldChampionshipImage from '../images/2024world.jpg';
import OnlineChessImage from '../images/onlinechess.png';
import MagnusImage from '../images/magnuz.jpg';

function News() {
  return (
    <div className="news-container">
      <header>
        <h1>Chess News</h1>
      </header>
      <section className="news-moments">
        <div className="news-item">
          <img src={WorldChampionshipImage} alt="World Chess Championship" />
          <h3>2024: World Chess Championship</h3>
          <p>The 2024 World Chess Championship saw the battle between two top players...</p>
        </div>
        <div className="news-item">
          <img src={OnlineChessImage} alt="Online Chess Tournaments" />
          <h3>2023: Rise of Online Chess Tournaments</h3>
          <p>Online chess has exploded in popularity due to the pandemic...</p>
        </div>
        <div className="news-item">
          <img src={MagnusImage} alt="Magnus Carlsen" />
          <h3>2022: Magnus Carlsen's Retirement from Classical Chess</h3>
          <p>Five-time World Champion Magnus Carlsen announced he would not defend his title...</p>
        </div>
      </section>
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default News;
