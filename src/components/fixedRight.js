import React from "react";
import { Link } from "react-router-dom";

const fixedRight = () => {
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
        <Link to="">
          <div className="ning_game">
            <div className="ning_gameicon">
              <span className="material-icons">sports_esports</span>
              <p>紅利遊戲</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="backToTop">
        <button>
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

export default fixedRight;
