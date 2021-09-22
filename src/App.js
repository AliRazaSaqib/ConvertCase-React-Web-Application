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

function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="main-wraper">
            <Navbar />
            <div className="container center-section">
              <Route
                path="/counter"
                heading="Enter Text Here"
                exact
                component={Counter}
              />
            </div>

            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
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
