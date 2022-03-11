import React ,{useEffect, useRef,useState} from "react";


function Login(){
  let validate = "";
  function rand() {
    validate = "";
    const str =
      "123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789";
    // 大小寫英文、數字，但不包含I、l、O、o、0，數字重複出現率高
    const arr = str.split("");
    // 以空字串作為連接字符
    let randNum;
    for (var i = 0; i < 6; i++) {
      randNum = Math.floor(Math.random() * 66); //隨機數在[0,65]之間
      validate += arr[randNum];
    }
    return validate;
  }
  // 產生隨機六位數
let [codeText,setCodeText]=useState('');
codeText=validate;



  





  useEffect(() => {
    const mycanvas = document.getElementById("mycanvas");
    var ctx = mycanvas.getContext("2d");
     // 產生隨機六位數
    let validate = "";
   
    //干擾點顏色
    const sColor = ["#B22222", "#F9F900", "#82D900", "#FFAF60"];
    //文字顏色 
    const fColor = ["#000079", "#006030", "#820041", "#4B0091"]; 

    // 顏色組合
    let indexColor = "";
    // 隨機取顏色
    function randColor() {
      indexColor = "";
      // 亂數取得陣列的顏色
      indexColor = Math.floor(Math.random() * sColor.length);
      return indexColor;
    }
   
    // 干擾線隨機Y座標
    function lineY() {
      const ranLineY = Math.floor(Math.random() * 88);
      return ranLineY;
    }
    ctx.strokeStyle = sColor[randColor()];
    // 起始點
    ctx.moveTo(0, lineY());
    // 從起始點畫一條線到(x, y)座標
    ctx.lineTo(200, lineY());
    // 亂數取得1~2之間的值
    ctx.lineWidth = (Math.floor(Math.random() * (20 - 10 + 1)) + 10) / 10;
    ctx.stroke();
    ctx.closePath();
    

  }, []);


  


  const mycanvas=useRef();

  
    return(<>
    <h1 className="tysu_h1">LOGIN</h1>
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
              <label htmlFor="tysu_pass">密碼<br /><span className="tysu_titleSpan">Password</span></label>
            </th>
            <td>
              <input type="text" id="tysu_pass" className="tysu_input" />
              <div id="tysu_passHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr_code">
            <th></th>
            <td>
              <canvas ref={mycanvas} id="mycanvas" width="200" height="88" style={{ border: "1px solid #d3d3d3" ,backgroundColor:"#4444"}} >{codeText}</canvas>
            </td>
          </tr>
          <tr className="tysu_tr tysu_last">
            <th>
              <label htmlFor="tysu_code">驗證碼<br /><span className="tysu_titleSpan">verification code</span></label>
            </th>
            <td>
              <input type="text" id="tysu_code" className="tysu_input" />
              <div id="tysu_codeHelp"></div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <div className="tysu_logHelp">
                <button id="submit" className="tysu_btn_sign">登 入</button>
                <div className="tysu_help">
                  <a href="#/">
                    <img src="/tysu_img/person_add_black_24dp.svg" alt="" />SIGN UP </a><a href="#/">
                    <img src="/tysu_img/help_outline_black_24dp.svg" alt="" />HELP
                  </a>
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