import React from "react";
import { Link } from 'react-router-dom'

function MemberInfo(){
    return (<>
    <div className="tysu_gradeImg"><img src="" alt="" /></div>
    <ul className="tysu_memberList">
      <li><Link to=""  className="tysu_link">會員資料</Link></li>
      <li><Link to=""  className="tysu_link">訂單資訊</Link></li>
      <li><Link to=""  className="tysu_link">折價優惠</Link></li>
      <li><Link to=""  className="tysu_link">喜愛收藏</Link></li>
    </ul>
    <ul className="tysu_memberChild">
      <li><Link to=""  className="tysu_link">基本設定</Link></li>
      <li><Link to=""  className="tysu_link">分級資訊</Link></li>
      <li><Link to=""  className="tysu_link">信用卡管理</Link></li>
      <li><Link to=""  className="tysu_link">常用資訊</Link></li>
    </ul>
    <hr className="tysu_hr" />
    <ul className="tysu_focusUnderLine tysu_memberChild">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <img className="tysu_bg" src="./img/member/flower.svg" alt="" />
    </ul>
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
              <input type="text" id="tysu_birth" className="tysu_input tysu_year" maxLength="4" />年
              <input type="text" className="tysu_input tysu_month" maxLength="2" />月
              <input type="text" className="tysu_input tysu_date" maxLength="2" />日
              <div id="birthHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr">
            <th className="tysu_last">
              <label htmlFor="tysu_adress">聯絡地址<br />
                <span className="tysu_titleSpan">Adress</span></label>
            </th>
            <td className="tysu_last">
              <input type="text" id="tysu_adress" className="tysu_input" />
              <div id="tysu_adressHelp"></div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <div>
                <button id="tysu_editBtn" className="tysu_editBtn">更 改</button>
                <button id="tysu_cancelBtn" className="tysu_cancelBtn">
                  取 消
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    </>)
}
export default MemberInfo