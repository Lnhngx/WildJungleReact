import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
const eagledata2 = [
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
];
const elephantdata2 = [
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
];
const tigerdata2 = [
  {
    picture: "img/home/tiger_products/tiger_products01.jpg",
  },
  {
    picture: "img/home/tiger_products/tiger_products02.jpg",
  },
  {
    picture: "img/home/tiger_products/tiger_products03.jpg",
  },
  {
    picture: "img/home/tiger_products/tiger_products04.jpg",
  },
  {
    picture: "img/home/tiger_products/tiger_products05.jpg",
  },
  {
    picture: "img/home/tiger_products/tiger_products06.jpg",
  },
];
const sharkdata2 = [
  {
    picture: "img/home/shark_products/shark_products01.jpg",
  },
  {
    picture: "img/home/shark_products/shark_products02.jpg",
  },
  {
    picture: "img/home/shark_products/shark_products03.jpg",
  },
  {
    picture: "img/home/shark_products/shark_products04.jpg",
  },
  {
    picture: "img/home/shark_products/shark_products05.jpg",
  },
  {
    picture: "img/home/shark_products/shark_products06.jpg",
  },
];
const hitefoxdata2 = [
  {
    picture: "img/home/hitefox_products/hitefox_products01.jpg",
  },
  {
    picture: "img/home/hitefox_products/hitefox_products02.jpg",
  },
  {
    picture: "img/home/hitefox_products/hitefox_products03.jpg",
  },
  {
    picture: "img/home/hitefox_products/hitefox_products04.jpg",
  },
  {
    picture: "img/home/hitefox_products/hitefox_products05.jpg",
  },
  {
    picture: "img/home/hitefox_products/hitefox_products06.jpg",
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
    setdata2(eagledata2);
    setCurrent(0);
  };
  const elephantPush = () => {
    setEaglecard(false);
    setelephantcard(!elephantcard);
    settigercard(false);
    setsharkcard(false);
    sethitefoxcard(false);
    setdata(elephantdata);
    setdata2(elephantdata2);
    setCurrent(0);
  };
  const tigerPush = () => {
    setEaglecard(false);
    setelephantcard(false);
    settigercard(!tigercard);
    setsharkcard(false);
    sethitefoxcard(false);
    setdata(tigerdata);
    setdata2(tigerdata2);
    setCurrent(0);
  };
  const sharkPush = () => {
    setEaglecard(false);
    setelephantcard(false);
    settigercard(false);
    setsharkcard(!sharkcard);
    sethitefoxcard(false);
    setdata(sharkdata);
    setdata2(sharkdata2);
    setCurrent(0);
  };
  const hitefoxPush = () => {
    setEaglecard(false);
    setelephantcard(false);
    settigercard(false);
    setsharkcard(false);
    sethitefoxcard(!hitefoxcard);
    setdata(hitefoxdata);
    setdata2(hitefoxdata2);
    setCurrent(0);
  };

  //????????????

  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [eagledata, seteagledata] = useState([]);
  const [elephantdata, setelephantdata] = useState([]);
  const [tigerdata, settigerdata] = useState([]);
  const [sharkdata, setsharkdata] = useState([]);
  const [hitefoxdata, sethitefoxdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((r) => r.json())
      .then((obj) => {
        let eagle = [...obj].filter((v, i) => {
          return v.ProductsMainPic.includes("Eagle");
        });
        seteagledata(eagle);
        setdata(eagle);
        setdata2(eagledata2);

        let elephant = [...obj].filter((v, i) => {
          return v.ProductsMainPic.includes("Elephant");
        });
        setelephantdata(elephant);

        let tiger = [...obj].filter((v, i) => {
          return v.ProductsMainPic.includes("Tiger");
        });
        settigerdata(tiger);

        let hitefox = [...obj].filter((v, i) => {
          return v.ProductsMainPic.includes("Fox");
        });
        sethitefoxdata(hitefox);

        let shark = [...obj].filter((v, i) => {
          return v.ProductsMainPic.includes("Shark");
        });
        setsharkdata(shark);
      });
  }, []);

  // let eagle = [...data].filter((v, i) => {
  //   return v.ProductsMainPic.includes("Eagle");
  // });
  // seteagledata(eagle);

  // let elephant = data.filter((v, i) => {
  //   return v.ProductsMainPic.includes("Elephant");
  // });
  // setelephantdata(elephant);

  // let tiger = data.filter((v, i) => {
  //   return v.ProductsMainPic.includes("Tiger");
  // });
  // settigerdata(tiger);

  // let hitefox = data.filter((v, i) => {
  //   return v.ProductsMainPic.includes("WildLife");
  // });
  // sethitefoxdata(hitefox);

  // let shark = data.filter((v, i) => {
  //   return v.ProductsMainPic.includes("Shark");
  // });
  // setsharkdata(shark);

  const [current, setCurrent] = useState(0);
  const length = data.length + eagledata.length;

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
        <h2 className="ning_TitleChblack">??????????????????</h2>
        <div className="ning_Junglestarcontainer">
          <div
            className="ning_eaglecardbox"
            style={{ width: eaglecard === false && "12.5%" }}
            onClick={() => {
              if (eaglecard) {
                setEaglecard(false);
              } else {
                eaglePush();
              }
            }}
          >
            <div className="ning_eaglecard">
              <div
                className="ning_eagleimg"
                style={{ marginLeft: eaglecard === false && "-100px" }}
              >
                <img
                  className={eaglecard === true ? "" : "star_img"}
                  src="img/home/star_eagle.png"
                  alt=""
                />
              </div>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Eagle</h3>
                <span>
                  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????...
                </span>
                <Link to="/activity">
                  <button className="adoptbtn btn">???????????????</button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="ning_elephantcardbox"
            style={{ width: elephantcard === true && "50%" }}
            onClick={() => {
              if (elephantcard) {
                setelephantcard(false);
              } else {
                elephantPush();
              }
            }}
          >
            <div className="ning_elephantcard">
              <div
                className="ning_elephantimg"
                style={{ marginLeft: elephantcard === true && "0" }}
              >
                <img
                  className={elephantcard === true ? "" : "star_img"}
                  src="img/home/star_elephant.png"
                  alt=""
                />
              </div>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Elephant</h3>
                <span>
                  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????...
                </span>
                <Link to="/activity">
                  <button className="adoptbtn btn">???????????????</button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="ning_tigercardbox"
            style={{ width: tigercard === true && "50%" }}
            onClick={() => {
              if (tigercard) {
                settigercard(false);
              } else {
                tigerPush();
              }
            }}
          >
            <div className="ning_tigercard">
              <div
                className="ning_tigerimg"
                style={{ marginLeft: tigercard === true && "0px" }}
              >
                <img className={tigercard === true ? "" : "star_img"}
                  src="img/home/star_tiger.png"     
                  alt=""
                />
              </div>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Tiger</h3>
                <span>
                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </span>
                <Link to="/activity">
                  <button className="adoptbtn btn">???????????????</button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="ning_sharkcardbox"
            style={{ width: sharkcard === true && "50%" }}
            onClick={() => {
              if (sharkcard) {
                setsharkcard(false);
              } else {
                sharkPush();
              }
            }}
          >
            <div className="ning_sharkcard">
              <div
                className="ning_sharkimg"
                style={{ marginLeft: sharkcard === true && "-20px" }}
              >
                <img className={sharkcard === true ? "" : "star_img"}
                  src=
                    "img/home/star_shark.png"
                    
                  alt=""
                />
              </div>
              <div className="ning_starcardtext">
                <h3 className="ning_starcardtitle">Shark</h3>
                <span>
                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </span>
                <Link to="/activity">
                  <button className="adoptbtn btn">???????????????</button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="ning_hitefoxcardbox"
            style={{ width: hitefoxcard === true && "50%" }}
            onClick={() => {
              if (hitefoxcard) {
                sethitefoxcard(false);
              } else {
                hitefoxPush();
              }
            }}
          >
            <div className="ning_hitefoxcardhd">
              <div className="ning_hitefoxcard">
                <div
                  className="ning_hitefoximg"
                  style={{ marginLeft: hitefoxcard === true && "0" }}
                >
                  <img className={hitefoxcard === true ? "" : "star_img"}
                    src=
                   "img/home/star_hitefox.png"
                      
                    alt=""
                  />
                </div>
                <div className="ning_starcardtext">
                  <h3 className="ning_starcardtitle">Hitefox</h3>
                  <span>
                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  </span>
                  <Link to="/activity">
                    <button className="adoptbtn btn">???????????????</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ??????????????????  */}

        <h3 className="ning_starproducts">??????????????????</h3>
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
                  <React.Fragment key={i}>
                    <Link
                      to={"/productsdetail?id=" + v.ProductSid}
                      className="ning_starproductimg"
                    >
                      <img src={"/img/product/" + v.ProductsMainPic} alt="" />

                      <div className="ning_productText">
                        <div className="ning_productname">
                          <p>{v.ProductsName}</p>
                          <p>
                            <span>?????? </span>
                            {v.ProductsPrice}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </React.Fragment>
                );
              })}
              {data2.map((v, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="ning_starproductimg" key={i}>
                      <img src={v.picture} alt="" />
                    </div>
                    <div className="ning_productText">
                      <div className="ning_productname">
                        <p></p>
                        <p>
                          <span>?????? </span>
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
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
