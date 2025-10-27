import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [waterTemp, setWaterTemp] = useState(25);
  const [alerts, setAlerts] = useState({
    leakage: false,
    theft: false,
    rust: false
  });

  // Simulate real-time alerts every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts({
        leakage: Math.random() > 0.7,
        theft: Math.random() > 0.85,
        rust: Math.random() > 0.9
      });
      setWaterTemp(Math.floor(Math.random() * 30) + 20);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="card">
        <h3>Water Temperature</h3>
        <p>{waterTemp}°C</p>
      </div>

      <div className="card">
        <h3>Leakage Alert</h3>
        <p>{alerts.leakage ? "⚠️ Leakage Detected!" : "All clear"}</p>
      </div>

      <div className="card">
        <h3>Theft Alert</h3>
        <p>{alerts.theft ? "🚨 Theft Detected!" : "All clear"}</p>
      </div>

      <div className="card">
        <h3>Rust Alert</h3>
        <p>{alerts.rust ? "⚠️ Rust Detected in Pipeline!" : "All clear"}</p>
      </div>
    </div>
  );
};

export default Dashboard;