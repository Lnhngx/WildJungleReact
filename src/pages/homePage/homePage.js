import React, { useState } from "react";
import "./ning.scss";
import "./homepage.scss";
import HomeCarousel from "./components/HomeCarousel";
// import Homevideo from "./components/Homevideo";
import HomeWeather from "./components/HomeWeather";
import HomeWeathermb from "./components/HomeWeathermb";
import HomeJungleTour from "./components/HomeJungleTour";
import HomeJungleStar from "./components/HomeJungleStar";
import HomeTransportion from "./components/HomeTransportion";
import HomeTransportionP from "./components/HomeTransportionP";
import { CarouselData } from "./components/CarouselData";
import { Link } from "react-router-dom";

function HomePage() {
  
  // const [transportionbtn, setTransportionbtn] = useState(true);

  return (
    <>
      <HomeCarousel slides={CarouselData} />
      {/* <Homevideo /> */}
      {/* <div className="ning_informationbox">
        <div className="ning_information">
          <div className="ning_Admissionbox">
            <div className="ning_AdmissionboxIcon">
              <div className="ning_iconsbox">
                <span className="material-icons peopleicon">groups</span>
              </div>
              <p className="ning_Admission">入園人數</p>
              <p className="ning_AdmissionEn">People</p>
            </div>
            <div className="ning_AdmissionCout">
              <div className="ning_AdmissionNumber">180</div>
              <p className="ning_AdmissionUnit">人</p>
            </div>
          </div>
          <div className="ning_separationline"></div>

          <HomeWeather />

          <div className="ning_separationline"></div>
          <div className="ning_ticketbox">
            <div className="ning_ticketboxIcon">
              <div className="ning_ticketicon">
                <span className="material-icons ticketicon">
                  confirmation_number
                </span>
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

      <div className="ning_informationbox_mb">
        <div className="ning_information_mb">
          <div className="ning_Admissionbox_mb">
            <span className="material-icons ning_groupsicon">groups</span>
            <p className="ning_Admission">入園人數</p>
            <div className="ning_AdmissionCout">
              <p className="ning_AdmissionNumber">
                180
                <span className="ning_AdmissionUnit">人</span>
              </p>
            </div>
          </div>
          <HomeWeathermb />
          <div className="ning_ticketbox_mb">
            <span className="material-icons ning_confirmationicon">
              confirmation_number
            </span>
            <p className="ning_ticket">票券資訊</p>
            <p className="ning_ticketprice">$50/$30/$20</p>
          </div>
        </div>
      </div> */}

      <HomeJungleTour />

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
                  <img src="/img/home/activity_img/activity03.jpg" alt="" />
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
                  <img src="/img/home/activity_img/activity03.jpg" alt="" />
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
                  <img src="/img/home/activity_img/activity03.jpg" alt="" />
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
                  <img src="/img/home/activity_img/activity03.jpg" alt="" />
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
                  <img src="/img/home/activity_img/activity03.jpg" alt="" />
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
                  <img src="/img/home/activity_img/activity03.jpg" alt="" />
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
      </div>

      {/* 明星動物認養 */}

      <HomeJungleStar />

      <div className="container">
        <h1 className="ning_TitleEnblack">Transportion</h1>
        <h2 className="ning_TitleChblack">交通</h2>
        <div className="ning_transportionButton">
          <button className="ning_busButton btn" >公車即時</button>
          <button className="ning_PButton btn">停車場</button>
          <HomeTransportion />
          {/* {transportionbtn === true ? (
            <HomeTransportion />
          ) : (
            <HomeTransportionP />
          )} */}
        </div>
      </div>
    </>
  );
}
export default HomePage;
