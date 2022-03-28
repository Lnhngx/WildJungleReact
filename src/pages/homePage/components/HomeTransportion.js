import React, { useState, useEffect } from "react";

const HomeTransportion = () => {

  const [busElement, setbusElement] = useState({
    StopName: "",
    RouteName: "",
    EstimateTime:0,
  });

  useEffect(() => {
    east0_bus();
  }, []);

  const east0_bus = () => {
    fetch(
      "https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei/0%E6%9D%B1?$format=JSON"
    )
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        // const busElements = data.StopUID.reduce(
        //   (neededElements, item) => {
        //     if (["TPE22806"].includes(item.StopUID)) {
        //       neededElements[item.StopUID] = item.StopUID;
        //     }
        //     return neededElements;
        //   },
        //   {}
        // );
        // setbusElement((prevState) => ({
        //   ...prevState,
        //   StopName: busElements.StopName.Zh_tw,
        //   RouteName: busElements.RouteName.Zh_tw,
        //   EstimateTime: busElements.EstimateTime
        // }));
      });
      
  };

  return (
    <>
      <h3 className="ning_busstopname">捷運大安站(信義)</h3>
      <div className="ning_transportionbox">
        <div className="ning_busbox">
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
          <div className="ning_bus">
            <p className="ning_bustime">
              4<span>分鐘</span>
            </p>
            <p className="ning_busname">
              信義幹線
              <br />
              <span>往臺北車站</span>
            </p>
          </div>
        </div>
        <div className="ning_busmap">
          <img src="img/home/busmap.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeTransportion;
