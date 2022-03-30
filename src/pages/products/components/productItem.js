import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductItem(props) {
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
  } = props.products;
  const [heart, setHeart] = useState([{ ProductSid: "" }]);

  let MainPic = `img/product/${ProductsMainPic}`;

  const click =async function () {
   await setHeart([{ProductSid:`${ProductSid}`}])
   await  console.log(heart)
  };


  return (
    <>
      <div className="productCard">
        <Link
          to={`/productsdetail?id=${props.products.ProductSid}`}
          
        >
          <div className="cardImg">
            <img className="" src={MainPic} alt="" />
          </div>
        </Link>
        <div className="cardName">
          <Link
            className="cardTitle"
            to={`/productsdetail?id=${props.products.ProductSid}`}
          >
            <p>{ProductsName}</p>
            <span>{ProductsVendor}</span>
            <span>${ProductsPrice}</span>
          </Link>
          <div className="cardIcon">
            <i className="fas fa-heart" onClick={click}></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
