import React from "react";
import "./ning.scss";
import HomeCarousel from "./components/HomeCarousel";
import HomeAccordion from "./components/HomeAccordion";
import HomeWeather from "./components/HomeWeather";
import HomeTransportion from "./components/HomeTransportion";
import HomeTransportionP from "./components/HomeTransportionP";
import { CarouselData } from "./components/CarouselData";
import { Link } from "react-router-dom";

function homePage() {
  return (
    <>
      <HomeCarousel slides={CarouselData} />

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
        <div className="ning_Junglestarcontainer">
          <div className="ning_eaglecard">
            <img src="img/home/star_eagle_bk.png" alt="" />
            <div className="ning_starcardtext">
              <h3 className="ning_starcardtitle">Eagle</h3>
              <span>
                老鷹在四、五十年前，曾是臺灣常見的猛禽，如今由於棲息地的道路開發、非法捕捉飼養、農藥及殺蟲劑施灑、捕食中毒老鼠或鳥類等，數量大幅減少...
              </span>
              <button className="adoptbtn btn">我要認養！</button>
            </div>
          </div>

          <div className="ning_elephantcard">
            <img src="img/home/star_elephant_bk.png" alt="" />
            <div className="ning_starcardtext">
              <h3 className="ning_starcardtitle">Elephant</h3>
              <span>
                頭大脖子短，身軀龐大，四肢長呈圓柱狀，腳短而平，腳底有用來支撐身軀重量的彈性組織，尾巴末端有蓬鬆的毛。皮膚為黯淡的棕灰色，長著稀疏的黑色剛毛...
              </span>
              <button className="adoptbtn btn">我要認養！</button>
            </div>
          </div>

          <div className="ning_tigercard">
            <img src="img/home/star_tiger_bk.png" alt="" />
            <div className="ning_starcardtext">
              <h3 className="ning_starcardtitle">Tiger</h3>
              <span>
                為貓科中繼虎和獅之後第三大物種，同時也是為西半球最大型以及最強健的貓科動物！外表型態和豹極為相似，但較粗壯，圓斑中有黑點，生態位也較像虎，體型介於虎和豹之間，貓科中的全能冠軍。
              </span>
              <button className="adoptbtn btn">我要認養！</button>
            </div>
          </div>

          <div className="ning_sharkcard">
            <img src="img/home/star_shark_bk.png" alt="" />
            <div className="ning_starcardtext">
              <h3 className="ning_starcardtitle">Shark</h3>
              <span>
                鲨鱼有高度流線、適合游泳的外型，全身覆滿了盾鳞，鳞除了保護鯊魚免於受傷或者被寄生蟲寄生，還可以增進它們的流體動力，讓它們游得更快速。鯊魚體側用於呼吸的鳃裂有五到七個。它們有數套可替換的牙齒。
              </span>
              <button className="adoptbtn btn">我要認養！</button>
            </div>
          </div>

          <div className="ning_hitefoxcardhd">
            <div className="ning_hitefoxcard">
              <img src="img/home/star_hitefox_bk.png" alt="" />
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Hitefox</h3>
                <span>
                  吻部很尖，耳短而圓，臉頰後部生長毛，腳底部也密生長毛，所以適於在冰雪地上行走，尾毛蓬鬆，尖端白色，身體略小於赤狐。北極狐毛皮既長又軟且厚，厚厚的皮毛使北極狐的體溫保持在四十度，因此可抵禦嚴寒。
                </span>
                <button className="adoptbtn btn">我要認養！</button>
              </div>
            </div>
          </div>
        </div>

        {/* 動物相關商品  */}

        <h3 className="ning_starproducts">相關動物商品</h3>
        <div className="ning_starproductbox">
          <span className="ning_starcarousellefticon material-icons">
            chevron_left
          </span>
          <span className="ning_starcarouselrighticon material-icons">
            chevron_right
          </span>
          <div className="ning_starproductwrap">
            <div className="ning_starproductimg">
              <img src="img/home/eagle_products01.jpg" alt="" />
            </div>
            <div className="ning_starproductimg">
              <img src="img/home/eagle_products02.jpg" alt="" />
            </div>
            <div className="ning_starproductimg">
              <img src="img/home/eagle_products03.jpg" alt="" />
            </div>
            <div className="ning_starproductimg">
              <img src="img/home/eagle_products04.jpg" alt="" />
            </div>
            <div className="ning_starproductimg">
              <img src="img/home/eagle_products05.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="ning_TitleEnblack">Transportion</h1>
        <h2 className="ning_TitleChblack">交通</h2>
        <div className="ning_transportionButton">
          <button className="ning_busButton btn">公車即時</button>
          <button className="ning_PButton btn">停車場</button>
          <HomeTransportion />
          <HomeTransportionP />
        </div>
      </div>
    </>
  );
}
export default homePage;
