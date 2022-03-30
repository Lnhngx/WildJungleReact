import React, { useState } from "react";
import "./carts.scss";
import Process03 from "./components/Process_03";
import Filloutorder from "./components/Filloutform_order";
import Finishorder from "./components/Finish_order";

function Cartsfinishorder(props) {
  const { name, phone, email, address, delivery, payment } = props;
  return (
    <>
      <div className="stan_carts_main">
        <Process03 />
        <div className="stan_carts_middle">
          <Finishorder
            name={name}
            phone={phone}
            email={email}
            address={address}
            delivery={delivery}
            payment={payment}
          />
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
              <Filloutorder />
              <div className="stan_finishhr"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartsfinishorder;
