import React from "react";
import "./products.scss";

function products() {
  return (
    <>
      <div className="productContainer">
        <div className="slider">
          <div className="mainPic">
            <div className="triangle">
              <div className="adTitle">
                <h1>2021.秋季重新販售！</h1>
                <span>Bisque Design</span>
                <span className="titlespan">極佳觸感.親膚材質</span>
              </div>
              <img
                className="white"
                src={require("./imgs/Sliderpic1.png")}
                alt=""
              />
            </div>
            <img
              className="main"
              src={require("./imgs/Sliderpic.png")}
              alt=""
            />
            <div className="iconGroup">
              <i className="fas fa-circle"></i>
              <i className="fas fa-circle"></i>
              <i className="fas fa-circle"></i>
            </div>
            <div className="adNew">
              <div className="firstSpan">
                <span className="span-1">WH</span>
                <span className="span-2">AT's</span>
              </div>
              <div className="secondSpan">
                <span className="span-2">N</span>
                <span className="span-1">EW</span>
              </div>
            </div>
          </div>
          <div className="sliderButtom">
            <button>
              <span>View More</span>
              <span className="span2">⟶</span>
            </button>
          </div>
        </div>
        <div className="typeGroup">
          <div className="typeTitle">
            <h2>依種類選擇</h2>
          </div>
          <div className="typeSelect">
            <div className="type">
              <img src="" alt="" />
              <span>絨毛玩具</span>
            </div>
            <div className="type">
              <img src="" alt="" />
              <span>擬真模型</span>
            </div>
            <div className="type">
              <img src="" alt="" />
              <span>嬰兒背巾</span>
            </div>
            <div className="type">
              <img src="" alt="" />
              <span>文具用品</span>
            </div>
            <div className="type">
              <img src="" alt="" />
              <span>填充布偶</span>
            </div>
            <div className="type">
              <img src="" alt="" />
              <span>兒童衣飾</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default products;
