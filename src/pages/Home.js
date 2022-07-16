import React from "react";

// Image
import coffeehouse from "../assets/image/coffeehouse.jpg";

export default function Home() {
  return (
    <div className="Home">
      <header className="w3-display-container w3-grayscale-min">
        <div className="bgimg">
          <img
            src={coffeehouse}
            className="w3-image-home"
            alt="coffeehouse.jpg"
          />
        </div>
        <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
          <span className="w3-tag">Open from 6am to 5pm</span>
        </div>
        <div className="w3-display-middle w3-center">
          <span className="font-size w3-text-white">
            the
            <br />
            Cafe
          </span>
        </div>
        <div className="w3-display-bottomright w3-center w3-padding-large">
          <span className="w3-text-white">15 Adr street, 5015</span>
        </div>
      </header>
    </div>
  );
}
