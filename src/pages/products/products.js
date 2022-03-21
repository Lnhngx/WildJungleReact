import React, { useEffect, useRef, useState } from "react";
import "./scss/products.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";
import Productsbackground from "./components/productsbackground";
import JqueryProduct from "./components/jqueryProduct";
import EmailControl from "./components/theEmailControl";
import ProductsCard from "./components/productCard";
import SortbarPrice from "./components/SortbarPrice";
import SortbarType from "./components/SortbarType";
import SortbarVendor from "./components/SortbarVendor";
import SearchBar from "./components/Searchbar";

const Range = Slider;

function Products() {
  // 產品用的資料
  // 1. 從伺服器來的原始資料
  const [products, setProducts] = useState([]);
  // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
  const [displayProducts, setDisplayProducts] = useState([]);

  const [sortbarPrice, setSortbarPrice] = useState("");
  const [sortbarType, setSortbarType] = useState("");
  const [sortbarVendor, setSortbarVendor] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const [rangevalue, setRangevalue] = useState(1500);

  const handleSearch = (products, searchWord) => {
    let newProducts = [...products];

    if (searchWord.length) {
      newProducts = products.filter((products) => {
        return products.ProductsName.includes(searchWord);
      });
    }

    return newProducts;
  };
  const priceSlice = (products, rangevalue) => {
    let newProducts = [...products];
    if (newProducts) {
        newProducts = [...newProducts].filter(
          (a) => a.ProductsPrice <= rangevalue
        )
    }
    return newProducts;
  };

  const handleSort = (products, sortbarPrice) => {
    let newProducts = [...products];
    if (sortbarPrice === "1") {
      newProducts = [...newProducts].sort(
        (a, b) => a.ProductsPrice - b.ProductsPrice
      );
    }
    if (sortbarPrice === "2") {
      //為什麼不能console.log
      newProducts = [...newProducts].sort(
        (a, b) => b.ProductsPrice - a.ProductsPrice
      );
    }
    if (sortbarPrice === "" && newProducts.length > 0) {
      newProducts = [...newProducts].sort(
        (a, b) => a.ProductSid - b.ProductSid
      );
    }
    return newProducts;
  };

  const sortType = (products, sortbarType) => {
    let newProducts = [...products];
    if (sortbarType === "1") {
      newProducts = [...newProducts].filter((a) => a.ProductsType === 1);
    }
    if (sortbarType === "2") {
      newProducts = [...newProducts].filter((a) => a.ProductsType === 2);
    }
    if (sortbarType === "3") {
      newProducts = [...newProducts].filter((a) => a.ProductsType === 3);
    }
    if (sortbarType === "4") {
      newProducts = [...newProducts].filter((a) => a.ProductsType === 4);
    }
    if (sortbarType === "5") {
      newProducts = [...newProducts].filter((a) => a.ProductsType === 5);
    }
    if (sortbarType === "6") {
      newProducts = [...newProducts].filter((a) => a.ProductsType === 6);
    }
    if (sortbarType === "" && newProducts.length > 0) {
      newProducts = [...newProducts].sort(
        (a, b) => a.ProductSid - b.ProductSid
      );
    }
    return newProducts;
  };

  const sortVendor = (products, sortbarVendor) => {
    let newProducts = [...products];

    if (sortbarVendor === "1") {
      newProducts = [...newProducts].filter(
        (a) => a.ProductsVendor === "AnimalMoco"
      );
    }
    if (sortbarVendor === "2") {
      newProducts = [...newProducts].filter(
        (a) => a.ProductsVendor === "100+1"
      );
    }
    if (sortbarVendor === "3") {
      newProducts = [...newProducts].filter(
        (a) => a.ProductsVendor === "WildLife"
      );
    }
    if (sortbarVendor === "4") {
      newProducts = [...newProducts].filter(
        (a) => a.ProductsVendor === "HappyHorse"
      );
    }
    if (sortbarVendor === "5") {
      newProducts = [...newProducts].filter((a) => a.ProductsVendor === "mimi");
    }
    if (sortbarVendor === "6") {
      newProducts = [...newProducts].filter(
        (a) => a.ProductsVendor === "Bisque"
      );
    }
    if (sortbarVendor === "7") {
      newProducts = [...newProducts].filter(
        (a) => a.ProductsVendor === "BabtBites"
      );
    }
    if (sortbarVendor === "" && newProducts.length > 0) {
      newProducts = [...newProducts].sort(
        (a, b) => a.ProductSid - b.ProductSid
      );
    }
    return newProducts;
  };

  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
        console.log("成功獲得資料");
      })
      .catch((error) => {
        console.log("錯誤了", error);
      });
  }, []);

  useEffect(() => {
    let newProducts = [...products];
    newProducts = handleSearch(products, searchWord);
    newProducts = sortType(newProducts, sortbarType);
    newProducts = sortVendor(newProducts, sortbarVendor);
    newProducts = handleSort(newProducts, sortbarPrice);
    newProducts = priceSlice(newProducts, rangevalue);
    setDisplayProducts(newProducts);
  }, [
    searchWord,
    sortbarType,
    sortbarVendor,
    products,
    sortbarPrice,
    rangevalue,
  ]);

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
            <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
            <div className="selectGroup">
              <SortbarPrice
                sortbarPrice={sortbarPrice}
                setSortbarPrice={setSortbarPrice}
              />
              <SortbarType
                sortbarType={sortbarType}
                setSortbarType={setSortbarType}
              />
              <SortbarVendor
                sortbarVendor={sortbarVendor}
                setSortbarVendor={setSortbarVendor}
              />
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
                value={rangevalue}
                onChange={setRangevalue}
                //onAfterChange={setRangevalue}
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
            <ProductsCard products={displayProducts} />
          </div>
        </div>
      </div>
      <EmailControl />
    </>
  );
}

export default Products;
