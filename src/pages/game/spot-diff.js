import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import './spot-diff.css';

function SpotDiff(){
    const [countSuccess,setCountSuccess] = useState(0);
    const [countDown,setCountDown] = useState(30);
    const [hintCountDown,setHintCountDown] = useState(3);
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 280,
                behavior: 'smooth'
            });
        }, 0);
        document.querySelector('.cube').style.transform = `rotateX(-90deg) `; 
        document.querySelector('.up').style.animation = `chopacity .4s linear forwards`;
        let countDownFrom = 30
        // 產生 Timer
        // console.log(`[timer] == start count down ${countDownFrom}s  ==`)
        // const startTime = Date.now()
        const countDownTimer = setInterval(() => {
        // 計算剩餘秒數
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

    // 以下是預留的提示function 我希望是能在圖片上直接幫他圈一個答案，要先篩選掉已經點過的答案
    function getHint(){
        console.log(123);
    }
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
            <div className="game_title">眼力大考驗</div>
            <p className="game_profile">遊戲中你將要找出<span>5</span>個不同之處，利用滑鼠點擊圖片若正確會看到綠色圈圈。<br/>記住.....你只有<span>3</span>次錯誤的機會。<br/>抓緊時間吧，完成考驗將可以得到<span>紅利點數1000 !!!</span></p>
            <div className="container_game">
            <div className="camera">
                <div className="cube">
                    <div className="front">大家來找碴</div>
                    <div className="up">
                        <div className="min">00  :  <span className="sec">{countDown<10 ? '0'+countDown : countDown}</span></div>
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
                                const circle = document.createElement('i');    
                                circle.className = `far fa-circle`;
                                document.querySelector('.spot1').append(circle)
                                e.target.style.pointerEvents = 'none';
                                setCountSuccess(countSuccess+1);
                            }
                        }></div>
                        <div className="spot2" onClick={
                            (e)=>{
                                const circle = document.createElement('i');    
                                circle.className = `far fa-circle`;
                                document.querySelector('.spot2').append(circle)
                                e.target.style.pointerEvents = 'none';
                                setCountSuccess(countSuccess+1);
                            }
                        }></div>
                        <div className="spot3" onClick={
                            (e)=>{
                                const circle = document.createElement('i');    
                                circle.className = `far fa-circle`;
                                document.querySelector('.spot3').append(circle)
                                e.target.style.pointerEvents = 'none';
                                setCountSuccess(countSuccess+1);
                            }
                        }></div>
                        <div className="spot4" onClick={
                            (e)=>{
                                const circle = document.createElement('i');    
                                circle.className = `far fa-circle`;
                                document.querySelector('.spot4').append(circle)
                                e.target.style.pointerEvents = 'none';
                                setCountSuccess(countSuccess+1);
                            }
                        }></div>
                        <div className="spot5" onClick={
                            (e)=>{
                                const circle = document.createElement('i');    
                                circle.className = `far fa-circle`;
                                document.querySelector('.spot5').append(circle)
                                e.target.style.pointerEvents = 'none';
                                setCountSuccess(countSuccess+1);
                            }
                        }></div> 
                        <img src="/img/game/leopard-final.jpg" id="img" alt=""/>
                    </div>
                </div>
                <div className="spot_tool">
                    <div className="left_tool">
                        <div className="help">
                            <i className="fas fa-question"></i>
                        </div>
                        <Link to="/game/spot-level" className="list">
                            <i className="fas fa-list-ul"></i>
                        </Link>
                    </div>
                    <div className="count">{countSuccess}<span>/5</span></div>
                    <div className="right_tool">
                        <div className="hint" onClick={()=>{
                            if(hintCountDown>0){
                            getHint();
                            setHintCountDown(hintCountDown-1)
                            }
                        }}>
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="hint_count">x{hintCountDown}</div>
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