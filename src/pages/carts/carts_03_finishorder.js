import React from "react";
import "./carts.scss";
import Process03 from "./components/Process_03";
import Filloutformorder from "./components/Filloutform_order"

function Carts03finishorder() {
    return (
        <>
            <div className="stan_carts_main">
                <Process03 />
                <div className="stan_carts_middle">
                    <div className="stan_fo_p"><p>感謝您的訂購</p>
                        <p>訂購資訊以傳送至您的信箱</p>
                        <p>訂單編號：<span>20220316-1234ABC</span></p></div>
                    <div className="stan_fo_order">
                        <div>
                            <div className="stan_fo_orderinfo">收件人資訊</div>
                            <div className="stan_fo_buyerinfo">
                                <ul>
                                    <li>收件人：林小明</li>
                                    <li>手機：0988123456</li>
                                    <li>電子信箱：abc@gmail.com</li>
                                    <li>運送地址：基隆市仁愛區仁一路100號5樓</li>
                                    <li>貨運方式：宅配</li>
                                    <li>付款方式：貨到付款</li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <Filloutformorder />
                </div>
            </div>
        </>
    )
}

export default Carts03finishorder;