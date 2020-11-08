import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Examples from "./components/Examples/Examples";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import WorkingProcess from "./components/WorkingProcess/WorkingProcess";
import Category from "./components/Category/Category";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/category">
            <Header />
            <Category />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Banner />
            <WorkingProcess />
            <Examples />
            <Location />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
