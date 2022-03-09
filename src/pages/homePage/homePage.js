import React from "react";
import "./ning.scss";
function homePage() {
  return (
    <>
      <div className="ning_CarouselWrap">
        <ul className="ning_CarouselWrapImg">
          <li>
            <img src="/img/home/activity03.jpg" alt="" />
          </li>
          <li>
            <img src="/img/home/activity01.jpeg" alt="" />
          </li>
          <li>
            <img src="/img/home/activity02.jpg" alt="" />
          </li>
        </ul>
      </div>
      <div className="ning_ticketbox">
        <div className="ning_Admissionbox"></div>
        <div className="ning_AdmissionboxIcon">
          <i className="homeIconfas fas fa-users"></i>
          <p className="ninghomeAdmissionText">入園人數</p>
        </div>
        <div className="ninghomeAdmissionNumber">180</div>
      </div>
      <div className="ning_JungleTour">
        <div className="ning_bgcblack"><img src="/img/home/homebgcblack.svg" alt="" /></div>
        <div className="ning_JungleTourTitle">
          <h1 className="ning_EnTitle">Jungle Tour</h1>
          <p className="ning_ChTitle">園區分類一覽</p>
          <div className="ning_JungleTourmap">
            <img src="/img/home/tropicalmap.svg" alt="" />
          </div>
        </div>
        <div className="ning_tropical">
          <img src="/img/home/tropical.jpg" alt="" />
        </div>
      </div>

      
    </>
  );
}
export default homePage;
