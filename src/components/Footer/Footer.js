import React from "react";
import "./Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="footer__menu">
          <h5> 3R Interior </h5>
          <ul className="footer__list">
            <a href="#">
              {" "}
              <li> Home </li>{" "}
            </a>
            <a href="#examples">
              {" "}
              <li> Examples </li>{" "}
            </a>
            <a href="#contactUs">
              {" "}
              <li> Contact Us </li>{" "}
            </a>
          </ul>
        </div>

        <div className="footer__menu">
          <h5> Follow us </h5>
          <ul className="footer__list">
            <a href="#">
              {" "}
              <li>
                {" "}
                <FacebookIcon />{" "}
              </li>{" "}
            </a>
          </ul>
        </div>
        <div className="footer__menu">
          <h5> Contact us </h5>

          <ul className="footer__list">
            <li className="footer__contact">
              <div className="footer__contact--icon">
                <RoomIcon />
              </div>
              <div className="footer__contact--info">
                <p> Address: </p>
                <small> black black </small>
              </div>
            </li>

            <li className="footer__contact">
              {" "}
              <div className="footer__contact--icon">
                <PhoneIcon />
              </div>
              <div className="footer__contact--info">
                <p> Phone: </p>
                <small> +8801234567890 </small>
              </div>{" "}
            </li>

            <li className="footer__contact">
              {" "}
              <div className="footer__contact--icon">
                <EmailIcon />
              </div>
              <div className="footer__contact--info">
                <p> E-mail: </p>
                <small> example@example.com </small>
              </div>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-2">
        <p> © 2020 Copyright: 3RInterior Ltd. </p>
      </div>
    </footer>
  );
}

export default Footer;
