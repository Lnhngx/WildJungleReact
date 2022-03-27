// import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './Carousel'
import './CarouselShow.scss'
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function ChangeMap (state){
  for (let i = 1; i <= 8; i++){
    document.getElementById("Centerig"+i).src = "/img/tour/"+state+"/0"+i+".jpg";
  }
  const hot = ["亞洲象","鯨頭鸛","水豚","馬來膜","大猩猩","彩虹巨嘴鳥","樹懶","穿山甲"];
  const hotEN = ["Elephas maximus","Shoebill","Capybara","Malayan Tapir","Gorilla","Ramphastos sulfuratus","Folivora","Manidae"];
  if (state === "hot") {
    for(let i=0; i<hot.length; i++){
      document.getElementById("CenterigCN"+(i+1)).innerHTML=hot[i];
      document.getElementById("CenterigEN"+(i+1)).innerHTML=hotEN[i];
    }}

    const Ocean = ["鯊魚","海兔子","魟魚","水母","海豚","白鯨","海馬","海龜"];
    const oceanEN = ["Selachimorpha","Anaspidea","Stingrays","Jellyfish","Delphinidae","Beluga","Hippocampus","Sea turtle"];
    if (state === "Ocean") {
    for(let i=0; i<Ocean.length; i++){
      document.getElementById("CenterigCN"+(i+1)).innerHTML=Ocean[i];
      document.getElementById("CenterigEN"+(i+1)).innerHTML=oceanEN[i];
    }}
    const nocturnal = ["刺蝟","赤狐","美洲獅","浣熊","無尾熊","象龜","豪豬","貓頭鷹"];
    const nocturnalEN = ["hedgehog","redfox","cougar","raccoon","koala","geochelone","porcupine","owl"];
    if (state === "nocturnal") {
      for(let i=0; i<nocturnal.length; i++){
        document.getElementById("CenterigCN"+(i+1)).innerHTML=nocturnal[i];
        document.getElementById("CenterigEN"+(i+1)).innerHTML=nocturnalEN[i];
      }}  
    const ice = ["雪狐","馴鹿","北極熊","斑海豹","企鵝","白大角羊","北極貂","豎琴海豹"];
    const iceEN = ["Vulpes lagopus","redfoxRangifer tarandus","Ursus maritimus","Harbor seal","Ovis dalli","geochelone","Gulo gulo","Pagophilus groenlandicus"];
    if (state === "ice") {
     for(let i=0; i<ice.length; i++){
        document.getElementById("CenterigCN"+(i+1)).innerHTML=ice[i];
        document.getElementById("CenterigEN"+(i+1)).innerHTML=iceEN[i];
        }}   
}

function CarouselShow1 (){

  const tourmap = useRef();

    return(<>
      <div className="tour_Group">
        <div className="tourGuide1">
            <div className="tourtextArea1">
                <h2 className="tourH2">Jungle Tour</h2>
                <p className="tourP1">園區導覽</p>
            </div>
            <div>
            <img src="/img/home/tropicalmap.svg" alt="" ref={tourmap} />
            </div>
        </div>
        <div className="tourGuide2">
            <figure className="tourR1img">
              <img src="/img/home/tropical.jpg" alt="" 
                  onMouseMove={()=>{tourmap.current.src =
                  "/img/home/tropicalmap.svg"}}
                  onClick={()=>{ChangeMap("hot") }}  
              /> 
              <figcaption>熱帶雨林</figcaption>
            </figure>
            <figure className="tourR2img">
              <img src="/img/home/Ocean.jpg" alt="#/" 
                 onMouseMove={()=>{tourmap.current.src =
                  "/img/home/Oceanmap.svg"}} 
                  onClick={()=>{ChangeMap("Ocean") }}
              /> 
              <figcaption>海底世界</figcaption>
            </figure>
            <figure className="tourR3img">
              <img src="/img/home/nocturnal.jpg" alt="#/" 
                 onMouseMove={()=>{tourmap.current.src =
                 "/img/home/nocturnalmap.svg"}}
                 onClick={()=>{ChangeMap("nocturnal") }}
              />
              <figcaption>夜行動物</figcaption>
            </figure>
            <figure className="tourR4img">
              <img src="/img/home/ice.jpg" alt="#/"
                 onMouseMove={()=>{tourmap.current.src =
                "/img/home/icemap.svg"}} 
                onClick={()=>{ChangeMap("ice") }}
                /> 
              <figcaption>冰原歷險</figcaption>
            </figure>
        </div>
      </div>
      <div style={{height:'100%'}} className="CarouselShow" >
    <Carousel cols={4} gap={20}>
      <Carousel.Item>
      <div className="tourCenterCard">
            <div className="figure">
              <img src="/img/tour/hot/01.jpg"  id="Centerig1" alt=""/>
            </div>   
            <h3 className="tourCardTwoText" id="CenterigCN1" >亞洲象</h3> 
            <span className="tourCenterText" id="CenterigEN1">(Elephas maximus)</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard">
            <div className="figure">
              <img src="/img/tour/hot/02.jpg" id="Centerig2" alt="#/"/>
            </div>   
            <h3 className="tourCardTwoText" id="CenterigCN2">鯨頭鸛</h3> 
            <span className="tourCenterText" id="CenterigEN2">(Shoebill)</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard">
            <div className="figure">
              <img src="/img/tour/hot/03.jpg" id="Centerig3" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText" id="CenterigCN3" >水豚</h3> 
            <span className="tourCenterText" id="CenterigEN3">(Capybara)</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard">
            <div className="figure">
              <img src="/img/tour/hot/04.jpg" id="Centerig4" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText" id="CenterigCN4">馬來膜</h3> 
            <span className="tourCenterText" id="CenterigEN4">(Malayan Tapir)</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard">
            <div className="figure">
              <img src="/img/tour/hot/05.jpg" id="Centerig5" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText" id="CenterigCN5">大猩猩</h3> 
            <span className="tourCenterText" id="CenterigEN5" >(Gorilla)</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard">
            <div className="figure">
              <img src="/img/tour/hot/06.jpg" id="Centerig6" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText" id="CenterigCN6" >彩虹巨嘴鳥</h3> 
            <span className="tourCenterText" id="CenterigEN6">(Ramphastos sulfuratus)</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard">
            <div className="figure">
              <img src="/img/tour/hot/07.jpg" id="Centerig7" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText" id="CenterigCN7">樹懶</h3> 
            <span className="tourCenterText" id="CenterigEN7">(Folivora)</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard">
            <div className="figure">
              <img src="/img/tour/hot/08.jpg" id="Centerig8" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText" id="CenterigCN8">穿山甲</h3> 
            <span className="tourCenterText" id="CenterigEN8">(Manidae)</span>   
          </div>
      </Carousel.Item>
    </Carousel>
      </div>

</>)
}
const rootElement = document.getElementById('root')
ReactDOM.render(<CarouselShow1 />, rootElement)
export default CarouselShow1
