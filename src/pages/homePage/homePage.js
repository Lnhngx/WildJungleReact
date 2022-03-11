import React from "react";
import "./ning.scss";
function homePage() {
  return (
    <>
      <div className="ning_homecarouselwrap">
        <ul className="ning_homecarouselwrapimg">
          <li>
            <a href="#/">
              <img src="/img/home/activity03.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="#/">
              <img src="/img/home/activity01.jpeg" alt="" />
            </a>
          </li>
          <li>
            <a href="#/">
              <img src="/img/home/activity02.jpg" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="ning_informationbox">
        <div className="ning_information">
          <div className="ning_Admissionbox">
            <div className="ning_AdmissionboxIcon">
              <div className="ning_iconsbox">
                <span className="material-icons">groups</span>
              </div>
              <p className="ning_Admission">入園人數</p>
              <p className="ning_AdmissionEn">Ticket</p>
            </div>
            <div className="ning_AdmissionCout">
              <div className="ning_AdmissionNumber">180</div>
              <p className="ning_AdmissionUnit">人</p>
            </div>
          </div>
          <div className="ning_separationline"></div>
          <div className="ning_weatherbox">
            <div className="ning_weatherboxIcon">
              <div className="ning_weathericon">
                <span className="material-icons">cloud</span>
              </div>
              <p className="ning_weather">現在天氣</p>
              <p className="ning_weatherEn">Wether</p>
            </div>
            <div className="ning_weatherCout">
              <div className="ning_weatherNumber">18</div>
              <p className="ning_weatherUnit">°C</p>
            </div>
          </div>
          <div className="ning_separationline"></div>
          <div className="ning_ticketbox">
            <div className="ning_ticketboxIcon">
              <div className="ning_ticketicon">
                <span class="material-icons">confirmation_number</span>
              </div>
              <p className="ning_ticket">票券資訊</p>
              <p className="ning_ticketEn">Ticket</p>
            </div>
            <div className="ning_ticketwrap">
              <div className="ning_aldultbox">
                <div className="ning_aldult">全票</div>
                <p className="ning_aldultprice">$50</p>
              </div>
              <div className="ning_studentbox">
                <div className="ning_student">學生票</div>
                <p className="ning_studentprice">$30</p>
              </div>
              <div className="ning_lovebox">
                <div className="ning_love">愛心票</div>
                <p className="ning_loveprice">$20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ning_bgcblack">
        <div className="container">
          <div className="ning_JungleTour">
            <h1 className="ning_TitleEn">Jungle Tour</h1>
            <h2 className="ning_TitleCh">園區分類一覽</h2>
          </div>
        </div>
        <div className="ning_JungleTourmapbox">
          <div className="ning_JungleTourmap">
            <img src="/img/home/tropicalmap.svg" alt="" />
          </div>
          <div className="ning_Jungletourimgbox">
            <a href="#/">
              <div className="ning_Jungletropical">
                <div className="ning_tourboxhd">
                  <img
                    className="ning_Jungletropicalimg"
                    src="/img/home/tropical.jpg"
                    alt=""
                  />
                </div>
                <p>熱帶雨林館</p>
              </div>
            </a>
            <a href="#/">
              <div className="ning_JungleOcean">
                <div className="ning_tourboxhd">
                  <img
                    className="ning_JungleOceanimg"
                    src="/img/home/Ocean.jpg"
                    alt=""
                  />
                </div>
                <p>海底世界館</p>
              </div>
            </a>
            <a href="#/">
              <div className="ning_Junglenocturnal">
                <div className="ning_tourboxhd">
                  <img
                    className="ning_Junglenocturnalimg"
                    src="/img/home/nocturnal.jpg"
                    alt=""
                  />
                </div>
                <p>夜行動物館</p>
              </div>
            </a>
            <a href="#/">
              <div className="ning_Jungleice">
                <div className="ning_tourboxhd">
                  <img
                    className="ning_Jungleiceimg"
                    src="/img/home/ice.jpg"
                    alt=""
                  />
                </div>
                <p>冰原歷險館</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default homePage;
