import React from "react";
import './spot-diff.css';
 function spotDiff(){
     return(
     <>
        <div className="spot_container">
            <div className="game_title">眼力大考驗</div>
            <p className="game_profile">遊戲中你將要找出5個不同之處，並利用滑鼠點擊圖片若正確會看到綠色圈圈。<br/>記住.....你只有3次錯誤的機會。<br/>抓緊時間吧，完成考驗將可以得到紅利點數1000 !!!</p>
            <div class="container_game">
                <div class="upper">
                    <div class="life">
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
                <div class="game_zone">
                    <div class="wrap_pic">
                        <img src="/img/game/leopard.jpg" alt="" />
                    </div>
                    <div class="wrap1_pic">
                        {/* <div class="spot1"></div>
                        <div class="spot2"></div>
                        <div class="spot3"></div>
                        <div class="spot4"></div>
                        <div class="spot5"></div>  */}
                        <img src="/img/game/leopard-final.jpg" id="img" alt=""/>
                    </div>
                </div>
                <div class="spot_tool">
                    <div class="left_tool">
                        <div class="help">
                            <i class="fas fa-question"></i>
                        </div>
                        <div class="list">
                            <i class="fas fa-list-ul"></i>
                        </div>
                    </div>
                    <div class="count">0<span>/5</span></div>
                    <div class="right_tool">
                        <div class="hint">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animals-footer">
                
                <img src="/animals-footer.png" alt="" />
            </div>
            {/* <div className="leaf_left">
                <img src="/leaf_left.png" alt=""/>
            </div>
            <div className="leaf_right">
                <img src="/leaf_right.png" alt=""/>
             
                
            </div>
            <div className="cloud">
                <svg src="./imgs/cloud.svg"></svg>
            </div> */}
           
        </div>
         
<style jsx>{`
img{
    width: 100%;
    height: auto;
    background-size: cover;
    border:3px solid wheat;
}`}</style>
     </>
     )
 }
 export default spotDiff