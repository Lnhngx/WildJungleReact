import React from "react";

function ForgotPassChange(){
    return(<>
    <h1 className="tysu_h1">FORGOT&nbsp;&nbsp;&nbsp;&nbsp;PASSWORD</h1>
    <form id="tysu_form">
    <table>
        <tbody>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_pass">密碼<br /><span className="tysu_titleSpan">Password</span></label>
                </th>
                <td>
                    <input type="text" id="tysu_pass" className="tysu_input" />
                    <div id="tysu_passHelp"></div>
                </td>

            </tr>
            <tr className="tysu_tr tysu_last">
                <th>
                    <label htmlFor="tysu_cfPass">再次確認密碼<br /><span className="tysu_titleSpan">Confirm
                            Password</span></label>
                </th>
                <td>
                    <input type="text" id="tysu_cfPass" className="tysu_input" />
                    <div id="tysu_cfPassHelp"></div>
                </td>

            </tr>
            <tr>
                <th></th>
                <td>
                    <div className="tysu_logHelp">
                        <button id="submit" className="tysu_btn_sign">登 入</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</form></>)
}
export default ForgotPassChange