import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/about">About</Link>
      <h2>GitHub Pages</h2>
    </div>
  );
}

export default App;
