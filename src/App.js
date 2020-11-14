import React, { useEffect, useState } from "react";
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
import Admin from "./components/Admin/Admin";

function App() {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error("Request failed!");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jsonResponse) => {
        setCategory(jsonResponse.category);
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/category">
            <Header />
            <Category data={category} />
            <Footer />
          </Route>
          <Route path="/admin">
            <Admin />
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
