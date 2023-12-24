import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AppNavbar() {
  const toggle = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle("d-block");
      sidebar.classList.toggle("d-none");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <button
          onClick={toggle}
          className="navbar-toggler top"
          type="button"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link className="navbar-brand text-light" to="/">
          Logo
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Sign Up
              </Link>
            </li>
          </ul>
          <Link className="btn btn-primary rounded-pill ms-3" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
