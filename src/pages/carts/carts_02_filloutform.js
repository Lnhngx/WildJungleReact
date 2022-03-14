import React from "react";
import "./carts.scss";
import Process02 from "./components/Process_02";
import Filloutorder from "./components/Filloutform_order";

function Cart02filloutform() {
  return (
    <>
      <div className="stan_carts_main">
        <Process02 />
        <div className="stan_carts_middle">
          <Filloutorder />
        </div>
      </div>
    </>
  );
}

export default Cart02filloutform;
