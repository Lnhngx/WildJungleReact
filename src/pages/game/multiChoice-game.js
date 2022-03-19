import React, { useEffect } from "react";
import { useState } from "react";
import './multiChoice-game.css';
function MultiChoice(){
    const [allQuestion,setAllQuestion] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/game')
        .then(r=>r.json())
        .then(obj=>{
            // let newOjb = 
            console.log( obj);
        });
    },[])
    // 這是給按鈕的狀態，按了就會換下一題
    const [toLeft,setToLeft] = useState(false);
    const left = {transform:'translateX(-100%)'}
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
                    <ul className="mc_game_zone" style={{transform:toLeft?"translateX(-50%)":"translateX(0)"}}>
                    {allQuestion.map((v,i)=>{
                        if(i%4===0){
                            return(
                                
                                <h1>{v.name}</h1>
                            )
                        }else if(i%4===1){
                            return(
                                <button onClick={()=>{
                                    setToLeft(true)
                                }}>{v.acontent}</button>
                            )
                        }else if(i%4===2){
                            return(
                                <button onClick={()=>{
                                    setToLeft(true)
                                }}>{v.acontent}</button>
                            )
                        }else if(i%4===3){
                            return(
                                <button onClick={()=>{
                                    setToLeft(true)
                                }}>{v.acontent}</button>
                            )
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
                        </li>
                        <li className="choose_question">
                            <h2>1.請問斑馬的皮膚是什麼顏色?</h2>
                            <div className="mc_btnGroup">
                                <button className="right">黑白相間</button>
                                <button>白色</button>
                                <button>黑色</button>
                                <button>灰色</button>
                            </div>
                        </li> */}
                    </ul>
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