import React from "react";
import { useState,useEffect } from "react";
import './spot-diff.css';

function SpotDiff(){
    const [countSuccess,setCountSuccess] = useState(0);
    const [countDown,setCountDown] = useState(30);
    useEffect(() => {
        document.querySelector('.cube').style.transform = `rotateX(-90deg) `; 
        document.querySelector('.up').style.animation = `chopacity .4s linear forwards`;
        let countDownFrom = 30
        // 產生 Timer
        // console.log(`[timer] == start count down ${countDownFrom}s  ==`)
        // const startTime = Date.now()
        const countDownTimer = setInterval(() => {
          // 計算剩餘秒數
        // const pastSeconds = parseInt((Date.now() - startTime) / 1000)
        let remain = countDownFrom--;
        // console.log(remain);
        // const remain = (countDownFrom - pastSeconds)
        setCountDown(remain < 0 ? 0 : remain)
        // console.log('[timer] count down: ', remain)
    
          // 檢查是否結束
        if (remain <= 0) {
            clearInterval(countDownTimer)
            // console.log(`[timer] == stop count down ${countDownFrom}s  ==`) 
        }
        }, 1000)
    }, []) 
    
    //  useEffect(()=>{
    // function counter(){
    //     if(sec===0){
    //         clearInterval(myInterval);
    //         alert('time out');
    //     }else if(sec>10){
    //         setCountDown(sec--);
    //         document.querySelector('.sec').innerHTML= countDown;
    //         return;
    //     }else if (sec<=10 && sec>6){
    //         setCountDown(sec--);
    //         document.querySelector('.sec').innerHTML='0'+sec;
    //     }else if (sec<=6){
    //         setCountDown(sec--);
    //         document.querySelector('.sec').innerHTML='0'+sec;
    //         document.querySelector('.min').style.animation = `turnBig 1s linear  infinite`;
    //         document.querySelector('.sec').style.animation = `turnBig 1s linear  infinite`;
    //     }
    // }
    //     let myInterval = setInterval(counter,1000);
    //  },[countDown]);
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
            <div className="cloud_right">
                <img src="/img/game/cloud-right.png" alt=""/> 
            </div>
            <div className="game_title">眼力大考驗</div>
            <p className="game_profile">遊戲中你將要找出<span>5</span>個不同之處，利用滑鼠點擊圖片若正確會看到綠色圈圈。<br/>記住.....你只有<span>3</span>次錯誤的機會。<br/>抓緊時間吧，完成考驗將可以得到<span>紅利點數1000 !!!</span></p>
            <div className="container_game">
            <div className="camera">
                <div className="cube">
                    <div className="front">大家來找碴</div>
                    <div className="up">
                        <div className="min">00  :  <span className="sec">{countDown}</span></div>
                    </div>
                </div>
            </div> 
                <div className="upper">
                    <div className="life">
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
                <div className="game_zone">
                    <div className="wrap_pic">
                        <img src="/img/game/leopard.jpg" alt="" />
                    </div>
                    <div className="wrap1_pic">
                        <div className="spot1" onClick={
                            (e)=>{  
                                // const circle = document.createElement('div');
                                // circle.style.position = 'absolute';
                                // circle.className = `far fa-circle`
                                // circle.style.left = '17%';
                                // circle.style.bottom = '15%';
                                // circle.style.background = 'green';
                                // circle.style.fontSize = '2.5rem'
                                // document.querySelector('.spot1').append(circle)
                                // console.log(e.target)
                                e.target.className = `far fa-circle aa`;
                                setCountSuccess(countSuccess+1);
                            }
                        }></div>
                        <div className="spot2" onClick={
                            (e)=>{
                                console.log(e.target)
                                console.log(e.target.offsetX)
                                e.target.className = `far fa-circle`
                                setCountSuccess(countSuccess+1);
                            }
                        }></div>
                        <div className="spot3"></div>
                        <div className="spot4"></div>
                        <div className="spot5"></div> 
                        <img src="/img/game/leopard-final.jpg" id="img" alt=""/>
                    </div>
                </div>
                <div className="spot_tool">
                    <div className="left_tool">
                        <div className="help">
                            <i className="fas fa-question"></i>
                        </div>
                        <div className="list">
                            <i className="fas fa-list-ul"></i>
                        </div>
                    </div>
                    <div className="count">0<span>/5</span></div>
                    <div className="right_tool">
                        <div className="hint">
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="hint_count">x3</div>
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
export default SpotDiff;