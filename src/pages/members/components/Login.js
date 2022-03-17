import React ,{useEffect, useRef,useState} from "react";
import { Link,useHistory } from "react-router-dom";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";

import MemberModal from './MemberModal';
import Config from "../Config";
import Keys from './../Keys';

function Login(){
  const history=useHistory();


  // input欄位
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  // Modal 顯示是否成功登入
  const [success,setSuccess]=useState('');
  const [show, setShow] = useState(false);
  const handleShow = () =>  {
    setShow(true);
    setTimeout(() => setShow(false), 1000);
    // history.push('/members/modify-member-info');
  }


  // 掛載
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);
      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    }

    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${Keys.RECAPTCHA_KEY}`, function () {
      console.log("google驗證");
    });
  }, []);

  const handleOnClick = e => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(Keys.RECAPTCHA_KEY, { action: 'submit' }).then(token => {
        submitData(token);
      });
    });
  }

  const submitData = token => {
    // call a backend API to verify reCAPTCHA response
    fetch(Config.TYSU_LOGIN, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
        "g-recaptcha-response": token
      })
    }).then(res => res.json()).then(obj => {
      console.log(obj);


      if(obj.success){
        localStorage.setItem('admin_account',JSON.stringify(obj.account));
        localStorage.setItem('admin_token',obj.token);
        handleShow(setSuccess('登入成功'));

        // alert('登入成功');
      }else{
        handleShow(setSuccess(obj.error || '帳號或密碼錯誤'));
        // alert(obj.error || '登入失敗');
      }
      
    });
  }

  

  // 卸載
  useEffect(()=>{
    return()=>{

  }},[])




  
    return(<>
    <h1 className="tysu_h1">LOGIN</h1>
    <GoogleReCaptchaProvider reCaptchaKey={Keys.RECAPTCHA_KEY}>
    <form name="form1" id="tysu_form">
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
          <tr>
            <th></th>
            <td>
              <div className="tysu_logHelp">
                <button id="submit" className="tysu_btn_sign" onClick={handleOnClick}>登 入</button>
                <div className="tysu_help">
                  <Link to="#/" className="tysu_signText">
                    <i className="fas fa-user-plus"></i>SIGN UP</Link>
                  <Link to="#/" className="tysu_helpText">
                    <i className="fas fa-question"></i>HELP</Link>
                    <MemberModal show={show} setShow={setShow} success={success} />
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