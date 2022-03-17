import React from "react";
import "./carts.scss";
import Process01 from "./components/Process_01";
import CartProduct from "./components/CartProduct";
import Checkarea from "./components/Checkarea";

// const products = [
//   {
//     id: 1,
//     image: "https://i.imgur.com/1GrakTl.jpg",
//     name: "咖啡色 T-shirt",
//     price: 300,
//   },
//   {
//     id: 2,
//     image: "https://i.imgur.com/ba3tvGm.jpg",
//     name: "白色 T-shirt",
//     price: 200,
//   },
//   {
//     id: 3,
//     image: "https://i.imgur.com/pHQ3xT3.jpg",
//     name: "黑色 T-shirt",
//     price: 450,
//   },
//   {
//     id: 4,
//     image: "https://i.imgur.com/pHQ3xT3.jpg",
//     name: "金色 T-shirt",
//     price: 100,
//   },
// ];

function Carts01product() {
  return (
    <>
      <div className="stan_carts_main_ec">
        <Process01 />
        <div className="stan_carts_middle_ec">
          <CartProduct />
          <Checkarea />
        </div>
      </div>
    </>
  );
}

export default Carts01product;
