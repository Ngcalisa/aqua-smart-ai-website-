import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h1>Welcome to AquaSmartAI</h1>
    <p>Monitor water leakage, control your geyser, and chat with our AI assistant.</p>
    <a href="/dashboard" className="btn">Go to Dashboard</a>
  </div>
);

export default Home;
