import React ,{useEffect, useRef,useState} from "react";
import { Link,useHistory,useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

// import './members/tysu.scss'
// import './members/members.css'
import MemberModal from './MemberModal';
import Config from "../Config";
import Keys from './../Keys';

function Login(props){
  const {auth,setAuth,account,localState,setLocalState,comeUrl,setCommentbox,likeListData}=props
  const history=useHistory();
  const emailInput=useRef();
  const passInput=useRef();
  

  const [captchaValue,setCaptchaValue]=useState(null);
  const [userState,setUserState]=useState(false);


  // input欄位
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [passType,setPassType]=useState('password');
  const [visible,setVisible]=useState(false);
  
  const captcha = useRef(null);

  // Modal 顯示是否成功登入
  const [success,setSuccess]=useState('');
  const [show, setShow] = useState(false);
  const handleShow = () =>  {
    setShow(true);
  }

  const [cart_temp1,setCart_temp1] = useState([]);
  const [cart_temp2,setCart_temp2] = useState([]);
  const [cart_temp3,setCart_temp3] = useState([]);
  const [cart_temp4,setCart_temp4] = useState([]);
    
    // 如果是已經登入狀態，email欄位自動帶入用戶帳號
    // if(auth || localState.token){
    //   emailInput.current.value=localState.account.email;
    //   setEmail(emailInput.current.value)
    // }
  

    const handleChange = () => {
      if(captcha.current.getValue()){
        // console.log('我不是機器人');
        setCaptchaValue(true);
      }
    }

    const submitData =async (e) => {
        e.preventDefault();

        if(captcha.current.getValue()){
            setUserState(true)
            setCaptchaValue(true)
  
            await fetch(Config.TYSU_LOGIN, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "g-recaptcha-response": captcha.current.getValue()
                })
            }).then(res => res.json()).then(obj => {
                // console.log(obj);
                if(obj.success){
                    localStorage.setItem('admin_account',JSON.stringify(obj.account));
                    localStorage.setItem('admin_token',obj.token);
                    
                    // 傳回頂層登入與否的狀態
                    setAuth(true);
                    setSuccess('登入成功')
                    handleShow();
                    setTimeout(() => setShow(false), 1000);
                    setTimeout(() => {
                        if(comeUrl==='/carts'){
                            history.goBack();
                        }else if(comeUrl==='/lodging'){
                            setCommentbox(false);
                            history.goBack();
                        }else{
                            history.push('/members/modify-member-info')
                        }
                    }, 1500);
                    
                    // const m_sid = JSON.parse(
                    //   localStorage.getItem("admin_account")
                    // ).m_sid;

                    // fetch("http://localhost:4000/carts/removetodb_1", {
                    //   method: "POST",
                    //   headers: { "Content-Type": "application/json" },
                    //   body: JSON.stringify({
                    //     m_sid: m_sid,
                    //   }),
                    // })
                    //   .then((r) => r.json())
                    //   .then((obj) => {
                    //     console.log(obj)
                    //     if(obj!=0){
                    //     setCart_temp1(JSON.stringify(obj);
                    //   }
                    //     localStorage.setItem('cart',cart_temp1);
                    //   });
                    
                    //   fetch("http://localhost:4000/carts/removetodb_2", {
                    //     method: "POST",
                    //     headers: { "Content-Type": "application/json" },
                    //     body: JSON.stringify({
                    //       m_sid: m_sid,
                    //     }),
                    //   })
                    //     .then((r) => r.json())
                    //     .then((obj) => {
                    //       setCart_temp2(obj);
                    //       localStorage.setItem('secondCart',obj);
                    //     });

                    //     fetch("http://localhost:4000/carts/removetodb_3", {
                    //       method: "POST",
                    //       headers: { "Content-Type": "application/json" },
                    //       body: JSON.stringify({
                    //         m_sid: m_sid,
                    //       }),
                    //     })
                    //       .then((r) => r.json())
                    //       .then((obj) => {
                    //         setCart_temp3(obj);
                    //         localStorage.setItem('thirdCart',obj);
                    //       });

                    //       fetch("http://localhost:4000/carts/removetodb_4", {
                    //         method: "POST",
                    //         headers: { "Content-Type": "application/json" },
                    //         body: JSON.stringify({
                    //           m_sid: m_sid,
                    //         }),
                    //       })
                    //         .then((r) => r.json())
                    //         .then((obj) => {
                    //           setCart_temp4(obj);
                    //           localStorage.setItem('fourthCart',obj);
                    //         });

                    // console.log(obj.success)
                    // alert('登入成功');
                }else{
                    setSuccess(obj.error || '帳號或密碼錯誤')
                    handleShow();
                    setTimeout(() => setShow(false), 1000);
                    
                    // alert(obj.error || '登入失敗');
                }
            });
        }else{
            setUserState(false)
            setCaptchaValue(false)
        }
    }

    
  
    return(<>
    <div className="tysu_contain">
      <h1 className="tysu_h1" onClick={(e)=>{
        setEmail(emailInput.current.value='wildjungle2022@gmail.com')
        setPassword(passInput.current.value='123456')
      }}>LOGIN</h1>
      
        <form name="form1" id="tysu_form" onSubmit={submitData}>
          <table>
            <tbody>
              <tr className="tysu_tr">
                <th>
                  <label htmlFor="tysu_email">帳號 / 電子郵件<br />
                    <span className="tysu_titleSpan">Email</span></label>
                </th>
                <td>
                  <input ref={emailInput} type="email" id="tysu_email" className="tysu_input" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                  <div id="emailHelp"></div>
                </td>
              </tr>

              <tr className="tysu_tr">
                <th>
                  <label htmlFor="tysu_pass">密碼<br /><span className="tysu_titleSpan">Password</span></label>
                </th>
                <td>
                    <input ref={passInput} type={passType} id="tysu_pass" className="tysu_input" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        {visible ? (<i className="fas fa-eye tysu_see" onClick={()=>{
                            setPassType('password')
                            setVisible(false);
                        }}></i>) :
                        (<i className="fas fa-eye-slash tysu_see"  onClick={()=>{
                            
                            setPassType('text')
                            setVisible(true);
                        }}></i>)}
                    <div id="tysu_passHelp"></div>
                </td>
              </tr>
              <tr  className="tysu_tr tysu_last">
                <th></th>
                <td>
                  <div className="recaptcha">
                    <ReCAPTCHA
                      ref={captcha}
                      sitekey={Keys.RECAPTCHA_KEY_V2}
                      onChange={handleChange}
                    />
                  </div>
                  <div id="tysu_recaptchaHelp">{captchaValue===false && '請完成機器人驗證'}</div>
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <div className="tysu_logHelp">
                    <button id="submit" className="tysu_btn_sign">登 入</button>
                    <div className="tysu_help">
                      <Link to="/members/signup" className="tysu_signText">
                        <i className="fas fa-user-plus"></i>SIGN UP</Link>
                      <Link to="/members/forgot" className="tysu_helpText">
                        <i className="fas fa-question"></i>HELP</Link>
                        <MemberModal show={show} setShow={setShow} success={success} />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      
        <div className="tysu_loginBg">
            <img src="./../img/member/leaf_g.svg" alt="" />
        </div>
    </div>
    </>)
}
export default Login