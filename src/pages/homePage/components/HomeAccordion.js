import React from "react";
import { Link } from "react-router-dom";
import { AccordionData } from "./AccordionData";

const HomeAccordion = () => {
  return (
      <>
      {AccordionData.map((slider, index) => {
        return (
          <Link to="" key={index}>
            <div className={slider.name} >
              <img src={slider.image} alt={index} />
              <input type="radio" name="radio-set" checked></input>
              <figcaption>
                <button className="adoptbtn btn">我要認養！</button>
              </figcaption>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default HomeAccordion;
