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
      <div className="ninghomeJungleTour">
        <img src="/img/home/homebgcblack.svg"></img>
        <div className="ninghomeJungleTourTitle">
          <h1 className="ninghomeEnTitle">Jungle Tour</h1>
          <p className="ninghomeChTitle">園區分類一覽</p>
          <div className="ninghomeJungleTourmap">
            <img src="/img/home/tropicalmap.svg"></img>
          </div>
        </div>
        <div className="ninghometropical">
          <img src="/img/home/tropical.jpg"></img>
        </div>
      </div>

      {/* <div className="ninghometicketbox">
        <div className="ninghomeAdmissionbox"></div>
        <div className="ninghomeAdmissionboxIcon">
          <i className="homeIconfas fas fa-users"></i>
          <p className="ninghomeAdmissionText">入園人數</p>
        </div>
        <div className="ninghomeAdmissionNumber">180</div>
      </div> */}
    </>
  );
}
export default homePage;
