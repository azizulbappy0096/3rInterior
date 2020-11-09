import React from "react";
import "./Gallery.css";

function Gallery({ data }) {
  return (
    <div className="gallery">
      {data?.map((item) => {
        return (
          <section key={item.id} className="gallery__item">
            <div
              className="gallery__img"
              style={item.img ? { backgroundImage: `url(${item?.img})` } : {}}
            ></div>

            <div className="gallery__border"></div>
            <div className="gallery__info">
              <h3>{item?.title}</h3>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Gallery;
