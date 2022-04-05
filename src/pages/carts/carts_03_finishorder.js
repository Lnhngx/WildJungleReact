import React, { useState } from "react";
import "./carts.scss";
import Process03 from "./components/Process_03";
import Filloutorder from "./components/Filloutform_order";
import Finishorder from "./components/Finish_order";
import { useCart } from "./utils/useCart";
import Config from "./Config";

function Cartsfinishorder(props) {
  const { cart } = useCart();
  const { name, phone, email, address, delivery, payment } = props;
  const m_sid = (JSON.parse(localStorage.getItem("admin_account"))).m_sid;
  const [deliverytodb, setDeliverytodb] = useState("1");
  const [paymenttodb, setPaymenttodb] = useState("1");
  const [totaltodb, setTotaltodb] = useState(cart.cartTotal + 100);
  const data = { m_sid: m_sid, payment_sid: paymenttodb, amount: totaltodb };


  // fetch(Config.INSERT_CART_PRODUCT, {
  //   method: 'POST',
  //   headers: { "Content-Type": "application/json" },
  //   body: data,
  // }).then(r => r.json())
  //   .then(obj => {
  //     console.log("success");
  //   });





  const data2 = {}






  // switch (delivery) {
  //   case "宅配":
  //     console.log(1)
  //     return setDeliverytodb(1);
  //   case "超商取貨":
  //     console.log(2)
  //     return setDeliverytodb(2);
  //   case "園區取貨":
  //     console.log(3)
  //     return setDeliverytodb(3);
  //   default:
  //     return;
  // }

  // switch (payment) {
  //   case "宅配":
  //     console.log(1)
  //     return setPaymenttodb(1);
  //   case "超商取貨":
  //     console.log(2)
  //     return setPaymenttodb(2);
  //   case "園區取貨":
  //     console.log(3)
  //     return setPaymenttodb(3);
  //   default:
  //     return;
  // }



  return (
    <>
      <div className="stan_carts_main">
        <Process03 />
        <div className="stan_carts_middle">
          <Finishorder
            name={name}
            phone={phone}
            email={email}
            address={address}
            delivery={delivery}
            payment={payment}
          />
          <div className="stan_filloutform_order">
            <div className="stan_filloutform_order_title">
              <div>訂單摘要</div>
              <div>
                <i className="fas fa-angle-down stan_arrow_icon"></i>
              </div>
            </div>
            <div className="stan_filloutform_order_content">
              <div className="stan_filloutform_order_product_title">
                <ul>
                  <li></li>
                  <li>商品種類</li>
                  <li>商品名稱</li>
                  <li>單價</li>
                  <li>數量</li>
                </ul>
                <div className="stan_blackhr"></div>
              </div>
              <Filloutorder />
              <div className="stan_finishhr"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartsfinishorder;
