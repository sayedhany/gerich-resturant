import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <section
    className="app__spicialMenu flex__Center section__padding "
    id="menu"
  >
    <div className="app__spicialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Spicial</h1>
    </div>
    <div className="app__spicialMenu-menu">
      <div className="app__spicialMenu-menu_wine flex__center">
        <p className="app__spicialMenu-menu__heading">Orange & Apple</p>
        <div className="app__spicialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__spicialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>
      <div className="app__spicialMenu-menu_cocktails flex__center">
        <p className="app__spicialMenu-menu__heading">Cocktails</p>
        <div className="app__spicialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 15, textAlign: "center" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </section>
);

export default SpecialMenu;
