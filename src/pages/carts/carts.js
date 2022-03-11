import React from "react";
import "./carts.scss";
import Process01 from "./components/process_01";

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
          <div className="stan_checkout_area">
            <div className="stan_checkout_temppayname">付款詳情</div>
            <hr className="stan_checkout_templine" />
            <div className="stan_checkout">
              <div className="stan_foralign">
                <div>總價</div>
                <div>$2,996</div>
              </div>
              <div className="stan_foralign">
                <div>預估運費</div>
                <div>$100</div>
              </div>
              <div className="stan_foralign">
                <div>紅利折扣</div>
                <div>$0</div>
              </div>
              <hr className="stan_checkouthr stan_hr" />
              <div className="stan_foralign stan_foralign2">
                <div>結帳金額</div>
                <div>$3,096</div>
              </div>
              <button className="stan_checkout_btn">前往結帳</button>
            </div>
          </div>
          <button className="stan_checkout_btn2">前往結帳</button>
        </div>
      </div>
    </>
  );
}

export default carts;
