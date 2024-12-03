import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

// Image imports for chess pieces
import ChessOverview from '../images/ChessPieces.jpg';

function Home() {
  const [pieces, setPieces] = useState([]); // State for chess pieces data
  const [isNavOpen, setNavOpen] = useState(false); // State for navbar toggle
  const [formMessage, setFormMessage] = useState(""); // State for form message
  const [formErrors, setFormErrors] = useState({}); // State for form validation errors
  const [newPiece, setNewPiece] = useState({
    name: '',
    description: '',
    image: null, // Store the image file itself
    id: null, // Store the ID of the piece being edited
  });

  // Fetching chess pieces from the server
  useEffect(() => {
    axios
      .get("https://chess-api-pb0g.onrender.com/chess-pieces")
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

    const errors = validateForm(newPiece);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append('name', newPiece.name);
      formData.append('description', newPiece.description);
      formData.append('image', newPiece.image);

      try {
        const response = newPiece.id
          ? await axios.put(`https://chess-api-pb0g.onrender.com/chess-pieces/${newPiece.id}`, formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            })
          : await axios.post('https://chess-api-pb0g.onrender.com/chess-pieces', formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });

        if (response.status === 200) {
          setFormMessage('Chess piece updated successfully!');
          setPieces(
            pieces.map((p) =>
              p._id === newPiece.id ? response.data : p
            )
          );
          setNewPiece({ name: '', description: '', image: null, id: null }); // Reset form
        } else {
          setFormMessage('Chess piece updated successfully!');
        }
      } catch (error) {
        setFormMessage('Oops! Something went wrong.');
      }
    } else {
      setFormMessage('Please correct the errors in the form.');
    }
  };

  // Validate form input
  const validateForm = (piece) => {
    const errors = {};
    if (!piece.name) errors.name = 'Name is required';
    if (!piece.description) errors.description = 'Description is required';
    if (!piece.image) errors.image = 'Image is required';
    return errors;
  };

  // Handle input changes for text fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPiece({ ...newPiece, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (event) => {
    const { files } = event.target;
    setNewPiece({ ...newPiece, image: files[0] });
  };

  // Handle the edit button click
  const handleEdit = (id) => {
    const piece = pieces.find(piece => piece._id === id);
    setNewPiece({
      name: piece.name,
      description: piece.description,
      image: piece.image, // You might want to store the image URL here for editing
      id: piece._id, // Store the ID of the piece to be updated
    });
  };

  // Handle the delete button click
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://chess-api-pb0g.onrender.com/chess-pieces/${id}`);
      if (response.status === 200) {
        setPieces(pieces.filter(piece => piece._id !== id)); // Remove the deleted piece from the state
      }
    } catch (error) {
      console.error('Error deleting chess piece:', error);
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

      {/* Chess Pieces Overview */}
      <section className="overview">
        <img src={ChessOverview} alt="Chess Overview" />
        <div className="pieces-list">
          {pieces.map((piece) => (
            <div className="chess-piece" key={piece._id}>
              <img src={`https://chess-api-pb0g.onrender.com/${piece.image}`} alt={`${piece.name} Icon`} className="chess-piece-icon" />
              <h3>{piece.name}</h3>
              <p>{piece.description}</p>
              <button onClick={() => handleEdit(piece._id)}>Edit</button>
              <button onClick={() => handleDelete(piece._id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>

      {/* Add New Chess Piece Form */}
      <section className="add-chess-piece">
        <h2>{newPiece.id ? 'Edit Chess Piece' : 'Add a New Chess Piece'}</h2>
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

          <button type="submit">{newPiece.id ? 'Update Piece' : 'Add Piece'}</button>
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
