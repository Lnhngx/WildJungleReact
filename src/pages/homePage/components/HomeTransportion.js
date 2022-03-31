import React, { useState, useEffect, useRef } from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "react-bootstrap";

const demoDataFromServer = [
  {
    lat: 25.03335,
    lng: 121.5439,
    name: "捷運大安站(信義)",
    bus: ["0東", 20, 22, 88, "88區間車", 204, 758, "信義幹線"],
  },
  {
    lat: 25.0343027,
    lng: 121.5436188,
    name: "捷運大安站(復興)",
    bus: [41, 226, 685, "685經吉林路", "復興幹線"],
  },
  {
    lat: 25.0333694,
    lng: 121.5421572,
    name: "師大附中",
    bus: ["0東", 20, 22, 88, "88區間車", 204, 758, "信義幹線"],
  },
  {
    lat: 25.03328,
    lng: 121.54623,
    name: "信義大安路口",
    bus: [226, 41, 685, "復興幹線"],
  },
  {
    lat: 25.03245,
    lng: 121.54345,
    name: "大安高工",
    bus: [278, "278區間車", 685, "685經吉林路", "S33懷恩專車", "復興幹線"],
  },
];

const Fuxing = [226, 41, 685, "復興幹線"];

const customMarker = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const HomeTransportion = () => {
  const [selectValue, setselectValue] = useState(0);

  const [busElement, setbusElement] = useState({
    StopName: "",
    RouteName: "",
    EstimateTime: 0,
  });

  // useEffect(() => {
  //   east0_bus();
  // }, []);

  function Fuxing_stop() {
    fetch(
      `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei/226?$format=JSON`
    )
      .then((r) => r.json())
      .then((data) => {
        return console.log(data);
      });

    // .then((r) => r.json())
    // .then((data) => {
    //   console.log(data);
    //   const busElements = data.StopUID.reduce((neededElements, item) => {
    //     if (["TPE22806"].includes(item.StopUID)) {
    //       neededElements[item.StopUID] = item.StopUID;
    //     }
    //     return neededElements;
    //   }, {});
    //   setbusElement((prevState) => ({
    //     ...prevState,
    //     StopName: busElements.StopName.Zh_tw,
    //     RouteName: busElements.RouteName.Zh_tw,
    //     EstimateTime: busElements.EstimateTime,
    //   }));
  }

  const mapRef = useRef();
  const [state, setState] = useState([]);

  function handleFlyTo() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.flyTo(
      [
        demoDataFromServer[selectValue]["lat"],
        demoDataFromServer[selectValue]["lng"],
      ],
      18,
      {
        duration: 0.5,
      }
    );
  }

  useEffect(() => {
    handleFlyTo();
  }, [selectValue]);

  // didMount
  useEffect(() => {
    // 連接資料庫
    // 設定狀態
    console.log("didmount");
    setState(demoDataFromServer);
  }, []);

  return (
    <>
      <div className="selectBusBox">
        <select
          className="selectBus"
          value={selectValue}
          onChange={(e) => setselectValue(e.target.value)}
        >
          <option value="0">捷運大安站(信義)</option>
          <option value="1">捷運大安站(復興)</option>
          <option value="2">師大附中</option>
          <option value="3">信義大安路口</option>
          <option value="4">大安高工</option>
        </select>
      </div>
      <h3 className="ning_busstopname">
        {demoDataFromServer[selectValue]["name"]}
      </h3>
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
          <LeafletMap
            ref={mapRef}
            center={[25.0330456, 121.5436104]}
            zoom={16}
            style={{ height: "100vh" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />

            {state.map(({ lat, lng, name }, index) => (
              <Marker position={[lat, lng]} icon={customMarker} key={index}>
                <Popup>{name}</Popup>
              </Marker>
            ))}
          </LeafletMap>
        </div>
      </div>
    </>
  );
};

export default HomeTransportion;
