import React from "react";
import { useRef } from "react";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import  webSocket  from "socket.io-client";
import './chatbot.css';
function Chatbot(){
    const [toggleMenu,setToggleMenu] = useState(false); 
    const [userMessage,setUserMessage] = useState([]);
    const [io,setIo] = useState(null);
    const myChatbotInput = useRef(null);
    const connectWebSocket = ()=>{
        setIo( webSocket('http://localhost:3001') );
    }
    useEffect(()=>{
        if(io){
            console.log('success connect!')
        }
    },[io])
    
    function SendQuestion(){
        if(myChatbotInput.current.value){
            userMessage.map((v,i)=>{});
            let userMessage =  `<div class="user_reply">
                                    <div class="user_message">
                                        ${myChatbotInput.current.value}
                                    </div>
                                    <div class="user_avatar">
                                        <img src="/img/game/chatbot_avatar.png" alt="" />
                                    </div>
                                    <div class="user_time">00:23</div>
                                </div>`;
            myChatbotInput.current.value = '';
            
            
        }
    }
    return(
    <>
        <div className="chatbot_wrap">
        <div className="chatbot_nav">
            <div className="name">WILDJUNGLE</div>
            <div className="chatbot_close" onClick={()=>{
                document.querySelector('.chatbot_wrap').style.display = 'none';
            }}><i className="fas fa-times"></i></div>
            
        </div>
        <div className="chat_area">
            {/*--------------------------------------------------------------------------*/} 
        <div className="chatbot_reply">
            <div className="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div className="chatbot_message">
                請問我打這麼多自他會怎麼做換行阿
            </div>
            <div className="chatbot_time">上午00:20</div>
        </div>

        <div className="user_reply">
            <div className="user_message">
                請問我打這麼多自他會怎麼做換行阿，從input那得到的文字是部會換行的哦?
            </div>
            <div className="user_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div className="user_time">00:23</div>
        </div>

        <div className="chatbot_reply">
            <div className="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div className="chatbot_message">
                請問我打這麼多自他會怎麼做換行阿，我真的快被機器人給搞瘋了啦
            </div>
            <div className="chatbot_time">上午00:20</div>
        </div>

        <div className="user_reply">
            <div className="user_message">
                請問我打這麼多自他會怎麼做換行阿，從input那得到的文字是部會換行的哦?
            </div>
            <div className="user_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div className="user_time">00:23</div>
        </div>

        <div className="chatbot_reply">
            <div className="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div className="chatbot_message">
                請問我打這麼多自他會怎麼做換行阿，我真的快被機器人給搞瘋了啦
            </div>
            <div className="chatbot_time">上午00:20</div>
        </div>

        <div className="user_reply">
            <div className="user_message">
                請問我打這麼多自他會怎麼做換行阿，從input那得到的文字是部會換行的哦?
            </div>
            <div className="user_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div className="user_time">00:23</div>
        </div>

        <div className="chatbot_reply">
            <div className="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div className="chatbot_message">
                請問我打這麼多自他會怎麼做換行阿，我真的快被機器人給搞瘋了啦
            </div>
            <div className="chatbot_time">上午00:20</div>
        </div>

        <div className="user_reply">
            <div className="user_message">
                請問我打這麼多自他會怎麼做換行阿，從input那得到的文字是部會換行的哦?
            </div>
            <div className="user_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div className="user_time">00:23</div>
        </div>

        <div className="chatbot_reply">
            <div className="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div className="chatbot_message">
                請問我打這麼多自他會怎麼做換行阿，我真的快被機器人給搞瘋了啦
            </div>
            <div className="chatbot_time">上午00:20</div>
        </div>
            {/*--------------------------------------------------------------------------*/}
        </div>
        {/* menu是浮起來的 */}
        <div className="menu">
            <div className="book" onClick={()=>{console.log(123456)}}>
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
            <Link to="/activity">
                <div className="icon">
                    <i className="fas fa-paw"></i>
                </div>
                <div className="text">明星動物</div> 
            </Link>
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
            <div className="phone" onClick={connectWebSocket}>
                <div className="icon">
                    <i className="fas fa-headphones-alt"></i>
                </div>
                <div className="text">專人客服</div>
            </div>
        </div> 
        <div className="tool_bar">
            <div className="rich_menu" onClick={()=>{
                if(!toggleMenu){
                    document.querySelector('.menu').style.bottom = '50px'
                    setToggleMenu(true)
                }else{
                    document.querySelector('.menu').style.bottom = '-200px'
                    setToggleMenu(false)
                }
            }}>
                <i className="fas fa-bars"></i>
            </div>
            <form onSubmit={(e)=>{
                // 一樣持有按button與按鍵盤Enter就submit的功能，只是我阻止預設送出刷新頁面
                e.preventDefault();
                const getTime = new Date();
                let hour = getTime.getHours();
                let minute = getTime.getMinutes();
                let description = hour >= 12 ? '下午':'上午';
                console.log(description); 
                let timeNow =  hour === 0 ? `${description}0${hour}:${minute}`:`${description}${hour}:${minute}`;
                console.log(myChatbotInput.current.value)
                if(myChatbotInput.current.value){
                    let newUserMessage = [...userMessage];
                    newUserMessage.push(myChatbotInput.current.value)
                    setUserMessage(newUserMessage);
                    // let p = document.createElement("div");
                    // p.outerHTML = `<div className="user_reply">
                    // //                         <div className="user_message">
                    // //                             ${myChatbotInput.current.value}
                    // //                         </div>
                    // //                         <div className="user_avatar">
                    // //                             <img src="/img/game/chatbot_avatar.png" alt="" />
                    // //                         </div>
                    // //                         <div className="user_time">00:23</div>
                    // //                     </div>`;
                    let userMessage =  `<div class="user_reply">
                                            <div class="user_message">
                                                ${myChatbotInput.current.value}
                                            </div>
                                            <div class="user_avatar">
                                                <img src="/img/game/chatbot_avatar.png" alt="" />
                                            </div>
                                            <div class="user_time">${timeNow}</div>
                                        </div>`;
                    myChatbotInput.current.value = '';
                    
                    document.querySelector('.chat_area').innerHTML +=  userMessage;

                    
                }
            }}>
                <input className="robot_input" type="text" placeholder="想問我什麼就寫在這吧..." ref={myChatbotInput} />
                <button className="send"><i className="fas fa-paper-plane"></i></button>
            </form>
        </div> 
    </div>
    </>
    )
}
export default Chatbot