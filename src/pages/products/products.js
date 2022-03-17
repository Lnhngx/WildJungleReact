import React from "react";
import "./scss/products.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Productsbackground from "./components/productsbackground";
import JqueryProduct from "./components/jqueryProduct"
import EmailControl from "./components/theEmailControl";



const Range = Slider;

function Products() {
  const [rangevalue, setRangevalue] = useState(1);

  // React.useEffect(() => {
  //   const adTitle = document.querySelector(".adTitle");
  //   adTitle.addEventListener("click", () => {
  //     console.log(1);
  //   });
 
  //   return () => {
  //     adTitle.removeEventListener("click", () => {
  //       console.log(1);
  //     });
  //   };
  // }, []);

  return (
    <>
      <Productsbackground />
      <div className="productContainer">
        <div className="slider">
          <div className="mainPic">
            <div className="triangle">
              <div className="adTitle">
                <p>
                  <span className="alan_letter">2</span>
                  <span className="alan_letter">0</span>
                  <span className="alan_letter">2</span>
                  <span className="alan_letter">2</span>
                  <span className="alan_letter">.</span>
                  <span className="alan_letter">春</span>
                  <span className="alan_letter">季</span>
                  <span className="alan_letter">重</span>
                  <span className="alan_letter">新</span>
                  <span className="alan_letter">販</span>
                  <span className="alan_letter">售</span>
                  <span className="alan_letter">！</span>
                </p>
                <span>Bisque Design</span>
                <span className="titlespan">極佳觸感.親膚材質</span>
              </div>
              <img
                className="white"
                src={require("./imgs/Sliderpic1.png")}
                alt=""
              />
            </div>
            <JqueryProduct />
            {/* <img className="main" src="img/product/Sliderpic.jpeg" alt="" /> */}
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
            <div className="type type1">
              <div className="typeimg typeimg2"></div>
              <span>絨毛玩具</span>
            </div>
            <div className="type">
              <div className="typeimg typeimg3"></div>
              <span>擬真模型</span>
            </div>
            <div className="type type1">
              <div className="typeimg"></div>
              <span>嬰兒背巾</span>
            </div>
            <div className="type">
              <div className="typeimg typeimg5"></div>
              <span>文具用品</span>
            </div>
            <div className="type type1">
              <div className="typeimg typeimg4"></div>
              <span>填充布偶</span>
            </div>
            <div className="type">
              <div className="typeimg typeimg1"></div>
              <span>兒童衣飾</span>
            </div>
          </div>
        </div>
        <div className="productItem">
          <div className="filter">
            <div className="inputwithIcon">
              <input type="search" name="" id="" placeholder="Search" />
              <i className="fas fa-search"></i>
            </div>
            <div className="selectGroup">
              <select name="" id="">
                <option value="">排序方式</option>
              </select>
              <select name="" id="">
                <option value="">依商品分類</option>
              </select>
              <select name="" id="">
                <option value="">依品牌分類</option>
              </select>
            </div>
            <div className="dragableinput">
              <span>依價格 ${rangevalue}以下</span>
              <Range
                className="alanslider"
                marks={{
                  1: `$ 1`,
                  3000: `$ 3000`,
                }}
                min={1}
                max={3000}
                onChange={setRangevalue}
                handleStyle={{
                  backgroundColor: "#eb5c37",
                  opacity: 1,
                  border: "0",
                  boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
                }}
                railStyle={{
                  height: "5px",
                  backgroundColor: "gray",
                }}
                trackStyle={{
                  height: "5px",
                  backgroundColor: "black",
                }}
                dotStyle={{
                  border: "0",
                  backgroundColor: "#eb5c37",
                }}
              />
            </div>
            <div className="filterIcon">
              <a href="#/">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#/">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#/">
                <i className="fab fa-google-plus-square"></i>
              </a>
              <a href="#/">
                <i className="fab fa-blogger"></i>
              </a>
            </div>
          </div>
          <div className="productgroup">
            <div className="productCard">
              <Link to="">
                <div className="cardImg">
                  <img src="img/product/cloth-2.png" alt="" />
                </div>
              </Link>
              <div className="cardName">
                <Link className="cardTitle" to="">
                  <p>法蘭絨動物兒童披風</p>
                  <span>Animal Moco</span>
                  <span>$799</span>
                </Link>
                <div className="cardIcon">
                  <Link to="">
                    <i className="fas fa-heart"></i>
                  </Link>
                  <Link to="">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="productCard">
              <Link to="">
                <div className="cardImg">
                  <img src="img/product/cloth-2.png" alt="" />
                </div>
              </Link>
              <div className="cardName">
                <Link className="cardTitle" to="">
                  <p>法蘭絨動物兒童披風</p>
                  <span>Animal Moco</span>
                  <span>$799</span>
                </Link>
                <div className="cardIcon">
                  <Link to="">
                    <i className="fas fa-heart"></i>
                  </Link>
                  <Link to="">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="productCard">
              <Link to="">
                <div className="cardImg">
                  <img src="img/product/cloth-2.png" alt="" />
                </div>
              </Link>

              <div className="cardName">
                <Link className="cardTitle" to="">
                  <p>法蘭絨動物兒童披風</p>
                  <span>Animal Moco</span>
                  <span>$799</span>
                </Link>
                <div className="cardIcon">
                  <Link to="">
                    <i className="fas fa-heart"></i>
                  </Link>
                  <Link to="">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="productCard">
              <Link to="">
                <div className="cardImg">
                  <img src="img/product/cloth-2.png" alt="" />
                </div>
              </Link>

              <div className="cardName">
                <Link className="cardTitle" to="">
                  <p>法蘭絨動物兒童披風</p>
                  <span>Animal Moco</span>
                  <span>$799</span>
                </Link>
                <div className="cardIcon">
                  <Link to="">
                    <i className="fas fa-heart"></i>
                  </Link>
                  <Link to="">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="productCard">
              <Link to="">
                <div className="cardImg">
                  <img src="img/product/cloth-2.png" alt="" />
                </div>
              </Link>

              <div className="cardName">
                <Link className="cardTitle" to="">
                  <p>法蘭絨動物兒童披風</p>
                  <span>Animal Moco</span>
                  <span>$799</span>
                </Link>
                <div className="cardIcon">
                  <Link to="">
                    <i className="fas fa-heart"></i>
                  </Link>
                  <Link to="">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="productCard">
              <Link to="">
                <div className="cardImg">
                  <img src="img/product/cloth-2.png" alt="" />
                </div>
              </Link>
              <div className="cardName">
                <Link className="cardTitle" to="">
                  <p>法蘭絨動物兒童披風</p>
                  <span>Animal Moco</span>
                  <span>$799</span>
                </Link>
                <div className="cardIcon">
                  <Link to="">
                    <i className="fas fa-heart"></i>
                  </Link>
                  <Link to="">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="productCard">
              <Link to="">
                <div className="cardImg">
                  <img src="img/product/cloth-2.png" alt="" />
                </div>
              </Link>
              <div className="cardName">
                <Link className="cardTitle" to="">
                  <p>法蘭絨動物兒童披風</p>
                  <span>Animal Moco</span>
                  <span>$799</span>
                </Link>
                <div className="cardIcon">
                  <Link to="">
                    <i className="fas fa-heart"></i>
                  </Link>
                  <Link to="">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="productCard">
              <Link to="">
                <div className="cardImg">
                  <img src="img/product/cloth-2.png" alt="" />
                </div>
              </Link>
              <div className="cardName">
                <Link className="cardTitle" to="">
                  <p>法蘭絨動物兒童披風</p>
                  <span>Animal Moco</span>
                  <span>$799</span>
                </Link>
                <div className="cardIcon">
                  <Link to="">
                    <i className="fas fa-heart"></i>
                  </Link>
                  <Link to="">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmailControl />
    </>
  );
}

export default Products;
