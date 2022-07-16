import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="w3-top">
        <div className="w3-row w3-padding w3-black">
          <div className="w3-col s3">
            <a href="/home" className="w3-size w3-button w3-block w3-black">
              HOME
            </a>
          </div>
          <div class="w3-col s3">
            <a href="/about" className="w3-size w3-button w3-block w3-black">
              ABOUT
            </a>
          </div>
          <div class="w3-col s3">
            <a href="/menu" className="w3-size w3-button w3-block w3-black">
              MENU
            </a>
          </div>
          <div class="w3-col s3">
            <a href="/where" className="w3-size w3-button w3-block w3-black">
              WHERE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
