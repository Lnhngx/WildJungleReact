import React ,{useEffect, useRef,useState} from "react";
import { Link } from "react-router-dom";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";

import Config from "../Config";
import Keys from './../Keys';

function Login(){
  // 資料庫的資料
  const [data,setData]=useState([]);


  // input欄位
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  
  const [token, setToken] = useState(null);

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    })
    if (ok) {
      form.reset()
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    const data = new FormData(form)
    data.append("g-recaptcha-response", token);

    fetch({
      method: "post",
      url: "",
      data
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }





  // async function sendForm(event){
  //   event.preventDefault();
    

  // }
  
  




  useEffect(() => {

// getData();

      
  }, []);
  
  
  

  
    return(<>
    <h1 className="tysu_h1">LOGIN</h1>
    <GoogleReCaptchaProvider reCaptchaKey={Keys.RECAPTCHA_KEY}>
    <form name="form1" onSubmit={(event)=>{}} id="tysu_form">
      <table>
        <tbody>
          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_email">帳號 / 電子郵件<br />
                <span className="tysu_titleSpan">Email</span></label>
            </th>
            <td>
              <input type="email" id="tysu_email" className="tysu_input" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <div id="emailHelp"></div>
            </td>
          </tr>

          <tr className="tysu_tr tysu_last">
            <th>
              <label htmlFor="tysu_pass">密碼<br /><span className="tysu_titleSpan">Password</span></label>
            </th>
            <td>
              <input type="text" id="tysu_pass" className="tysu_input" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <div id="tysu_passHelp"></div>
            </td>
          </tr>
          {/* <tr className="tysu_tr_code">
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
          </tr> */}
          <tr>
            <th></th>
            <td>
              <div className="tysu_logHelp">
                <button id="submit" className="tysu_btn_sign" onSubmit={(event) =>{event.preventDefault()
                handleOnSubmit()}}>登 入</button>
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
    </GoogleReCaptchaProvider>
    </>)
}
export default Login