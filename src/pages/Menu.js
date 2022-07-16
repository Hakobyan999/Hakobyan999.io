import React from "react";

// Images
import coffeehouse2 from "../assets/image/coffeehouse2.jpg";

export default function Menu() {
  return (
    <div className="Menu">
      <div className="w3-container">
        <div
          className="w3-content">
          <h5 className="w3-center w3-padding-48">
            <span className="w3-tag w3-wide">THE MENU</span>
          </h5>
          <div id="Eat" className="w3-container menu w3-padding-48 w3-card">
            <h5>Bread Basket</h5>
            <p className="w3-text-grey">
              Assortment of fresh baked fruit breads and muffins 5.50
            </p>
            <br />
            <h5>Honey Almond Granola with Fruits</h5>
            <p className="w3-text-grey">
              Natural cereal of honey toasted oats, raisins, almonds and dates
              7.00
            </p>
            <br />
            <h5>Belgian Waffle</h5>
            <p class="w3-text-grey">
              Vanilla flavored batter with malted flour 7.50
            </p>
            <br />
            <h5>Scrambled eggs</h5>
            <p className="w3-text-grey">
              Scrambled eggs, roasted red pepper and garlic, with green onions
              7.50
            </p>
            <br />
            <h5>Blueberry Pancakes</h5>
            <p className="w3-text-grey">
              With syrup, butter and lots of berries 8.50
            </p>
          </div>
          <div id="Drinks" class="w3-container menu w3-padding-48 w3-card">
            <h5>Coffee</h5>
            <p className="w3-text-grey">Regular coffee 2.50</p>
            <br />
            <h5>Chocolato</h5>
            <p className="w3-text-grey">Chocolate espresso with milk 4.50</p>
            <br />
            <h5>Corretto</h5>
            <p className="w3-text-grey">Whiskey and coffee 5.00</p>
            <br />
            <h5>Iced tea</h5>
            <p className="w3-text-grey">Hot tea, except not hot 3.00</p>
            <br />
            <h5>Soda</h5>
            <p className="w3-text-grey">Coke, Sprite, Fanta, etc. 2.50</p>
          </div>
          <img
            src={coffeehouse2}
            className="w3-image"
            alt="coffeehouse2.jpg"
          />
        </div>
      </div>
    </div>
  );
}
