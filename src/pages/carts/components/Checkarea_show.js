import React from "react";
import { Link } from "react-router-dom";
import { useSecondCart } from "../utils/useSecondCart";

function CheckareaShow(props) {
  const { cart } = useSecondCart();
  return (
    <>
        <div className="stan_tempay">付款詳情</div>
        <hr className="stan_temline" />
        <div className="stan_checkout">
          <ul>
            <li>總價</li>
            <li>${cart.cartTotal}</li>
          </ul>
          <ul>
            <li>紅利折扣</li>
            <li>$0</li>
          </ul>
          <hr className="stan_checkouthr stan_hr" />
          <ul>
            <li>結帳金額</li>
            <li>${cart.cartTotal>=100?cart.cartTotal-100:0}</li>
          </ul>

          <Link to="/carts/filloutform" className="stan_link">
            <button
              className="stan_checkout_btn">
              前往結帳
            </button>
          </Link>
        </div>
    </>
  );
}

export default CheckareaShow;
