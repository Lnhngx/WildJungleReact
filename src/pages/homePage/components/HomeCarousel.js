import React, { useState, useRef, useEffect } from "react";
import HomeWeather from "./HomeWeather";
// import { CarouselData } from "./CarouselData";
// import { Link } from "react-router-dom";

// const HomeCarousel = ({ slides }) => {

//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   console.log(current);

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (

//     <section className="ning_homeslider">
//       <span
//         className="ning_homecarousellefticon material-icons"
//         onClick={prevSlide}
//       >
//         chevron_left
//       </span>
//       <span
//         className="ning_homecarouselrighticon material-icons"
//         onClick={nextSlide}
//       >
//         chevron_right
//       </span>
//       {CarouselData.map((slider, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           >
//             {index === current && (
//               <Link to="">
//                 <img
//                   src={slider.image}
//                   alt=""
//                   className="ning_homecarouselimg"
//                   onMouseDown=""
//                 />
//               </Link>
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

const HomeCarousel = () => {
  const img = useRef();

  const [count, setCount] = useState(0);

  const backImg = [
    "img/home/carousel/carousel01.jpg",
    "img/home/carousel/carousel02.jpg",
    "img/home/carousel/carousel03.jpg",
    "img/home/carousel/carousel04.jpg",
    "img/home/carousel/carousel05.jpg",
  ];
  let i = 0;

  const next = () => {
    console.log("1", i);
    if (i < 5) {
      img.current.src = backImg[i + 1];
      i++;
      console.log("2", i);
      setCount(i);
    }
    if (i === 5) {
      i = 0;
      img.current.src = backImg[i];
    }
    console.log("3", i);
    setCount(i);
  };

  const prev = () => {
    console.log(i);
    if (i > -1) {
      img.current.src = backImg[i - 1];
      i--;
      console.log(i);
      setCount(i);
    }
    if (i === -1) {
      i = 4;
      img.current.src = backImg[i];
    }
    console.log(i);
    setCount(i);
  };



  
  return (
    <>
      <div className="carousel">
        <img src="img/home/carousel/carousel01.jpg" alt="" ref={img} />
        <div className="welcome">
          <h2>WELCOME</h2>
          <h1>Wild Jungle</h1>
        </div>
        <div className="zooDetail">
          <div className="info">
            <div className="ning_Admissionbox">
              <div className="ning_AdmissionboxIcon">
                <div className="ning_iconsbox">
                  <span className="material-icons peopleicon">groups</span>
                </div>
                <p className="ning_Admission">入園人數</p>
              </div>
              <div className="ning_AdmissionCout">
                <div className="ning_AdmissionNumber">180</div>
                <p className="ning_AdmissionUnit">人</p>
              </div>
            </div>
            <div className="zooWeather">
              <HomeWeather />
            </div>
            <div className="ning_ticketbox">
              <div className="ning_ticketboxIcon">
                <div className="ning_ticketicon">
                  <span className="material-icons ticketicon">
                    confirmation_number
                  </span>
                </div>
                <p className="ning_ticket">票券資訊</p>
              </div>
              <div className="ning_ticketwrap">
                <div className="ning_aldultbox">
                  <div className="ning_aldult">全票</div>
                  <p className="ning_aldultprice">$50</p>
                </div>
                <div className="ning_studentbox">
                  <div className="ning_student">學生票</div>
                  <p className="ning_studentprice">$30</p>
                </div>
                <div className="ning_lovebox">
                  <div className="ning_love">愛心票</div>
                  <p className="ning_loveprice">$20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="zooslider">
          <span class="material-icons" onClick={prev}>
            west
          </span>
          <div className="preview">
            <img
              src="/img/home/carousel/carousel01.jpg"
              alt=""
              className={count === 0 ? "thumbnail active" : "thumbnail"}
            ></img>
            <img
              src="/img/home/carousel/carousel02.jpg"
              alt=""
              className={count === 1 ? "thumbnail active" : "thumbnail"}
            ></img>
            <img
              src="/img/home/carousel/carousel03.jpg"
              alt=""
              className={count === 2 ? "thumbnail active" : "thumbnail"}
            ></img>
            <img
              src="/img/home/carousel/carousel04.jpg"
              alt=""
              className={count === 3 ? "thumbnail active" : "thumbnail"}
            ></img>
            <img
              src="/img/home/carousel/carousel05.jpg"
              alt=""
              className={count === 4 ? "thumbnail active" : "thumbnail"}
            ></img>
          </div>
          <span class="material-icons" onClick={next}>
            east
          </span>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
