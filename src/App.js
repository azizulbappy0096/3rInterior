import React from "react";
import './App.css';
import Banner from "./components/Banner/Banner";
import Examples from "./components/Examples/Examples";
import Header from "./components/Header/Header";
import WorkingProcess from "./components/WorkingProcess/WorkingProcess";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <WorkingProcess />
      <Examples />
    </div>
  );
}

export default App;
