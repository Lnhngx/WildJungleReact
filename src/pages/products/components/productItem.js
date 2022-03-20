import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const [pic, setPic] = useState([]);
  const {
    ProductSid,
    ProductsName,
    ProductsVendor,
    ProductsType,
    ProductsSpec,
    ProductsLabel,
    ProductsMainPic,
    ProductsPic,
    ProductsReview,
    ProductsPrice,
    ProductsDate,
  } = props.product;
  let MainPic = `img/product/${ProductsMainPic}`;
  useEffect(() => {
    fetch("http://localhost:4000/productspic", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPic(data);
        console.log("成功獲得圖片");
      })
      .catch((error) => {
        console.log("錯誤了", error);
      });
  }, []);

  return (
    <>
      <div className="productCard">
        <Link to="">
          <div className="cardImg">
            <img className="" src={MainPic} alt="" />
          </div>
        </Link>
        <div className="cardName">
          <Link className="cardTitle" to="">
            <p>{ProductsName}</p>
            <span>{ProductsVendor}</span>
            <span>${ProductsPrice}</span>
          </Link>
          <div className="cardIcon">
            <Link to="">
              <i className="fas fa-heart"></i>
            </Link>
            <Link to="">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
