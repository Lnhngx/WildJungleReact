import React from "react";

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
      <div className="stan_product_space">
        <ul>
          <li>X</li>
          <li>這是圖片</li>
          <li className="stan_ds_product">法蘭絨動物兒童披風</li>
          <li className="stan_ds_product">$900</li>
          <li className="stan_ds_product">按鈕</li>
          <div className="stan_mo_product">
            <li>法蘭絨動物兒童披風</li>
            <li>$900</li>
            <li>按鈕</li>
          </div>
        </ul>
        <div className="stan_blackhr"></div>
      </div>
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