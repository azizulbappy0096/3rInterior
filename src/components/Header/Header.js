import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <a href="#" className="header__logo">
          <img src="./img/logo.jpg"  />
        </a>
        <h4 className="header__name"> 3r Interior </h4>
      </div>
      <div className="header__right">
        <ul className="header__list">
          <a href="#">
            <li className="header__item"> Home </li>
          </a>
          <a href="#">
            <li className="header__item">Examples </li>
          </a>
          <a href="#">
            <li className="header__item"> Contact Us </li>
          </a>
        </ul>
      </div>

      <div className="header__right--mobile">
            
      </div>
    </header>
  );
}

export default Header;
