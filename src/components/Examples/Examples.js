import React from "react";
import "./Examples.css";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Examples() {
  return (
    <div className="examples" id="examples">
      <Slide left>
        <h1> BROWSE BY CATEGORIES </h1>
      </Slide>
      <div className="examples__categories">
        <Fade bottom>
          <Link to="/category?type=living-room">
            <section className="examples__category">
              <img src="./img/living-room.jpg" alt="living room" />
              <h4> Living Room </h4>
            </section>
          </Link>
          <Link to="/category?type=bed-room">
            <section className="examples__category">
              <img src="./img/bed-room.jpg" alt="living room" />
              <h4> Bedroom </h4>
            </section>
          </Link>
          <Link to="/category?type=dining-room">
            <section className="examples__category">
              <img src="./img/dining-room.jpg" alt="living room" />
              <h4> Dining Room </h4>
            </section>
          </Link>
          <Link to="/category?type=office">
            <section className="examples__category">
              <img src="./img/office.jpg" alt="living room" />
              <h4> Office </h4>
            </section>
          </Link>
          <Link to="/category?type=kids">
            <section className="examples__category">
              <img src="./img/kids.jpg" alt="living room" />
              <h4> Kid's Room </h4>
            </section>
          </Link>
          <Link to="/category?type=nursery">
            <section className="examples__category">
              <img src="./img/nursery.jpg" alt="living room" />
              <h4> Nursery </h4>
            </section>
          </Link>
        </Fade>
      </div>
    </div>
  );
}

export default Examples;
