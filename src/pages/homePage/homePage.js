import React from "react";
import "./ning.scss";
import HomeCarousel from "./components/HomeCarousel";
import HomeAccordion from "./components/HomeAccordion";
import HomeWeather from "./components/HomeWeather";
import HomeTransportion from "./components/HomeTransportion";
import { CarouselData } from "./components/CarouselData";
import { Link } from "react-router-dom";

function homePage() {
  return (
    <>
      <HomeCarousel slides={CarouselData} />
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
          <HomeWeather />
          {/* <div className="ning_weatherbox">
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
          </div> */}
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
      </div>
      {/* 明星動物認養 */}
      <div className="container">
        <h1 className="ning_TitleEnblack">Jungle Star</h1>
        <h2 className="ning_TitleChblack">明星動物認養</h2>
        <section className="ning_JunglestarMain">
          <div className="ning_Junglestarcontainer">
            <figure>
              <Link to="">
                <div className="ning_eaglecard">
                  <img src="img/home/star_eagle.png" alt="png_1" />
                </div>
                <input type="radio" name="radio-set" checked="checked" />
                <figcaption>
                  <span>
                    <h3 className="ning_eaglecardtitle">Eagle</h3>
                    <p>
                      對於網頁開發或平面設計來說，在工作時可能經常會需要使用一些文字或圖片來填充空白區域以利設計排版，讓它看起來更近完成時，的樣貌也能協助其他人瞭解你的構想。
                    </p>
                    <button className="adoptbtn btn">我要認養！</button>
                  </span>
                </figcaption>
              </Link>
              <figure>
                <Link to="">
                  <div className="ning_elephantcard">
                    <img src="img/home/star_elephant.png" alt="png_2" />
                  </div>
                  <input type="radio" name="radio-set" checked="checked" />
                  <figcaption>
                    <span>
                      <h3 className="ning_eaglecardtitle">Eagle</h3>
                      <p>
                        對於網頁開發或平面設計來說，在工作時可能經常會需要使用一些文字或圖片來填充空白區域以利設計排版，讓它看起來更近完成時，的樣貌也能協助其他人瞭解你的構想。
                      </p>
                      <button className="adoptbtn btn">我要認養！</button>
                    </span>
                  </figcaption>
                </Link>
                <figure>
                  <Link to="">
                    <div className="ning_tigercard">
                      <img src="img/home/star_tiger.png" alt="png_3" />
                    </div>
                    <input type="radio" name="radio-set" checked="checked" />
                    <figcaption>
                      <span>
                        <h3 className="ning_eaglecardtitle">Eagle</h3>
                        <p>
                          對於網頁開發或平面設計來說，在工作時可能經常會需要使用一些文字或圖片來填充空白區域以利設計排版，讓它看起來更近完成時，的樣貌也能協助其他人瞭解你的構想。
                        </p>
                        <button className="adoptbtn btn">我要認養！</button>
                      </span>
                    </figcaption>
                  </Link>
                  <figure>
                    <Link to="">
                      <div className="ning_sharkcard">
                        <img src="img/home/star_shark.png" alt="png_4" />
                      </div>
                      <input type="radio" name="radio-set" checked="checked" />
                      <figcaption>
                        <span>
                          <h3 className="ning_eaglecardtitle">Eagle</h3>
                          <p>
                            對於網頁開發或平面設計來說，在工作時可能經常會需要使用一些文字或圖片來填充空白區域以利設計排版，讓它看起來更近完成時，的樣貌也能協助其他人瞭解你的構想。
                          </p>
                          <button className="adoptbtn btn">我要認養！</button>
                        </span>
                      </figcaption>
                    </Link>
                    <figure>
                      <Link to="">
                        <div className="ning_hitefoxcard">
                          <img src="img/home/star_hitefox.png" alt="png_5" />
                        </div>
                        <input
                          type="radio"
                          name="radio-set"
                          checked="checked"
                        />
                        <figcaption>
                          <span>
                            <h3 className="ning_eaglecardtitle">Eagle</h3>
                            <p>
                              對於網頁開發或平面設計來說，在工作時可能經常會需要使用一些文字或圖片來填充空白區域以利設計排版，讓它看起來更近完成時，的樣貌也能協助其他人瞭解你的構想。
                            </p>
                            <button className="adoptbtn btn">我要認養！</button>
                          </span>
                        </figcaption>
                      </Link>
                    </figure>
                  </figure>
                </figure>
              </figure>
            </figure>
          </div>
        </section>
      </div>
      <div className="container">
        <h1 className="ning_TitleEnblack">Transportion</h1>
        <h2 className="ning_TitleChblack">交通</h2>
        <div className="ning_transportionButton">
          <HomeTransportion />
        </div>
      </div>
    </>
  );
}
export default homePage;
