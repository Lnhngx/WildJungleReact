import React from "react";
import Orderitem from "./Order_item";

function Filloutorder() {
  return (
    <>
      <div className="stan_filloutform_order">
        <div className="stan_filloutform_order_title">
          <div>訂單摘要</div>
          <div>
            <i className="fas fa-angle-down stan_arrow_icon"></i>
          </div>
        </div>
        <div className="stan_filloutform_order_content">
          <div className="stan_filloutform_order_product_title">
            <ul>
              <li></li>
              <li>商品種類</li>
              <li>商品名稱</li>
              <li>單價</li>
              <li>數量</li>
            </ul>
            <div className="stan_blackhr"></div>
          </div>
          <Orderitem />
        </div>
        <div className="stan_filloutform_order_total">
          <ul>
            <li></li>
            <li>小計</li>
            <li>$3,000</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Filloutorder;
