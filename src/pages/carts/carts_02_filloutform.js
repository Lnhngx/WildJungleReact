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
          <h3>收件人資料</h3>
          <form id="stan_fof_form">
            <table>
              <tbody>
                <tr className="stan_fof_tr">
                  <tr>
                    <th>
                      <label htmlFor="text" className="stan_fof_label">姓名<span className="stan_fof_redword">*</span></label>
                    </th>
                  </tr>
                  <tr>
                    <td><input type="text" className="stan_fof_input" required /></td>
                  </tr>
                </tr>

                <tr className="stan_fof_tr">
                  <tr>
                    <th>
                      <label htmlFor="phone" className="stan_fof_label">手機<span className="stan_fof_redword">*</span></label>
                    </th>
                  </tr>
                  <tr>
                    <input type="tel" id="phone" name="phone" className="stan_fof_input" pattern="[0-9]" required />
                  </tr>
                </tr>

                <tr className="stan_fof_tr">
                  <tr>
                    <th>
                      <label htmlFor="email" className="stan_fof_label">電子信箱<span className="stan_fof_redword">*</span></label>
                    </th>
                  </tr>
                  <tr>
                    <input type="email" id="email" name="email" className="stan_fof_input" />
                  </tr>
                </tr>

                <tr className="stan_fof_tr">
                  <tr>
                    <th>
                      <label htmlFor="text" className="stan_fof_label">運送地址<span className="stan_fof_redword">*</span></label>
                    </th>
                  </tr>
                  <tr>
                    <td><input type="text" className="stan_fof_input" required /></td>
                  </tr>
                </tr>


              </tbody>
            </table>
          </form>

        </div>
      </div>
    </>
  );
}

export default Cart02filloutform;
