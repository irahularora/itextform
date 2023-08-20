import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/wordmagic.png";

export default function Navbar(props) {
  return (
    <div className="header">
      <nav
        className={`navbar navbar-expand-lg header-fixed`}
        style={{ background: "#8fda59" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              style={{ width: "150px" }}
              className="nav-logo img-fluid"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input checkout"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            defaultChecked=""
            onClick={props.toggleMode}
          />
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
