import "./carts.scss";
import Process01 from "./components/Process_01";
import Checkarea from "./components/Checkarea";
import CartProductItem from "./components/CartProductItem";

function Carts(props) {
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
            <CartProductItem />
            {/* <CartLive /> */}
            <div className="stan_product_total">
              <ul>
                <li></li>
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

export default Carts;
