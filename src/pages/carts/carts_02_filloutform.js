import React, { useState } from "react";
import "./carts.scss";
import Process02 from "./components/Process_02";
import Filloutorder from "./components/Filloutform_order";
import { useCart } from "./utils/useCart";
import { Link } from "react-router-dom";
import Credit from "../members/components/CreditcardAdd";

function Cartfilloutform(props) {
  const [hode, setHode] = useState(false);
  const [store, setStore] = useState(false);
  const [park, setPark] = useState(false);
  const [credit, setCredit] = useState(false);
  const [cash, setCash] = useState(false);

  const{setName,setPhone,setEmail,setAddress,setDelivery,setPayment}=props;

  const { cart } = useCart();
  return (
    <>
      <div className="stan_carts_main">
        <Process02 />
        <div className="stan_carts_middle">
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
            </div>
            <div className="stan_filloutform_order_total">
              <ul>
                <li></li>
                <li>小計</li>
                <li>${cart.cartTotal}</li>
              </ul>
              <ul>
                <li></li>
                <li>預估運費</li>
                <li>$100</li>
              </ul>
              <ul>
                <li></li>
                <li>紅利折扣</li>
                <li>$0</li>
              </ul>
              <ul className="stan_total_hr">
                <div></div>
                <div></div>
                <div></div>
              </ul>
              <ul>
                <li></li>
                <li>結帳金額</li>
                <li>${cart.cartTotal >= 100 ? cart.cartTotal - 100 : 0}</li>
              </ul>
            </div>
          </div>
          <div className="stan_fof_flex">
            <div className="stan_h3">貨運方式</div>
          </div>

          <div className="stan_fof_flex_left">
            <select
              className="stan_select_group"
              onChange={(e) => {
                if (e.target.value === "0") {
                  setHode(false);
                  setStore(false);
                  setPark(false);
                  setDelivery("");
                }
                if (e.target.value === "宅配") {
                  setHode(true);
                  setStore(false);
                  setPark(false);
                  setDelivery(e.target.value);
                }
                if (e.target.value === "超商取貨") {
                  setStore(true);
                  setPark(false);
                  setHode(false);
                  setDelivery(e.target.value);
                }
                if (e.target.value === "園區取貨") {
                  setPark(true);
                  setStore(false);
                  setHode(false);
                  setDelivery(e.target.value);
                }
              }}
            >
              <option value="0">請選擇</option>
              <option value="宅配">宅配</option>
              <option value="超商取貨">超商取貨</option>
              <option value="園區取貨">園區取貨</option>
            </select>
          </div>

          <div className="stan_fof_flex">
            <div className="stan_h3">付款方式</div>
          </div>

          <div className="stan_fof_flex_left">
            <select
              className="stan_select_group"
              onClick={(e) => {
                if(e.target.value==="請選擇"){
                  setCredit(false);
                  setCash(false);
                  setPayment("");
                }
                if (e.target.value === "信用卡") {
                  setCredit(true);
                  setCash(false);
                  setPayment(e.target.value)
                }
                if (e.target.value === "貨到付款") {
                  setCredit(false);
                  setCash(true);
                  setPayment(e.target.value)
                }
              }}
            >
              <option value="0">請選擇</option>
              <option value="信用卡">信用卡</option>
              <option value="貨到付款">貨到付款</option>
            </select>
          </div>

          <div
            className={
              hode || store || park ? "stan_fof_flex" : "stan_pagedisplay"
            }
          >
            <div className="stan_h3">收件人資料</div>
          </div>

          <div className={hode ? "stan_fof_flex_left" : "stan_pagedisplay"}>
            <div>
              <form className="stan_fof_form">
                <table>
                  <tbody>
                    <tr className="stan_fof_tr">
                      <td>
                        <label htmlFor="text" className="stan_fof_label">
                          姓名<span className="stan_fof_redword">*</span>
                        </label>
                      </td>
                    </tr>
                    <tr className="stan_input_tr">
                      <td className="stan_input_td">
                        <input
                          type="text"
                          className="stan_fof_input"
                          required
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </td>
                    </tr>

                    <tr className="stan_fof_tr">
                      <td>
                        <label htmlFor="phone" className="stan_fof_label">
                          手機<span className="stan_fof_redword">*</span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="stan_fof_input"
                          pattern="[0-9]"
                          required
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                      </td>
                    </tr>

                    <tr className="stan_fof_tr">
                      <td>
                        <label htmlFor="email" className="stan_fof_label">
                          電子信箱<span className="stan_fof_redword">*</span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="stan_fof_input"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </td>
                    </tr>

                    <tr className="stan_fof_tr">
                      <td>
                        <label htmlFor="text" className="stan_fof_label">
                          運送地址<span className="stan_fof_redword">*</span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="stan_fof_input"
                          required
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>

          <div className={park ? "stan_fof_delipark" : "stan_pagedisplay"}>
            <div>
              <form className="stan_fof_form">
                <table>
                  <tbody>
                    <tr className="stan_fof_tr">
                      <td>
                        <label htmlFor="text" className="stan_fof_label">
                          姓名<span className="stan_fof_redword">*</span>
                        </label>
                      </td>
                    </tr>
                    <tr className="stan_input_tr">
                      <td className="stan_input_td">
                        <input
                          type="text"
                          className="stan_fof_input"
                          required
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </td>
                    </tr>

                    <tr className="stan_fof_tr">
                      <td>
                        <label htmlFor="phone" className="stan_fof_label">
                          手機<span className="stan_fof_redword">*</span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="stan_fof_input"
                          pattern="[0-9]"
                          required
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                      </td>
                    </tr>

                    <tr className="stan_fof_tr">
                      <td>
                        <label htmlFor="email" className="stan_fof_label">
                          電子信箱<span className="stan_fof_redword">*</span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="stan_fof_input"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>

          {credit ? <Credit /> : ""}

          <div className="stan_fof_btn">
            <Link to="/carts" className="stan_link stan_fof_btn_back">
              <div>上一頁</div>
            </Link>
            <Link
              to="/carts/finishorder"
              className="stan_link stan_fof_btn_next"
            >
              <div>完成結帳</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartfilloutform;
