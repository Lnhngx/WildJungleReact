import React from "react";

function Deliveryconvenient() {
  return (
    <>
      <div className="stan_fof_flex_left">
        <div>
          <form className="stan_fof_form">
            <table>
              <tbody>
                <tr className="stan_fof_tr">
                  <tr>
                    <th>
                      <label htmlFor="text" className="stan_fof_label">
                        姓名<span className="stan_fof_redword">*</span>
                      </label>
                    </th>
                  </tr>
                  <tr className="stan_input_tr">
                    <td className="stan_input_td">
                      <input type="text" className="stan_fof_input" required />
                    </td>
                  </tr>
                </tr>

                <tr className="stan_fof_tr">
                  <tr>
                    <th>
                      <label htmlFor="phone" className="stan_fof_label">
                        手機<span className="stan_fof_redword">*</span>
                      </label>
                    </th>
                  </tr>
                  <tr>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="stan_fof_input"
                      pattern="[0-9]"
                      required
                    />
                  </tr>
                </tr>

                <tr className="stan_fof_tr">
                  <tr>
                    <th>
                      <label htmlFor="email" className="stan_fof_label">
                        電子信箱<span className="stan_fof_redword">*</span>
                      </label>
                    </th>
                  </tr>
                  <tr>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="stan_fof_input"
                    />
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

export default Deliveryconvenient;
