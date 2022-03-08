import React from "react";
import "./homePage.css";
function homePage() {
  return (
    <>
      <div className="ninghomeCarouselWrap">
        <ul className="ninghomeCarouselWrapImg">
          <li>
            <img src="/img/home/activity03.jpg" />
          </li>
          <li>
            <img src="/img/home/activity01.jpeg" />
          </li>
          <li>
            <img src="/img/home/activity02.jpg" />
          </li>
        </ul>
      </div>
      <div><img src="/img/home/homebgc(black).svg"></img></div>
      <div className="ninghometicketbox">
      <div className="ninghomeAdmissionbox"></div>
        <div className="ninghomeAdmissionboxIcon">
          <i className="homeIconfas fas fa-users"></i>
          <p className="ninghomeAdmissionText">入園人數</p>
        </div>
        <div className="ninghomeAdmissionNumber">180</div>
      </div>
    </>
  );
}
export default homePage;
