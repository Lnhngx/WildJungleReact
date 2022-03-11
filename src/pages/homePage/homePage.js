import React from "react";
import "./ning.scss";
function homePage() {
  return (
    <>
      <div className="ning_homecontainer">
        <div className="ning_homecarouselwrap">
          <div className="ning_homecarouselwrapimg">
            <div>
              <a href="#/">
                <img src="/img/home/activity03.jpg" alt="" />
              </a>
            </div>
            <div>
              <a href="#/">
                <img src="/img/home/activity01.jpeg" alt="" />
              </a>
            </div>
            <div>
              <a href="#/">
                <img src="/img/home/activity02.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="ning_informationbox"></div>
        {/* <div className="ning_informationbox">
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
            <div className="ninghomealdultbox">
              <div className="ninghomealdult">全票</div>
              <p className="ninghomealdultprice">$50</p>
            </div>
            <div className="ninghomestudentbox">
              <div className="ninghomestudent">學生票</div>
              <p className="ninghomestudentprice">$30</p>
            </div>
            <div className="ninghomelovebox">
              <div className="ninghomelove">愛心票</div>
              <p className="ninghomeloveprice">$20</p>
            </div>
          </div>
        </div> */}
        {/* <div className="ning_bgcblack">
          <img src="/img/home/homebgcblack.svg" alt="" />
          <div className="ning_JungleTour">
          <h1 className="ning_EnTitle">Jungle Tour</h1>
          <p className="ning_ChTitle">園區分類一覽</p>
          <div className="ning_JungleTourbox">
            <div className="ning_JungleTourmap">
              <img src="/img/home/tropicalmap.svg" alt="" />
            </div>
            <div className="ning_hometourimgbox">
              <div className="ning_hometropical">
                <img
                  className="ning_hometropicalimg"
                  src="/img/home/tropical.jpg"
                  alt=""
                />
                <p>熱帶雨林館</p>
              </div>
              <div className="ning_homeOcean">
                <img
                  className="ning_homeOceanimg"
                  src="/img/home/Ocean.jpg"
                  alt=""
                />
                <p>海底世界館</p>
              </div>
              <div className="ning_homenocturnal">
                <img
                  className="ning_homenocturnalimg"
                  src="/img/home/nocturnal.jpg"
                  alt=""
                />
                <p>夜行動物館</p>
              </div>
              <div className="ning_homeice">
                <img className="ning_homeiceimg" src="/img/home/ice.jpg" alt="" />
                <p>冰原歷險館</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
export default homePage;
