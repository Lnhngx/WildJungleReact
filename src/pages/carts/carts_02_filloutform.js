import React from "react";
import "./carts.scss";
import Process02 from "./components/Process_02";
import Filloutorder from "./components/Filloutform_order";
import Deliveryhome from "./components/Delivery_home";
import Deliveryconvenient from "./components/Delivery_convenient";

function Cartfilloutform() {
  return (
    <>
      <div className="stan_carts_main">
        <Process02 />
        <div className="stan_carts_middle">
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
          <div className="stan_order_product">
            <ul className="stan_order_product_left">
              <li className="stan_order_product_sid">1</li>
              <li className="stan_order_product_pic">這是圖片</li>
            </ul>
            <ul className="stan_order_product_right">
              <li>法蘭絨動物兒童披風</li>
              <li>$900</li>
              <li>2</li>
            </ul>
          </div>
          <div className="stan_order_blackhr">
            <div></div>
          </div>
        </div>
        <div className="stan_filloutform_order_total">
          <ul>
            <li></li>
            <li>小計</li>
            <li>$3,000</li>
          </ul>
          <ul>
            <li></li>
            <li>預估運費</li>
            <li>$100</li>
          </ul>
          <ul>
            <li></li>
            <li>紅利折扣</li>
            <li>$0</li>
          </ul>
          <ul className="stan_total_hr">
            <div></div>
            <div></div>
            <div></div>
          </ul>
          <ul>
            <li></li>
            <li>結帳金額</li>
            <li>$3,100</li>
          </ul>
        </div>
        </div>
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
          {/* <Deliveryconvenient /> */}

          <div className="stan_fof_btn">
            <div className="stan_fof_btn_back">上一頁</div>
            <div className="stan_fof_btn_next">完成結帳</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartfilloutform;
