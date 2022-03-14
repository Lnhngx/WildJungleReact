import React, { useState, useEffect } from "react";

const HomeWeather = () => {
  const [weatherElement, setweatherElement] = useState({
    locationName: '',
    temperature: '',
  });
  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  const fetchCurrentWeather = () => {
    fetch(
        'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-DCFAA10C-7D43-4E6C-A486-B65CECC7024E&locationName=臺北'
    )
      .then((r) => r.json())
      .then((data) => {
          console.log('data',data);
        const locationData = data.records.location[0];

        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (["TEMP"].includes(item.elementName)) {
              neededElements[item.elementName] = item.elementValue;
            }
            return neededElements;
          },
          {}
        );
        setweatherElement((prevState) => ({
          ...prevState,
          locationName: locationData.locationName,
          temperature: weatherElements.TEMP,
        }));
      });
  };

  return (
    <>
      <div className="ning_weatherbox">
        <div className="ning_weatherboxIcon">
          <div className="ning_weathericon">
            <span className="material-icons">cloud</span>
          </div>
          <p className="ning_weather">{weatherElement.locationName}</p>
          <p className="ning_weatherEn">Wether</p>
        </div>
        <div className="ning_weatherCout">
          <div className="ning_weatherNumber">
          {Math.round(weatherElement.temperature)}
          </div>
          <p className="ning_weatherUnit">°C</p>
        </div>
      </div>
    </>
  );
};

export default HomeWeather;
