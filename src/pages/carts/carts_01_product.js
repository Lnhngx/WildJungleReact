import React from "react";
import "./carts.scss";
import Process01 from "./components/Process_01";
import CartProduct from "./components/CartProduct"
import Checkarea from "./components/Checkarea";


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
