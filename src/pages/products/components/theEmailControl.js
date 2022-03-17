import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function EmailControl() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "wildjungle_server",
        "wildjungle",
        form.current,
        "BrrWpNDB5DxVQAlBe"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
  };
  useEffect(() => {
    function fff() {
      if (window.pageYOffset > 875) {
        console.log("123");
      }
    }
    //   console.log(window.pageYOffset);
    // (window.pageYOffset > 875)
    window.addEventListener("scroll", fff);
  }, []);

  function submit() {
    const sub = document.getElementById("alan_send");
    sub.click();
  }
  return (
    <>
      <div className="alan_Email">
        <form className="alan_form" ref={form} onSubmit={sendEmail}>
          <span className="alan_email_title">取得紅利以及最新消息！</span>
          <span className="alan_email_content">輸入您的Email取得優惠券發放資格，你將收到紅利反饋的折扣郵件！新品優惠將定期推送給您！</span>
          
          <div className="alan_emailSend">
            <input
              className="alan_emailinput"
              type="email"
              name="user_email"
              placeholder="Email address"
            />
            <i className="far fa-envelope" onClick={submit}></i>
            <input
              className="alan_send"
              id="alan_send"
              type="submit"
              value="Send"
            />
          </div>
          <span className="alan_email_alert">將會發放折扣至您信箱，價值最高可折抵300元。<br/>點擊送出表示您同意我們的隱私權政策。</span>
        </form>
        <img className="alan_emailimg" src="/img/product/email.jpeg" alt="" />
      </div>
    </>
  );
}

export default EmailControl;
