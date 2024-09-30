import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <div
      className="nav-bar"
      style={{
        // Leave space for the sidebar from the left (150px)

        padding: '10px',
        backgroundColor: 'goldenrod',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="head"
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s"
          alt="Avatar"
          className="nav-photo"
          style={{
            marginRight: "10px",
            borderRadius: '50%',
            height: '40px',
          }}
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

          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownMenuButton"
          >
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
    </div>
  );
}
