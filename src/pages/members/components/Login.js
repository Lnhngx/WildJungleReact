import React ,{useEffect, useRef,useState} from "react";
import { Link } from "react-router-dom";

import Config from "../Config";

function Login(){

  const [data,setData]=useState([]);


  // 所有input欄位
  const [fields,setFields]=useState({
    email:'',
    password:'',
    verifyCode:'',
  });
  
  
  // 驗證碼
//   const getData =async ()=>{
//     const obj=await (await fetch(Config.TYSU_LOGIN)).json();
    
//       console.log(obj);
//       setData(obj);
  
// }

  async function sendForm(event){
    event.preventDefault();
    

  }
  
  




  useEffect(() => {

// getData();

      
  }, []);
  
  
  

  
    return(<>
    <h1 className="tysu_h1">LOGIN</h1>
    <form name="form1" onSubmit={(event)=>{sendForm(event)}} id="tysu_form">
      <table>
        <tbody>
          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_email">帳號 / 電子郵件<br />
                <span className="tysu_titleSpan">Email</span></label>
            </th>
            <td>
              <input type="email" id="tysu_email" className="tysu_input" name="email" value={fields.email} onChange={(e)=>{}}/>
              <div id="emailHelp"></div>
            </td>
          </tr>

          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_pass">密碼<br /><span className="tysu_titleSpan">Password</span></label>
            </th>
            <td>
              <input type="text" id="tysu_pass" className="tysu_input" name="password" value={fields.password} onChange={(e)=>{}}/>
              <div id="tysu_passHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr_code">
            <th></th>
            <td>
              <div className="tysu_canvas" >
                
                <img src="./img/member/noise.jpg" alt="" />
              </div>
            </td>
          </tr>
          <tr className="tysu_tr tysu_last">
            <th>
              <label htmlFor="tysu_code">驗證碼<br /><span className="tysu_titleSpan">verification code</span></label>
            </th>
            <td>
              <input type="text" id="tysu_code" className="tysu_input" value={fields.verifyCode} onChange={(e)=>{}}/>
              <div id="tysu_codeHelp"></div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <div className="tysu_logHelp">
                <button id="submit" className="tysu_btn_sign" onSubmit={(event) =>{event.preventDefault()}}>登 入</button>
                <div className="tysu_help">
                  <Link to="#/" className="tysu_signText">
                    <i className="fas fa-user-plus"></i>SIGN UP</Link>
                  <Link to="#/" className="tysu_helpText">
                    <i className="fas fa-question"></i>HELP</Link>
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