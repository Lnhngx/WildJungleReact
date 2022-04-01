import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../carts/utils/useCart";


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
  // const [heart, setHeart] = useState([{ ProductSid: "" }]);
  const { addItem } = useCart();
  let MainPic = `img/product/${ProductsMainPic}`;

  // const click =async function () {
  //  await setHeart([{ProductSid:`${ProductSid}`}])
  //  await  console.log(heart)
  // };


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
            <i className="fas fa-heart" ></i>
            <i className="fas fa-shopping-cart" onClick={() => {
                      const item = {
                        sid: ""+ProductSid,
                        image:`/img/product/${ProductsMainPic}`,
                        name:  ProductsName,
                        price: ProductsPrice,
                        quantity:1,
                      };
                      addItem(item);
                      console.log(item);
                    }}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
