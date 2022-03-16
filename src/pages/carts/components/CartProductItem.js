import React from "react";
import Cartproductitemone from "./CartProductItem_one";

function CartProductItem() {
  return (
    <>
      <div className="stan_product_title">
        <ul>
          <li></li>
          <li>商品種類</li>
          <li>商品名稱</li>
          <li>單價</li>
          <li>數量</li>
        </ul>
        <div className="stan_blackhr"></div>
      </div>
      <Cartproductitemone />
      <div className="stan_product_total">
        <ul>
          <li></li>
          <li>小計</li>
          <li>$3,000</li>
        </ul>
      </div>
    </>
  );
}

export default CartProductItem;
