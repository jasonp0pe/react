import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

// Image imports for chess pieces
import ChessOverview from '../images/ChessPieces.jpg';
import './ChessPieces.js';

function Home() {
  const [pieces, setPieces] = useState([]); // State for chess pieces data
  const [isNavOpen, setNavOpen] = useState(false); // State for navbar toggle
  const [formMessage, setFormMessage] = useState(""); // State for form message
  const [formErrors, setFormErrors] = useState({}); // State for form validation errors
  const [newPiece, setNewPiece] = useState({
    name: '',
    description: '',
    image: null // Store the image file itself
  });

  useEffect(() => {
    axios
      .get("https://chess-api-pb0g.onrender.com/chess-pieces")  // Ensure the server endpoint is correct
      .then((response) => {
        setPieces(response.data);
      })
      .catch((error) => {
        console.error('Error fetching chess pieces:', error);
      });
  }, []);

  // Handle form submission with validation and file upload
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form before submitting
    const errors = validateForm(newPiece);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append('name', newPiece.name);
      formData.append('description', newPiece.description);
      formData.append('image', newPiece.image); // Append the image file to the FormData

      try {
        const response = await axios.post("https://chess-api-pb0g.onrender.com/chess-pieces", formData, {
          headers: {
            'Content-Type': 'multipart/form-data' 
          }
        });

        if (response.status === 200) {
          setFormMessage("Failed to add");
          setNewPiece({ name: '', description: '', image: '' }); // Reset the form
        } else {
          setFormMessage("Chess piece added successfully!");
        }
      } catch (error) {
        setFormMessage("Oops! Something went wrong.");
      }
    } else {
      setFormMessage("Please correct the errors in the form.");
    }
  };

  // Validate the form
  const validateForm = (piece) => {
    const errors = {};

    if (!piece.name) {
      errors.name = 'Name is required';
    }

    if (!piece.description) {
      errors.description = 'Description is required';
    }

    if (!piece.image) {
      errors.image = 'Image is required';
    }

    return errors;
  };

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPiece({
      ...newPiece,
      [name]: value
    });
  };

  // Handle file input change
  const handleFileChange = (event) => {
    const { files } = event.target;
    setNewPiece({
      ...newPiece,
      image: files[0] // Store the first file from the file input
    });
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

      {/* Chess Pieces Overview */}
      <section className="overview">
        <img src={ChessOverview} alt="Chess Overview" />
        <div className="pieces-list">
          {pieces.map((piece) => (
            <Link to={`/${piece.name.toLowerCase()}`} className="chess-piece" key={piece._id}>
              <img src={`https://chess-api-pb0g.onrender.com/${piece.image}`} alt={`${piece.name} Icon`} className="chess-piece-icon" />
              <h3>{piece.name}</h3>
              <p>{piece.description}</p>
              <a href={`/${piece.name.toLowerCase()}`}>Learn More</a>
            </Link>
          ))}
        </div>
      </section>

      {/* Add New Chess Piece Form */}
      <section className="add-chess-piece">
        <h2>Add a New Chess Piece</h2>
        <form id="add-piece-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={newPiece.name}
            onChange={handleInputChange}
          />

          <label htmlFor="description">Description:</label>
          <input 
            type="text" 
            id="description" 
            name="description" 
            value={newPiece.description}
            onChange={handleInputChange}
          />

          <label htmlFor="image">Upload Image:</label>
          <input 
            type="file" 
            id="image" 
            name="image" 
            accept="image/*" 
            onChange={handleFileChange}
          />

          <button type="submit">Add Piece</button>
        </form>
        <p>{formMessage}</p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Chess Pieces Unveiled</p>
      </footer>
    </div>
  );
}

export default Home;
