import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import './Home.css';

// Import images
import ChessOverview from '../images/ChessPieces.jpg';
import LightKing from '../images/LightKing.jpg';
import LightQueen from '../images/LightQueen.jpg';
import LightRook from '../images/LightRook.jpg';
import LightBishop from '../images/LightBishop.jpg';
import LightKnight from '../images/LightKnight.jpg';
import LightPawn from '../images/LightPawn.jpg';

// Import ChessPiece component
import ChessPiece from './ChessPiece';

function Home() {
  const [setPieces] = useState([]); // State for chess pieces data
  const [isNavOpen, setNavOpen] = useState(false); // State for navbar toggle
  const [formMessage, setFormMessage] = useState(""); // State for form message

   useEffect(() => {
    axios
      .get('http://localhost:10000/chess-pieces')  
      .then((response) => {
        setPieces(response.data);  
      })
      .catch((error) => {
        console.error('Error fetching chess pieces:', error);
      });
  }, [setPieces]);  

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    try {
      const response = await fetch("https://formspree.io/f/xdkoadjg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        setFormMessage("Thank you for reaching out!");
        form.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setFormMessage("Oops! Something went wrong.");
    }
  };

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">Chess Pieces Unveiled</Link>
          <button className="nav-toggle" onClick={() => setNavOpen(!isNavOpen)} aria-label="Toggle navigation menu">&#9776;</button>
          <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/king">King</Link></li>
            <li><Link to="/queen">Queen</Link></li>
            <li><Link to="/rook">Rook</Link></li>
            <li><Link to="/bishop">Bishop</Link></li>
            <li><Link to="/knight">Knight</Link></li>
            <li><Link to="/pawn">Pawn</Link></li>
            <li><Link to="/allpieces">View All Pieces</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/stories">Stories</Link></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header>
        <h1>Chess Pieces Unveiled</h1>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." aria-label="Search" />
      </div>

      {/* Chess Pieces Overview */}
      <section className="overview">
        <img src={ChessOverview} alt="Chess Overview" />
        <div className="pieces-list">
          <Link to="/king" className="chess-piece">King</Link>
          <Link to="/queen" className="chess-piece">Queen</Link>
          <Link to="/rook" className="chess-piece">Rook</Link>
          <Link to="/bishop" className="chess-piece">Bishop</Link>
          <Link to="/knight" className="chess-piece">Knight</Link>
          <Link to="/pawn" className="chess-piece">Pawn</Link>
          <Link to="/allpieces" className="chess-piece all-pieces-link">View All Pieces</Link>
        </div>
      </section>

      {/* Chess Pieces Section */}
      <section className="chess-cards">
        <ChessPiece 
          image={LightKing}
          name="King"
          description="A King can move one square in any direction."
          link="/king"
        />
        <ChessPiece 
          image={LightQueen}
          name="Queen"
          description="The Queen is the most powerful piece on the board."
          link="/queen"
        />
        <ChessPiece 
          image={LightRook}
          name="Rook"
          description="The Rook moves horizontally or vertically through any number of unoccupied squares."
          link="/rook"
        />
        <ChessPiece 
          image={LightBishop}
          name="Bishop"
          description="The Bishop moves diagonally through any number of unoccupied squares."
          link="/bishop"
        />
        <ChessPiece 
          image={LightKnight}
          name="Knight"
          description="The Knight moves in an 'L' shape and can jump over other pieces."
          link="/knight"
        />
        <ChessPiece 
          image={LightPawn}
          name="Pawn"
          description="The Pawn moves forward one square or two squares on its first move."
          link="/pawn"
        />
      </section>

      {/* Explore More Section */}
      <section className="additional-pages">
        <h2>Explore More</h2>
        <div className="extra-links">
          <Link to="/history" className="extra-link">History of Chess</Link>
          <Link to="/news" className="extra-link">Chess News</Link>
          <Link to="/stories" className="extra-link">Player's Stories</Link>
        </div>
      </section>

      {/* Contact Me Form Section */}
      <section className="contact-section">
        <h2>Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Submit</button>
          <p id="form-message" style={{ color: formMessage.includes("Thank you") ? "green" : "red" }}>
            {formMessage}
          </p>
        </form>
      </section>

      {/* Embedded Google Map */}
      <section className="iframe-section">
        <h2>Location</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=..." 
          allowFullScreen 
          title="Google Map"
        ></iframe>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Chess Pieces Unveiled</p>
      </footer>
    </div>
  );
}

export default Home;