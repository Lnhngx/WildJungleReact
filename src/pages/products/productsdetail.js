import React from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./scss/productsdetail.scss";
import StarRating from "./components/starRating";
import Productsbackground from "./components/productsbackground";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCarousel from "./components/productCarousel";
import { useEffect } from "react";

function ProductsDetail() {
  const [products, setProducts] = useState([]);
  const [spec, setSpec] = useState([]);
  const [pic, setPic] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/products", { method: "GET" }),
      fetch("http://localhost:4000/productsspec", { method: "GET" }),
      fetch("http://localhost:4000/productspic", { method: "GET" }),
    ])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json() , res3.json()]))
      .then(([data1, data2 ,data3]) =>
        Promise.all([setProducts(data1), setSpec(data2) , setPic(data3)])
      )
      .then(console.log("OK"))
      .catch((error) => {
        console.log("錯誤了", error);
      });
  }, []);

  const click = function () {
    console.log(specs.productsWidth);
  };

  const searchParams = new URLSearchParams(location.search);
  const Sid = searchParams.get("id");

  // 利用網址上的id參數找資料
  const product = products[Sid - 1];
  const specs = spec[Sid - 1];
  

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
            <Link to="">
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

      {product && specs && (
        <>
          <div className="alan_detail">
            <div className="alan_productsdetail">
              {/* <div className="alan_main_product_img">
            <img src={require("./imgs/cloth-2 3.png")} alt="" />
          </div> */}
              <ProductCarousel  pic={pic} />
            </div>
            <div className="alan_productTitle">
              <div className="alan_product_star">
                <div className="alan_star">
                  <StarRating />
                </div>
                <div className="alan_comment">
                  <Link to="">
                    <span>發表評論</span>
                  </Link>
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
                    <Link to="">
                      <i className="fas fa-plus"></i> 加入商品比較
                    </Link>
                  </div>
                </div>
                <div className="alan_buy">
                  <button>
                    <i className="fas fa-shopping-cart"></i> 加入購物車
                  </button>
                  <button onClick={click}>直接購買</button>
                </div>
              </div>
              <div className="alan_hash">
                <div className="alan_hushtag">
                  <div className="alan_tagGroup">
                    <span>#標籤名稱</span>
                    <span>#標籤名稱</span>
                    <span>#標籤名稱</span>
                    <span>#標籤名稱</span>
                    <span>#標籤名稱</span>
                    <span>#標籤名稱</span>
                  </div>
                  <div className="alan_tagIcon">
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
                <div className="alan_hushlike">
                  <Link to="">
                    <i className="fas fa-heart"></i> 加入我的最愛
                  </Link>
                  <Link to="">
                    <i className="fas fa-plus"></i> 加入商品比較
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="alan_information">
            <Tabs
              className={"alan_tabs"}
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className={"alan_tablist"}>
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
                        {/* (1) 客製商品採小量客製接單，此產品 1 組即可訂製。
                    (2)完成結帳且確認設計圖檔後，從開始製作到寄出商品為十至十三個工作日。
                    (3)
                    「加購圖檔編排」：將您提供的圖檔做完稿排版，依據您指定的擺放位置調整排版，素材需由您提供，並酌收每圖
                    200 元的排版費用。
                    (4)減少塑料對環境的傷害，重視動物與人類共存的重要性。
                    [尺寸]兒童（目標參考年齡 1 歲半至 5 歲） [材質] 100% 滌綸 */}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
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
