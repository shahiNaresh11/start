import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <div className="nav-bar">
      <div className="head" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s"
          alt="Avatar"
          className="nav-photo"
          style={{ marginRight: "10px" }}
        />
        <div className="dropdown">
          <a
            className="btn fs-4 dropdown-toggle"
            id="dropdownMenuButton"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            User
          </a>

          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="jawaflix colepalmer nikowillem ">
        <div className="jexsion"> </div>
        <p></p>

      </div>
    </div>
  );
}
