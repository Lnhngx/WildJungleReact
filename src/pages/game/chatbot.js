import React from "react";
import './chatbot.css';
 function chatbot(){
     return(
     <>
        <div className="wrap">
        <div className="nav">
            <div className="name">WILDJUNGLE</div>
            <div className="close"><i className="fas fa-times"></i></div>
            
        </div>
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
           
            <input classNaeme="robot_input" type="text"/>

            <div className="send"><i className="fas fa-paper-plane"></i></div>
            
        </div> 
    </div>
     </>
     )
 }
 export default chatbot