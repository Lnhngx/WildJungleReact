import React from "react";
import { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import "./scss/productsdetail.scss";

import Productsbackground from "./components/productsbackground";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCarousel from "./components/productCarousel";
import { useEffect } from "react";
import * as Scroll from "react-scroll";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import DetailPicture from "./components/detailPicture";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
} from "react-share";
import { EmailIcon, FacebookIcon, LineIcon, TwitterIcon } from "react-share";
import TheReview from "./components/theReview";
import Form from "./components/Form";
import { useCart } from "../carts/utils/useCart";

function ProductsDetail(props) {
  const [selection, setSelection] = useState("");
  //子傳父
  const [products, setProducts] = useState([]);
  const [spec, setSpec] = useState([]);
  const [pic, setPic] = useState([]);
  const [label, setLabel] = useState([]);
  const [review, setReview] = useState([]);
  const [member, setMember] = useState([]);

  // const [datetime, setDatetime] = useState(
  //   new Date()
  //     .toLocaleString({ city: "TAIWAN", timeZone: "Asia/Taipei" })
  //     .slice(0, 19)
  //     .replace("T", " ")
  // );

  const [tabIndex, setTabIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/products", { method: "GET" }),
      fetch("http://localhost:4000/productsspec", { method: "GET" }),
      fetch("http://localhost:4000/productspic", { method: "GET" }),
      fetch("http://localhost:4000/productslabel", { method: "GET" }),
      fetch("http://localhost:4000/productsreview", { method: "GET" }),
      fetch("http://localhost:4000/productsmemberreview", { method: "GET" }),
    ])
      .then(([res1, res2, res3, res4, res5, res6]) =>
        Promise.all([
          res1.json(),
          res2.json(),
          res3.json(),
          res4.json(),
          res5.json(),
          res6.json(),
        ])
      )
      .then(([data1, data2, data3, data4, data5, data6]) =>
        Promise.all([
          setProducts(data1),
          setSpec(data2),
          setPic(data3),
          setLabel(data4),
          setReview(data5),
          setMember(data6),
        ])
      )
      .then(console.log("OK"))
      .catch((error) => {
        console.log("錯誤了", error);
      });
  }, []);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Sid = searchParams.get("id");

  // 利用網址上的id參數找資料
  const product = products[Sid - 1];
  const specs = spec[Sid - 1];
  const pics = pic[Sid - 1];
  const labels = label.filter((v) => v.ProductsLabel === parseInt(Sid));
  const reviews = review.filter((v) => v.ProductsReview === parseInt(Sid));
  const reviewStar = reviews.map((review, i) => {
    return parseInt(review.ReviewStar);
  });

  let starValue = 0;
  for (let i = 0; i < reviewStar.length; i++) {
    starValue += reviewStar[i];
  }
  starValue /= reviewStar.length;


  const click = function () {
    //console.log(props);
    console.log();
  };

  const scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("alan_information", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });
    goToContainer
      .then(() =>
        scroller.scrollTo("alan_tab2", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          containerId: "alan_information",
        })
      )
      .then(() => {
        const alan_tab2 = document.querySelector(".alan_tab2");
        alan_tab2.click();
      });
  };



  return (
    <>
      <style jsx="true">{`
        ::-webkit-scrollbar {
          width: 0 !important;
        }
      `}</style>

      <div className="alan_bread">
        <ul className="alan_navbread">
          <li>
            <Link to="/products">
              <div className="alan_return"></div>
            </Link>
          </li>
          <li>
            <Link to="">Item1 |</Link>
          </li>
          <li>
            <Link to="">Item2 |</Link>
          </li>
          <li>
            <Link to="">Item3 |</Link>
          </li>
          <li>
            <Link to="">Item4 |</Link>
          </li>
          <li>
            <Link to="">Item5 |</Link>
          </li>
          <li>
            <Link to="">Item6</Link>
          </li>
        </ul>
      </div>

      {product && specs && pics && labels && reviews && member && (
        <>
          <div className="alan_detail">
            <div className="alan_productsdetail">
              {/* <div className="alan_main_product_img">
            <img src={require("./imgs/cloth-2 3.png")} alt="" />
          </div> */}
              <ProductCarousel pic={pic} setPic={setPic} />
            </div>
            <div className="alan_productTitle">
              <div className="alan_product_star">
                <div className="alan_star">
                  {Array.from({ length: 5 }, (v, i) => (
                    <span key={i} style={{ color: "#eb5c37" }}>
                      {Math.round(starValue) === i ? "\u2606" : "\u2605"}
                    </span>
                  ))}
                </div>
                <div className="alan_comment" onClick={scrollToWithContainer}>
                  <span>評分獲得{starValue.toFixed(1)}/發表評論</span>
                </div>
              </div>
              <div className="alan_productName">
                <span className="alan_englishName">
                  {product.ProductsVendor}
                </span>
                <span className="alan_chineseName">{product.ProductsName}</span>
              </div>
              <div className="alan_price">
                <div className="alan_product_reserve">
                  <span>
                    商品規格:{specs.productsLength}cm*{specs.productsWidth}cm*
                    {specs.productsHeight}
                    cm,重
                    {specs.productsWeight}克
                  </span>
                  <span>庫存餘剩{specs.productsMany}個</span>
                </div>
                <span className="alan_product_price">
                  ${product.ProductsPrice}
                </span>
              </div>
              <div className="alan_productButtonGroup">
                <div className="alan_quantityGroup">
                  <div className="alan_quantity">
                    <button
                      onClick={() => (total < 1 ? 1 : setTotal(total - 1))}
                    >
                      -
                    </button>
                    <span>{total + 1}</span>
                    <button onClick={() => setTotal(total + 1)}>+</button>
                  </div>
                  <div className="alan_hashlikedesk">
                    <Link to="">
                      <i className="fas fa-heart"></i> 加入我的最愛
                    </Link>
                    {/* <Link to="">
                      <i className="fas fa-plus"></i> 加入商品比較
                    </Link> */}
                  </div>
                </div>
                <div className="alan_buy">
                  <button onClick={() => {
                    const item = { sid: Sid, image: pic, name: product.ProductsName, price: product.ProductsPrice, quantity: total }
                    addItem(item);
                    console.log(item);
                  }}>
                    <i className="fas fa-shopping-cart"></i> 加入購物車
                  </button>
                  <button onClick={click}>直接購買</button>
                </div>
              </div>
              <div className="alan_hash">
                <div className="alan_hushtag">
                  <div className="alan_tagGroup">
                    {labels.map((label, i) => {
                      return <span key={i}>#{label.LabelName}</span>;
                    })}
                  </div>
                  <div className="alan_tagIcon">
                    <a href="#/">
                      <FacebookShareButton
                        url={"https://github.com/Lnhngx/WildJungleReact"}
                        quote={"我在WildJungle發現好東西！"}
                        hashtag={"#WildJungle"}
                        description={"aiueo"}
                      >
                        <FacebookIcon size={24} />
                      </FacebookShareButton>
                    </a>
                    <a href="#/">
                      <LineShareButton
                        url={"https://github.com/Lnhngx/WildJungleReact"}
                        title={"我在WildJungle發現好東西！"}
                      >
                        <LineIcon size={24} />
                      </LineShareButton>
                    </a>
                    <a href="#/">
                      <EmailShareButton
                        url={"https://github.com/Lnhngx/WildJungleReact"}
                        body={"我在WildJungle發現好東西！"}
                        subject={"#WildJungle"}
                      >
                        <EmailIcon size={24} />
                      </EmailShareButton>
                    </a>
                    <a href="#/">
                      <TwitterShareButton
                        url={"https://github.com/Lnhngx/WildJungleReact"}
                      >
                        <TwitterIcon size={24} />
                      </TwitterShareButton>
                    </a>
                  </div>
                </div>
                <div className="alan_hushlike">
                  <Link to="">
                    <i className="fas fa-heart"></i> 加入我的最愛
                  </Link>
                  {/* <Link to="">
                    <i className="fas fa-plus"></i> 加入商品比較
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          <div className="alan_information" id={"alan_information"}>
            <Tabs
              className={"alan_tabs"}
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className={"alan_tablist"} id={"alan_tablist"}>
                <Tab className={"alan_tab1"}>
                  <div className="alan_space"></div>
                  <span>商品資訊</span>
                </Tab>
                <Tab className={"alan_tab2"}>
                  <div className="alan_space"></div>
                  <span>評論</span>
                </Tab>
              </TabList>
              <TabPanel>
                <div className="alan_info_page1">
                  <div className="alan_detail_reserve">
                    <span>
                      商品規格:{specs.productsLength}cm*{specs.productsWidth}cm*
                      {specs.productsHeight}
                      cm,重
                      {specs.productsWeight}克
                    </span>
                    <span>庫存餘剩{specs.productsMany}個</span>
                  </div>
                  <div className="alan_product_info1">
                    <div className="alan_infotitle">
                      <span>商品</span>
                      <span>詳情</span>
                    </div>
                    <div className="alan_infoContent">
                      <div className="alan_info1">
                        (1) 客製商品採小量客製接單，此產品 1 組即可訂製。
                      </div>
                      <div className="alan_info1">
                        (2)完成結帳且確認設計圖檔後，從開始製作到寄出商品為十至十三個工作日。
                      </div>
                      <div className="alan_info1">
                        (3)「加購圖檔編排」：將您提供的圖檔做完稿排版，依據您指定的擺放位置調整排版，素材需由您提供，並酌收每圖
                        200 元的排版費用。
                      </div>
                      <div className="alan_info1">
                        (4)減少塑料對環境的傷害，重視動物與人類共存的重要性。
                        [尺寸]兒童（目標參考年齡 1 歲半至 5 歲） [材質] 100%
                        滌綸
                      </div>
                      <ul className="alan_productPic">
                        <DetailPicture pic={pic} setPic={setPic} />
                      </ul>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id={"alan_view"}>
                <div className="alan_view">
                  <div className="alan_review">評論專區</div>
                  <div className="alan_reviewInput">
                    <div className="alan_inputLeft">
                      <div className="left_title">輸入評論：</div>
                      <Form selection={selection} setSelection={setSelection} />
                    </div>
                    <div className="alan_inputRight">
                      <div className="right_title">評論回覆：</div>
                      <TheReview
                        review={review}
                        setReview={setReview}
                        member={member}
                        setMember={setMember}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </>
      )}
      <Productsbackground />
    </>
  );
}

export default ProductsDetail;
