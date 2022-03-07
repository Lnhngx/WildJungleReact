import React from "react";
//import { Link } from "react-router-dom";
import "../components/all.scss";

function navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="navbarLeftLeft">
          <a href="#/">
            <i className="fas fa-bars"></i>
          </a>
        </div>
        <div className="navbarLeft">
          <h1 className="Title">WILD JUNGLE</h1>
        </div>
        <div className="navbarRight">
          <div className="navbarIcon">
            <a href="#/">
              <i className="fas fa-user-friends"></i>
            </a>
            <a href="#/">
              <i className="fas fa-heart"></i>
            </a>
            <a href="#/">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
          <div className="navbarMenu">
            <a href="#/">
              <span>MENU</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default navbar;
