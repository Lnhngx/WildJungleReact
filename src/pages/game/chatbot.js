import React from "react";
import { useRef } from "react";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import  webSocket  from "socket.io-client";
import './chatbot.css';
function Chatbot(){
    let chat_id = 1;
    const [toggleReply,setToggleReply] = useState(false);
    const [toggleChatbot,setToggleChatbot] = useState(false);
    const [toggleMenu,setToggleMenu] = useState(false); 
    const [toggleSticker,setToggleSticker] = useState(false);
    const [message,setMessage] = useState([{id:chat_id,text:'yo~ 我是熊貓有任何基礎問題都可以問我',type:'chatbot_reply'}]);
    const [weatherData,setWeatherData] = useState({});
    const [move,setMove] = useState(0);
    const [io,setIo] = useState(null);
    const myChatbotInput = useRef(null);
    const connectWebSocket = ()=>{
        setIo( webSocket('http://localhost:3001') );
    }
    useEffect(()=>{
        if(io){
            document.querySelector('.chat_area').innerHTML = '';
            console.log('success connect!')
        }
    },[io])
    useEffect(()=>{
        const chat_area = document.querySelector('.chat_area');
        chat_area.scrollTo({top:chat_area.scrollHeight})
    },[message])
    // 每一次開啟機器人的第一句預設問好
    useEffect(()=>{
        const sendTime = new Date();
        const hour = sendTime.getHours();
        const minute = sendTime.getMinutes()<10?'0'+sendTime.getMinutes():sendTime.getMinutes();
        const description = hour >= 12 ? '下午':'上午';
        const timeNow =  hour === 0 ? `${description}0${hour}:${minute}`:`${description}${hour}:${minute}`;
        document.querySelector('.chatbot_time').innerHTML = `${timeNow}`;
    },[toggleChatbot]);
    // 機器人的開關
    function chatbotToggle (toggleChatbot) {
        const chatot_open = {  
            display:'block',
        }
        const chatot_close = {
            display:'none',
        }
        let result = toggleChatbot ? chatot_open : chatot_close;
        return result;
    }    
    // 機器人回話提示的開關
    function replyToggle (toggleReply) {
        const reply_open = {  
            display:'block',
        }
        const reply_close = {
            display:'none',
        }
        let result = toggleReply ? reply_open : reply_close;
        return result;
    }  
    // 機器人天氣輪播牆控制
    function moveCarousel(move){
        switch (move){
            case 1:
                const obj1 = {transform:'translateX(-210px)'};
                return obj1;
            case 2:
                const obj2 = {transform:'translateX(-420px)'};
                return obj2;
            case 3:
                const obj3 = {transform:'translateX(-630px)'};
                return obj3;
            case 4:
                const obj4 = {transform:'translateX(-840px)'};
                return obj4;
            case 5:
                const obj5 = {transform:'translateX(-1050px)'};
                return obj5;
            default:
            const obj0 = {transform:'translateX(0px)'};
            return obj0;    
        }
    }  
    return(
    <>
        <div className="chatbot_logo" 
            onClick={()=>{
                setToggleChatbot(true)
            }}
            style={chatbotToggle(!toggleChatbot)}
            >
            <img src="/img/game/chatbot_logo.png" alt="" />
            </div>
        <div className="chatbot_wrap" style={chatbotToggle(toggleChatbot)}>
        <div className="chatbot_nav">
            <div className="name">WILDJUNGLE</div>
            <div className="chatbot_close" onClick={()=>{
                // document.querySelector('.chatbot_wrap').style.display = 'none';
                setToggleChatbot(false)
            }}><i className="fas fa-times"></i></div>
            
        </div>
        <div className="chat_area">
            {/*--------------------------------------------------------------------------*/} 
            <div className="chatbot_reply">
                <div className="chatbot_avatar">
                    <img src="/img/game/chatbot_avatar.png" alt="" />
                </div>
                <div className="chatbot_message">
                    yo~ 我是熊貓<br/>有任何基礎問題可以問我
                </div>
                <div className="chatbot_time"></div>
            </div>
            {message.map((v,i)=>{
                if(v.id>1){
                    if(v.type==='stickers'){
                        return(
                            <div className="user_reply" >
                                <div className="sticker_message">
                                    <img src={v.text} alt=""/>
                                </div>
                                <div className="user_avatar">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="user_time">{v.time}</div>
                            </div>
                        )
                    }
                    if(v.type==='getWeather'){
                        return (
                            <div className="chatbot_reply" >
                            <div className="chatbot_avatar">
                                <img src="/img/game/chatbot_avatar.png" alt="" />
                            </div>
                            <ul className="weather_carousel" style={moveCarousel(move)}>
                                {weatherData.map((v,i)=>{
                                    if(v.wx===1){  
                                    return(
                                    <li className="weather_card" key={i}>
                                        <div className="weather_date">{new Date(v.date).getMonth()+1}/{new Date(v.date).getDate()}</div>
                                        <div className="weather_icon"><img src='/img/game/sunny.svg' alt="" width="100" height="100" /></div>
                                        <div className="weather_row">
                                            <div className="weather_rain">降雨機率<br/>{v.rain}%</div>
                                            <div className="weather_temp">平均氣溫<br/>{v.temp}&#176;C</div>
                                        </div>
                                    </li>
                                )}else if(v.wx>=2 && v.wx<=6){
                                    return(
                                    <li className="weather_card" key={i}>
                                        <div className="weather_date">{new Date(v.date).getMonth()+1}/{new Date(v.date).getDate()}</div>
                                        <div className="weather_icon"><img src='/img/game/sunwithcloud.svg' alt="" width="100" height="100" /></div>
                                        <div className="weather_row">
                                            <div className="weather_rain">降雨機率<br/>{v.rain}%</div>
                                            <div className="weather_temp">平均氣溫<br/>{v.temp}&#176;C</div>
                                        </div>
                                    </li>
                                )}else if(v.wx===7){
                                    return(
                                    <li className="weather_card" key={i}>
                                        <div className="weather_date">{new Date(v.date).getMonth()+1}/{new Date(v.date).getDate()}</div>
                                        <div className="weather_icon"><img src='/img/game/cloudy.svg' alt="" width="100" height="100" /></div>
                                        <div className="weather_row">
                                            <div className="weather_rain">降雨機率<br/>{v.rain}%</div>
                                            <div className="weather_temp">平均氣溫<br/>{v.temp}&#176;C</div>
                                        </div>
                                    </li>
                                )}else{
                                    return(
                                    <li className="weather_card" key={i}>
                                        <div className="weather_date">{new Date(v.date).getMonth()+1}/{new Date(v.date).getDate()}</div>
                                        <div className="weather_icon"><img src='/img/game/rainy.svg' alt="" width="100" height="100" /></div>
                                        <div className="weather_row">
                                            <div className="weather_rain">降雨機率<br/>{v.rain}%</div>
                                            <div className="weather_temp">平均氣溫<br/>{v.temp}&#176;C</div>
                                        </div>
                                    </li>
                                )}
                            })}
                            </ul>
                            <div className="chatbot_time">{v.time}</div>
                            <div className="chatbot_toLeft" onClick={()=>{if(move>0)setMove(move-1)}} style={{opacity:move===0?0:1}}><i className="fas fa-chevron-left"></i></div>
                            <div className="chatbot_toRight" onClick={()=>{if(move<5)setMove(move+1)}} style={{opacity:move===5?0:1}}><i className="fas fa-chevron-right"></i></div>
                        </div>     
                        )
                    }
                    if(v.id % 2===1){
                        {/* console.log('我是機器人的代表') */}
                        return(
                        
                        <div className="chatbot_reply" >
                            <div className="chatbot_avatar">
                                <img src="/img/game/chatbot_avatar.png" alt="" />
                            </div>
                            <div className="chatbot_message">
                                {v.text}
                            </div>
                            <div className="chatbot_time">{v.time}</div>
                        </div> 
                        )
                    }else{
                        {/* console.log('我是使用者的代表') */}
                        return ( 
                            <div className="user_reply" >
                                            <div className="user_message">
                                                {v.text}
                                            </div>
                                            <div className="user_avatar">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div className="user_time">{v.time}</div>
                            </div>
                        
                        )
                    }
                } 
            })}
        {/* <div className="chatbot_reply">
            <div className="chatbot_avatar">
                <img src="/img/game/chatbot_avatar.png" alt="" />
            </div>
            <div className="chatbot_message">
                yo~ 我是熊貓<br/>有任何基礎問題可以問我
            </div>
            <div className="chatbot_time"></div>
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
    {/*------------------------------------------------------------------------------*/}
        </div>
    {/* -------- 提示回復訊息的div也是浮起來的 -------- */}
        <div className="reply_hint" style={replyToggle(toggleReply)}>...</div>
    {/*------------- menu是浮起來的 -----------------*/}
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
            <Link to="/activity" className="adopt_link">
                <div className="icon">
                    <i className="fas fa-paw"></i>
                </div>
                <div className="text">明星動物</div> 
            </Link>
            </div>
            
            <div className="profile">
            <Link to="/tour" className="profile_link">
                <div className="icon">
                    <i className="fas fa-search"></i>
                </div>
                <div className="text">導覽簡介</div>
            </Link>
            </div>
            
            <div className="weather" onClick={
                ()=>{
                    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-E5452D5B-0C6B-437B-A34A-8EEC59F154DB&locationName=%E5%A4%A7%E5%AE%89%E5%8D%80&elementName=PoP12h,T,Wx')
                    .then(r=>r.json())
                    .then(obj=>{
                        let Data = [];
                        for(let i=0;i<=12;i=i+2){
                            Data.push({
                                    date:obj.records.locations[0].location[0].weatherElement[0].time[i].startTime,
                                    rain:obj.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value,
                                    temp:obj.records.locations[0].location[0].weatherElement[1].time[i].elementValue[0].value,
                                    wx:obj.records.locations[0].location[0].weatherElement[2].time[i].elementValue[1].value,
                            });
                        }
                        const getTime = new Date();
                        let hour = getTime.getHours();
                        let minute = getTime.getMinutes()<10?'0'+getTime.getMinutes():getTime.getMinutes();
                        let description = hour >= 12 ? '下午':'上午';
                        let timeNow =  hour === 0 ? `${description}0${hour}:${minute}`:`${description}${hour}:${minute}`;
                        let replyMessage = [...message];
                        const uploadTmp1 = { id:888,
                                        text: 'do something',
                                        type:'getWeather',
                                        time:timeNow,
                                    } ;
                        replyMessage.push(uploadTmp1);
                        setWeatherData(Data);
                        setMessage(replyMessage);
                    })
            }}>  
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
        {/* 貼圖的也是浮起來的 */}
        <div className="stickers_menu" style={{bottom:toggleSticker?"50px":"-200px"}}>
            <div onClick={()=>{
                const getTime = new Date();
                let hour = getTime.getHours();
                let minute = getTime.getMinutes()<10?'0'+getTime.getMinutes():getTime.getMinutes();
                let description = hour >= 12 ? '下午':'上午';
                let timeNow =  hour === 0 ? `${description}0${hour}:${minute}`:`${description}${hour}:${minute}`;
                let replyMessage = [...message];
                const uploadTmp1 = { id:999,
                                text: '/img/game/brownBear.png',
                                type:'stickers',
                                time:timeNow,
                            } ;
                replyMessage.push(uploadTmp1);
                setMessage(replyMessage);
            }}><img src="/img/game/brownBear.png" alt=""/></div>
            <div onClick={()=>{
                const getTime = new Date();
                let hour = getTime.getHours();
                let minute = getTime.getMinutes()<10?'0'+getTime.getMinutes():getTime.getMinutes();
                let description = hour >= 12 ? '下午':'上午';
                let timeNow =  hour === 0 ? `${description}0${hour}:${minute}`:`${description}${hour}:${minute}`;
                let replyMessage = [...message];
                const uploadTmp1 = { id:999,
                                text: '/img/game/brownBear2.png',
                                type:'stickers',
                                time:timeNow,
                            } ;
                replyMessage.push(uploadTmp1);
                setMessage(replyMessage);
            }}><img src="/img/game/brownBear2.png" alt=""/></div>
            <div onClick={()=>{
                const getTime = new Date();
                let hour = getTime.getHours();
                let minute = getTime.getMinutes()<10?'0'+getTime.getMinutes():getTime.getMinutes();
                let description = hour >= 12 ? '下午':'上午';
                let timeNow =  hour === 0 ? `${description}0${hour}:${minute}`:`${description}${hour}:${minute}`;
                let replyMessage = [...message];
                const uploadTmp1 = { id:999,
                                text: '/img/game/koala.png',
                                type:'stickers',
                                time:timeNow,
                            } ;
                replyMessage.push(uploadTmp1);
                setMessage(replyMessage);
            }}><img src="/img/game/koala.png" alt=""/></div>
            <div onClick={()=>{
                const getTime = new Date();
                let hour = getTime.getHours();
                let minute = getTime.getMinutes()<10?'0'+getTime.getMinutes():getTime.getMinutes();
                let description = hour >= 12 ? '下午':'上午';
                let timeNow =  hour === 0 ? `${description}0${hour}:${minute}`:`${description}${hour}:${minute}`;
                let replyMessage = [...message];
                const uploadTmp1 = { id:999,
                                text: '/img/game/polarBear.png',
                                type:'stickers',
                                time:timeNow,
                            } ;
                replyMessage.push(uploadTmp1);
                setMessage(replyMessage);
            }}><img src="/img/game/polarBear.png" alt="" style={{transform:'translateY(20px)'}}/></div>
            <div onClick={()=>{
                const getTime = new Date();
                let hour = getTime.getHours();
                let minute = getTime.getMinutes()<10?'0'+getTime.getMinutes():getTime.getMinutes();
                let description = hour >= 12 ? '下午':'上午';
                let timeNow =  hour === 0 ? `${description}0${hour}:${minute}`:`${description}${hour}:${minute}`;
                let replyMessage = [...message];
                const uploadTmp1 = { id:999,
                                text: '/img/game/panda.png',
                                type:'stickers',
                                time:timeNow,
                            } ;
                replyMessage.push(uploadTmp1);
                setMessage(replyMessage);
            }}><img src="/img/game/panda.png" alt=""/></div>
            <div onClick={()=>{
                const getTime = new Date();
                let hour = getTime.getHours();
                let minute = getTime.getMinutes()<10?'0'+getTime.getMinutes():getTime.getMinutes();
                let description = hour >= 12 ? '下午':'上午';
                let timeNow =  hour === 0 ? `${description}0${hour}:${minute}`:`${description}${hour}:${minute}`;
                let replyMessage = [...message];
                const uploadTmp1 = { id:999,
                                text: '/img/game/panda2.png',
                                type:'stickers',
                                time:timeNow,
                            } ;
                replyMessage.push(uploadTmp1);
                setMessage(replyMessage);
            }}><img src="/img/game/panda2.png" alt=""/></div>
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
                setToggleReply(true);
                const getTime = new Date();
                let hour = getTime.getHours();
                let minute = getTime.getMinutes()<10?'0'+getTime.getMinutes():getTime.getMinutes();
                let description = hour >= 12 ? '下午':'上午';
                let timeNow =  hour === 0 ? `${description}0${hour}:${minute}`:`${description}${hour}:${minute}`;
                if(myChatbotInput.current.value){
                    // message = {
                    //                 id:1,
                    //                 text:'',
                    //                 type:'chatbot_reply',
                    //             };
                    // 下方是使用者的提問
                    let newMessage = [...message];
                    const uploadTmp = { id:chat_id+1,
                                        text:myChatbotInput.current.value,
                                        type:'user_reply',
                                        time:timeNow,
                                    } ;
                    newMessage.push(uploadTmp);
                    setMessage(newMessage);
                    // 下方是機器人回覆的部分
                    if((myChatbotInput.current.value).indexOf('你好')!==-1){
                        setTimeout(()=>{
                            setToggleReply(false);
                            let replyMessage = [...newMessage];
                            const uploadTmp1 = { id:chat_id+2,
                                            text:'你好啊，笨蛋(我可以跳著說嗎)',
                                            type:'chatbot_reply',
                                            time:timeNow,
                                        } ;
                            replyMessage.push(uploadTmp1);
                            setMessage(replyMessage);
                        },1000)
                    }else{
                        setTimeout(()=>{
                            setToggleReply(false);
                            let replyMessage = [...newMessage];
                            const uploadTmp1 = { id:chat_id+2,
                                            text:'我無法理解啊，笨蛋',
                                            type:'chatbot_reply',
                                            time:timeNow,
                                        } ;
                            replyMessage.push(uploadTmp1);
                            setMessage(replyMessage);
                        },1000)
                    }
                    // if((myChatbotInput.current.value).indexOf('你好')!==-1){
                    //     let replyMessage = [...newMessage];
                    //     console.log(newMessage)
                    //     console.log(chat_id+2)
                    //     const uploadTmp1 = { id:chat_id+2,
                    //                     text:'你好啊，笨蛋(我可以跳著說嗎)',
                    //                     type:'chatbot_reply',
                    //                     time:timeNow,
                    //                 } ;
                    //     replyMessage.push(uploadTmp1);
                    //     setMessage(replyMessage);
                    // }else{
                    //     let replyMessage = [...newMessage];
                    //     const uploadTmp1 = { id:chat_id+2,
                    //                     text:'我無法理解啊，笨蛋',
                    //                     type:'chatbot_reply',
                    //                     time:timeNow,
                    //                 } ;
                    //     replyMessage.push(uploadTmp1);
                    //     setMessage(replyMessage);
                    // }
                    myChatbotInput.current.value = '';
                }
            }}>
                <input className="robot_input" type="text" placeholder="想問我什麼就寫在這吧..." ref={myChatbotInput} />
                <button className="send"><i className="fas fa-paper-plane"></i></button>
            </form>
            <div className="sticker" onClick={()=>{setToggleSticker(!toggleSticker)}}><img src="/img/game/sticker.png" alt=""/></div>
        </div> 
    </div>
    </>
    )
}
export default Chatbot