import React from "react";
import Cartliveitem from "./CartLiveItem2";

function CartLive() {
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
      <Cartliveitem />
    </>
  );
}

export default CartLive;
