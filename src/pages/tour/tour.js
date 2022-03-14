import React from "react";
import "./tour.scss";

function tour(){
    return(<>




    <div className="tourbackground"></div>
    <div className="tourContainer">

    <div style={{display: 'flex',paddingTop:"5rem" ,flexWrap:"wrap"}} className="tysu_Group">
        <div style={{maxWidth:"30%"}} className="tysu_tourGuide1">
            <div style={{color: 'white'}}>
                <h2 className="tysu_tourH2" style={{fontSize:"6rem"}}>Jungle Tour</h2>
                <p className="tysu_tour" style={{fontSize:"3rem"}}>園區導覽</p>
            </div>
            <div>
            <img  style={{width:"100%"}} src="/img/tour/Group 277.png" alt="" />
            </div>
        </div>

        <div style={{width:"70%", display: 'flex',color: 'white'}} className="tysu_tourGuide2">
            <figure style={{height:"40vw",maxWidth:"25%" ,outline: '1px solid red',textAlign: 'center'}}>
              <img  style={{width:"100%",height:"100%",objectFit: 'cover' ,objectPosition:"35%"}} src="/img/home/tropical.jpg" alt="#/" /> 
              <figcaption>海底世界</figcaption>
            </figure>
            <figure style={{height:"40vw",maxWidth:"25%" ,outline: '1px solid red',textAlign: 'center'}}>
              <img  style={{width:"100%",height:"100%",objectFit: 'cover' ,objectPosition:"70%"}} src="/img/home/Ocean.jpg" alt="#/" /> 
              <figcaption>海底世界</figcaption>
            </figure>
            <figure style={{height:"40vw",maxWidth:"25%" ,outline: '1px solid red',textAlign: 'center'}}>
              <img  style={{width:"100%",height:"100%",objectFit: 'cover' ,objectPosition:"68%"}} src="/img/home/nocturnal.jpg" alt="#/" />
              <figcaption>海底世界</figcaption>
            </figure>
            <figure style={{height:"40vw",maxWidth:"25%" ,outline: '1px solid red',textAlign: 'center'}}>
              <img  style={{width:"100%",height:"100%",objectFit: 'cover' ,objectPosition:"80%"}} src="/img/home/ice.jpg" alt="#/" /> 
              <figcaption>海底世界</figcaption>
            </figure>
    </div>




</div>








      <div className="tourTop">
        <div className="tourLeftIndustry">
          <div className="tourContent">
            <span className="tour_h1">Jungle Tour</span>
            <span className="tour_h2">園區導覽</span>
          </div>
          <div className="tourMap">
            <img src="/img/tour/Group 277.png" alt="" />
          </div>
        </div>
      </div>

    
      <div className="tourRightIndustry">
            <figure className="tourR1img">
              <img src="/img/home/tropical.jpg" alt="#/" /> 
              <figcaption>海底世界</figcaption>
            </figure>
           
            
            <figure className="tourR2img">
              <img src="/img/tour/ocean.jpg" alt="#/" />
              <figcaption>海底世界</figcaption>
            </figure>
            <figure className="tourR3img">
              <img src="/img/tour/sleep.jpeg" alt="#/" />
              <figcaption>夜行動物</figcaption>
            </figure>
            <figure className="tourR4img">
              <img src="/img/tour/Sphenisciformes/90e80dbb-penguin-chick.jpeg" alt="#/" />
              <figcaption>極地世界</figcaption>
            </figure>
      </div>



      <div className="Container" id="container2">
        <div className="tourCenterIndustry">
          <div className="tourCenterCard" id="Centerimg1">
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
        
         
    
        </div>

      </div>
      <div className="tourdescription"></div>
      <div className="tourLife"></div>  
    </div>
    
    </>)
}

export default tour