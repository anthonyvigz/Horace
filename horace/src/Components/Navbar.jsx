import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/navbar.scss";

export default function Navbar() {
  return (
    <div className="nav">
      <NavLink to="/" className="logo">
        (LOGO HERE)
      </NavLink>
      <nav className="links">
        <NavLink to="/horace">HORACE</NavLink>
        <NavLink to="#docs">DOCUMENTS & CONTENT</NavLink>
        <NavLink to="#legends">LEGENDS</NavLink>
        <i className="fas fa-bars"></i>
      </nav>
    </div>
  );
}
