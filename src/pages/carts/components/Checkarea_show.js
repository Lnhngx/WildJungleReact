import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSecondCart } from "../utils/useSecondCart";

function CheckareaShow(props) {
  const { cart } = useSecondCart();
  const temp = JSON.parse(localStorage.getItem("secondCart"));
  const compare = temp.length;
  const [showbox, setShowbox] = useState(!!compare);
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
          <li>${Math.ceil(props.bonus / 10)}</li>
        </ul>
        <hr className="stan_checkouthr stan_hr" />
        <ul>
          <li>結帳金額</li>
          <li>
            $
            {cart.cartTotal > 0
              ? cart.cartTotal - Math.ceil(props.bonus / 10)
              : 0}
          </li>
        </ul>

        {compare ? (
          <>
            <Link to="/carts/filloutform" className="stan_link">
              <button className="stan_checkout_btn">前往結帳</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/carts/filloutform" className="stan_link">
              <button className="stan_checkout_btn" disabled>
                前往結帳
              </button>
            </Link>
          </>
        )}
      </div>
      <div className="stan_checkout_btn2_block"></div>
      {compare ? (
        <>
          <Link to="/carts/filloutform" className="stan_link">
            <button className="stan_checkout_btn2">前往結帳</button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/carts/filloutform" className="stan_link">
            <button className="stan_checkout_btn2" disabled>
              前往結帳
            </button>
          </Link>
        </>
      )}
    </>
  );
}

export default CheckareaShow;
