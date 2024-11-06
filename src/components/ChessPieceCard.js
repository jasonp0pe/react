import React from "react";
import './ChessPieceCard.css';


function ChessPieceCard({ name, description, imageUrl, link }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={`${name} Icon`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={link} className="learn-more">Learn More</a>
    </div>
  );
}

export default ChessPieceCard;
