import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg ">
        
        <Link to="/" className="navbar-brand">MY JOURNAL</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Journal</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">New Entry</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">New Client</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  
}