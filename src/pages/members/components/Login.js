import React ,{useEffect, useRef,useState} from "react";


import Config from "../Config";

function Login(){

  const [data,setData]=useState([]);
  

  const [row,setRow]=useState({});
  const [emai,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [verifyCode,setVerifyCode]=useState('');
  const [codeText,setCodeText]=useState('');
  // 驗證碼
  const getData =async ()=>{
    const obj=await (await fetch(Config.TYSU_LOGIN)).json();
    
      console.log(obj);
      setData(obj);
  
}

  async function sendForm(event){
    event.preventDefault();
    

  }
  




// const mycanvas=useRef();
  useEffect(() => {
    
    const mycanvas = document.getElementById("mycanvas");
    const cxt = mycanvas.getContext("2d");
     // 產生隨機六位數
     let validate = "";
     function rand() {
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
    // 重設canvas內容
    function clickChange() {
      // mycanvas.width = mycanvas.width;
      // mycanvas.height = mycanvas.height;

      cxt.drawImage(lineY(), 200, 88, 0, 0, 200, 88);
      /* 圖片範圍(img, 從img的X擷取, 從img的Y擷取, 
                      擷取的width, 擷取的height, 
                      img在canvas上的X軸, img在canvas上的Y軸, 
                      img在canvas上的width, img在canvas上的height) */

      for (let j = 0; j < 2; j++) {
        // 隨機產生新路徑
        cxt.beginPath();
        // 每次重新生成
        cxt.strokeStyle = sColor[randColor()];
        cxt.moveTo(0, lineY());
        // 起始點
        cxt.lineTo(200, lineY());
        // 從起始點畫一條線到(x, y)座標
        cxt.lineWidth = (Math.floor(Math.random() * (20 - 10 + 1)) + 10) / 10;
        // 亂數取得1~2之間的值
        cxt.stroke();
        cxt.closePath();
      }
      // 兩條干擾線

      cxt.fillStyle = fColor[randColor()];
      // 隨機文字顏色
      cxt.font = "bold 2rem Verdana";
      cxt.fillText(rand(), 30, 55);
      // 隨機生成的字寫入canvas, x軸, Y軸
    }
    
    

      cxt.beginPath();
      cxt.moveTo(0, lineY());
      // 起始點
      cxt.lineTo(200, lineY());
      // 從起始點畫一條線到(x, y)座標
      cxt.lineWidth = (Math.floor(Math.random() * (20 - 10 + 1)) + 10) / 10;
      // 亂數取得1~2之間的值
      cxt.stroke();
      cxt.closePath();

      cxt.fillStyle = fColor[randColor()];
      // 隨機文字顏色
      cxt.font = "bold 2rem Verdana";
      cxt.fillText(rand(), 30, 55);
      // 隨機生成的字寫入canvas, x軸, Y軸

      setCodeText(validate);


      
      try{
        // async ()=>{
        //   const fs=await fetch('./../src/pages/members/data/memberData.json');
        //   const obj=await fs.json();
        //   setData(obj[0]);
        //   };
      }catch(e){

      }

getData();

      
  }, []);
  // console.log(codeText);  
  
  
  

  
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
              <input type="email" id="tysu_email" className="tysu_input" name="email" value={emai} onChange={(e)=>{setEmail(e.target.value)}}/>
              <div id="emailHelp"></div>
            </td>
          </tr>

          <tr className="tysu_tr">
            <th>
              <label htmlFor="tysu_pass">密碼<br /><span className="tysu_titleSpan">Password</span></label>
            </th>
            <td>
              <input type="text" id="tysu_pass" className="tysu_input" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <div id="tysu_passHelp"></div>
            </td>
          </tr>
          <tr className="tysu_tr_code">
            <th></th>
            <td>
              <div className="tysu_canvas" >
                <canvas id="mycanvas"></canvas>
                <img src="./img/member/noise.jpg" alt="" />
              </div>
            </td>
          </tr>
          <tr className="tysu_tr tysu_last">
            <th>
              <label htmlFor="tysu_code">驗證碼<br /><span className="tysu_titleSpan">verification code</span></label>
            </th>
            <td>
              <input type="text" id="tysu_code" className="tysu_input" value={verifyCode} onChange={(e)=>{setVerifyCode(e.target.value)}}/>
              <div id="tysu_codeHelp"></div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <div className="tysu_logHelp">
                <button id="submit" className="tysu_btn_sign" onSubmit={(event) =>{event.preventDefault()}}>登 入</button>
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