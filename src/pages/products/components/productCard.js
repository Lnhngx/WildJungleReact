import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./productItem";

function ProductCard(props) {
  const { products} = props;
  return (
    <>
      {products.map((product, i) => {
        return <ProductItem key={i} product={product}/>;
      })}
    </>
  );
}
export default ProductCard;
