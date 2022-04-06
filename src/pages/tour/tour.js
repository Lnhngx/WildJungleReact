import React, { useEffect, useRef, useState } from "react";
import "./tour.scss";
import OrderList from "./components/OrderList";
import CarouselShow from "./components/CarouselShow1";
import Assets from "./Assets/p6CVo6abkKGY.gif";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

function tour(){
    return(<>
<div className="tourbackground">
    <div className="tourback"></div>
    <img src="/img/home/homebgcblack.svg" alt="" />
</div>
    <div className="tourContainer">
        <CarouselShow/>
        <div className="tourLife">
        </div>  
    </div>
    </>)
}

export default tour