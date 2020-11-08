import React from "react";
import "./Banner.css";

import { BannerButton } from "../styled components/button";


function Banner() {

  return (
    <div className="banner">
      <section className="banner--small"></section>
      <section className="banner--large">
        <div className="banner__content">
          <h1>Interior Design You Don't Have to Imagine</h1>

          <p>
            See your exact room, expertly designed in 3D with actual pieces of
            furniture from well-known retailers that you can buy on the spot.
          </p>

          <BannerButton>Start Your Project</BannerButton>
        </div>
      </section>
    </div>
  );
}

export default Banner;
