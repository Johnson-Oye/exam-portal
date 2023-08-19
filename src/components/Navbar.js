import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/announcement">Announcement</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
