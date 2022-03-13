import React from "react";
import { Link } from "react-router-dom";
import "./productsdetail.scss";
import StarRating from "./starRating";

function ProductsDetail() {
  return (
    <>
      <style jsx>{`
      .alan_bread::-webkit-scrollbar {
          width: 0 !important;
        }
      `}</style>
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
                 <li className="alan_product_img_li"><img src={require("./imgs/cloth-2 3.png" )} alt="" /></li>
                 <li className="alan_product_img_li"><img src={require("./imgs/cloth-3.png" )} alt="" /></li>
                 <li className="alan_product_img_li"><img src={require("./imgs/cloth-4.png" )} alt="" /></li>
                 <li className="alan_product_img_li"><img src={require("./imgs/cloth-5.png" )} alt="" /></li>
                 <li className="alan_product_img_li"><img src={require("./imgs/cloth-6.png" )} alt="" /></li>
                </ul>
                <div className="alan_product_img_icon">01/06</div>
            </div>
        </div>
        <div className="alan_product_star">
            <div className="alan_star"><StarRating /></div>
            <div className="alan_comment"></div>
        </div>
      </div>
    </>
  );
}

export default ProductsDetail;
