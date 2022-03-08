
import React from "react";

function Signup(){
    return(<><form id="tysu_form">
    <table>
        <tbody>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_email">帳號 / 電子郵件<br /><span className="tysu_titleSpan">Email</span></label>
                </th>
                <td>
                    <input type="email" id="tysu_email" className="tysu_input" />
                    <div id="emailHelp"></div>
                </td>
            </tr>

            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_name">姓名<br /><span className="tysu_titleSpan">Name</span></label>
                </th>
                <td>
                    <input type="text" id="tysu_name" className="tysu_input" />
                    <div id="nameHelp"></div>
                </td>
            </tr>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_gender">性別<br /><span className="tysu_titleSpan">Gender</span></label>
                </th>
                <td>
                    <input type="text" id="tysu_gender" className="tysu_input" />
                    <div id="genderHelp"></div>
                </td>
            </tr>
            <tr className="tysu_tr">
                <th>
                    <label htmlFor="tysu_birth">生日<br /><span className="tysu_titleSpan">Birthday</span></label>
                </th>
                <td>
                    <input type="number" id="tysu_birth" className="tysu_input tysu_year" maxLength="4"
                    value={inpuyValue}
                         />年
                    <input type="text" className="tysu_input tysu_month" maxLength="2"
                        onInput="value=value.replace(/[^\d]/g,'')" />月
                    <input type="text" className="tysu_input tysu_date" maxLength="2"
                        onInput="value=value.replace(/[^\d]/g,'')" />日
                    <div id="birthHelp"></div>
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
            <tr className="tysu_tr">
                <th className="tysu_last">
                    <label htmlFor="tysu_cfPass">再次確認密碼<br /><span className="tysu_titleSpan">Confirm
                            Password</span></label>
                </th>
                <td className="tysu_last">
                    <input type="text" id="tysu_cfPass" className="tysu_input" />
                    <div id="tysu_cfPassHelp"></div>
                </td>

            </tr>
            <tr>
                <th></th>
                <td>
                    <div className="tysu_logHelp">
                        <button id="submit" className="tysu_btn_sign">註 冊</button>
                        
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

</form></>)
}
export default Signup