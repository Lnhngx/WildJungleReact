import React from "react";
import "./ning.scss";
import { Link } from "react-router-dom";
import HomeCarousel from "./components/HomeCarousel";
import {CarouselData} from "./components/CarouselData"
function homePage() {
  return (
    <>
      <HomeCarousel slides={CarouselData}/>

      {/* <div className="ning_homecarouselwrap">
        <ul className="ning_homecarouselwrapimg">
          <li>
            <Link to="">
              <img src="img/home/activity02.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src="img/home/activity02.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src="img/home/activity02.jpg" alt="" />
            </Link>
          </li>
        </ul>
      </div> */}
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
                <span className="material-icons">confirmation_number</span>
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
            <Link to="">
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
            </Link>
            <Link to="">
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
            </Link>
            <Link to="">
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
            </Link>
            <Link to="">
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
            </Link>
          </div>
        </div>
      </div>
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
      <div className="container">
        <div className="ning_PopularEvents">
          <h1 className="ning_TitleEnblack">Popular Events</h1>
          <h2 className="ning_TitleChblack">熱門活動一覽</h2>
        </div>
        <div className="row">
          <div className="col-4">
            <Link to="">
              <div className="ning_eventsbox">
                <p className="ning_eventsday">05.16</p>
                <p className="ning_eventsyear">2022</p>
                <div className="ning_eventsdateline"></div>
                <p className="ning_eventstour">熱帶雨林館</p>
                <div className="ning_eventsimg">
                  <img src="/img/home/activity03.jpg" alt="" />
                </div>
                <div className="ning_eventsboxbottom">
                  <p className="ning_eventstext">一起與浣熊近距離接觸吧 !</p>
                  <div className="ning_eventsgo">
                    <span className="material-icons">east</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="">
              <div className="ning_eventsbox">
                <p className="ning_eventsday">05.16</p>
                <p className="ning_eventsyear">2022</p>
                <div className="ning_eventsdateline"></div>
                <p className="ning_eventstour">熱帶雨林館</p>
                <div className="ning_eventsimg">
                  <img src="/img/home/activity03.jpg" alt="" />
                </div>
                <div className="ning_eventsboxbottom">
                  <p className="ning_eventstext">一起與浣熊近距離接觸吧 !</p>
                  <div className="ning_eventsgo">
                    <span className="material-icons">east</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="">
              <div className="ning_eventsbox">
                <p className="ning_eventsday">05.16</p>
                <p className="ning_eventsyear">2022</p>
                <div className="ning_eventsdateline"></div>
                <p className="ning_eventstour">熱帶雨林館</p>
                <div className="ning_eventsimg">
                  <img src="/img/home/activity03.jpg" alt="" />
                </div>
                <div className="ning_eventsboxbottom">
                  <p className="ning_eventstext">一起與浣熊近距離接觸吧 !</p>
                  <div className="ning_eventsgo">
                    <span className="material-icons">east</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="">
              <div className="ning_eventsbox">
                <p className="ning_eventsday">05.16</p>
                <p className="ning_eventsyear">2022</p>
                <div className="ning_eventsdateline"></div>
                <p className="ning_eventstour">熱帶雨林館</p>
                <div className="ning_eventsimg">
                  <img src="/img/home/activity03.jpg" alt="" />
                </div>
                <div className="ning_eventsboxbottom">
                  <p className="ning_eventstext">一起與浣熊近距離接觸吧 !</p>
                  <div className="ning_eventsgo">
                    <span className="material-icons">east</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="">
              <div className="ning_eventsbox">
                <p className="ning_eventsday">05.16</p>
                <p className="ning_eventsyear">2022</p>
                <div className="ning_eventsdateline"></div>
                <p className="ning_eventstour">熱帶雨林館</p>
                <div className="ning_eventsimg">
                  <img src="/img/home/activity03.jpg" alt="" />
                </div>
                <div className="ning_eventsboxbottom">
                  <p className="ning_eventstext">一起與浣熊近距離接觸吧 !</p>
                  <div className="ning_eventsgo">
                    <span className="material-icons">east</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="">
              <div className="ning_eventsbox">
                <p className="ning_eventsday">05.16</p>
                <p className="ning_eventsyear">2022</p>
                <div className="ning_eventsdateline"></div>
                <p className="ning_eventstour">熱帶雨林館</p>
                <div className="ning_eventsimg">
                  <img src="/img/home/activity03.jpg" alt="" />
                </div>
                <div className="ning_eventsboxbottom">
                  <p className="ning_eventstext">一起與浣熊近距離接觸吧 !</p>
                  <div className="ning_eventsgo">
                    <span className="material-icons">east</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="ning_buttonbox">
            <button className="btn ning_viewmorebtn">
              <p className="ning_viewmorebtntext">View More</p>
              <p className="ning_viewmoreicon">⟶</p>
            </button>
          </div>
        </div>
        <div className="ning_Accommodation">
          <h1 className="ning_TitleEnblack">Accommodation</h1>
          <h2 className="ning_TitleChblack">風格住宿</h2>
        </div>
      </div>
      <div className="ning_Accommodationbox">
        <div className="ning_Accommodationwrap">
          <Link to="">
            <img src="img/home/oceanroom.jpeg" alt="" />
          </Link>
          <Link to="">
            <img src="img/home/nocturnalroom.jpeg" alt="" />
          </Link>
          <Link to="">
            <img src="img/home/tropicalroom.jpg" alt="" />
          </Link>
          <Link to="">
            <img src="img/home/icefieldroom.jpeg" alt="" />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="ning_buttonbox">
          <button className="btn ning_viewmorebtn">
            <p className="ning_viewmorebtntext">View More</p>
            <p className="ning_viewmoreicon">⟶</p>
          </button>
        </div>
        <div className="ning_Junglestar">
          <h1 className="ning_TitleEnblack">Jungle Star</h1>
          <h2 className="ning_TitleChblack">明星動物認養</h2>
        </div>
      </div>
    </>
  );
}
export default homePage;
