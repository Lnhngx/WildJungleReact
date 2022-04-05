import React, { useEffect, useRef, useState } from "react";
import "./tour.scss";
import OrderList from "./components/OrderList";
import CarouselShow from "./components/CarouselShow1";
import Assets from "./Assets/p6CVo6abkKGY.gif";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';











function tour(){
    return(<>



 <div className="tourbackground">
    <div className="tourback"></div>
    <img src="/img/home/homebgcblack.svg" alt="" />
</div>
    <div className="tourContainer">
  
      <CarouselShow/>
      <div className="tourLife">
      <div className="tourGuide1">
            <div className="tourtextArea1">
                <h2 style={{color: "black"}} className="tourH2">Jungle Tour</h2>
                <p style={{color: "black"}} className="tourP1">園區導覽</p>
c          </div>
        </div>
      <div className="wrap">
        <div className="Touritem">
            <img src="/img/tour/an1.jpeg" alt=""/>
          <div className="txt">
            <h2>一個美麗的牧群</h2>
            <p>Pyi Mai 和她的母親 Kham Moon 與嬰兒 Chaba、Bun Ma</p>
          </div>
        </div>
        <div className="Touritem">
          <img src="/img/tour/010-elephant-sky-walk-single-day-visit15737371131884.jpeg" alt=""/>
          <div className="txt">
            <h2>大象空中步道 - 單日遊</h2>
            <p>享受一整天的大象自然公園之旅，包括參加我們特別的“Hands Off”項目。觀察我們獲救的大像生活在他們選擇的象群中，了解他們的個人歷史。</p>
        </div>
        </div>
        <div className="Touritem">
            <img src="./img/tour/GluayHom_5.jpeg" alt=""/>
          <div className="txt">
            <h2>公牛大象膠坎</h2>
            <p>Gluay Hom 是一個 10 歲的男性，在幼年時，Gluay Hom 與他的母親分開，被訓練成馬戲團的大象。</p>
          </div>
        </div>     
        <div className="Touritem">
          <img src="/img/tour/CareForElephants_18.jpeg" alt="＃/"/>
          <div className="txt">
            <h2>為什麼我們要照顧大象？</h2>
            <p>大象有很多健康問題，尤其是老大象掉牙的時候。牙齒脫落是死亡的主要原因。隨著最後一顆臼齒開始分解，咀嚼和消化食物變得越來越困難。處於這種困境的大象經常死於飢餓或營養不良。</p>
          </div>
        </div>
      </div>
        <div className="tourLifeTop">
        <div className="tourLifeToppic1"></div>
          <div className="tourLifeToppic">
            
          </div>
          <div className="tourLifeTitle">
          
          </div>
          </div>
          </div>  
        </div>
    </>)
}

export default tour