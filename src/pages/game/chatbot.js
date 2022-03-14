import React from "react";
// import { useRef } from "react";
import { useState,useEffect } from "react";
// import  webSocket  from "socket.io-client";
import './chatbot.css';
function Chatbot(){
    // const [io,setIo] = useState(null);
    // const connectWebSocket = ()=>{
    //     setIo( webSocket('http://localhost:3001') );
    // }
    // useEffect(()=>{
    //     if(io){
    //         console.log('success connect!')
    //     }
    // },[io])
    // const myChatbotInput = useRef(null);
    // function SendQuestion(){

    // }
    return(
    <>
        <div className="wrap">
        <div className="chatbot_nav">
            <div className="name">WILDJUNGLE</div>
            <div className="chatbot_close"><i className="fas fa-times"></i></div>
            
        </div>
        <div className="chat_area">
            {/*--------------------------------------------------------------------------*/} 
        <div class="chatbot_reply">
            <div class="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div class="chatbot_message">
                請問我打這麼多自他會怎麼做換行阿
            </div>
            <div class="chatbot_time">上午00:20</div>
        </div>

        <div class="user_reply">
            <div class="user_message">
                請問我打這麼多自他會怎麼做換行阿，從input那得到的文字是部會換行的哦?
            </div>
            <div class="user_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div class="user_time">00:23</div>
        </div>

        <div class="chatbot_reply">
            <div class="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div class="chatbot_message">
                請問我打這麼多自他會怎麼做換行阿，我真的快被機器人給搞瘋了啦
            </div>
            <div class="chatbot_time">上午00:20</div>
        </div>

        <div class="user_reply">
            <div class="user_message">
                請問我打這麼多自他會怎麼做換行阿，從input那得到的文字是部會換行的哦?
            </div>
            <div class="user_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div class="user_time">00:23</div>
        </div>

        <div class="chatbot_reply">
            <div class="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div class="chatbot_message">
                請問我打這麼多自他會怎麼做換行阿，我真的快被機器人給搞瘋了啦
            </div>
            <div class="chatbot_time">上午00:20</div>
        </div>

        <div class="user_reply">
            <div class="user_message">
                請問我打這麼多自他會怎麼做換行阿，從input那得到的文字是部會換行的哦?
            </div>
            <div class="user_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div class="user_time">00:23</div>
        </div>

        <div class="chatbot_reply">
            <div class="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div class="chatbot_message">
                請問我打這麼多自他會怎麼做換行阿，我真的快被機器人給搞瘋了啦
            </div>
            <div class="chatbot_time">上午00:20</div>
        </div>

        <div class="user_reply">
            <div class="user_message">
                請問我打這麼多自他會怎麼做換行阿，從input那得到的文字是部會換行的哦?
            </div>
            <div class="user_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div class="user_time">00:23</div>
        </div>

        <div class="chatbot_reply">
            <div class="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div class="chatbot_message">
                請問我打這麼多自他會怎麼做換行阿，我真的快被機器人給搞瘋了啦
            </div>
            <div class="chatbot_time">上午00:20</div>
        </div>
            {/*--------------------------------------------------------------------------*/}
        </div>
        {/* menu是浮起來的 */}
        <div className="menu">
            <div className="book">
                <div className="icon">
                    <i className="fas fa-ticket-alt"></i>
                </div>    
                <div className="text">立即訂票</div>
            </div>
            <div className="coupon">
                <div className="icon">
                    <i className="fas fa-coins"></i>
                </div>
                <div className="text">我的優惠</div>
            </div>
            <div className="adopt">
                <div className="icon">
                    <i className="fas fa-paw"></i>
                </div>
                <div className="text">明星動物</div>
            </div>
            <div className="profile">
                <div className="icon">
                    <i className="fas fa-search"></i>
                </div>
                <div className="text">導覽簡介</div>
            </div>
            <div className="weather">  
                <div className="icon">
                    <i className="fas fa-cloud"></i>
                </div>
                <div className="text">查看天氣</div>
            </div>
            <div className="phone">
                <div className="icon">
                    <i className="fas fa-headphones-alt"></i>
                </div>
                <div className="text">專人客服</div>
            </div>
        </div> 
        <div className="tool_bar">
            <div className="rich_menu"> <i className="fas fa-bars"></i></div>
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <input className="robot_input" type="text" placeholder="想問我什麼就寫在這吧..."/>
                <button className="send"><i className="fas fa-paper-plane"></i></button>
            </form>
        </div> 
    </div>
     </>
     )
 }
 export default Chatbot