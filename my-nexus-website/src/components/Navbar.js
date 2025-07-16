
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-link">Home</Link>
    <Link to="/login" className="navbar-link">Login</Link>
    <Link to="/register" className="navbar-link">Register</Link>
  </nav>
);

export default Navbar;
