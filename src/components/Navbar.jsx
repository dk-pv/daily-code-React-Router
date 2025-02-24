import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <ul  className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
