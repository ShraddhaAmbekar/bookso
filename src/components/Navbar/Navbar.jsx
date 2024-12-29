import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = ({ cartItems = [] }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavLinkClick = () => {
    setIsCollapsed(true); // Collapse the navbar when a link is clicked
  };

  return (
    <nav id="header-nav" className="navbar navbar-expand-lg py-3 bg-light">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src="/assets/images/logo.png" alt="Logo" className="logo" />
        </NavLink>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/shop"
                onClick={handleNavLinkClick}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                onClick={handleNavLinkClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/cart"
                onClick={handleNavLinkClick}
              >
                Cart{" "}
                {cartItems.length > 0 && (
                  <span className="badge bg-primary">{cartItems.length}</span>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/checkout"
                onClick={handleNavLinkClick}
              >
                Checkout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
