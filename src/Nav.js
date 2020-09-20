import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'rgb(53, 124, 124)',
        textDecoration:'none',
        fontFamily: 'Helvetica'
    }
  return (
    <nav >
        <Link style={navStyle}  to="/">
            <i className="fas fa-chess-board fa-4x"></i>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to="/Play">
            <li>Play</li>
            </Link>
            <Link style={navStyle} to="/settings">
            <li>Settigns</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;