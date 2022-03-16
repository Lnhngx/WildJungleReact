import React from "react";
import "./lodging.scss";

function lodging() {
  return (
    <>
      <div className="loding_titlebox">
        <div className="loding_title">
          <h2>Rooms</h2>
          <div className="loding_titlep">
            <p>
              是一個充滿刺激、歡樂氣息的休閒空間，佔地百坪的空間，炫彩亮麗動感十足，讓您沉浸在微醺的情調中，盡情放縱，歡渡啟航的動感時刻！
              <br />
              擁有齊全的健身房，即使出差或旅遊，也能保持健身運動好習慣！
            </p>
          </div>
        </div>
      </div>
      <div className="lodging_ocean">
        <img src="img/lodging/ocean_style/oceanstyle01.jpeg" alt="" />
        <div className="lodging_oceanbox">
          <div className="lodging_oceanwrap">
            <div className="lodging_oceantitle">
              <h4>Ocean Style</h4>
              <h1>海洋2人房型</h1>
            </div>
            <div className="lodging_line"></div>
            <div className="lodging_oceanlist1">
              <p>坪數</p>
              <p>10坪</p>
            </div>
            <div className="lodging_oceanlist2">
              <p>入住人數</p>
              <p>1-2人</p>
            </div>
            <div className="lodging_oceanlist3">
              <p>房數</p>
              <p>10房</p>
            </div>
            <button className="btn">更多細節</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default lodging;
