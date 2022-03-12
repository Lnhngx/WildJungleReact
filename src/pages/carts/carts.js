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
          <div className="stan_product_title">
            <ul className="stan_product_selector">
              <li className="stan_selector_Item">商品清單</li>
              <li className="stan_selector_Item">票券</li>
              <li className="stan_selector_Item">認養</li>
              <li className="stan_selector_Item">預定住宿</li>
            </ul>
            <hr className="stan_hr" />
            <ul className="stan_forcus_selector">
              <li className="stan_forcus_Item"></li>
              <li className="stan_forcus_Item"></li>
              <li className="stan_forcus_Item"></li>
              <li className="stan_forcus_Item"></li>
            </ul>
            <div className="stan_product_content">123123</div>
          </div>
          <div className="stan_block"></div>
          <Checkarea />
        </div>
      </div>
    </>
  );
}

export default carts;
