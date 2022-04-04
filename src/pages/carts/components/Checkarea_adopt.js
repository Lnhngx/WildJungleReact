import React from "react";
import { Link } from "react-router-dom";
import { useThirdCart } from "../utils/useThirdCart";

function CheckareaAdopt(props) {
  const { cart } = useThirdCart();
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
          <li>預估運費</li>
            <li>$0</li>
            </ul>
          <ul>
            <li>紅利折扣</li>
            <li>$0</li>
          </ul>
          <hr className="stan_checkouthr stan_hr" />
          <ul>
            <li>結帳金額</li>
            <li>${cart.cartTotal}</li>
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

export default CheckareaAdopt;
