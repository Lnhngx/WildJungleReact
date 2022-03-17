import React from "react";
import CartProductItem from "./CartProductItem";
import CartLive from "./CartLive";

const products = [
  {
    sid: 1,
    name: "咖啡色 T-shirt",
    image: "https://i.imgur.com/1GrakTl.jpg",
    price: 300,
  },
  {
    sid: 2,
    name: "黑色 T-shirt",
    image: "https://i.imgur.com/1GrakTl.jpg",
    price: 400,
  },
];

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
        {/* <CartProductItem /> */}
        <CartLive />

      </div>
      <div className="stan_block"></div>
    </>
  );
}
export default CartProduct;
