import { React } from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { LotteryContext } from "../App";
import { useContext } from "react";

const FixedRight = () => {
  const { toggleLottery, setToggleLottery } = useContext(LotteryContext);
  return (
    <>
      <div className="ning_rightflex">
        <Link to="">
          <div className="ning_buyticket">
            <div className="ning_buyticketicon">
              <span className="material-icons">confirmation_number</span>
              <p>立即訂票</p>
            </div>
          </div>
        </Link>
        <div
          className="ning_game"
          onClick={() => {
            setToggleLottery(true);
          }}
        >
          <div className="ning_gameicon">
            <span className="material-icons">sports_esports</span>
            <p>刮刮樂遊戲</p>
          </div>
        </div>
      </div>
      <div className="backToTop">
        <button
          onClick={() =>
            scroll.scrollToTop({
              duration: 500,
              delay: 0,
              smooth: "easeInOutQuart",
            })
          }
        >
          <span className="span1">Click </span>
          <span className="span2">To </span>
          <span className="span3">
            Top <i className="fas fa-angle-double-up"></i>
          </span>
        </button>
      </div>
    </>
  );
};

export default FixedRight;
