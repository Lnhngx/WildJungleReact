import React from "react";
import { useEffect, useState, useCallback } from "react";
import $ from "jquery";

function JqueryProduct() {
  const [page, setPage] = useState(1);

  const iconalan1 = document.querySelector(".iconalan1");
  const iconalan2 = document.querySelector(".iconalan2");
  const iconalan3 = document.querySelector(".iconalan3");
  const imgWrap = document.querySelector(".alan_img-wrap");
  const left = document.querySelector("#btn-left-area");
  const right = document.querySelector("#btn-right-area");
  const main = document.getElementsByClassName("main");
  const alan = document.querySelector(".alan_wrap");
  const iconGroup = document.querySelector(".iconGroup");

  const icon1 = () => {
    iconalan1.style.color = "#eb5c37";
    iconalan2.style.color = "#c4c4c4";
    iconalan3.style.color = "#c4c4c4";
  };
  const icon2 = () => {
    iconalan2.style.color = "#eb5c37";
    iconalan1.style.color = "#c4c4c4";
    iconalan3.style.color = "#c4c4c4";
  };
  const icon3 = () => {
    iconalan3.style.color = "#eb5c37";
    iconalan1.style.color = "#c4c4c4";
    iconalan2.style.color = "#c4c4c4";
  };
  const hover1 = () => {
    icon1();
    imgWrap.style.transform = "translateX(0%)";
  };
  const hover2 = () => {
    icon2();
    imgWrap.style.transform = "translateX(-25%)";
  };
  const hover3 = () => {
    icon3();
    imgWrap.style.transform = "translateX(-50%)";
  };

  const leftClick = () => {
    console.log(page);
    setPage(page - 1);
    if (page === 1) {
      setPage(3);
    }
    const moveX = (page - 1) * -25;
    imgWrap.style.transition = "0.5s";
    imgWrap.style.transform = `translateX(${moveX}%)`;
    if (page === 1 || page > 3) {
      icon1();
    }
    if (page === 2) {
      icon2();
    }
    if (page === 3) {
      icon3();
    }
  };

  const rightClick = () => {
    setPage(page + 1);
    console.log(page);
    const moveX = (page === 0 ? 1 : page) * -25;
    imgWrap.style.transition = "0.5s";
    imgWrap.style.transform = `translateX(${moveX}%)`;
    if (page === 0 || page > 2) {
      icon1();
    }
    if (page === 1) {
      icon2();
    }
    if (page === 2) {
      icon3();
    }
  };

  useEffect(() => {
    const icon1 = () => {
      iconalan1.style.color = "#eb5c37";
      iconalan2.style.color = "#c4c4c4";
      iconalan3.style.color = "#c4c4c4";
    };
    const icon2 = () => {
      iconalan2.style.color = "#eb5c37";
      iconalan1.style.color = "#c4c4c4";
      iconalan3.style.color = "#c4c4c4";
    };
    const icon3 = () => {
      iconalan3.style.color = "#eb5c37";
      iconalan1.style.color = "#c4c4c4";
      iconalan2.style.color = "#c4c4c4";
    };
    const imgWrap = document.querySelector(".alan_img-wrap");
    const iconGroup = document.querySelector(".iconGroup");
    const alan = document.querySelector(".alan_wrap");
    const startInterval = setInterval(() => {
      setPage(page + 1);
      const moveX = (page === 0 ? 1 : page) * -25;
      imgWrap.style.transition = "0.5s";
      imgWrap.style.transform = `translateX(${moveX}%)`;
      //main[page === 3 ? 0 : page].classList.add("mainRun");
      if (page === 0 || page > 2) {
        icon1();
      }
      if (page === 1) {
        icon2();
      }
      if (page === 2) {
        icon3();
      }
    }, 2500);

    const reset = () => {
      if (page === 4 || page > 4) {
        imgWrap.style.transition = "none";
        imgWrap.style.transform = "translate(0px)";
        setPage(1);
      }
    };

    const clear = () => {
      console.log(111)
      clearInterval(startInterval);
    };


    //imgWrap.addEventListener("mouseenter", clear);
    //imgWrap.addEventListener("mouseleave", startInterval());
    imgWrap.addEventListener("transitionend", reset);

    return () => {
      imgWrap.removeEventListener("transitionend", reset);
      //imgWrap.removeEventListener("mouseleave", startInterval());
      //imgWrap.removeEventListener("mouseenter", clear);
      clearInterval(startInterval);
    };
  }, [icon1, icon2, icon3, page,]);

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
        <i className="iconalan1 fas fa-circle" onMouseOver={hover1}></i>
        <i className="iconalan2 fas fa-circle" onMouseOver={hover2}></i>
        <i className="iconalan3 fas fa-circle" onMouseOver={hover3}></i>
      </div>
    </>
  );
}

export default JqueryProduct;
