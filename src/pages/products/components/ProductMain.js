import React from "react";
import { useEffect, useState, useCallback } from "react";
import $ from "jquery";

function JqueryProduct() {
  //console.log('start');
  const [page, setPage] = useState(0);
  const [iconActive,setIconActive] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const iconalan1 = document.querySelector(".iconalan1");
  const iconalan2 = document.querySelector(".iconalan2");
  const iconalan3 = document.querySelector(".iconalan3");
  const imgWrap = document.querySelector(".alan_img-wrap");
  const left = document.querySelector("#btn-left-area");
  const right = document.querySelector("#btn-right-area");
  const main = document.getElementsByClassName("main");
  const alan = document.querySelector(".alan_wrap");
  const iconGroup = document.querySelector(".iconGroup");



  useEffect(()=>{
    console.log('useeffect');
  },[])

  const iconHover = (iconNumber) => {
    console.log('iconNumber',iconNumber);
    const imgWrap = document.querySelector(".alan_img-wrap");
    setIconActive(iconNumber);
    setPage(iconNumber);
    imgWrap.style.transform = `translateX(${iconNumber * -25}%)`;
    //clearInterval(intervalId)
  };

  const leftClick = () => {
    const newPage = (page -1) < 0? 2:page-1;
    console.log(newPage);
    
    const moveX =  newPage * -25;
    imgWrap.style.transition = "0.5s";
    imgWrap.style.transform = `translateX(${moveX}%)`;

    setPage(newPage);
    setIconActive(newPage);
  };

  const rightClick = () => {
    const newPage = (page +1) > 2? 0:page+1;
    console.log(newPage);

    const moveX =  newPage * -25;
    imgWrap.style.transition = "0.5s";
    imgWrap.style.transform = `translateX(${moveX}%)`;

    setPage(newPage);
    setIconActive(newPage);
  };

  const resetPage = () => {
    if (page === 3 || page > 3) {
      console.log('page === 3 reset page' );
      imgWrap.style.transition = "none";
      imgWrap.style.transform = "translate(0px)";
      setPage(0);
    }
  };

  const mouseLeave = ()=>{
    setPage(page+1);
  }

  useEffect(() => {
    const imgWrap = document.querySelector(".alan_img-wrap");
    // const iconGroup = document.querySelector(".iconGroup");
    // const alan = document.querySelector(".alan_wrap");

    imgWrap.addEventListener("transitionend", resetPage);

    const changePage = () => {
      console.log('change page',intervalId);
      const newPage = (page +1) > 2? 0:page+1;
      const moveX = newPage * -25;
      imgWrap.style.transition = "0.5s";
      imgWrap.style.transform = `translateX(${moveX}%)`;
      //main[page === 3 ? 0 : page].classList.add("mainRun");
      setPage(newPage);
      setIconActive(newPage);
    }
    const myInterval = (setInterval(changePage, 2500)) ;

    setIntervalId(myInterval);

    //imgWrap.addEventListener("mouseenter", clear);
    //imgWrap.addEventListener("mouseleave", startInterval());

    return () => {
      imgWrap.removeEventListener("transitionend", resetPage);
      // imgWrap.removeEventListener("transitionend", reset);
      //imgWrap.removeEventListener("mouseleave", startInterval());
      //imgWrap.removeEventListener("mouseenter", clear);
      console.log('clear page',intervalId);
      clearInterval(myInterval);
    };

  }, [page]);

  useEffect(() => {
    // $(".alan_wrap").hover(
    //   function () {
    //     clearInterval(startInterval);
    //     $(".main").css("animation", "scalepic1 4s");
    //   },
    //   function () {
    //     startInterval();
    //     $(".main").css("animation", "scalepic 2.5s infinite");
    //   }
    // );
    // $(".iconGroup").hover(
    //   function () {
    //     clearInterval(startInterval);
    //   },
    //   function () {
    //     startInterval();
    //   }
    // );
  }, [page]);

  return (
    <>
      <div className="alan_wrap">
        <ul className="alan_img-wrap">
          <li className="alan_li">
            <img className="main" src="img/product/Sliderpic.jpeg" alt="" />
          </li>
          <li className="alan_li">
            <img className="main" src="img/product/Sliderpic2.jpeg" alt="" />
          </li>
          <li className="alan_li">
            <img className="main" src="img/product/Sliderpic3.jpeg" alt="" />
          </li>
          <li className="alan_li">
            <img className="main" src="img/product/Sliderpic.jpeg" alt="" />
          </li>
        </ul>
        <div id="btn-left-area" onClick={leftClick}></div>
        <div id="btn-right-area" onClick={rightClick}>
          <i className="alan_right fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="iconGroup" onMouseOver={() => {}}>
        <i className={`iconalan1 ${(iconActive === 0)?'active':''} fas fa-circle`} onMouseEnter={()=>iconHover(0)} ></i>
        <i className={`iconalan2 ${(iconActive === 1)?'active':''} fas fa-circle`}  onMouseEnter={()=>iconHover(1)} ></i>
        <i className={`iconalan3 ${(iconActive === 2)?'active':''} fas fa-circle`} onMouseEnter={()=>iconHover(2)}></i>
      </div>
    </>
  );
}

export default JqueryProduct;
