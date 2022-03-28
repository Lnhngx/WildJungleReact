import React from "react";

function Deliveryhome() {
  return (
    <>
      <div className="stan_fof_flex_left">
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
                    <input type="text" className="stan_fof_input" required />
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
                    <input type="text" className="stan_fof_input" required />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default Deliveryhome;
