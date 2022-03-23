import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'



function MemberInfo(props){
  const {sidData}=props

  const [mData,setmData]=useState({})
  useEffect(()=>{
    if(Object.keys(sidData).length!==0){
      // console.log(sidData)
      setmData(sidData)
    }
  },[sidData])

  const handleFieldChange=()=>{

  }
  
    return (<>
    <form id="tysu_form"  style={{paddingBottom:"10rem"}}>
      <table>
        <tbody className="tysu_tBody1">
          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_email">帳號 / 電子郵件<br />
                <span className="tysu_titleSpan">Email</span></label>
            </th>
            <td>
              <input type="email" id="tysu_email" className="tysu_input"
              disabled
              readOnly 
              defaultValue={mData.email}
              onChange={handleFieldChange} 
              name="name"/>
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
          <tr className="tysu_tr tysu_last">
            <th>
              <label htmlFor="tysu_adress">聯絡地址<br />
                <span className="tysu_titleSpan">Adress</span></label>
            </th>
            <td>
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
        <tbody  className="tysu_tBody2">
          <tr className="tysu_tr">
            <th></th>
            <td>
              <label htmlFor="tysu_email">帳號 / 電子郵件 Email</label>
              <input type="email" id="tysu_email" className="tysu_input" /><br />
              <div id="emailHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr">
            <th></th>
              <td><label htmlFor="tysu_name">姓名 Name</label>
              <input type="text" id="tysu_name" className="tysu_input" />
              <div id="nameHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr">
            <th></th>
            <td>
              <label htmlFor="tysu_gender">性別 Gender</label>
              <input type="text" id="tysu_gender" className="tysu_input" />
              <div id="genderHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr">
            <th></th>
            <td>
              <label htmlFor="tysu_birth">生日 Birthday</label>
              <div className="tysu_birthGroup">
                <input type="text" id="tysu_birth" className="tysu_input tysu_year" maxLength="4" />年
                <input type="text" className="tysu_input tysu_month" maxLength="2" />月
                <input type="text" className="tysu_input tysu_date" maxLength="2" />日
              </div>
              <div id="birthHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr tysu_last">
            <th></th>
            <td>
              <label htmlFor="tysu_adress">聯絡地址 Adress</label>
              <input type="text" id="tysu_adress" className="tysu_input" />
              <div id="tysu_adressHelp"></div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <div className="tysu_memberBtnGroup">
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