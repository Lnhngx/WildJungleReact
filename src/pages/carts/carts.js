import React from "react";
import "./carts.scss";

function carts() {
  return (
    <>
      <div className="stan-carts-main">
        <div className="stan-process">
          <ul className="stan-process-iconarea">
            <li className="stan-circle">1</li>
            <li className="stan-line"></li>
            <li className="stan-circle">2</li>
            <li className="stan-line"></li>
            <li className="stan-circle">3</li>
          </ul>
        </div>
        <div className="stan-process-word"></div>
      </div>
    </>
  );
}

export default carts;
