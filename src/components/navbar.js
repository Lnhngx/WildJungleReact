import React from "react";
//import { Link } from "react-router-dom";
import "../components/all.scss";

function navbar(props) {
  const {auth}=props
  
  
  return (
    <>
      <div className="navbar1">
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
              {auth ? <i className="fas fa-sign-out-alt"></i> : <i className="fas fa-user-friends"></i>}
              
            </a>
            <a href="#/">
              <i className="fas fa-heart"></i>
            </a>
            <a href="#/">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
          <div className="navbarMenu1">
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
