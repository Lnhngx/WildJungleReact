import React, { useEffect, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import "../components/all.scss";

function Navbar(props) {
  const [nav, setNav] = useState(0);
  const { auth,setAuth } = props;
  const history =useHistory();

  const close = function () {
    const menu = document.querySelector(".theMenu");
    menu.style.display = "none";
    const enter = document.querySelector(".enterTitle");
    enter.style.display = "block";
    window.location.reload();
  };
  const click = function () {
    const menu = document.querySelector(".theMenu");
    menu.style.display = "block";
    menu.style.width = "100vw";
  };
  const scrollToSection = () => {
    scroller.scrollTo("theMenu", {
      duration: 10,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: 0,
    });
  };
  useEffect(() => {
    const enter = document.querySelector(".enterTitle");
    const none = function () {
      enter.style.display = "none";
    };
    enter.addEventListener("animationend", none);
    return () => {
      enter.removeEventListener("animationend", none);
    };
  }, [nav]);


  return (
    <>
      <div className="navbar1">
        <div className="navbarLeftLeft">
          <a href="#/">
            <i className="fas fa-bars"></i>
          </a>
        </div>
        <div className="navbarLeft">
          <Link to="/#">
            <h1 className="Title">WILD JUNGLE</h1>
          </Link>
        </div>
        <div className="navbarRight">
          <div className="navbarIcon">
            
              {auth ? (
                <i className="fas fa-sign-out-alt tysu_logInOut" onClick={()=>{
                  
                  localStorage.removeItem('admin_account');
                  localStorage.removeItem('admin_token');
                  setAuth(false);
                  history.push('/members');
                }}></i>
              ) : (
                <i className="fas fa-user-friends" onClick={()=>{history.push('/members/login')}}></i>
              )}
            
            <a href="#/">
              <i className="fas fa-heart"></i>
            </a>
            <a href="#/">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
          <div
            className="navbarMenu1"
            onClick={() => {
              click();
              scrollToSection();
              setNav(0);
            }}
          >
            <span>MENU</span>
          </div>
        </div>
      </div>
      <div className="theMenu">
        <div className="delete" onClick={close}>
          <i className="fas fa-minus-circle"></i>
        </div>
        <div className="enterTitle">
          <span>WELCOME</span>
          <span>TO THE ⎯⎯⎯</span>
          <span>WILD JUNGLE</span>
        </div>
        <div className="link" onClick={close}>
          <Link to="/tour">
            <div>Park tour</div>
          </Link>
          <Link to="/activity">
            <div>Activity</div>
          </Link>
          <Link to="/products">
            <div>Commodity</div>
          </Link>
          <Link to="/lodging">
            <div>Lodging</div>
          </Link>
          <Link to="/game">
            <div>Animal Games</div>
          </Link>
          <Link to="/members">
            <div>Members</div>
          </Link>
          <Link to="/carts">
            <div>Shopping Cart</div>
          </Link>
          <div className="leftside">
            <div>WILD</div>
            <div>JUNGLE</div>
          </div>
          <div className="leftside2">
            <div>WILD JUNGLE</div>
          </div>
          <div className="allright">
            <span>Wild Jungle .LTD.© All Rights Reserved.</span>
            <div>
              <i className="fas fa-file-signature"></i>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
