/** @format */

import React from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="page-footer font-small cyan unique-color-dark">
        <div className="container">
          <div className="footer-naivation">
            <ul>
              <Link to="/counter">
                <li>
                  <a href="\">Home</a>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a href="\">Contact</a>
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <a href="\">About</a>
                </li>
              </Link>
              <li>
                <a href="\">Privacy</a>
              </li>
              <li>
                <a href="\">Term and condition</a>
              </li>
            </ul>
          </div>

          <div className="footer-social-icon">
            <div className="mb-5 flex-center">
              <a className="fb-ic" href="\">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>

              <a className="tw-ic" href="\">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>

              <a className="li-ic" href="\">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>

              <a className="pin-ic" href="\">
                <i className="fab fa-github fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> AliRaza</a>
        </div>
      </footer>
    </>
  );
}
