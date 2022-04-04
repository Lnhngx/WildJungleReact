import React from "react";
import { useThirdCart } from "../utils/useThirdCart";

function CartAdopt() {
  const { items, removeItem } = useThirdCart();

  return (
    <>
      <div className="stan_product_title">
        <ul>
          <li></li>
          <li>認養計畫</li>
          <li>方案名稱</li>
          <li>單價</li>
          <li></li>
        </ul>
        <div className="stan_blackhr"></div>
      </div>
      {items.map((v, i) => {
        return (
          <div className="stan_product_space" key={v.sid}>
            <ul>
              <li className="">
                <button
                  className="stan_btndelete"
                  onClick={() => {
                    removeItem(v.sid);
                  }}
                >
                  <i className="fas fa-times stan_btnicon_delete"></i>
                </button>
              </li>
              <li>
                {/* <img alt="" src={v.image} /> */}
              </li>
              <li className="stan_ds_product">{v.name}</li>
              <li className="stan_ds_product">${v.price}</li>
              <li className="stan_ds_product stan_count_btn">
                {/* <div className="stan_seats_out">{seats}</div> */}
              </li>

              <div className="stan_mo_product">
                <li>{v.name}</li>
                <li>${v.price}</li>
                <li className="stan_count_btn">
                  {/* {seats} */}
                </li>
              </div>
            </ul>
            <div className="stan_blackhr"></div>
          </div>
        );
      })}
    </>
  );
}

export default CartAdopt;
