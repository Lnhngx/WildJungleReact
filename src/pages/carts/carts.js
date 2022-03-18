import React,{useState} from "react";
import Carts01product from "./carts_01_product";
import Carts02filloutform from "./carts_02_filloutform";
import Carts03finishorder from "./carts_03_finishorder";



const products = [
  {
    id: 1,
    image: "https://i.imgur.com/1GrakTl.jpg",
    name: "咖啡色 T-shirt",
    price: 300,
  },
  {
    id: 2,
    image: "https://i.imgur.com/ba3tvGm.jpg",
    name: "白色 T-shirt",
    price: 200,
  },
  {
    id: 3,
    image: "https://i.imgur.com/pHQ3xT3.jpg",
    name: "黑色 T-shirt",
    price: 450,
  },
  {
    id: 4,
    image: "https://i.imgur.com/pHQ3xT3.jpg",
    name: "金色 T-shirt",
    price: 100,
  },
];

function carts() {
  return (
    <>
      <Carts01product />
      {/* <Carts02filloutform /> */}
      {/* <Carts03finishorder /> */}
    </>
  );
}

export default carts;
