import React from "react";
import './multiChoice-game.css';
function MultiChoice(){
    return(
    <>
        <div className="spot_container">
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
            <div className="game_title">冷知識大挑戰</div>
            <p className="game_profile">遊戲中你將要找出<span>5</span>個不同之處，利用滑鼠點擊圖片若正確會看到綠色圈圈。<br/>記住.....你只有<span>3</span>次錯誤的機會。<br/>抓緊時間吧，完成考驗將可以得到<span>紅利點數1000 !!!</span></p>
            <div className="mc_container_game">
                <div className="mc_game_border">
                    <div className="mc_game_zone">
                        <h2>1.請問斑馬的皮膚是什麼顏色?</h2>
                        <div className="mc_btnGroup">
                            <button className="right">黑白相間</button>
                            <button>白色</button>
                            <button>黑色</button>
                            <button>灰色</button>
                        </div>
                        <div className="mc_help">
                            <i className="fas fa-question"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animals-footer"> 
                <img src="/animals-footer.png" alt="" />
            </div> 
        </div>       
        {/* <style jsx>
        {`
        img{
            width: 100%;
            height: auto;
            background-size: cover;
            border:3px solid wheat;
        }`}
        </style> */}
    </>
    )
};
export default MultiChoice;