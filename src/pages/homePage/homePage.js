import React from "react";
import "./ning.scss";
function homePage() {
  return (
    <>
      <div className="ning_homecontainer">
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
        <div className="ning_bgcblack">
            <img src="/img/home/homebgcblack.svg" alt="" />
          </div>
        <div className="ning_informationbox">
          <div className="ning_Admissionbox">
            <div className="ning_AdmissionboxIcon">
              <span className="material-icons">groups</span>
              <p className="ninghomeAdmission">入園人數</p>
              <p className="ninghomeAdmissionEn">Ticket</p>
            </div>
            <div className="ninghomeAdmissionCout">
              <div className="ninghomeAdmissionNumber">180</div>
              <p className="ninghomeAdmissionUnit">人</p>
            </div>
            <div className="ning_ticketborderbox">
              <div className="ning_ticketborder"></div>
            </div>
          </div>
          <div className="ning_weatherbox">
            <div className="ning_weatherboxIcon">
              <i class="ning_weatherIcon fas fa-cloud"></i>
              <p className="ninghomeweather">現在天氣</p>
              <p className="ninghomeweatherEn">Wether</p>
            </div>
            <div className="ninghomeweatherCout">
              <div className="ninghomeweatherNumber">18</div>
              <p className="ninghomeweatherUnit">°C</p>
            </div>
            <div className="ning_ticketborderbox">
              <div className="ning_ticketborder"></div>
            </div>
          </div>
          <div className="ning_ticketbox">
            <div className="ning_ticketboxIcon">
              <span class="ning_ticketIcon material-icons">
                confirmation_number
              </span>
              <p className="ninghometicket">票券資訊</p>
              <p className="ninghometicketEn">Ticket</p>
            </div>
            <div className="ninghomeweatherCout">
              <div className="ninghomeweatherNumber">18</div>
              <p className="ninghomeweatherUnit">°C</p>
            </div>
          </div>
        </div>
        <div className="ning_JungleTour">
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
      </div>
    </>
  );
}
export default homePage;
