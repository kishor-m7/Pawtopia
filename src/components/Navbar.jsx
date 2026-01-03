import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="navbar-container">
      {/* Header */}
      <header className="navbar-header">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Pawtopia Logo" className="navbar-logo" />
          <span className="navbar-title">Pawtopia 🐾</span>
        </Link>
      </header>

      {/* Navigation Tabs */}
      <nav className="navbar-links">
        <Link to="/canine-cart"> Canine Cart</Link>
        <Link to="/feline-finds"> Feline Finds</Link>
        <Link to="/merchandise"> Pet Merchandise</Link>
        <Link to="/shop-by-breed"> Shop by Breed</Link>
        {isHomePage ? (
          <>
            <a href="#about">About Us</a>
            <a href="#contact"> Contact Us</a>
          </>
        ) : (
          <>
            <Link to="/#about">About Us</Link>
            <Link to="/#contact"> Contact Us</Link>
          </>
        )}
        <Link to="/login">Login</Link>
        <Link to="/signup"> Signup</Link>
      </nav>
    </div>
  );
}

export default Navbar;
