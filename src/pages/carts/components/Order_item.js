import React from "react";

function Orderitem() {
  return (
    <>
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
    </>
  );
}

export default Orderitem;
