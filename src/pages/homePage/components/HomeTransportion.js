import React from "react";

const HomeAccordion = () => {
  return (
    <>
      <div className="ning_transportionButton">
        <button className="ning_busButton btn">公車即時</button>
        <button className="ning_PButton btn">停車場</button>
        <h3 className="ning_busstopname">捷運大安站(信義)</h3>
        <div className="ning_busbox">
          <div className="ning_busbox1">
            <div className="ning_bus">
              <p className="ning_bustime">
                4<span>分鐘</span>
              </p>
              <p className="ning_busname">
                信義幹線<br/>
                <span>往臺北車站</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAccordion;
