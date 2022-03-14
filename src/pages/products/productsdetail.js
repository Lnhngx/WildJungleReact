import React from "react";
import { Link } from "react-router-dom";
import "./productsdetail.scss";
import StarRating from "./starRating";
import Productsbackground from "./productsbackground";
function ProductsDetail() {
  return (
    <>
      <style jsx="true">{`
        ::-webkit-scrollbar {
          width: 0 !important;
        }
      `}</style>
      <Productsbackground />
      <div className="alan_detail">
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
        <div className="alan_productsdetail">
          <div className="alan_product_img">
            <ul className="alan_product_img_ul">
              <li className="alan_product_img_li">
                <img src={require("./imgs/cloth-2 3.png")} alt="" />
              </li>
              <li className="alan_product_img_li">
                <img src={require("./imgs/cloth-3.png")} alt="" />
              </li>
              <li className="alan_product_img_li">
                <img src={require("./imgs/cloth-4.png")} alt="" />
              </li>
              <li className="alan_product_img_li">
                <img src={require("./imgs/cloth-5.png")} alt="" />
              </li>
              <li className="alan_product_img_li">
                <img src={require("./imgs/cloth-6.png")} alt="" />
              </li>
            </ul>
            <div className="alan_product_img_icon">01/06</div>
          </div>
        </div>
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
        <div className="alan_productTitle">
          <div className="alan_productName">
            <span className="alan_englishName">Kid’s poncho</span>
            <span className="alan_chineseName">保暖小獅王手套</span>
          </div>
          <div className="alan_price">
            <span className="alan_product_price">$790</span>
          </div>
          <div className="alan_productButtonGroup">
            <div className="alan_quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className="alan_buy">
              <button>
                <i className="fas fa-shopping-cart"></i> 加入購物車
              </button>
              <button>直接購買</button>
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
                <Link to=""><i className="fas fa-heart"></i> 加入我的最愛</Link>
                <Link to=""><i className="fas fa-plus"></i> 加入商品比較</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsDetail;
