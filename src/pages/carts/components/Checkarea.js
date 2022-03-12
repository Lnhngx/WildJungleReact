import React from "react";

function Checkarea() {
  return (
    <>
      <div className="stan_checkout_area">
        <div className="stan_tempay">付款詳情</div>
        <hr className="stan_temline" />
        <div className="stan_checkout">
          <ul>
            <li>總價</li>
            <li>$2,996</li>
          </ul>
          <ul>
            <li>預估運費</li>
            <li>$100</li>
          </ul>
          <ul>
            <li>紅利折扣</li>
            <li>$0</li>
          </ul>
          <hr className="stan_checkouthr stan_hr" />
          <ul>
            <li>結帳金額</li>
            <li>$3,096</li>
          </ul>
          <button className="stan_checkout_btn">前往結帳</button>
        </div>
      </div>
      <button className="stan_checkout_btn2">前往結帳</button>
    </>
  );
}

export default Checkarea;