import React, { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import "./Category.css";

import { CategoryButton } from "../styled components/button";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



function Category({data}) {

  const [gallery, setGallery] = useState({

  });

  useEffect(() => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const type = url.searchParams.get("type");
    const getData = data?.[type];
    window.scrollTo(0, 0);
    setGallery(getData);
    
  }, [data])

  
  return (
    <div className="category" id="top">
      <section className="category__banner">
        <section className="category__banner--small"></section>
        <section className="category__banner--large">
          <div className="category__content">
  <h1>{gallery?.["title"]}</h1>

            <p>
              {gallery?.["sub-title"]}
            </p>
          </div>
        </section>
      </section>
      <section className="category__gallery">
            <Gallery data={gallery?.gallery} />
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
