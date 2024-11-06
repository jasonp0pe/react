// src/components/History/History.js
import React from 'react';
import './History.css';
import ShatranjImage from '../images/shatranj.jpg';
import ChaturangaImage from '../images/chatu.jpg';

function History() {
  return (
    <div className="history-container">
      <header>
        <h1>History of Chess</h1>
      </header>
      <section className="history-moments">
        <div className="history-item">
          <img src={ShatranjImage} alt="Shatranj" />
          <h3>Shatranj: The Persian Influence</h3>
          <p>Shatranj, the Persian adaptation, added significant strategic elements...</p>
        </div>
        <div className="history-item">
          <img src={ChaturangaImage} alt="Chaturanga" />
          <h3>Chaturanga: The Indian Origins</h3>
          <p>Chess originated from Chaturanga, a war game played in ancient India...</p>
        </div>
      </section>
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default History;
