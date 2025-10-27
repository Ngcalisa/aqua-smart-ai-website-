import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Chatbot from './pages/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">AquaSmartAI</Link>
        <div>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/chatbot">Chatbot</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;