import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './multiChoice-game.css';
function MultiChoice(){
    const [allQuestion,setAllQuestion] = useState([]);
    const [finish,setFinish] = useState(false);
    useEffect(()=>{        
        fetch('http://localhost:4000/game')
        .then(r=>r.json())
        .then(obj=>{
            console.log(obj);
            setAllQuestion(obj);
        })       
    },[])
    // 這是給按鈕的狀態，按了就會換下一題
    const [toLeft,setToLeft] = useState(false);
    function move(toLeft){
        switch (toLeft){
            case 1:
                const obj = {transform:'translateX(-10%)'}
                return obj;
            case 2:
                const obj2 = {transform:'translateX(-20%)'}
                return obj2;
            case 3:
                const obj3 = {transform:'translateX(-30%)'}
                return obj3;
            case 4:
                const obj4 = {transform:'translateX(-40%)'}
                return obj4;
            case 5:
                const obj5 = {transform:'translateX(-50%)'}
                return obj5;
            case 6:
                const obj6 = {transform:'translateX(-60%)'}
                return obj6;
            case 7:
                const obj7 = {transform:'translateX(-70%)'}
                return obj7;
            case 8:
                const obj8 = {transform:'translateX(-80%)'}
                return obj8;
            case 9:
                const obj9 = {transform:'translateX(-90%)'}
                return obj9;
            case 10:
                const obj10 = {transform:'translateX(-100%)'}
                return obj10;
            default:
                const obj0 = {transform:'translateX(0)'}
        }
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
            <div className="game_title">冷知識大挑戰</div>
            <p className="game_profile">在這<span>10</span>題中努力回答吧，可能有些答案會超出你的想像<br /><span>答對5</span>題以上會得到紅利點數<span>300</span><br /><span>全部答對能拿到翻倍紅利哦</span></p>
            <div className="mc_container_game">
                <div className="mc_game_border">
                    <ul className="mc_game_zone" style={move(toLeft)}>
                        {allQuestion.map((v,i)=>{
                            if(i<9){
                            return(
                            <li className="choose_question">
                                <h2>{i+1}.{v.qcontent}</h2>
                                <div className="mc_btnGroup">
                                    <button onClick={()=>{
                                        setToLeft(i+1)
                                    }}>{v.answers[0]}
                                    </button>
                                    <button onClick={()=>{
                                        setToLeft(i+1)
                                    }}>{v.answers[1]}
                                    </button>
                                    <button onClick={()=>{
                                        setToLeft(i+1)
                                    }}>{v.answers[2]}
                                    </button>
                                    <button onClick={()=>{
                                        setToLeft(i+1)
                                    }}>{v.answers[3]}
                                    </button>
                                </div>
                            </li>)
                            }else{
                                return(
                            <li className="choose_question">
                                <h2>{i+1}.{v.qcontent}</h2>
                                <div className="mc_btnGroup">
                                    <button onClick={()=>{
                                        setToLeft(9)
                                        setFinish(true)
                                    }}>{v.answers[0]}
                                    </button>
                                    <button onClick={()=>{
                                        setToLeft(9)
                                        setFinish(true)
                                    }}>{v.answers[1]}
                                    </button>
                                    <button onClick={()=>{
                                        setToLeft(9)
                                        setFinish(true)
                                    }}>{v.answers[2]}
                                    </button>
                                    <button onClick={()=>{
                                        setToLeft(9)
                                        setFinish(true)
                                    }}>{v.answers[3]}
                                    </button>
                                </div>
                            </li>)
                            }
                        })}
                        {/* <li className="choose_question">
                            <h2>1.請問斑馬的皮膚是什麼顏色?</h2>
                            <div className="mc_btnGroup">
                                <button onClick={()=>{
                                    setToLeft(true)
                                }}>黑白相間</button>
                                <button>白色</button>
                                <button>黑色</button>
                                <button>灰色</button>
                            </div>
                        </li>*/}
                    </ul>
                        <div className="mc_board" style={{display:toLeft===10?'flex':'none'}}>
                            <div className="boardLeft"></div>
                            <div className="boardRight">
                                <div className="board_point">1000</div>
                                <div className="board_pointText">WILDJUNGLE</div>
                                <img src="/img/game/game-points.png" alt="" />
                                <div className="correctNum">答對題數:<span>5</span></div>
                                <div className="incorrectNum">答錯題數:<span>2</span></div>
                                <div className="board_btnGroup">
                                    <Link
                                        className="board_winBtn" 
                                        to= '/game'
                                    >
                                        <p>回遊戲主頁</p>
                                        <img src="/img/game/game_button.png" alt="" />
                                    </Link>
                                    <Link
                                        className="board_winBtn"
                                        to= '/products' 
                                    >
                                        <p>點數馬上用</p>
                                        <img src="/img/game/game_button.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    <div className="send_fianlAnswer" style={{display:finish?'block':'none'}} onClick={()=>{
                                        setToLeft(10)
                                        setFinish(false)
                                    }}>確認送出<i class="fas fa-arrow-right"></i></div>
                    <div className="mc_help">
                        <i className="fas fa-question"></i>
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