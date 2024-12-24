import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const Navbar = () => {
  const handleCloseOffcanvas = () => {
    const offcanvasElement = document.querySelector(".offcanvas");
    if (offcanvasElement) {
      // Trigger the hide action using Bootstrap's data attributes
      offcanvasElement.classList.remove("show");
      document.body.classList.remove("offcanvas-backdrop"); // Remove the backdrop
    }
  };

  return (
    <nav id="header-nav" className="navbar navbar-expand-lg py-3 bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="/assets/images/logo.png" alt="Logo" className="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#bdNavbar"
          aria-controls="bdNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="bdNavbar"
          aria-labelledby="bdNavbarOffcanvasLabel"
        >
          <div className="offcanvas-header px-4 pb-0">
            <NavLink className="navbar-brand" to="/">
              <img src="/assets/images/logo.png" alt="Logo" className="logo" />
            </NavLink>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav text-uppercase justify-content-lg-center flex-grow-1">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={handleCloseOffcanvas}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={handleCloseOffcanvas}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/shop"
                  onClick={handleCloseOffcanvas}
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/blog"
                  onClick={handleCloseOffcanvas}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/about"
                      onClick={handleCloseOffcanvas}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/shop"
                      onClick={handleCloseOffcanvas}
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/cart"
                      onClick={handleCloseOffcanvas}
                    >
                      Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/checkout"
                      onClick={handleCloseOffcanvas}
                    >
                      Checkout
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/blog"
                      onClick={handleCloseOffcanvas}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/contact"
                      onClick={handleCloseOffcanvas}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={handleCloseOffcanvas}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
