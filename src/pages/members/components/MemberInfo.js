import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Config from "../Config";


function MemberInfo(props){
  const {sidData}=props

  const [mData,setmData]=useState({})
  const [newData,setNewData]=useState({email:'',name:'',gender:'',birthday:'',password:'',address:''})
  useEffect(()=>{
    if(Object.keys(sidData).length!==0){
      console.log(sidData)
      setmData(sidData);
      setNewData({...newData,email:sidData.email,name:sidData['m_name'],gender:sidData.gender,birthday:sidData.birthday.split('T')[0],address:sidData['m_address']})
    }
  },[sidData]);

  // 資料更改後設定給新的狀態儲存
  const handleFieldChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    const type=e.target.type;
    
    let newValue=value;
    const updateFields={...mData,[name]:newValue}
    setNewData(updateFields)
  };
  // 生日格式僅保留為yyyy-MM-dd
  if(mData.birthday){
    mData.birthday=mData.birthday.split('T')[0];
  };

  const genderSelect=['男','女','未決定']

  // console.log(newData.birthday.split('T')[0])
  // 
  function submitMemberInfoForm(e){
    e.preventDefault();
    // const setNewPassword=setNewData({...newData,password:mData.password});

    fetch(Config.TYSU_MEMBER_INFO+mData.m_sid,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email":mData.email,
        "name":newData.name,
        "gender":newData.gender,
        "birthday":newData.birthday.split('T')[0],
        "password":newData,
        "address":newData.address
      })
    }).then(r=>r.json()).then(obj=>{
      console.log(obj)
    })

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
              name="name"/>
              <div id="emailHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_name">姓名<br /><span className="tysu_titleSpan">Name</span></label>
            </th>
            <td>
              <input type="text" id="tysu_name" className="tysu_input" name="name"
              defaultValue={mData.m_name}
              onChange={handleFieldChange}/>
              <div id="nameHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_gender">性別<br /><span className="tysu_titleSpan">Gender</span></label>
            </th>
            <td>
            <select id="tysu_gender" className="tysu_input" name="gender" 
            value={newData.gender}
            onChange={handleFieldChange}>
                    <option value="男">男性</option>
                    <option value="女">女性</option>
                    <option value="未決定">未決定</option>
                    </select>
              <div id="genderHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_birth">生日<br /><span className="tysu_titleSpan">Birthday</span></label>
            </th>
            <td>
            <input id="tysu_birth" type="date" className="tysu_input" name="birthday" defaultValue={mData.birthday} max="2022-03-01" onChange={handleFieldChange} />
              <div id="birthHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_adress">密碼<br />
                <span className="tysu_titleSpan">Password</span></label>
            </th>
            <td>
              <input type="text" id="tysu_pass" className="tysu_input" name="password" placeholder="如未填寫，維持原先密碼" defaultValue={''} onChange={handleFieldChange} />
              <div id="tysu_adressHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr tysu_last">
            <th>
              <label htmlFor="tysu_adress">聯絡地址<br />
                <span className="tysu_titleSpan">Adress</span></label>
            </th>
            <td>
              <input type="text" id="tysu_adress" className="tysu_input" name="adress" defaultValue={mData.m_address}
              onChange={handleFieldChange}/>
              <div id="tysu_adressHelp"></div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <div>
                <button type="button" id="tysu_editBtn" className="tysu_editBtn"  onClick={submitMemberInfoForm}>更 改</button>
                <button id="tysu_cancelBtn" className="tysu_cancelBtn" type="button" onClick={(e)=>{e.preventDefault()}}>
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