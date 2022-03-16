import React from "react";
import { useEffect } from "react";
import $ from "jquery";

function JqueryProduct() {
  React.useEffect(() => {
    let page = 0;
    let myInterval = null;
    $('.slider-dots li').hover(function () {
        page = $(this).index();
        $(this).css("background", "white").siblings().css("background", "transparent");
        // if($(this).index() === 1){
        //     $('.alan_img-wrap').css("transform", "translateX(-800px)")
        // }
        const moveX = $(this).index() * -800;
        $('.alan_img-wrap').css("transform", `translateX(${moveX}px)`)
    })
    // 有的白色其他透明

    $(".slider-dots li").hover(function () {
        console.log("this", $(this).index());
        $(this)
            .css("background", "#fff")
            .siblings()
            .css("background", "transparent");
        // if ($(this).index() === 0) {
        //   $("ul.alan_img-wrap").css("transform", "translateX(0px)");
        // }
        // if ($(this).index() === 1) {
        //   $("ul.alan_img-wrap").css("transform", "translateX(-800px)");
        // }
        // if ($(this).index() === 2) {
        //   $("ul.alan_img-wrap").css("transform", "translateX(-1600px)");
        // }

        const moveX = $(this).index() * -800;
        $("ul.alan_img-wrap").css("transform", `translateX(${moveX}px)`);
    });
    $("#btn-left-area").click(function () {
        console.log("btn-left-area clicked");
        page--;
        console.log("btn-right-area clicked", page);
        if (page < 0) page = 3;
        const moveX = page * -25;
        $("ul.alan_img-wrap").css("transition", "0.5s").css("transform", `translateX(${moveX}%)`);
        // 改變白色的指示點
        $(".slider-dots li")
            .eq((page === 3) ? 0 : page)
            .css("background", "#fff")
            .siblings()
            .css("background", "transparent");
    });

    $("#btn-right-area").click(function () {
        page++;
        console.log("btn-right-area clicked", page);
        // if (page >= 5) page = 0;
        console.log("btn-right-area clicked new page:", page);
        const moveX = page * -25;
        $("ul.alan_img-wrap").css("transition", "0.5s").css("transform", `translateX(${moveX}%)`);
        // 改變白色的指示點
        $(".slider-dots li")
            .eq((page === 3) ? 0 : page)
            .css("background", "#fff")
            .siblings()
            .css("background", "transparent");
    });


    function startInterval() {
        myInterval = setInterval(() => {
            page++;
            const moveX = page * -25;
            $("ul.alan_img-wrap").css("transition", "0.5s").css("transform", `translateX(${moveX}%)`);

            // 改變白色的指示點
            $(".slider-dots li")
                .eq((page === 3) ? 0 : page)
                .css("background", "#fff")
                .siblings()
                .css("background", "transparent");
        }, 2500);
    }
    $("ul.alan_img-wrap").on("transitionend", function () {
        if (page >= 3) {
            $("ul.alan_img-wrap").css("transition", "none").css("transform", `translate(0px)`);
            page = 0;
        };
    });
    startInterval();
    $(".alan_wrap").hover(
        function () {
            clearInterval(myInterval);
        },
        function () {
            startInterval();
        }
    );
  }, []);
  return (
    <>
      <div className="alan_wrap">
        <ul className="alan_img-wrap">
          <li>
            <img className="main" src="img/product/Sliderpic.jpeg" alt="" />
          </li>
          <li>
            <img className="main" src="img/product/Sliderpic2.jpeg" alt="" />
          </li>
          <li>
            <img className="main" src="img/product/Sliderpic3.jpeg" alt="" />
          </li>
          <li>
            <img className="main" src="img/product/Sliderpic.jpeg" alt="" />
          </li>
        </ul>
        <div id="btn-left-area">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div id="btn-right-area">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </>
  );
}

export default JqueryProduct;
