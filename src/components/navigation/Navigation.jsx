import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export default () => {
  return (
    <div
      id="NavigationComponent"
      className="navigation-container d-flex bg-dark align-items-center justify-content-end pr-3"
    >
      <ul className="nav p-2">
        <li className="nav-item m-1 ">
          <NavLink to="/" className="nav-link rounded">
            <span className="text-light">Home</span>
          </NavLink>
        </li>
        <li className="nav-item m-1">
          <NavLink to="/portfolio" className="nav-link rounded">
            <span className="text-light">Portfolio</span>
          </NavLink>
        </li>
        <li className="nav-item m-1">
          <NavLink to="/contacts" className="nav-link rounded">
            <span className="text-light">Contacts</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
