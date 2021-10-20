import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ setChoice }) => {
  return (
    <nav>
      <Link to="/">
        <h3 className="logo">SpaceX</h3>
      </Link>
      <ul>
        <li>
          <Link to="/launches/past">
            <button className="nav-btn" onClick={() => setChoice("past")}>
              Past
            </button>
          </Link>
        </li>
        <li>
          <Link to="/launches/latest">
            <button className="nav-btn" onClick={() => setChoice("latest")}>
              Latest
            </button>
          </Link>
        </li>
        <li>
          <Link to="/launches/upcoming">
            <button className="nav-btn" onClick={() => setChoice("upcoming")}>
              Upcoming
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
