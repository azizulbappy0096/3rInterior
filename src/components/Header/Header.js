import React, { useState } from "react";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Link } from "react-router-dom";

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    if(window.innerWidth <= 768) {
      setIsMenu(!isMenu);
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="header__left header__logo">
          <img src="./img/logo.jpg" />

          <h4 className="header__name"> 3r Interior </h4>
        </div>
      </Link>
      <nav className={`header__right ${isMenu ? "header__nav--mobile" : ""}`}>
        <ul className="header__list">
          <a href="#" onClick={handleMenu}>
            <li className="header__item"> Home </li>
          </a>
          <a href="#examples" onClick={handleMenu}>
            <li className="header__item">Examples </li>
          </a>
          <a href="#contactUs" onClick={handleMenu}>
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
