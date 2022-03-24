import React from "react";
import './psycho-game.css';

function PsychoGame(){
    return(
    <>
        <div className="psycho_container">
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
            <div className="game_title">神準動物心理測驗</div>
            <p className="game_profile">遊戲中你將要找出<span>5</span>個不同之處，利用滑鼠點擊圖片若正確會看到綠色圈圈。<br/>記住.....你只有<span>3</span>次錯誤的機會。<br/>抓緊時間吧，完成考驗將可以得到<span>紅利點數1000 !!!</span></p>
            <div className="container_psycho_game">               
                <div className="psycho_bg">
                     {/* -------第一題從這開始------- */}
                    <div className="psycho_q1">
                        <h2>第一次認識的人，你會...?</h2>
                        <div className="psycho_btnGroup">
                            <button className="psycho_row1_right" onClick={()=>{
                                document.querySelector('.psycho_bg').style.animation = `psycho_row1_right 1.5s linear 1s forwards`;
                            }}>
                                <img className="psycho_leftBtn_cloud" src="/img/game/psycho_leftBtn.png" alt=""/>
                                <p>你先開話題</p>
                            </button>
                            <button className="psycho_row1_left" onClick={()=>{
                                document.querySelector('.psycho_bg').style.animation = `psycho_row1_left 1.5s linear 1s forwards`;
                            }}>
                                <img className="psycho_rightBtn_cloud" src="/img/game/psycho_rightBtn.png" alt=""/>
                                <p>對方先說話</p>
                            </button>
                        </div>
                        <img className="q1_img" src="/img/game/psycho_material.png" alt="" />
                        <img className="q1_img2" src="/img/game/psycho_material2.png" alt="" />
                    </div>
                    {/* 第二題的開始 左邊*/}
                    <div className="psycho_q2">
                        <h2>約好早上10點見面，你會幾點到?</h2>
                        <div className="psycho_btnGroup">
                            <button className="psycho_row21_right" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-20.001%) translateY(-800px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row21_right 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_leftBtn_cloud" src="/img/game/psycho_leftBtn.png" alt=""/>
                                <p>10點前就會到</p>
                            </button>
                            <button className="psycho_row21_left" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-20.001%) translateY(-800px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row21_left 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_rightBtn_cloud" src="/img/game/psycho_rightBtn.png" alt=""/>
                                <p>總會遲到個20<br />分鐘左右</p>
                            </button>
                        </div>
                    </div>
                    {/* 第二題的開始 右邊*/}
                    <div className="psycho_q3">
                        <h2>離好友婚禮剩兩個禮拜，你會怎麼準備?</h2>
                        <div className="psycho_btnGroup">
                            <button className="psycho_row22_right" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-73.337%) translateY(-800px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row22_right 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_leftBtn_cloud" src="/img/game/psycho_leftBtn.png" alt=""/>
                                <p>當天要<br/>盛裝出席</p>
                            </button>
                            <button className="psycho_row22_left" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-73.337%) translateY(-800px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row22_left 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_rightBtn_cloud" src="/img/game/psycho_rightBtn.png" alt=""/>
                                <p>幹麻想那麼多</p>
                            </button>
                        </div>
                    </div>
                    {/* 第三題的開始 左左邊*/}
                    <div className="psycho_q4">
                        <h2>無止盡的愛和多到數不清的錢，你選擇?</h2>
                        <div className="psycho_btnGroup">
                            <button className="psycho_row31_right" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-6.667%) translateY(-1600px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row31_right 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_leftBtn_cloud" src="/img/game/psycho_leftBtn.png" alt=""/>
                                <p>無止盡的愛</p>
                            </button>
                            <button className="psycho_row31_left" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-6.667%) translateY(-1600px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row31_left 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_rightBtn_cloud" src="/img/game/psycho_rightBtn.png" alt=""/>
                                <p>數不清的錢</p>
                            </button>
                        </div>
                    </div>
                    {/* 第三題的開始 左邊*/}
                    <div className="psycho_q5">
                        <h2>結婚後的你...?</h2>
                        <div className="psycho_btnGroup">
                            <button className="psycho_row32_right" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-33.335%) translateY(-1600px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row32_right 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_leftBtn_cloud" src="/img/game/psycho_leftBtn.png" alt=""/>
                                <p>很願意付出</p>
                            </button>
                            <button className="psycho_row32_left" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-33.335%) translateY(-1600px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row32_left 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_rightBtn_cloud" src="/img/game/psycho_rightBtn.png" alt=""/>
                                <p>時常起爭執</p>
                            </button>
                        </div>
                    </div>
                    {/* 第三題的開始 右邊*/}
                    <div className="psycho_q6">
                        <h2>發現平台上有新歌，你會怎麼聽?</h2>
                        <div className="psycho_btnGroup">
                            <button className="psycho_row33_right" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-60.003%) translateY(-1600px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row33_right 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_leftBtn_cloud" src="/img/game/psycho_leftBtn.png" alt=""/>
                                <p>從副歌或中間</p>
                            </button>
                            <button className="psycho_row33_left" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-60.003%) translateY(-1600px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row33_left 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_rightBtn_cloud" src="/img/game/psycho_rightBtn.png" alt=""/>
                                <p>從頭聽到尾</p>
                            </button>
                        </div>
                    </div>
                    {/* 第三題的開始 右右邊*/}
                    <div className="psycho_q7">
                        <h2>團隊中，你屬於強勢還是隨和的人?</h2>
                        <div className="psycho_btnGroup">
                            <button className="psycho_row34_right" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-86.674%) translateY(-1600px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row34_right 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_leftBtn_cloud" src="/img/game/psycho_leftBtn.png" alt=""/>
                                <p>隨和的人</p>
                            </button>
                            <button className="psycho_row34_left" onClick={()=>{
                                document.querySelector('.psycho_bg').style.transform = `translateX(-86.674%) translateY(-1600px)`;
                                document.querySelector('.psycho_bg').style.animation = `psycho_row34_left 1s linear 1s forwards`;
                            }}>
                                <img className="psycho_rightBtn_cloud" src="/img/game/psycho_rightBtn.png" alt=""/>
                                <p>強勢的人</p>
                            </button>
                        </div>
                    </div>
                    {/* 第四層結果 第1個 */}
                    <div className="psycho_result1">
                        <div className="psycho_result_left"></div>
                        <div className="psycho_result_right"></div>
                    </div>
                </div>
            </div>
            {/* <div className="psycho_help">
                            <i className="fas fa-question"></i>
                        </div> */}
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
export default PsychoGame;