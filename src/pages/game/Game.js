import React from "react";
import Chatbot from './Chatbot'
import './game.css';
 function Game(){
     return(
     <>
        <div className="container">
            <div className="game_title">眼力大考驗</div>
            <div className="leaf_left">
                <img src="/leaf_left.png" alt=""/>
            </div>
            <div className="leaf_right">
                <img src="/leaf_right.png" alt=""/>
             
                
            </div>
            <div className="cloud">
                <svg src="./imgs/cloud.svg"></svg>
            </div>
            <Chatbot />
        </div>
        
     </>
     )
 }
 export default Game