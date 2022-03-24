import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const HomeJungleStar = () => {

  const [eaglecard, setEaglecard] = useState(true);
  const [elephantcard, setelephantcard] = useState(false);
  const [tigercard, settigercard] = useState(false);
  const [sharkcard, setsharkcard] = useState(false);
  const [hitefoxcard, sethitefoxcard] = useState(false);

  const eaglePush = () => {
    setEaglecard(!eaglecard);
    setelephantcard(false);
    settigercard(false);
    setsharkcard(false);
    sethitefoxcard(false);
  };
  const elephantPush = () => {
    setEaglecard(false);
    setelephantcard(!elephantcard);
    settigercard(false);
    setsharkcard(false);
    sethitefoxcard(false);
  };
  const tigerPush = () => {
    setEaglecard(false);
    setelephantcard(false);
    settigercard(!tigercard);
    setsharkcard(false);
    sethitefoxcard(false);
  };
  const sharkPush = () => {
    setEaglecard(false);
    setelephantcard(false);
    settigercard(false);
    setsharkcard(!sharkcard);
    sethitefoxcard(false);
  };
  const hitefoxPush = () => {
    setEaglecard(false);
    setelephantcard(false);
    settigercard(false);
    setsharkcard(false);
    sethitefoxcard(!hitefoxcard);
  };

  const eagleimg = useRef();

  return (
    <>
      <div className="container">
        <h1 className="ning_TitleEnblack">Jungle Star</h1>
        <h2 className="ning_TitleChblack">明星動物認養</h2>
        <div className="ning_Junglestarcontainer">

          <div className="ning_eaglecardbox" style={{ width: eaglecard === false && "12.5%" }} onClick={(eaglecard === true ? true : eaglePush )} >
            <div className="ning_eaglecard" onClick={() => {
                eagleimg.current.src =
                  "img/home/star_eagle.png";
              }}>
              <img src="img/home/star_eagle_bk.png" alt="" style={{  marginLeft: eaglecard === false && "-18%" }} ref={eagleimg}/>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Eagle</h3>
                <span>
                  老鷹在四、五十年前，曾是臺灣常見的猛禽，如今由於棲息地的道路開發、非法捕捉飼養、農藥及殺蟲劑施灑、捕食中毒老鼠或鳥類等，數量大幅減少...
                </span>
                <button className="adoptbtn btn">我要認養！</button>
              </div>
            </div>
          </div>

          <div className="ning_elephantcardbox" style={{ width: elephantcard === true && "50%" }} onClick={(elephantcard === true ? true : elephantPush )}>
            <div className="ning_elephantcard">
              <img src="img/home/star_elephant_bk.png" alt=""  style={{  marginLeft: elephantcard  === true && "0" }}/>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Elephant</h3>
                <span>
                  頭大脖子短，身軀龐大，四肢長呈圓柱狀，腳短而平，腳底有用來支撐身軀重量的彈性組織，尾巴末端有蓬鬆的毛。皮膚為黯淡的棕灰色，長著稀疏的黑色剛毛...
                </span>
                <button className="adoptbtn btn">我要認養！</button>
              </div>
            </div>
          </div>

          <div className="ning_tigercardbox" style={{ width: tigercard === true && "50%" }} onClick={(tigercard === true ? true : tigerPush )}>
            <div className="ning_tigercard">
              <img src="img/home/star_tiger_bk.png" alt="" style={{  marginLeft: tigercard === true && "0" }}/>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Tiger</h3>
                <span>
                  為貓科中繼虎和獅之後第三大物種，同時也是為西半球最大型以及最強健的貓科動物！外表型態和豹極為相似，但較粗壯，圓斑中有黑點，生態位也較像虎，體型介於虎和豹之間，貓科中的全能冠軍。
                </span>
                <button className="adoptbtn btn">我要認養！</button>
              </div>
            </div>
          </div>

          <div className="ning_sharkcardbox" style={{ width: sharkcard === true && "50%" }} onClick={(sharkcard === true ? true : sharkPush )}>
            <div className="ning_sharkcard">
              <img src="img/home/star_shark_bk.png" alt="" style={{  marginLeft: sharkcard === true && "0" }}/>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Shark</h3>
                <span>
                  鲨鱼有高度流線、適合游泳的外型，全身覆滿了盾鳞，鳞除了保護鯊魚免於受傷或者被寄生蟲寄生，還可以增進它們的流體動力，讓它們游得更快速。鯊魚體側用於呼吸的鳃裂有五到七個。它們有數套可替換的牙齒。
                </span>
                <button className="adoptbtn btn">我要認養！</button>
              </div>
            </div>
          </div>

          <div className="ning_hitefoxcardbox" style={{ width: hitefoxcard === true && "50%" }} onClick={(hitefoxcard === true ? true : hitefoxPush )}>
            <div className="ning_hitefoxcardhd">
              <div className="ning_hitefoxcard">
                <img src="img/home/star_hitefox_bk.png" alt="" style={{  marginLeft: hitefoxcard === true && "0" }}/>
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
    </>
  );
};

export default HomeJungleStar;