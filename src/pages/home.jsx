
import React, { useState } from 'react';
import './App.css'; // Pastikan Anda membuat file CSS yang sesuai
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <button onClick={openNav}>☰ Open Navigation</button>
      </header>

      {/* Navigation Bar */}
      <div className={`sidenav ${navOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>

      {/* Main Content */}
      <div className="main">
        <h2>Example Navigation Bar</h2>
        <p>Click the button above to open the navigation bar.</p>
      </div>
    </div>
  );
}

export default Home;
