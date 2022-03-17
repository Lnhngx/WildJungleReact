import React from "react";
import { useEffect } from "react";
import $ from "jquery";

function JqueryProduct() {
  React.useEffect(() => {
    let page = 0;
    let myInterval = null;
    const alanWrap = document.querySelector('.alan_wrap')
    const alanLi =document.querySelectorAll('.alan_li')

    $(".iconGroup i").hover(function () {
      page = $(this).index();
      $(this).css("color", "#eb5c37")
      .siblings()
      .css("color", "#c4c4c4");
      const moveX = $(this).index() * -25;
      $(".alan_img-wrap").css("transform", `translateX(${moveX}%)`);
    });
    $("#btn-left-area").click(function () {
      page--;
      if (page < 0) page = 2;
      const moveX = page * -25;
      $("ul.alan_img-wrap")
        .css("transition", "0.5s")
        .css("transform", `translateX(${moveX}%)`);
      // 改變白色的指示點
      $(".iconGroup i")
        .eq(page === 3 ? 0 : page)
        .css("color", "#eb5c37")
        .siblings()
        .css("color", "#c4c4c4");
    });

    $("#btn-right-area").click(function () {
      page++;
      const moveX = page * -25;
      $("ul.alan_img-wrap")
        .css("transition", "0.5s")
        .css("transform", `translateX(${moveX}%)`);
      // 改變白色的指示點
      $(".iconGroup i")
        .eq(page === 3 ? 0 : page)
        .css("color", "#eb5c37")
        .siblings()
        .css("color", "#c4c4c4");
    });

    function startInterval() {
      myInterval = setInterval(() => {
        page++;
        const moveX = page * -25;
        $("ul.alan_img-wrap")
          .css("transition", "0.5s")
          .css("transform", `translateX(${moveX}%)`);

        $(".iconGroup i")
          .eq(page === 3 ? 0 : page)
          .css("color", "#eb5c37")
          .siblings()
          .css("color", "#c4c4c4");
      }, 2500);
    }
    $("ul.alan_img-wrap").on("transitionend", function () {
      if (page >= 3) {
        $("ul.alan_img-wrap")
          .css("transition", "none")
          .css("transform", `translate(0px)`);
        page = 0;
      }
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
    $(".iconGroup").hover(
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
        <div id="btn-left-area">
        </div>
        <div id="btn-right-area">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="iconGroup">
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
      </div>
    </>
  );
}

export default JqueryProduct;
