import React from "react";
import Cartliveitemone from "./CartLiveItem_one";

function CartLiveItem() {
  return (
    <>
      <div className="stan_product_title">
        <ul>
          <li></li>
          <li></li>
          <li>商品種類</li>
          <li>房型</li>
          <li>金額</li>
        </ul>
        <div className="stan_blackhr"></div>
      </div>
      <Cartliveitemone />
      <div className="stan_product_total">
        <ul>
          <li></li>
          <li>小計</li>
          <li>$5,500</li>
        </ul>
      </div>
    </>
  );
}

export default CartLiveItem;
