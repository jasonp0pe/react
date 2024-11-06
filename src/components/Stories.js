// src/components/Stories/Stories.js
import React from 'react';
import './Stories.css';
import JudithImage from '../images/judith.jpg';
import BobbyImage from '../images/bobby.jpg';

function Stories() {
  return (
    <div className="stories-container">
      <header>
        <h1>Player's Stories</h1>
      </header>
      <section className="stories-moments">
        <div className="story-item">
          <img src={JudithImage} alt="Judit Polgar" />
          <h3>Judit Polgar: Breaking Barriers in Chess</h3>
          <p>Judit Polgar is considered the strongest female chess player of all time...</p>
        </div>
        <div className="story-item">
          <img src={BobbyImage} alt="Bobby Fischer" />
          <h3>Bobby Fischer: The Lone Genius</h3>
          <p>Bobby Fischer rose from humble beginnings to become the 11th World Chess Champion...</p>
        </div>
      </section>
      <footer>
        <a href="/">Back to Chess Pieces Overview</a>
      </footer>
    </div>
  );
}

export default Stories;
