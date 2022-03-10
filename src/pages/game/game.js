import React from "react";
import Chatbot from './chatbot'
import './game.css';
function game(){
    return(
    <>
        <div className="game_container">
            <div className="leaf_left">
                <img src="/img/game/leaf-left.png" alt=""/>
            </div>
            <div className="leaf_right">
                <img src="/img/game/leaf-right.png" alt=""/>   
            </div>
            <div className="cloud_left">
                <img src="/img/game/cloud-left.png" alt=""/> 
            </div>
            <div className="cloud_left1">
                <img src="/img/game/cloud-left1.png" alt=""/> 
            </div>
            <div className="cloud_right">
                <img src="/img/game/cloud-right.png" alt=""/> 
            </div>
            <div className="cloud_right1">
                <img src="/img/game/cloud-right1.png" alt=""/> 
            </div>
            <div className="game_title">眼力大考驗</div>
            <p className="game_profile">遊戲中你將要找出<span>5</span>個不同之處，利用滑鼠點擊圖片若正確會看到綠色圈圈。<br/>記住.....你只有<span>3</span>次錯誤的機會。<br/>抓緊時間吧，完成考驗將可以得到<span>紅利點數1000 !!!</span></p>
            <div className="gameChoose_zone">
            <div className="mask">
                <div className="mask_title">眼力大挑戰</div>
                <div className="mask_text">遊戲中你將要找出5個不同之處<br/>利用滑鼠點擊圖片若正確...</div>
                <button className="mask_btn" onClick={()=>{console.log(123456)}}>眼力大挑戰</button>
            </div>
                <div className="choose_spotGame" onMouseEnter={(e)=>{
                    e.target.style.width = '500px';
                    e.target.style.height = '500px';
                    e.target.style.marginRight = '-2rem';
                    e.target.style.zIndex = '0';
                    e.target.style.transform='rotate(360deg)';
                    document.querySelector('.mask').style.zIndex='1000';
                    document.querySelector('.mask').style.opacity='1';
                    
                    document.querySelector('.mask').style.pointerEvents='all';  
                }} onMouseOut={(e)=>{
                    e.target.style.width = '300px';
                    e.target.style.height = '300px';
                    e.target.style.marginRight = '2.5rem';
                    e.target.style.zIndex = '1';
                    document.querySelector('.mask').style.zIndex='-99';
                    document.querySelector('.mask').style.opacity='0';
                    document.querySelector('.mask').style.pointerEvents='none';
                }}>
                    <img src="/img/game/spot_game.png" alt="" />
                </div>
                <div className="choose_psychoGame">
                    <img src="/img/game/psycho_game.png" alt="" />
                </div>
                <div className="choose_crossGame">
                    <img src="/img/game/cross_game.png" alt="" />
                </div>
                <div className="choose_iceGame">
                    <img src="/img/game/ice_game.png" alt="" />
                </div>
            </div>
            <div className="animals-footer"> 
                <img src="/animals-footer.png" alt="" />
            </div>         
        </div>

    </>
    )
}
export default game