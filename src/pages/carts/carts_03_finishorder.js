import React from "react";
import "./carts.scss";
import Process03 from "./components/Process_03";
import Filloutformorder from "./components/Filloutform_order";
import Finishorder from "./components/Finish_order";

function Cartsfinishorder() {
  return (
    <>
      <div className="stan_carts_main">
        <Process03 />
        <div className="stan_carts_middle">
          <Finishorder />
          <Filloutformorder />
        </div>
      </div>
    </>
  );
}

export default Cartsfinishorder;
