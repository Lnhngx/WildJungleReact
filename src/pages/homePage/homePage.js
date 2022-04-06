import React, { useState, useEffect } from "react";
import "./ning.scss";
import "./homepage.scss";
import HomeCarousel from "./components/HomeCarousel";
// import Homevideo from "./components/Homevideo";
import HomeWeather from "./components/HomeWeather";
import HomeWeathermb from "./components/HomeWeathermb";
import Accommodation from "./components/Accommodation";
import HomeJungleTour from "./components/HomeJungleTour";
import HomeJungleStar from "./components/HomeJungleStar";
import HomeTransportion from "./components/HomeTransportion";
import HomeTransportionP from "./components/HomeTransportionP";
import { CarouselData } from "./components/CarouselData";
import { Link } from "react-router-dom";

function HomePage() {
  const [transportionbtn, setTransportionbtn] = useState(true);
  const [popularEvent, setPopularEvent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularevents")
      .then((r) => r.json())
      .then((obj) => {
        setPopularEvent(obj);
      });
  }, []);

  // const renderPopularEvents = () => {
  //   console.log("第30行：", popularEvent);

  //   <>
  //     {popularEvent.map((v, i) => {
  //       return (
  //         <div key={i} className="col-4">
  //           <div className="ning_eventsbox">
  //             <p className="ning_eventsday">{v.actDate}</p>
  //             <p className="ning_eventsyear">2022</p>
  //             <div className="ning_eventsdateline"></div>
  //             <p className="ning_eventstour">{v.actLocation}</p>
  //             <div className="ning_eventsimg">
  //               <img src={v.actImage} alt="" />
  //             </div>
  //             <div className="ning_eventsboxbottom">
  //               <p className="ning_eventstext">{v.actIntroduce}</p>
  //               <div className="ning_eventsgo">
  //                 <span className="material-icons">east</span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </>;
  // };

  return (
    <>
      <HomeCarousel slides={CarouselData} />
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
        <div className="ning_eventContainer">
          <div className="ning_eventWrap">
            <div className="row">
              {popularEvent.map((v, i) => {
                return (
                  <div key={i} className="col-1">
                    <div className="ning_eventsbox">
                      <p className="ning_eventsday">
                        {v.actDate.substring(5, 10)}
                      </p>
                      <p className="ning_eventsyear">2022</p>
                      <div className="ning_eventsdateline"></div>
                      <p className="ning_eventstour">{v.actLocation}</p>
                      <div className="ning_eventsimg">
                        <img src={v.actImage} alt="" />
                      </div>
                      <div className="ning_eventsboxbottom">
                        <p className="ning_eventstext">{v.actIntroduce}</p>
                        <div className="ning_eventsgo">
                          <span className="material-icons">east</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="ning_buttonbox">
          <button className="btn ning_viewmorebtn">
            <p className="ning_viewmorebtntext">View More</p>
            <p className="ning_viewmoreicon">⟶</p>
          </button>
        </div>
        <div className="ning_Accommodation">
          <h1 className="ning_TitleEnblack">Accommodation</h1>
          <h2 className="ning_TitleChblack">風格住宿</h2>
        </div>
        
        <Accommodation />


        <div className="container">
          <div className="ning_buttonbox">
            <button className="btn ning_viewmorebtn">
              <p className="ning_viewmorebtntext">View More</p>
              <p className="ning_viewmoreicon">⟶</p>
            </button>
          </div>
        </div>
      </div>

      {/* 明星動物認養 */}

      <HomeJungleStar />

      <div className="container">
        <h1 className="ning_TitleEnblack">Transportion</h1>
        <h2 className="ning_TitleChblack">交通</h2>
        <div className="ning_transportionButton">
          <button className="ning_busButton btn" onClick={()=>setTransportionbtn(true)}>公車即時</button>
          <button className="ning_PButton btn" onClick={()=>setTransportionbtn(false)}>停車場</button>
          {/* <HomeTransportion /> */}
          {transportionbtn === true ? (
            <HomeTransportion />
          ) : (
            <HomeTransportionP />
          )}
          {/* <HomeTransportionP /> */}
        </div>
      </div>
    </>
  );
}
export default HomePage;
