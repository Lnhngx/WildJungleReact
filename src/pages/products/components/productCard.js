import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./productItem";

function ProductCard(props) {
  const { products} = props;
  return (
    <>
      {products.map((products, i) => {
        return <ProductItem key={i} products={products}/>;
      })}
    </>
  );
}
export default ProductCard;
