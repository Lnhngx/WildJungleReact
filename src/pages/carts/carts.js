import React from "react";
import "./carts.css";

function carts() {
  return (
    <>
      <div className="stan-carts-main">
        <div className="stan-process">
          <div className="stan-process-iconarea">
            <div className="stan-process-circle">1</div>
            <div className="stan-process-line"></div>
            <div className="stan-process-circle">2</div>
            <div className="stan-process-line"></div>
            <div className="stan-process-circle">3</div>
          </div>
        </div>
        <div className="stan-process-word"></div>
      </div>
    </>
  );
}

export default carts;
