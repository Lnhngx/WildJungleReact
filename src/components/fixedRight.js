import { React, useState } from "react";
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
const FixedRight = (props) => {
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
            // 由右邊訂選欄的按鈕先判別使用者是否為會員，是的話，才可以玩
            if(localStorage.admin_account!==undefined){
              const storage = localStorage.getItem('received');
              const expireTime = JSON.parse(storage);
              let nextTime =  expireTime===null ? 0 : expireTime.expire;
              if(storage===undefined){
                props.setToggleLottery(true);
              }else{
                if(new Date().getTime() > nextTime){
                  localStorage.removeItem('received');
                  props.setToggleLottery(true);
                }else{
                  props.setModalTitle("遊戲規則通知");
                  props.setModalText("一天只能玩一次，先玩玩別的小遊戲吧!");
                  props.setModalBtn('到遊戲頁');
                  props.setShow(true);
                }
              } 
            }else{
              props.setModalTitle("尚未登入通知");
              props.setModalText("請先進行登入才可以玩哦~");
              props.setModalBtn('前往登入');
              props.setShow(true);
            }
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
