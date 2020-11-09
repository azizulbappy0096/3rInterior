import React from "react";
import Gallery from "../Gallery/Gallery";
import "./Category.css";

import {CategoryButton} from "../styled components/button";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


function Category() {
  
  return (
    <div className="category" id="top">
      <section className="category__banner">
        <section className="category__banner--small"></section>
        <section className="category__banner--large">
          <div className="category__content">
            <h1>Living Room Design Stories</h1>

            <p>
              For most of us, the Living Room is where we spend the most time,
              but finding the right look for your space can be a challenge. Read
              the design stories from real customers and learn more about how
              they designed their living room online. See how we’ve helped them
              and get inspired with these behind-the-scenes looks at some of our
              favorite living room transformations.
            </p>
          </div>
        </section>
      </section>
      <section className="category__gallery">
            <Gallery />
      </section>
      <section className="category__button">
      <CategoryButton href="#top">
          <ArrowUpwardIcon />
      </CategoryButton>
      </section>
    </div>
  );
}

export default Category;
