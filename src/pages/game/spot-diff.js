import React from "react";
import './spot-diff.css';
 function spotDiff(){
     return(
     <>
        <div className="container">
            <div className="game_title">眼力大考驗</div>
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
                        <img src="/zebra.jpg" alt="" />
                    </div>
                    <div class="wrap1_pic">
                        {/* <div class="spot1"></div>
                        <div class="spot2"></div>
                        <div class="spot3"></div>
                        <div class="spot4"></div>
                        <div class="spot5"></div>  */}
                        <img src="/zebra_final.jpg" id="img" alt=""/>
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
         

     </>
     )
 }
 export default spotDiff