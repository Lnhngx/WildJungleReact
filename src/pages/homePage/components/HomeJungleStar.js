import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
const eagledata = [
  {
    picture: "img/home/eagle_products/eagle_products01.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products02.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products03.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products04.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products05.jpeg",
  },
  {
    picture: "img/home/eagle_products/eagle_products01.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products02.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products03.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products04.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products05.jpeg",
  },
];
const elephantdata = [
  {
    picture: "img/home/elephant_products/elephant_products01.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products02.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products03.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products04.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products05.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products06.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products07.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products08.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products09.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products10.jpg",
  },
];
const tigerdata = [
  {
    picture: "img/home/eagle_products/eagle_products01.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products02.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products03.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products04.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products05.jpeg",
  },
  {
    picture: "img/home/eagle_products/eagle_products01.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products02.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products03.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products04.jpg",
  },
  {
    picture: "img/home/eagle_products/eagle_products05.jpeg",
  },
];
const sharkdata = [
  {
    picture: "img/home/elephant_products/elephant_products01.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products02.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products03.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products04.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products05.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products06.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products07.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products08.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products09.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products10.jpg",
  },
];
const hitefoxdata = [
  {
    picture: "img/home/elephant_products/elephant_products01.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products02.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products03.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products04.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products05.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products06.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products07.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products08.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products09.jpg",
  },
  {
    picture: "img/home/elephant_products/elephant_products10.jpg",
  },
];

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
    setdata(eagledata);
    setCurrent(0);
  };
  const elephantPush = () => {
    setEaglecard(false);
    setelephantcard(!elephantcard);
    settigercard(false);
    setsharkcard(false);
    sethitefoxcard(false);
    setdata(elephantdata);
    setCurrent(0);
  };
  const tigerPush = () => {
    setEaglecard(false);
    setelephantcard(false);
    settigercard(!tigercard);
    setsharkcard(false);
    sethitefoxcard(false);
    setdata(tigerdata);
    setCurrent(0);
  };
  const sharkPush = () => {
    setEaglecard(false);
    setelephantcard(false);
    settigercard(false);
    setsharkcard(!sharkcard);
    sethitefoxcard(false);
    setdata(sharkdata);
    setCurrent(0);
  };
  const hitefoxPush = () => {
    setEaglecard(false);
    setelephantcard(false);
    settigercard(false);
    setsharkcard(false);
    sethitefoxcard(!hitefoxcard);
    setdata(hitefoxdata);
    setCurrent(0);
  };

  //動物商品

  const [data, setdata] = useState(eagledata);

  const [current, setCurrent] = useState(0);
  const length = data.length;

  function leftClick() {
    if (current > 0) {
      setCurrent(current - 1);
    }
    return current;
  }

  function rightClick() {
    if (current < length - 5) {
      setCurrent(current + 1);
    }
    return current;
  }

  function carousel(v) {
    const moveX = v * -10;
    $(".ning_starproductwrap").css("transform", `translateX(${moveX}%)`);
  }

  useEffect(() => {
    carousel(current);
  }, [current]);

  return (
    <>
      <div className="container">
        <h1 className="ning_TitleEnblack">Jungle Star</h1>
        <h2 className="ning_TitleChblack">明星動物認養</h2>
        <div className="ning_Junglestarcontainer">
          <div
            className="ning_eaglecardbox"
            style={{ width: eaglecard === false && "12.5%" }}
            onClick={eaglecard === true ? true : eaglePush}
          >
            <div className="ning_eaglecard">
              <div
                className="ning_eagleimg"
                style={{ marginLeft: eaglecard === false && "-18%" }}
              >
                <img
                  src={
                    eaglecard === true
                      ? "img/home/star_eagle.png"
                      : "img/home/star_eagle_bk.png"
                  }
                  alt=""
                />
              </div>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Eagle</h3>
                <span>
                  老鷹在四、五十年前，曾是臺灣常見的猛禽，如今由於棲息地的道路開發、非法捕捉飼養、農藥及殺蟲劑施灑、捕食中毒老鼠或鳥類等，數量大幅減少...
                </span>
                <button className="adoptbtn btn">我要認養！</button>
              </div>
            </div>
          </div>

          <div
            className="ning_elephantcardbox"
            style={{ width: elephantcard === true && "50%" }}
            onClick={elephantcard === true ? true : elephantPush}
          >
            <div className="ning_elephantcard">
              <div
                className="ning_elephantimg"
                style={{ marginLeft: elephantcard === true && "0" }}
              >
                <img
                  src={
                    elephantcard === true
                      ? "img/home/star_elephant.png"
                      : "img/home/star_elephant_bk.png"
                  }
                  alt=""
                />
              </div>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Elephant</h3>
                <span>
                  頭大脖子短，身軀龐大，四肢長呈圓柱狀，腳短而平，腳底有用來支撐身軀重量的彈性組織，尾巴末端有蓬鬆的毛。皮膚為黯淡的棕灰色，長著稀疏的黑色剛毛...
                </span>
                <button className="adoptbtn btn">我要認養！</button>
              </div>
            </div>
          </div>

          <div
            className="ning_tigercardbox"
            style={{ width: tigercard === true && "50%" }}
            onClick={tigercard === true ? true : tigerPush}
          >
            <div className="ning_tigercard">
              <div
                className="ning_tigerimg"
                style={{ marginLeft: tigercard === true && "0" }}
              >
                <img
                  src={
                    tigercard === true
                      ? "img/home/star_tiger.png"
                      : "img/home/star_tiger_bk.png"
                  }
                  alt=""
                />
              </div>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Tiger</h3>
                <span>
                  為貓科中繼虎和獅之後第三大物種，同時也是為西半球最大型以及最強健的貓科動物！外表型態和豹極為相似，但較粗壯，圓斑中有黑點，生態位也較像虎，體型介於虎和豹之間，貓科中的全能冠軍。
                </span>
                <button className="adoptbtn btn">我要認養！</button>
              </div>
            </div>
          </div>

          <div
            className="ning_sharkcardbox"
            style={{ width: sharkcard === true && "50%" }}
            onClick={sharkcard === true ? true : sharkPush}
          >
            <div className="ning_sharkcard">
              <div
                className="ning_sharkimg"
                style={{ marginLeft: sharkcard === true && "0" }}
              >
                <img
                  src={
                    sharkcard === true
                      ? "img/home/star_shark.png"
                      : "img/home/star_shark_bk.png"
                  }
                  alt=""
                />
              </div>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Shark</h3>
                <span>
                  鲨鱼有高度流線、適合游泳的外型，全身覆滿了盾鳞，鳞除了保護鯊魚免於受傷或者被寄生蟲寄生，還可以增進它們的流體動力，讓它們游得更快速。鯊魚體側用於呼吸的鳃裂有五到七個。它們有數套可替換的牙齒。
                </span>
                <button className="adoptbtn btn">我要認養！</button>
              </div>
            </div>
          </div>

          <div
            className="ning_hitefoxcardbox"
            style={{ width: hitefoxcard === true && "50%" }}
            onClick={hitefoxcard === true ? true : hitefoxPush}
          >
            <div className="ning_hitefoxcardhd">
              <div className="ning_hitefoxcard">
                <div
                  className="ning_hitefoximg"
                  style={{ marginLeft: hitefoxcard === true && "0" }}
                >
                  <img
                    src={
                      hitefoxcard === true
                        ? "img/home/star_hitefox.png"
                        : "img/home/star_hitefox_bk.png"
                    }
                    alt=""
                  />
                </div>
                <div className="ning_starcardtext">
                  <h3 className="ning_starcardtitle">Hitefox</h3>
                  <span>
                    吻部很尖，耳短而圓，臉頰後部生長毛，腳底部也密生長毛，所以適於在冰雪地上行走，尾毛蓬鬆，尖端白色，身體略小於赤狐。北極狐毛皮既長又軟且厚，厚厚的皮毛使北極狐的體溫保持在四十度，因此可抵禦嚴寒。
                  </span>
                  <Link to="/activity">
                    <button className="adoptbtn btn">我要認養！</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 動物相關商品  */}

        <h3 className="ning_starproducts">相關動物商品</h3>
        <div className="ning_starproductbox">
          <span
            className="ning_starcarousellefticon material-icons"
            onClick={leftClick}
            style={{ color: current === 0 && "lightgray" }}
          >
            chevron_left
          </span>
          <span
            className="ning_starcarouselrighticon material-icons"
            onClick={rightClick}
            style={{ color: current === length - 5 && "lightgray" }}
          >
            chevron_right
          </span>
          <div className="ning_starproducthiddenbox">
            <div className="ning_starproductwrap">
              {data.map((v, i) => {
                return (
                  <>
                    <div className="ning_starproductimg">
                      <img src={v.picture} alt="" />
                    </div>
                    <div className="ning_productText">
                      <div className="ning_productname">
                        <p>老鷹皮雕短夾</p>
                        <p>
                          <span>售價 </span>NT$1200
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeJungleStar;
