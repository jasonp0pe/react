// src/components/ChessPieces.js
import React from 'react';
import './ChessPieces.css';

// Data for chess pieces (You can update the image paths as needed)
const piecesData = [
  {
    name: 'King',
    image: '/images/LightKing.jpg', // Update with actual image path
    description: 'The King can move one square in any direction.',
  },
  {
    name: 'Queen',
    image: '/images/LightQueen.jpg', // Update with actual image path
    description: 'The Queen can move any number of squares in any direction.',
  },
  {
    name: 'Rook',
    image: '/images/LightRook.jpg', // Update with actual image path
    description: 'The Rook moves horizontally or vertically any number of squares.',
  },
  {
    name: 'Bishop',
    image: '/images/LightBishop.jpg', // Update with actual image path
    description: 'The Bishop moves diagonally any number of squares.',
  },
  {
    name: 'Knight',
    image: '/images/LightKnight.jpg', // Update with actual image path
    description: 'The Knight moves in an "L" shape and can jump over other pieces.',
  },
  {
    name: 'Pawn',
    image: '/images/LightPawn.jpg', // Update with actual image path
    description: 'The Pawn moves forward one square or two squares on its first move.',
  },
];

const ChessPieces = () => {
  return (
    <div className="chess-pieces-container">
      {piecesData.map((piece) => (
        <div className="chess-piece" key={piece.name}>
          <img src={piece.image} alt={piece.name} />
          <h3>{piece.name}</h3>
          <p>{piece.description}</p>
          <a href={`/${piece.name.toLowerCase()}`}>Learn More</a>
        </div>
      ))}
    </div>
  );
};

export default ChessPieces;

