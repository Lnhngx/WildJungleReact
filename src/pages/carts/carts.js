import React from "react";
import "./carts.scss";
import Process01 from "./components/process_01";

function carts() {
  return (
    <>
      <div className="stan_carts_main">
        <Process01 />
        <div className="stan_carts_middle">
          <div className="stan_product_area">
              <ul className="stan_product_selector">
                <li className="stan_selector_Item">商品清單</li>
                <li className="stan_selector_Item">票券</li>
                <li className="stan_selector_Item">認養</li>
                <li className="stan_selector_Item">預定住宿資訊</li>
              </ul>
              <hr />
          </div>
          <div className="stan_checkout_area">checkout_area</div>
        </div>
      </div>
    </>
  );
}

export default carts;
