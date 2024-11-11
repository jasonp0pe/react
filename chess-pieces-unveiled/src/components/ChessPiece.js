import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ChessPiece.css';

function ChessPiece({ image, name, description, link }) {
  return (
    <div className="card">
      <img src={image} alt={`${name} Icon`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={link} className="learn-more">Learn More</Link>
    </div>
  );
}

export default ChessPiece;
