import React ,{useEffect} from "react";


function Login(){


  useEffect(() => {
    
  }, []);




    return(<>
    <h1 className="tysu_h1">LOGIN</h1>
<form id="tysu_form">
      <table>
        <tbody>
          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_email">帳號 / 電子郵件<br />
                <span className="tysu_titleSpan">Email</span></label>
            </th>
            <td>
              <input type="email" id="tysu_email" className="tysu_input" />
              <div id="emailHelp"></div>
            </td>
          </tr>

          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_pass">密碼<br /><span className="tysu_titleSpan">Password</span></label>
            </th>
            <td>
              <input type="text" id="tysu_pass" className="tysu_input" />
              <div id="tysu_passHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr_code">
            <th></th>
            <td><canvas id="mycanvas" width="200" height="88"></canvas></td>
          </tr>
          <tr className="tysu_tr">
            <th className="tysu_last">
              <label htmlFor="tysu_code">驗證碼<br /><span className="tysu_titleSpan">verification code</span></label>
            </th>
            <td className="tysu_last">
              <input type="text" id="tysu_code" className="tysu_input" />
              <div id="tysu_codeHelp"></div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <div className="tysu_logHelp">
                <button id="submit" className="tysu_btn_sign">登 入</button>
                <div className="tysu_help">
                  <a href="#/">
                    <img src="/tysu_img/person_add_black_24dp.svg" alt="" />SIGN UP </a><a href="#/">
                    <img src="/tysu_img/help_outline_black_24dp.svg" alt="" />HELP
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    </>)
}
export default Login