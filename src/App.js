/** @format */
import "./App.css";
// import Counter from "./components/counter/Counter";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Counter from "./components/counter/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Contact from "./components/contact/Contact";
import Encode from "./components/EncodeSection/Encode";
import Decode from "./components/EncodeSection/Decode";

function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="main-wraper">
            <Navbar />
            <div className="forMiddleSection">
              <div className="container center-section">
                <Route
                  path="/"
                  heading="Enter Text Here"
                  exact
                  component={Counter}
                />

                <Route
                  path="/encode"
                  heading="Enter Text Here"
                  exact
                  component={Encode}
                />

                <Route
                  path="/decode"
                  heading="Enter Text Here"
                  exact
                  component={Decode}
                />

                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
              </div>
            </div>

            <div className="footer-section">
              <Footer />
            </div>
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
