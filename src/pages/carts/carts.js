import React from "react";
import "./carts.scss";
import Process01 from "./components/Process_01";
import Checkarea from "./components/Checkarea";

function carts() {
  return (
    <>
      <div className="stan_carts_main">
        <Process01 />
        <div className="stan_carts_middle">
          <div className="stan_product_main">
            <ul className="stan_product_selector">
              <li>商品清單</li>
              <li>票券</li>
              <li>認養</li>
              <li>預定住宿</li>
            </ul>
            <hr className="stan_hr" />
            <ul className="stan_forcus_selector">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="stan_product_title">
              <ul>
                <li>Empty</li>
                <li>商品種類</li>
                <li>商品名稱</li>
                <li>單價</li>
                <li>數量</li>
              </ul>
              <div className="stan_blackhr"></div>
            </div>
          </div>
          <div className="stan_block"></div>
          <Checkarea />
        </div>
      </div>
    </>
  );
}

export default carts;
