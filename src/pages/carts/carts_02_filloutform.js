import React from "react";
import "./carts.scss";
import Process02 from "./components/Process_02";
import Filloutorder from "./components/Filloutform_order";
import Deliveryhome from "./components/Delivery_home";

function Cart02filloutform() {
  return (
    <>
      <div className="stan_carts_main">
        <Process02 />
        <div className="stan_carts_middle">
          <Filloutorder />

          <div className="stan_fof_flex">
            <div className="stan_h3">貨運方式</div>
          </div>

          <div className="stan_fof_flex_left">
            <select name="" id="" className="stan_select_group">
              <option value="">請選擇</option>
              <option value="">宅配</option>
              <option value="">超商取貨</option>
              <option value="">園區取貨</option>
            </select>
          </div>

          <div className="stan_fof_flex">
            <div className="stan_h3">付款方式</div>
          </div>

          <div className="stan_fof_flex_left">
            <select name="" id="" className="stan_select_group">
              <option value="">請選擇</option>
              <option value="">信用卡</option>
              <option value="">貨到付款</option>
            </select>
          </div>

          <div className="stan_fof_flex">
            <div className="stan_h3">收件人資料</div>
          </div>
          <Deliveryhome />
        </div>
      </div>
    </>
  );
}

export default Cart02filloutform;
