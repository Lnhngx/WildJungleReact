import React, { useState, useEffect, useRef } from "react";

function Homevideo() {
  return (
    <>
      <div className="home_videoBox">
        <video autoPlay muted loop>
          <source src="/img/home/tarynVideo.mp4" type="video/mp4"></source>
        </video>
        <img src="/img/home/mask.jpg" alt=""/>
        {/* <h1 className="WJtitle">
        WILD<br/>JUNGLE
        </h1> */}

      </div>
    </>
  );
}

export default Homevideo;
