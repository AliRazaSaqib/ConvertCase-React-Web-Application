/** @format */

import React from "react";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";
// import About from "../about/About";
// import Counter from "./components/counter/Counter";

export default function navbar() {
  return (
    <div className="navbar_wraper ">
      <nav className=" navbar navbar-expand-xl navbar-dark unique-color-dark">
        <a href="\" target="_blank" className="navbar-brand">
          Convert Text
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <Link to="/counter">
              <li className="nav-item">
                <a className="nav-link waves-effect waves-light" href="\">
                  Convert Case
                </a>
              </li>
            </Link>
            <Link to="/about">
              <li className="nav-item">
                <a className="nav-link waves-effect waves-light" href="\">
                  Small Text Generator
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="\">
                Large Text Generator
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="\">
                Reverse Text Generator
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="\">
                Bold Text Generator
              </a>
            </li>
          </ul>

          <ul className="scoial-icons">
            <li>
              <a href="https://www.linkedin.com/in/ali-raza-7689901a7/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/AliRazaSaqib">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AliRaza55795782">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.incomebomb.com/">
                <i className="fas fa-globe"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
