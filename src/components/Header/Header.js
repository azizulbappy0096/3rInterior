import React, { useState } from "react";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <header className="header">
      <div className="header__left">
        <a href="#" className="header__logo">
          <img src="./img/logo.jpg" />
        </a>
        <h4 className="header__name"> 3r Interior </h4>
      </div>
      <nav className={`header__right ${isMenu ? "header__nav--mobile" : ""}`}>
        <ul className="header__list">
          <a href="#">
            <li className="header__item"> Home </li>
          </a>
          <a href="#examples">
            <li className="header__item">Examples </li>
          </a>
          <a href="#">
            <li className="header__item"> Contact Us </li>
          </a>
        </ul>
      </nav>

      <div className="header__right--mobile">
        <MenuIcon
          onClick={handleMenu}
          style={isMenu ? { display: "none" } : { display: "block" }}
        />
        <MenuOpenIcon
          onClick={handleMenu}
          style={!isMenu ? { display: "none" } : { display: "block" }}
        />
      </div>
    </header>
  );
}

export default Header;
