import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './Carousel'
import './CarouselShow.scss'

function CarouselShow1 (){
    return(<>
  <div style={{height:'100%'}} className="CarouselShow">
    <Carousel cols={4} gap={20}>
      <Carousel.Item>
      <div className="tourCenterCard" id="Centerig1">
            <div className="figure">
              <img src="/img/tour/hot/Elephant.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">亞洲象</h3> 
            <span className="tourCenterText" >(Elephas maximus)</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard" id="Centerig2">
            <div className="figure">
              <img src="/img/tour/hot/Shoebill.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">鯨頭鸛</h3> 
            <span className="tourCenterText" >（Shoebill）</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard" id="Centerig3">
            <div className="figure">
              <img src="/img/tour/hot/Shoebill.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">水豚</h3> 
            <span className="tourCenterText" >（（Capybara））</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard" id="Centerig4">
            <div className="figure">
              <img src="/img/tour/hot/malayantapir.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">馬來膜</h3> 
            <span className="tourCenterText" >（Malayan Tapir）</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard" id="Centerig5">
            <div className="figure">
              <img src="/img/tour/hot/malayantapir.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">馬來膜</h3> 
            <span className="tourCenterText" >（Malayan Tapir）</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard" id="Centerig6">
            <div className="figure">
              <img src="/img/tour/hot/malayantapir.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">馬來膜</h3> 
            <span className="tourCenterText" >（Malayan Tapir）</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard" id="Centerig7">
            <div className="figure">
              <img src="/img/tour/hot/malayantapir.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">馬來膜</h3> 
            <span className="tourCenterText" >（Malayan Tapir）</span>   
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="tourCenterCard" id="Centerig8">
            <div className="figure">
              <img src="/img/tour/hot/malayantapir.jpg" alt="#/" />
            </div>   
            <h3 className="tourCardTwoText">馬來膜</h3> 
            <span className="tourCenterText" >（Malayan Tapir）</span>   
          </div>
      </Carousel.Item>
    </Carousel>
  </div>

</>)
}
const rootElement = document.getElementById('root')
ReactDOM.render(<CarouselShow1 />, rootElement)
export default CarouselShow1
