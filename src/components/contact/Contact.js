/** @format */

import React from "react";
import "../contact/contact.css";

export default function Contact() {
  return (
    <div className="contact-us">
      <div className="container contact-title">
        <h1 className="text-center">
          Contact <span>Us</span>
        </h1>
        <p className="text-center w-75 m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          interdum purus at sem ornare sodales. Morbi leo nulla, pharetra vel
          felis nec, ullamcorper condimentum quam.
        </p>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
              <div className="card-body text-center">
                <i className="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                <h4 className="text-uppercase mb-5">call us</h4>
                <p>+8801683615582,+8801750603409</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
              <div className="card-body text-center">
                <i
                  className="fa fa-map-marker fa-5x mb-3"
                  aria-hidden="true"
                ></i>
                <h4 className="text-uppercase mb-5">office loaction</h4>
                <address>Suite 02, Level 12, Sahera Tropical Center </address>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
              <div className="card-body text-center">
                <i
                  className="fa fa-map-marker fa-5x mb-3"
                  aria-hidden="true"
                ></i>
                <h4 className="text-uppercase mb-5">office loaction</h4>
                <address>Suite 02, Level 12, Sahera Tropical Center </address>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 my-5">
            <div className="card border-0">
              <div className="card-body text-center">
                <i className="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                <h4 className="text-uppercase mb-5">email</h4>
                <p>http://al.a.noman1416@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
