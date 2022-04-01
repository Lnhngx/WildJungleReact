import React, { useEffect, useState } from "react";
import { Link, useHistory,useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import { useCart } from "../pages/carts/utils/useCart";
import { useSecondCart } from "../pages/carts/utils/useSecondCart";
import { useThirdCart } from "../pages/carts/utils/useThirdCart";
import { useFourthCart } from "../pages/carts/utils/useFourthCart";
import "../components/all.scss";

function Navbar(props) {
  const firstcart = useCart();
  const secondcart = useSecondCart();
  const thirdcart = useThirdCart();
  const fourthcart = useFourthCart();
  const allcartItems =
    firstcart.cart.totalItems +
    secondcart.cart.totalItems +
    thirdcart.cart.totalItems +
    fourthcart.cart.totalItems;

  const [nav, setNav] = useState(0);
  const { auth, setAuth, localState, setLocalState,setComeUrl } = props;
  const history = useHistory();
  const location = useLocation();

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
          <div className="tysu_logInfo">
            <span >會員專區</span>
          </div>
            {auth || localState.token ? (
              <i
                className="fas fa-sign-out-alt tysu_logInOut"
                onClick={() => {
                  localStorage.removeItem("admin_account");
                  localStorage.removeItem("admin_token");
                  setAuth(false);
                  setLocalState({ token: false });
                  // history.push('/members');
                }}
              ></i>
            ) : (
              <i
                className="fas fa-user-friends tysu_logInOut"
                onClick={() => {
                  // console.log(location.pathname)
                  setComeUrl(location.pathname)
                  history.push("/members/login");
                  
                }}
              ></i>
            )}

            <a href="#/">
              <i className="fas fa-heart"></i>
            </a>
            <a href="/carts">
              <i className="fas fa-shopping-cart stan_cartIcon">
                <div className="stan_cartIcon_count">{allcartItems}</div>
              </i>
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
          {auth || localState.token ? <Link to="/members/modify-member-info"> <div>Members</div>
          </Link> : <Link to="/members"> <div>Members</div>
          </Link>}
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
