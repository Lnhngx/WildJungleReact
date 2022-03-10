import React  from "react";

function ForgotPass(){
    return(<>
    <h1 className="tysu_h1">FORGOT&nbsp;&nbsp;&nbsp;&nbsp;PASSWORD</h1>
    <form id="tysu_form">
        <table>
            <tbody>
                <tr className="tysu_tr tysu_last">
                    <th>
                        <label htmlFor="tysu_email">請輸入電子郵件<br />
                            <span className="tysu_titleSpan">Email</span></label>
                    </th>
                    <td>
                        <input type="email" id="tysu_email" className="tysu_input" />
                        <div id="emailHelp"></div>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td>
                        <div className="tysu_logHelp">
                            <button id="submit" className="tysu_btn_sign">發 送 驗 證 信</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
    </>)
}
export default ForgotPass