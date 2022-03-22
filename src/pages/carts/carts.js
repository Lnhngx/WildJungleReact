import React, { useState } from "react";
import "./carts.scss";
import Process01 from "./components/Process_01";
import Checkarea from "./components/Checkarea";

import Carts02filloutform from "./carts_02_filloutform";
import Carts03finishorder from "./carts_03_finishorder";
import CartProductItem from "./components/CartProductItem";

function carts(props) {
  const { productsInOrder, setProductsInOrder } = props;
  return (
    <>
      <div className="stan_carts_main_ec">
        <Process01 />
        <div className="stan_carts_middle_ec">
          <div className="stan_product_main">
            <ul className="stan_product_selector">
              <li>商品/票券</li>
              <li>認養</li>
              <li>預定住宿</li>
            </ul>
            <div className="stan_hr"></div>
            <ul className="stan_forcus_selector">
              <li></li>
              <li></li>
              <li></li>
            </ul>
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

            {productsInOrder.map((v, i) => {
              return (
                <CartProductItem
                  image={v.image}
                  name={v.name}
                  price={v.price}
                  quantity={v.quantity}
                  setQuantity={(newCount) => {
                    //1. 先從原本的陣列拷貝出一個新陣列(在這上面處理)
                    const newProductsInOrder = [...productsInOrder];

                    //2. 運算處理：更新陣列中對應商品數量
                    // 更新陣列中本商品索引值，如果小於1以1來更新
                    newProductsInOrder[i].quantity = newCount < 1 ? 1 : newCount;

                    //3. 設定回原本的狀態
                    setProductsInOrder(newProductsInOrder);
                  }}
                />
              );
            })}

            {/* <CartLive /> */}
            <div className="stan_product_total">
              <ul>
                <li></li>
                <li>小計</li>
                <li>$3,000</li>
              </ul>
            </div>
          </div>
          <div className="stan_block"></div>
          <Checkarea />
        </div>
      </div>
      <div className="stan_footerbgc"></div>
    </>
  );
}

export default carts;
