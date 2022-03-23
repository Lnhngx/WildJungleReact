import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./lodging.scss";
import "./lodging_mb.scss";
import LodgingComment from "./components/LodgingComment";

function Lodging() {
  const [oceanbox, setOceanbox] = useState(0);
  const [icebox, setIcebox] = useState(0);
  const [nocturnalbox, setNocturnalbox] = useState(0);
  const [tropicalbox, setTropicalbox] = useState(0);

  //海洋房詳細資訊btn

  const oceanPush = () => {
    setOceanbox(oceanbox === 0 ? 1 : oceanbox - 1);
    setIcebox(0);
    setNocturnalbox(0);
    setTropicalbox(0);
    //setOceanbox(!oceanPush)
  };

  //冰原房詳細資訊btn

  const icePush = () => {
    setIcebox(icebox === 0 ? 1 : icebox - 1);
    setOceanbox(0);
    setNocturnalbox(0);
    setTropicalbox(0);
  };

  //夜行房詳細資訊btn

  const nocturnalPush = () => {
    setNocturnalbox(nocturnalbox === 0 ? 1 : nocturnalbox - 1);
    setIcebox(0);
    setOceanbox(0);
    setTropicalbox(0);
  };

  //熱帶房詳細資訊btn

  const tropicalPush = () => {
    setTropicalbox(tropicalbox === 0 ? 1 : tropicalbox - 1);
    setIcebox(0);
    setOceanbox(0);
    setNocturnalbox(0);
  };

  //換照片

  const oceanimg = useRef();
  const iceimg = useRef();
  const nocturnalimg = useRef();
  const tropicalimg = useRef();

  //房間數量

  const [oceancount, setOceancount] = useState(1);
  const [icecount, setIcecount] = useState(1);
  const [nocturnalcount, setNocturnalcount] = useState(1);
  const [tropicalcount, setTropicalcount] = useState(1);

  //加數量

  const addoceancount = () => {
    if (oceancount < 10) {
      setOceancount(oceancount + 1);
    } else {
      setOceancount(oceancount);
    }
  };
  const redoceancount = () => {
    if (oceancount > 1) {
      setOceancount(oceancount - 1);
    } else {
      setOceancount(oceancount);
    }
  };

  const addicecount = () => {
    if (icecount < 10) {
      setIcecount(icecount + 1);
    } else {
      setIcecount(icecount);
    }
  };
  const redicecount = () => {
    if (icecount > 1) {
      setIcecount(icecount - 1);
    } else {
      setIcecount(icecount);
    }
  };

  const addnocturnalcount = () => {
    if (nocturnalcount < 10) {
      setNocturnalcount(nocturnalcount + 1);
    } else {
      setNocturnalcount(nocturnalcount);
    }
  };
  const rednocturnalcount = () => {
    if (nocturnalcount > 1) {
      setNocturnalcount(nocturnalcount - 1);
    } else {
      setNocturnalcount(nocturnalcount);
    }
  };

  const addtropicalcount = () => {
    if (tropicalcount < 10) {
      setTropicalcount(tropicalcount + 1);
    } else {
      setTropicalcount(tropicalcount);
    }
  };
  const redtropicalcount = () => {
    if (tropicalcount > 1) {
      setTropicalcount(tropicalcount - 1);
    } else {
      setTropicalcount(tropicalcount);
    }
  };

  //點擊評論

  const [commentbox, setCommentbox] = useState(false);

  return (
    <>
    {commentbox === true ? <LodgingComment setCommentbox={setCommentbox}/> : ""}
      <div className="container mb_container">
        <div className="loding_titlebox">
          <div className="loding_title">
            <h2>Rooms</h2>
            <div className="loding_titlep">
              <p>
                是一個充滿刺激、歡樂氣息的休閒空間，佔地百坪的空間，炫彩亮麗動感十足，讓您沉浸在微醺的情調中，盡情放縱，歡渡啟航的動感時刻！
                <br />
                擁有齊全的健身房，即使出差或旅遊，也能保持健身運動好習慣！
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lodging_ocean">
        <img
          src="img/lodging/ocean_style/oceanstyle01.jpeg"
          alt=""
          className="lodging_oceanimg"
          ref={oceanimg}
        />
        <div
          className="lodging_oceanimgwrap"
          style={{ display: oceanbox === 0 && "none" }}
        >
          <div className="lodging_oceanimg1">
            <img
              src="img/lodging/ocean_style/oceanstyle01.jpeg"
              alt=""
              onClick={() => {
                oceanimg.current.src =
                  "img/lodging/ocean_style/oceanstyle01.jpeg";
              }}
            />
          </div>
          <div className="lodging_oceanimg2">
            <img
              src="img/lodging/ocean_style/oceanstyle02.jpg"
              alt=""
              onClick={() => {
                oceanimg.current.src =
                  "img/lodging/ocean_style/oceanstyle02.jpg";
              }}
            />
          </div>
          <div className="lodging_oceanimg3">
            <img
              src="img/lodging/ocean_style/oceanstyle03.jpg"
              alt=""
              onClick={() => {
                oceanimg.current.src =
                  "img/lodging/ocean_style/oceanstyle03.jpg";
              }}
            />
          </div>
        </div>
        <span className="lodging_oceanname">Ocean Style</span>
        <div
          className="lodging_oceanbox"
          style={{ display: oceanbox === 1 && "none" }}
        >
          <div className="lodging_oceanwrap">
            <div className="lodging_oceantitle">
              <h4>Ocean Style</h4>
              <h1>海洋2人房型</h1>
              <div className="lodging_oceanprice">
                <p>房間定價</p>
                <h3>
                  <span>NT$</span>3200
                </h3>
              </div>
            </div>
            <div className="lodging_oceanline"></div>
            <div className="lodging_oceanlist1">
              <p>坪數</p>
              <p>10坪</p>
            </div>
            <div className="lodging_oceanlist2">
              <p>入住人數</p>
              <p>1-2人</p>
            </div>
            <div className="lodging_oceanlist3">
              <p>房數</p>
              <p>10房</p>
            </div>
            <button className="btn lodging_oceandetailbtn" onClick={oceanPush}>
              更多細節
            </button>
          </div>
        </div>

        {/* click 海洋房 */}

        <div
          className="lodging_oceanbox"
          style={{ display: oceanbox === 0 && "none" }}
        >
          <div className="lodging_oceanwrap">
            <div className="lodging_oceantitle">
              <h4>Ocean Style</h4>
              <h1>海洋2人房型</h1>
              <div className="lodging_oceanprice">
                <p>房間定價</p>
                <h3>
                  <span>NT$ </span>
                  {3200 * oceancount}
                </h3>
              </div>
            </div>
            <div className="lodging_oceanamount">
              <button
                className="btn lodging_oceanminus"
                onClick={redoceancount}
              >
                <i class="fas fa-minus"></i>
              </button>
              <input
                type="text"
                value={oceancount}
                className="lodging_oceanvalue"
              />
              <button className="btn lodging_oceanplus" onClick={addoceancount}>
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <input
              type="date"
              placeholder="入住日期"
              className="lodging_oceanincheck"
            ></input>
            <input
              type="date"
              placeholder="入住日期"
              className="lodging_oceanoutcheck"
            ></input>
            <button className="btn oceanreservation">預約訂房</button>
          </div>
        </div>

        {/* click 海洋房 */}
      </div>

      <div className="container mb_container">
        <div
          className="lodging_oceanboxdetail"
          style={{ height: oceanbox === 1 && "100vh" }}
        >
          <div className="lodging_oceandetail">
            <div className="ocean_introducebox">
              <div className="ocean_introduce" >
                <h2>房型簡介</h2>
                <div className="ocean_score">
                  <p>9.3</p>
                </div>
                <p onClick={()=>{setCommentbox(true)}}>15則評論</p>
              </div>
              <div className="ocean_introducetext">
                10坪大的空間，寬敞舒適，有一大床與二單床可供選擇。進入客房，映入眼簾的是蔚藍海岸的地毯及船艙造型的圓形海魚掛畫，浴室內獨特的圓形大鏡面及乾濕分離的衛浴設計，讓人沉浸在海底船艙的冒險遐想之中。
              </div>
              <h2>房型設備</h2>
              <div className="ocean_equipment">
                <div className="ocean_bath">
                  <p className="ocean_bathtitle">浴室設備</p>
                  <p className="ocean_bathtext">
                    浴缸、淋浴間
                    <br />
                    TOTO電腦免治馬桶
                    <br />
                    TOTO衛浴系統
                    <br />
                    Malin + Goetz
                    <br />
                    沐浴用品
                    <br />
                    吹風機
                    <br />
                    浴室暖燈
                  </p>
                </div>
                <div className="ocean_other">
                  <p className="ocean_othertitle">其他設備</p>
                  <p className="ocean_othertext">
                    一大床 (200*200cm)
                    <br />
                    65吋電視
                    <br />
                    舒眠級睡床及寢具
                    <br />
                    電子保險箱
                    <br />
                    全身鏡
                    <br />
                    熨斗及燙衣板
                    <br />
                    沙發
                  </p>
                </div>
              </div>
            </div>
            <div className="ocean_introduceicon">
              <figure>
                <img src="img/lodging/icon/cotton_swabs.png" alt="" />
                <fieldset>棉花棒</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/electric_kettle.png" alt="" />
                <fieldset>熱水壺</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/bed.png" alt="" />
                <fieldset>舒眠床</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/toothbrush.png" alt="" />
                <fieldset>牙膏牙刷</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/television.png" alt="" />
                <fieldset>65寸電視</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/couch.png" alt="" />
                <fieldset>沙發</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/iron_table.png" alt="" />
                <fieldset>熨斗</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/slippers.png" alt="" />
                <fieldset>拖鞋</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/foam.png" alt="" />
                <fieldset>沐浴用品</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/hair_comb.png" alt="" />
                <fieldset>梳子</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/hair_dryer.png" alt="" />
                <fieldset>吹風機</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/towel.png" alt="" />
                <fieldset>毛巾</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/mirror.png" alt="" />
                <fieldset>全身鏡</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/safe_box.png" alt="" />
                <fieldset>保險箱</fieldset>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="lodging_ice">
        <img
          src="img/lodging/icefield_style/ice_style01.jpeg"
          alt=""
          className="lodging_iceimg"
          ref={iceimg}
        />
        <div
          className="lodging_iceimgwrap"
          style={{ display: icebox === 0 && "none" }}
        >
          <div className="lodging_iceimg1">
            <img
              src="img/lodging/icefield_style/ice_style01.jpeg"
              alt=""
              onClick={() => {
                iceimg.current.src =
                  "img/lodging/icefield_style/ice_style01.jpeg";
              }}
            />
          </div>
          <div className="lodging_iceimg2">
            <img
              src="img/lodging/icefield_style/ice_style02.jpeg"
              alt=""
              onClick={() => {
                iceimg.current.src =
                  "img/lodging/icefield_style/ice_style02.jpeg";
              }}
            />
          </div>
          <div className="lodging_iceimg3">
            <img
              src="img/lodging/icefield_style/ice_style03.jpeg"
              alt=""
              onClick={() => {
                iceimg.current.src =
                  "img/lodging/icefield_style/ice_style03.jpeg";
              }}
            />
          </div>
        </div>
        <span className="lodging_icename">IceField Style</span>
        <div
          className="lodging_icebox"
          style={{ display: icebox === 1 && "none" }}
        >
          <div className="lodging_icewrap">
            <div className="lodging_icetitle">
              <h4>IceField Style</h4>
              <h1>冰原3人房型</h1>
              <div className="lodging_iceprice">
                <p>房間定價</p>
                <h3>
                  <span>NT$</span>4500
                </h3>
              </div>
            </div>
            <div className="lodging_iceline"></div>
            <div className="lodging_icelist1">
              <p>坪數</p>
              <p>15坪</p>
            </div>
            <div className="lodging_icelist2">
              <p>入住人數</p>
              <p>3人</p>
            </div>
            <div className="lodging_icelist3">
              <p>房數</p>
              <p>10房</p>
            </div>
            <button className="btn lodging_icedetailbtn" onClick={icePush}>
              更多細節
            </button>
          </div>
        </div>

        {/* click 冰原房 */}
        <div className="lodging_iceboxclick">
          <div
            className="lodging_icebox"
            style={{ display: icebox === 0 && "none" }}
          >
            <div className="lodging_icewrap">
              <div className="lodging_icetitle">
                <h4>IceField Style</h4>
                <h1>冰原3人房型</h1>
                <div className="lodging_iceprice">
                  <p>房間定價</p>
                  <h3>
                    <span>NT$</span>
                    {4500 * icecount}
                  </h3>
                </div>
              </div>
              <div className="lodging_iceamount">
                <button className="btn lodging_iceminus" onClick={redicecount}>
                  <i class="fas fa-minus"></i>
                </button>
                <input
                  type="text"
                  value={icecount}
                  className="lodging_icevalue"
                />
                <button className="btn lodging_iceplus" onClick={addicecount}>
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <input
                type="date"
                placeholder="入住日期"
                className="lodging_iceincheck"
              ></input>
              <input
                type="date"
                placeholder="入住日期"
                className="lodging_iceincheck"
              ></input>
              <button className="btn icereservation">預約訂房</button>
            </div>
          </div>
        </div>

        {/* click 冰原房 */}
      </div>

      <div className="container mb_container">
        <div
          className="lodging_iceboxdetail"
          style={{ height: icebox === 1 && "100vh" }}
        >
          <div className="lodging_icedetail">
            <div className="ice_introducebox">
              <div className="ice_introduce">
                <h2>房型簡介</h2>
                <Link to="">
                  <div className="ice_score">
                    <p>9.3</p>
                  </div>
                </Link>
                <Link to="">
                  <p>15則評論</p>
                </Link>
              </div>
              <div className="ice_introducetext">
                10坪大的空間，寬敞舒適，有一大床與二單床可供選擇。進入客房，映入眼簾的是蔚藍海岸的地毯及船艙造型的圓形海魚掛畫，浴室內獨特的圓形大鏡面及乾濕分離的衛浴設計，讓人沉浸在海底船艙的冒險遐想之中。
              </div>
              <h2>房型設備</h2>
              <div className="ice_equipment">
                <div className="ice_bath">
                  <p className="ice_bathtitle">浴室設備</p>
                  <p className="ice_bathtext">
                    浴缸、淋浴間
                    <br />
                    TOTO電腦免治馬桶
                    <br />
                    TOTO衛浴系統
                    <br />
                    Malin + Goetz
                    <br />
                    沐浴用品
                    <br />
                    吹風機
                    <br />
                    浴室暖燈
                  </p>
                </div>
                <div className="ice_other">
                  <p className="ice_othertitle">其他設備</p>
                  <p className="ice_othertext">
                    一大床 (200*200cm)
                    <br />
                    65吋電視
                    <br />
                    舒眠級睡床及寢具
                    <br />
                    電子保險箱
                    <br />
                    全身鏡
                    <br />
                    熨斗及燙衣板
                    <br />
                    沙發
                  </p>
                </div>
              </div>
            </div>
            <div className="ice_introduceicon">
              <figure>
                <img src="img/lodging/icon/cotton_swabs.png" alt="" />
                <fieldset>棉花棒</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/electric_kettle.png" alt="" />
                <fieldset>熱水壺</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/bed.png" alt="" />
                <fieldset>舒眠床</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/toothbrush.png" alt="" />
                <fieldset>牙膏牙刷</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/television.png" alt="" />
                <fieldset>65寸電視</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/couch.png" alt="" />
                <fieldset>沙發</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/iron_table.png" alt="" />
                <fieldset>熨斗</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/slippers.png" alt="" />
                <fieldset>拖鞋</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/foam.png" alt="" />
                <fieldset>沐浴用品</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/hair_comb.png" alt="" />
                <fieldset>梳子</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/hair_dryer.png" alt="" />
                <fieldset>吹風機</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/towel.png" alt="" />
                <fieldset>毛巾</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/mirror.png" alt="" />
                <fieldset>全身鏡</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/safe_box.png" alt="" />
                <fieldset>保險箱</fieldset>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="lodging_nocturnal">
        <img
          src="img/lodging/nocturnal_style/nocturnal_style01.jpeg"
          alt=""
          className="lodging_nocturnalimg"
          ref={nocturnalimg}
        />
        <div
          className="lodging_nocturnalimgwrap"
          style={{ display: nocturnalbox === 0 && "none" }}
        >
          <div className="lodging_nocturnalimg1">
            <img
              src="img/lodging/nocturnal_style/nocturnal_style01.jpeg"
              alt=""
              onClick={() => {
                nocturnalimg.current.src =
                  "img/lodging/nocturnal_style/nocturnal_style01.jpeg";
              }}
            />
          </div>
          <div className="lodging_nocturnalimg2">
            <img
              src="img/lodging/nocturnal_style/nocturnal_style02.jpeg"
              alt=""
              onClick={() => {
                nocturnalimg.current.src =
                  "img/lodging/nocturnal_style/nocturnal_style02.jpeg";
              }}
            />
          </div>
          <div className="lodging_nocturnalimg3">
            <img
              src="img/lodging/nocturnal_style/nocturnal_style03.jpeg"
              alt=""
              onClick={() => {
                nocturnalimg.current.src =
                  "img/lodging/nocturnal_style/nocturnal_style03.jpeg";
              }}
            />
          </div>
        </div>
        <span className="lodging_nocturnalname">Nocturnal Style</span>
        <div
          className="lodging_nocturnalbox"
          style={{ display: nocturnalbox === 1 && "none" }}
        >
          <div className="lodging_nocturnalwrap">
            <div className="lodging_nocturnaltitle">
              <h4>Nocturnal Style</h4>
              <h1>夜行4人房型</h1>
              <div className="lodging_nocturnalprice">
                <p>房間定價</p>
                <h3>
                  <span>NT$</span>5500
                </h3>
              </div>
            </div>
            <div className="lodging_nocturnalline"></div>
            <div className="lodging_nocturnallist1">
              <p>坪數</p>
              <p>22坪</p>
            </div>
            <div className="lodging_nocturnallist2">
              <p>入住人數</p>
              <p>4人</p>
            </div>
            <div className="lodging_nocturnallist3">
              <p>房數</p>
              <p>10房</p>
            </div>
            <button
              className="btn lodging_nocturnaldetailbtn"
              onClick={nocturnalPush}
            >
              更多細節
            </button>
          </div>
        </div>

        {/* click 夜行房 */}
        <div className="lodging_nocturnalboxclick">
          <div
            className="lodging_nocturnalbox"
            style={{ display: nocturnalbox === 0 && "none" }}
          >
            <div className="lodging_nocturnalwrap">
              <div className="lodging_nocturnaltitle">
                <h4>Nocturnal Style</h4>
                <h1>夜行4人房型</h1>
                <div className="lodging_nocturnalprice">
                  <p>房間定價</p>
                  <h3>
                    <span>NT$</span>
                    {5500 * nocturnalcount}
                  </h3>
                </div>
              </div>
              <div className="lodging_nocturnalamount">
                <button
                  className="btn lodging_nocturnalminus"
                  onClick={rednocturnalcount}
                >
                  <i class="fas fa-minus"></i>
                </button>
                <input
                  type="text"
                  value={nocturnalcount}
                  className="lodging_nocturnalvalue"
                />
                <button
                  className="btn lodging_nocturnalplus"
                  onClick={addnocturnalcount}
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <input
                type="date"
                placeholder="入住日期"
                className="lodging_nocturnalincheck"
              ></input>
              <input
                type="date"
                placeholder="入住日期"
                className="lodging_nocturnalincheck"
              ></input>
              <button className="btn nocturnalreservation">預約訂房</button>
            </div>
          </div>
        </div>

        {/* click 夜行房 */}
      </div>

      <div className="container mb_container">
        <div
          className="lodging_nocturnalboxdetail"
          style={{ height: nocturnalbox === 1 && "100vh" }}
        >
          <div className="lodging_nocturnaldetail">
            <div className="nocturnal_introducebox">
              <div className="nocturnal_introduce">
                <h2>房型簡介</h2>
                <Link to="">
                  <div className="nocturnal_score">
                    <p>9.3</p>
                  </div>
                </Link>
                <Link to="">
                  <p>15則評論</p>
                </Link>
              </div>
              <div className="nocturnal_introducetext">
                10坪大的空間，寬敞舒適，有一大床與二單床可供選擇。進入客房，映入眼簾的是蔚藍海岸的地毯及船艙造型的圓形海魚掛畫，浴室內獨特的圓形大鏡面及乾濕分離的衛浴設計，讓人沉浸在海底船艙的冒險遐想之中。
              </div>
              <h2>房型設備</h2>
              <div className="nocturnal_equipment">
                <div className="nocturnal_bath">
                  <p className="nocturnal_bathtitle">浴室設備</p>
                  <p className="nocturnal_bathtext">
                    浴缸、淋浴間
                    <br />
                    TOTO電腦免治馬桶
                    <br />
                    TOTO衛浴系統
                    <br />
                    Malin + Goetz
                    <br />
                    沐浴用品
                    <br />
                    吹風機
                    <br />
                    浴室暖燈
                  </p>
                </div>
                <div className="nocturnal_other">
                  <p className="nocturnal_othertitle">其他設備</p>
                  <p className="nocturnal_othertext">
                    一大床 (200*200cm)
                    <br />
                    65吋電視
                    <br />
                    舒眠級睡床及寢具
                    <br />
                    電子保險箱
                    <br />
                    全身鏡
                    <br />
                    熨斗及燙衣板
                    <br />
                    沙發
                  </p>
                </div>
              </div>
            </div>
            <div className="nocturnal_introduceicon">
              <figure>
                <img src="img/lodging/icon/cotton_swabs.png" alt="" />
                <fieldset>棉花棒</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/electric_kettle.png" alt="" />
                <fieldset>熱水壺</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/bed.png" alt="" />
                <fieldset>舒眠床</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/toothbrush.png" alt="" />
                <fieldset>牙膏牙刷</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/television.png" alt="" />
                <fieldset>65寸電視</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/couch.png" alt="" />
                <fieldset>沙發</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/iron_table.png" alt="" />
                <fieldset>熨斗</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/slippers.png" alt="" />
                <fieldset>拖鞋</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/foam.png" alt="" />
                <fieldset>沐浴用品</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/hair_comb.png" alt="" />
                <fieldset>梳子</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/hair_dryer.png" alt="" />
                <fieldset>吹風機</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/towel.png" alt="" />
                <fieldset>毛巾</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/mirror.png" alt="" />
                <fieldset>全身鏡</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/safe_box.png" alt="" />
                <fieldset>保險箱</fieldset>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="lodging_tropical">
        <img
          src="img/lodging/tropical_style/tropical_style01.jpeg"
          alt=""
          className="lodging_tropicalimg"
          ref={tropicalimg}
        />
        <div
          className="lodging_tropicalimgwrap"
          style={{ display: tropicalbox === 0 && "none" }}
        >
          <div className="lodging_tropicalimg1">
            <img
              src="img/lodging/tropical_style/tropical_style01.jpeg"
              alt=""
              onClick={() => {
                tropicalimg.current.src =
                  "img/lodging/tropical_style/tropical_style01.jpeg";
              }}
            />
          </div>
          <div className="lodging_tropicalimg2">
            <img
              src="img/lodging/tropical_style/tropical_style02.jpeg"
              alt=""
              onClick={() => {
                tropicalimg.current.src =
                  "img/lodging/tropical_style/tropical_style02.jpeg";
              }}
            />
          </div>
          <div className="lodging_tropicalimg3">
            <img
              src="img/lodging/tropical_style/tropical_style03.jpeg"
              alt=""
              onClick={() => {
                tropicalimg.current.src =
                  "img/lodging/tropical_style/tropical_style03.jpeg";
              }}
            />
          </div>
        </div>
        <span className="lodging_tropicalname">Tropical Style</span>

        <div
          className="lodging_tropicalbox"
          style={{ display: tropicalbox === 1 && "none" }}
        >
          <div className="lodging_tropicalwrap">
            <div className="lodging_tropicaltitle">
              <h4>Tropical Style</h4>
              <h1>熱帶5人房型</h1>
              <div className="lodging_tropicalprice">
                <p>房間定價</p>
                <h3>
                  <span>NT$</span>6500
                </h3>
              </div>
            </div>
            <div className="lodging_tropicalline"></div>
            <div className="lodging_tropicallist1">
              <p>坪數</p>
              <p>30坪</p>
            </div>
            <div className="lodging_tropicallist2">
              <p>入住人數</p>
              <p>5人</p>
            </div>
            <div className="lodging_tropicallist3">
              <p>房數</p>
              <p>10房</p>
            </div>
            <button
              className="btn lodging_tropicaldetailbtn"
              onClick={tropicalPush}
            >
              更多細節
            </button>
          </div>
        </div>

        {/* click 熱帶房 */}
        <div className="lodging_tropicalboxclick">
          <div
            className="lodging_tropicalbox"
            style={{ display: tropicalbox === 0 && "none" }}
          >
            <div className="lodging_tropicalwrap">
              <div className="lodging_tropicaltitle">
                <h4>Tropical Style</h4>
                <h1>熱帶5人房型</h1>
                <div className="lodging_tropicalprice">
                  <p>房間定價</p>
                  <h3>
                    <span>NT$</span>
                    {6500 * tropicalcount}
                  </h3>
                </div>
              </div>
              <div className="lodging_tropicalamount">
                <button
                  className="btn lodging_tropicalminus"
                  onClick={redtropicalcount}
                >
                  <i class="fas fa-minus"></i>
                </button>
                <input
                  type="text"
                  value={tropicalcount}
                  className="lodging_tropicalvalue"
                />
                <button
                  className="btn lodging_tropicalplus"
                  onClick={addtropicalcount}
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <input
                type="date"
                placeholder="入住日期"
                className="lodging_tropicalincheck"
              ></input>
              <input
                type="date"
                placeholder="退房日期"
                className="lodging_tropicaloutcheck"
              ></input>
              <button className="btn tropicalreservation">預約訂房</button>
            </div>
          </div>
        </div>

        {/* click 熱帶房 */}
      </div>

      <div className="container mb_container">
        <div
          className="lodging_tropicalboxdetail"
          style={{ height: tropicalbox === 1 && "100vh" }}
        >
          <div className="lodging_tropicaldetail">
            <div className="tropical_introducebox">
              <div className="tropical_introduce">
                <h2>房型簡介</h2>
                <Link to="">
                  <div className="tropical_score">
                    <p>9.3</p>
                  </div>
                </Link>
                <Link to="">
                  <p>15則評論</p>
                </Link>
              </div>
              <div className="tropical_introducetext">
                10坪大的空間，寬敞舒適，有一大床與二單床可供選擇。進入客房，映入眼簾的是蔚藍海岸的地毯及船艙造型的圓形海魚掛畫，浴室內獨特的圓形大鏡面及乾濕分離的衛浴設計，讓人沉浸在海底船艙的冒險遐想之中。
              </div>
              <h2>房型設備</h2>
              <div className="tropical_equipment">
                <div className="tropical_bath">
                  <p className="tropical_bathtitle">浴室設備</p>
                  <p className="tropical_bathtext">
                    浴缸、淋浴間
                    <br />
                    TOTO電腦免治馬桶
                    <br />
                    TOTO衛浴系統
                    <br />
                    Malin + Goetz
                    <br />
                    沐浴用品
                    <br />
                    吹風機
                    <br />
                    浴室暖燈
                  </p>
                </div>
                <div className="tropical_other">
                  <p className="tropical_othertitle">其他設備</p>
                  <p className="tropical_othertext">
                    一大床 (200*200cm)
                    <br />
                    65吋電視
                    <br />
                    舒眠級睡床及寢具
                    <br />
                    電子保險箱
                    <br />
                    全身鏡
                    <br />
                    熨斗及燙衣板
                    <br />
                    沙發
                  </p>
                </div>
              </div>
            </div>
            <div className="tropical_introduceicon">
              <figure>
                <img src="img/lodging/icon/cotton_swabs.png" alt="" />
                <fieldset>棉花棒</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/electric_kettle.png" alt="" />
                <fieldset>熱水壺</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/bed.png" alt="" />
                <fieldset>舒眠床</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/toothbrush.png" alt="" />
                <fieldset>牙膏牙刷</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/television.png" alt="" />
                <fieldset>65寸電視</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/couch.png" alt="" />
                <fieldset>沙發</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/iron_table.png" alt="" />
                <fieldset>熨斗</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/slippers.png" alt="" />
                <fieldset>拖鞋</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/foam.png" alt="" />
                <fieldset>沐浴用品</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/hair_comb.png" alt="" />
                <fieldset>梳子</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/hair_dryer.png" alt="" />
                <fieldset>吹風機</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/towel.png" alt="" />
                <fieldset>毛巾</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/mirror.png" alt="" />
                <fieldset>全身鏡</fieldset>
              </figure>
              <figure>
                <img src="img/lodging/icon/safe_box.png" alt="" />
                <fieldset>保險箱</fieldset>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lodging;
