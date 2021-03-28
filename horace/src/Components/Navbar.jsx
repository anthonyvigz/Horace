import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/navbar.scss";
import useWindowDimensions from "./WindowDimensions";

export default function Navbar() {
  const { height, width } = useWindowDimensions();

  return (
    <div className="nav">
      <NavLink to="/" className="logo">
        <img src="https://i.imgur.com/tJv2gbj.png" width="200px" alt="logo" />
      </NavLink>
      <nav className="links">
      {width > 950 ? (
            <nav className="links">
        <NavLink to="/horace">HORACE</NavLink>
        <NavLink to="/documents">DOCUMENTS & CONTENT</NavLink>
        <NavLink to="#legends">LEGENDS</NavLink>
        </ nav>
      ) : null}
      </nav>
    </div>
  );
}
