import React from "react";
import "./Location.css";

import Slide from "react-reveal/Slide";
import GoogleMapReact from "google-map-react";

const Marker = ({ mark }) => <div>{mark}</div>;

function Location() {
  const renderMarker = (map, maps) => {

    let marker = new maps.Marker({
      position: { lat: 23.812630, lng: 90.418710 },
      map,
      label: "3r"
    });

  };

  return (
    <div className="location">
      <Slide left>
        <h1> Our Location </h1>
      </Slide>
      <div className="location__map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB11J9hk9bQnBq8NAjfETU2A6H0QGN1Ouc" }}
          defaultCenter={{ lat: 23.8125397, lng: 90.4175767 }}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => renderMarker(map, maps)}
        ></GoogleMapReact>
      </div>
    </div>
  );
}

export default Location;
