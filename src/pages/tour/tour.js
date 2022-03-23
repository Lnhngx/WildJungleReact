import React from "react";
import "./tour.scss";
import OrderList from "./components/OrderList";
import CarouselShow from "./components/CarouselShow";
import Assets from "./Assets/p6CVo6abkKGY.gif";








function tour(){
    return(<>



 <div className="tourbackground">
    <div className="tourback"></div>
    <img src="/img/home/homebgcblack.svg" alt="" />
 </div>
     <div className="tourContainer">
      <div className="tour_Group">
        <div className="tourGuide1">
            <div className="tourtextArea1">
                <h2 className="tourH2">Jungle Tour</h2>
                <p className="tourP1">園區導覽</p>
            </div>
            <div>
            <img src="/img/tour/Group 277.png" alt="#/" />
            </div>
        </div>
        <div className="tourGuide2">
            <figure className="tourR1img">
              <img src="/img/home/tropical.jpg" alt="#/" /> 
              <figcaption>熱帶雨林</figcaption>
            </figure>
            <figure className="tourR2img">
              <img src="/img/home/Ocean.jpg" alt="#/" /> 
              <figcaption>海底世界</figcaption>
            </figure>
            <figure className="tourR3img">
              <img src="/img/home/nocturnal.jpg" alt="#/" />
              <figcaption>夜行動物</figcaption>
            </figure>
            <figure className="tourR4img">
              <img src="/img/home/ice.jpg" alt="#/" /> 
              <figcaption>冰原歷險</figcaption>
            </figure>
        </div>
      </div>
      <CarouselShow/>
      {/* <div className="Container" id="container2"> */}
        {/* <div className="tourCenterIndustry"> */}
      
          {/* <div className="tourCenterCard" id="Centerimg1">
            <div className="figure">
              <img src="/img/tour/hot/Elephant.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">亞洲象</h3> 
            <span className="tourCenterText" >(Elephas maximus)</span>   
          </div> 
          <div className="tourCenterCard" id="Centerimg2">
            <div className="figure">
              <img src="/img/tour/hot/Shoebill.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">鯨頭鸛</h3> 
            <span className="tourCenterText" >(Shoebill)</span>   
          </div> 
          <div className="tourCenterCard" id="Centerimg3">
            <div className="figure">
              <img src="/img/tour/hot/Capybara.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">水豚</h3> 
            <span className="tourCenterText" >（Capybara）</span>   
          </div> 
          <div className="tourCenterCard" id="Centerimg4">
            <div className="figure">
              <img src="/img/tour/hot/malayantapir.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">馬來膜</h3> 
            <span className="tourCenterText" >（Malayan Tapir）</span>   
          </div>
         */}
         
    
        {/* </div>
      </div> */}
      <div className="tourdescription">
       <div className="tourdescriptiongGuild">
         <div className="tourdescriptionGuild1">
          <div className="tourdescriptionpic">
            <img src="/img/tour/Elephant.jpg" alt="#/"/>
          </div>
         </div>
         <div className="tourdescriptionGuild2">
            <div className="tourdescriptionGuild2Text">
          <h2>亞洲象</h2>
          <p>學名：Elephas maximus），是象的一種，

                  錫蘭象是亞洲象的指名亞種。亞洲象為IUCN紅色名錄中的瀕

                  危物種之一[1]，也是中國國家一級保護動物

                  亞洲象主要棲息地，為東南亞和南亞這些熱帶地區的印度、

                  尼泊爾、斯里蘭卡、緬甸、泰國、越南、印尼和馬來西亞等

                  十三個國家，大約四十四萬平方公里的土地上。古代從西亞

                  的兩河流域，往東延伸到中國的黃河流域，都曾經有牠們活

                  躍的蹤影。現今中國境內其自然棲息地自清朝以後就被壓縮

                  到雲南無量山、哀牢山以南的西雙版納、普洱和臨滄一帶。不過近年

                  來其活動北界可達玉溪、昆明之間。</p>
            </div>
            <div className="tourdescriptionGuild2Icon">
              <div className="tourdescriptionGuild2Iconbox"> 
                 <div className="tourdescriptionGuild2Icon1"></div>
                 <div className="tourdescriptionGuild2Icon2"></div>
                 <button className="touradoptbtn btn" style={{color: "white"}}>我要認養！</button>        
              </div>
            <div> 
           </div> 
            </div>
         </div>
       </div> 
      </div>  
     
      <div className="tourLife">
      <div className="tourGuide1">
            <div className="tourtextArea1">
                <h2 style={{color: "black"}} className="tourH2">Jungle Tour</h2>
                <p style={{color: "black"}} className="tourP1">園區導覽</p>
c          </div>
        </div>
      <>

      </>
      <OrderList/>
      <img src={Assets} alt="#/"/>
     

    
      
   
  
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