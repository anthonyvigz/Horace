import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/navbar.scss";
import useWindowDimensions from "./WindowDimensions";

export default function Navbar() {
  const { width } = useWindowDimensions();

  return (
    <div className="nav">
      <NavLink to="/" className="logo">
        <img src="https://i.imgur.com/tJv2gbj.png" width="200px" alt="logo" />
      </NavLink>
      <nav className="links">
      {width > 950 ? (
            <nav className="links">
        <NavLink to="/horace">HORACE</NavLink>
        <NavLink to="/documents">DOCUMENTS & LEGENDS</NavLink>
        </ nav>
      ) : (
        <nav className="linksSmall">
        <NavLink to="/horace">HORACE</NavLink>
        <NavLink to="/documents">DOCUMENTS & LEGENDS</NavLink>
        </ nav>
      )}
      </nav>
    </div>
  );
}
