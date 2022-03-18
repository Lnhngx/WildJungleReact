import React from "react";
import CartProductItem from "./CartProductItem";
import CartLive from "./CartLive";

function CartProduct() {
  return (
    <>
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

        {/* <div id="wrapper">
          <div className="tab">
            <input type="radio" id="home" name="grp" checked />
            <label for="home">商品/票券</label>
            <div className="content">商品/票券</div>
          </div>

          <div className="tab">
            <input type="radio" id="portfolio" name="grp" />
            <label for="portfolio">認養</label>
            <div className="content">認養</div>
          </div>

          <div className="tab">
            <input type="radio" id="clients" name="grp" />
            <label for="clients">預定住宿</label>
            <div className="content">預定住宿</div>
          </div>
        </div> */}



        <div className="stan_product_space">
          <ul>
            <li>X</li>
            <li>這是圖片</li>
            <li className="stan_ds_product">法蘭絨動物兒童披風</li>
            <li className="stan_ds_product">$900</li>
            <li className="stan_ds_product stan_count_btn">
              <button className="stan_count_minus">
                <i className="fas fa-minus stan_btnicon"></i>
              </button>
              <input type="text" className="stan_btninput" value={1} disabled />
              <button className="stan_count_add">
                <i className="fas fa-plus stan_btnicon"></i>
              </button>
            </li>

            <div className="stan_mo_product">
              <li>法蘭絨動物兒童披風</li>
              <li>$900</li>
              <li className="stan_count_btn">
                <button className="stan_count_minus">
                  <i className="fas fa-minus stan_btnicon"></i>
                </button>
                <input
                  type="text"
                  className="stan_btninput"
                  value={1}
                  disabled
                />
                <button className="stan_count_add">
                  <i className="fas fa-plus stan_btnicon"></i>
                </button>
              </li>
            </div>
          </ul>
          <div className="stan_blackhr"></div>
        </div>

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
    </>
  );
}
export default CartProduct;
