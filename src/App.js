// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChessPieceCard from "./components/ChessPieceCard"; // import if needed
import King from "./components/King";
import Queen from "./components/Queen";
import Rook from "./components/Rook";
import Bishop from "./components/Bishop";
import Knight from "./components/Knight";
import Pawn from "./components/Pawn";
import News from "./components/News";
import Stories from "./components/Stories";
import History from "./components/History";
import "./App.css"; // Ensure this imports your main styles

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Chess Pieces Unveiled</h1>
        </header>
        
        {/* Define Routes for each component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/king" element={<King />} />
          <Route path="/queen" element={<Queen />} />
          <Route path="/rook" element={<Rook />} />
          <Route path="/bishop" element={<Bishop />} />
          <Route path="/knight" element={<Knight />} />
          <Route path="/pawn" element={<Pawn />} />
          <Route path="/news" element={<News />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

