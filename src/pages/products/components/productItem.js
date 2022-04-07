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

  // useEffect(() => {
  //   const current = JSON.parse(localStorage.getItem("like"));
  //   const alanheart = document.querySelector(".fa-heart")
  //   if (current.includes("" + ProductSid)) {
  //     alanheart.style.color = "#eb5c37";
  //   } else {
  //     alanheart.style.color = "#2d3436";
  //   }
  // }, []);

  const likela = () => {
    let current = [];
    if(localStorage.getItem("like")){
      current = JSON.parse(localStorage.getItem("like"));
    }

    const alanheart = document.querySelectorAll(".alanheart");
    let item = [...current];
    if (current.includes("" + ProductSid)) {
      let num = item.findIndex((v) => v === "" + ProductSid);
      if (num !== -1) {
        item.splice(num, 1);
      }
      console.log("刪去");
      localStorage.setItem("like", JSON.stringify(item));
      alanheart[ProductSid - 1].style.color = "#2d3436";
      console.log(alanheart[ProductSid - 1]);
    } else {
      item.push("" + ProductSid);
      console.log("新增成功");
      localStorage.setItem("like", JSON.stringify(item));
      alanheart[ProductSid - 1].style.color = "#eb5c37";
    }
  };

  return (
    <>
      <div className="productCard">
        <Link to={`/productsdetail?id=${props.products.ProductSid}`}>
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
            <i
              className="alanheart fas fa-heart"
              onClick={likela}
              style={
                JSON.parse(localStorage.getItem("like")).includes(
                  "" + ProductSid
                )
                  ? { color: "#eb5c37" }
                  : {}
              }
            ></i>
            <i
              className="fas fa-shopping-cart"
              onClick={() => {
                const item = {
                  sid: "" + ProductSid,
                  image: `/img/product/${ProductsMainPic}`,
                  name: ProductsName,
                  price: ProductsPrice,
                  quantity: 1,
                };
                addItem(item);
                console.log(item);
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
