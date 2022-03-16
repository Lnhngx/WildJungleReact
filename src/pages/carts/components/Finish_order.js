import React from "react";

function Finishorder() {
  return (
    <>
      <div className="stan_fo_p">
        <p>感謝您的訂購</p>
        <p>訂購資訊以傳送至您的信箱</p>
        <p>
          訂單編號：<span>20220316-1234ABC</span>
        </p>
      </div>
      <div className="stan_fo_order">
        <div className="stan_format">
          <div className="stan_fo_orderinfo">收件人資訊</div>
          <div className="stan_fo_buyerinfo">
            <div className="stan_fo_frame">
              <div className="stan_fo_title">收件人：</div>
              <div className="stan_fo_content">林小明</div>
            </div>
            <div className="stan_fo_frame">
              <div className="stan_fo_title">手機：</div>
              <div className="stan_fo_content">0988123456</div>
            </div>
            <div className="stan_fo_frame">
              <div className="stan_fo_title">電子信箱：</div>
              <div className="stan_fo_content">abc@gmail.com</div>
            </div>
            <div className="stan_fo_frame">
              <div className="stan_fo_title">運送地址：</div>
              <div className="stan_fo_content">基隆市仁愛區仁一路100號5樓</div>
            </div>
            <div className="stan_fo_frame">
              <div className="stan_fo_title">貨運方式：</div>
              <div className="stan_fo_content">宅配</div>
            </div>
            <div className="stan_fo_frame">
              <div className="stan_fo_title">付款方式：</div>
              <div className="stan_fo_content">貨到付款</div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Finishorder;