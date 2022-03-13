import React from "react";
import Chatbot from './chatbot'
import {useState} from 'react';
import './game.css';
function Game(){
    const [hover,setHover] = useState(-1);
    const hoverHandler = id => {
        let obj = {
            opacity:'1',
            pointerEvents:'all',
            marginRight:'-2rem',
            top:'0px',
            left:'175px',
            zIndex:'99',
        };
        let obj1 = {
            opacity:'1',
            pointerEvents:'all',
            marginRight:'-2rem',
            top:'0px',
            left:'510px',
            zIndex:'99',
        };
        let origin_obj = {
            opacity:'0',
            pointerEvents:'none',
            marginRight:'2.5rem',
            left:'175px'
        }
        switch (id) {
            case 1:
                return obj;
                break;
            case 2:
                return obj1;
                break;
            default:
                return origin_obj;
        }
    }
    // const hoverHandlerUnder = id => {
    //     let obj = {
    //         width: '500px',
    //         height: '500px',
    //         margin_right:'-2rem',
    //         zIndex:'0',
    //     };
    //     let obj1 = {
    //         width: '500px',
    //         height: '500px',
    //         margin_left:'-4rem',
    //         margin_right:'-2rem',
    //         zIndex:'0',
    //     };
    //     let origin_obj = {
    //         width: '300px',
    //         height: '300px',
    //         margin_right:'2.5rem',
    //         zIndex:'9',
    //     }
    //     switch (id) {
    //         case 1:
    //             return obj;
    //             break;
    //         case 2:
    //             return obj1;
    //             break;
    //         default:
    //             return origin_obj;
    //     }
    // }
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



        <Chatbot />

            <div className="gameChoose_zone">
                <div className="choose_spotGame" 
                    onMouseEnter={()=>{
                        setHover(1)
                    }}
                    onMouseLeave={()=>{ 
                        setHover(-1)
                    }}
                    // style={ hover===1 && hoverHandlerUnder(hover)}
                >
                <img src="/img/game/spot_game.png" alt="" />
                <div className="mask" style={hoverHandler(hover)}>
                    <div className="mask_title">眼力大挑戰</div>
                    <div className="mask_text">遊戲中你將要找出5個不同之處<br/>利用滑鼠點擊圖片若正確...</div>
                    <button className="mask_btn" onClick={()=>{console.log(123456)}}>進入遊戲</button>
                </div>
                </div>

                <div className="choose_psychoGame"
                    onMouseEnter={()=>{
                        setHover(2);
                        console.log('fuck you ')
                    }}
                    onMouseLeave={()=>{ 
                        setHover(-1)
                    }}
                    // style={ hover===1 && hoverHandlerUnder(hover)}
                >
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
export default Game

// style={{width:'100px',transition:'0.5s'}}

// style={{width:'500px',transition:'0.5s'}}