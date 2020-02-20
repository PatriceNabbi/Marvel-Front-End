import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/IMG/Marvel-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CSS/Header.css";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <Link to="/">
          <img src={Logo} alt="Logo Marvel" />
        </Link>
        <div className="menu">
          <Link className="link" to="/">
            <span className="characters">
              <FontAwesomeIcon icon={["fas", "mask"]} className="mask" />{" "}
              Characters
            </span>
          </Link>
          <Link className="link" to="/Comics">
            <span className="comics">
              <FontAwesomeIcon
                icon={["fas", "book-reader"]}
                className="book-reader"
              />{" "}
              Comics
            </span>
          </Link>
          <Link className="link" to="/favorites">
            <span className="favorites">
              <FontAwesomeIcon icon={["fas", "star"]} className="star" />{" "}
              Favorites
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
