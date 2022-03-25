import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function AdditionComment() {
  const Range = Slider;

  const [cleanvalue, setCleanvalue] = useState(1);
  const [servevalue, setServevalue] = useState(1);
  const [comfortablevalue, setComfortablevalue] = useState(1);
  const [facilityvalue, setFacilityvalue] = useState(1);
  const [CPValuevalue, setCPValuevalue] = useState(1);

  const whenSubmit = async (event) => {
    event.preventDefault(); // 避免傳統方式送出表單

    const fd = new FormData(document.form1);
    const serve = fd.get("serve")
    const clean = fd.get("clean")
    const comfort = fd.get("comfort")
    const facility = fd.get("facility")
    const cpValue = fd.get("cpValue")
    const commentTextarea = fd.get("commentTextarea")

    fetch("localhost:4000/roomform/room-comments-post", {
      method: "POST",
      body:fd})
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj);
      });
  };

  return (
    <>
      <form name="form1" onsubmit={whenSubmit}>
        <div className="orderInformationbox">
          <div className="orderInformation">訂購資訊</div>
          <div className="orderList">
            <p className="orderNumber">
              訂單編號 : <span>20220222-2222ABC</span>
            </p>
            <p className="orderRoom">
              入住房型 : <span>夜行4人房型</span>
            </p>
            <p className="orderCheckinDate">
              入住日期 : <span>2022/03/01</span>
            </p>
            <p className="orderCheckoutDate">
              退房日期 : <span>2022/03/02</span>
            </p>
          </div>
          <div className="commentline"></div>

          <div className="commentScore">各項評分</div>
          <div className="commentScoreList">
            <div className="commentServebox">
              <div className="Serve">
                <p className="ServeText">服務素質</p>
              </div>
              <div className="serveSliderBox">
                <Range
                  className="serveslider"
                  min={1.0}
                  max={10}
                  id="serve"
                  name="serve"
                  onChange={setServevalue}
                  handleStyle={{
                    backgroundColor: "#ffffff",
                    opacity: 1,
                    border: "2px solid #f9b112",
                    boxShadow: "0 0 3px rgba(0, 0, 0, 0.4)",
                    width: "15px",
                    height: "15px",
                  }}
                  railStyle={{
                    height: "5px",
                    backgroundColor: "#ccc",
                  }}
                  trackStyle={{
                    height: "5px",
                    backgroundColor: "#f9b112",
                  }}
                />
                <div className="commentServeScore">{servevalue}</div>
              </div>
            </div>
            <div className="commentCleanbox">
              <div className="Clean">
                <p className="CleanText">清潔程度</p>
              </div>
              <div className="cleanSliderBox">
                <Range
                  className="cleanslider"
                  min={1.0}
                  max={10}
                  onChange={setCleanvalue}
                  id="clean"
                  name="clean"
                  handleStyle={{
                    backgroundColor: "#ffffff",
                    opacity: 1,
                    border: "2px solid #f9b112",
                    boxShadow: "0 0 3px rgba(0, 0, 0, 0.4)",
                    width: "15px",
                    height: "15px",
                  }}
                  railStyle={{
                    height: "5px",
                    backgroundColor: "#ccc",
                  }}
                  trackStyle={{
                    height: "5px",
                    backgroundColor: "#f9b112",
                  }}
                />
                <div className="commentCleanScore">{cleanvalue}</div>
              </div>
            </div>
            <div className="commentComfortablebox">
              <div className="Comfortable">
                <p className="ComfortableText">舒適程度</p>
              </div>
              <div className="comfortableSliderBox">
                <Range
                  className="comfortableslider"
                  min={1.0}
                  max={10}
                  id="comfortable"
                  name="comfortable"
                  onChange={setComfortablevalue}
                  handleStyle={{
                    backgroundColor: "#ffffff",
                    opacity: 1,
                    border: "2px solid #f9b112",
                    boxShadow: "0 0 3px rgba(0, 0, 0, 0.4)",
                    width: "15px",
                    height: "15px",
                  }}
                  railStyle={{
                    height: "5px",
                    backgroundColor: "#ccc",
                  }}
                  trackStyle={{
                    height: "5px",
                    backgroundColor: "#f9b112",
                  }}
                />
                <div className="commentComfortableScore">
                  {comfortablevalue}
                </div>
              </div>
            </div>
            <div className="commentFacilitybox">
              <div className="Facility">
                <p className="FacilityText">設施</p>
              </div>
              <div className="facilitySliderBox">
                <Range
                  className="facilityslider"
                  min={1.0}
                  max={10}
                  name="facility"
                  id="facility"
                  onChange={setFacilityvalue}
                  handleStyle={{
                    backgroundColor: "#ffffff",
                    opacity: 1,
                    border: "2px solid #f9b112",
                    boxShadow: "0 0 3px rgba(0, 0, 0, 0.4)",
                    width: "15px",
                    height: "15px",
                  }}
                  railStyle={{
                    height: "5px",
                    backgroundColor: "#ccc",
                  }}
                  trackStyle={{
                    height: "5px",
                    backgroundColor: "#f9b112",
                  }}
                />
                <div className="commentFacilityScore">{facilityvalue}</div>
              </div>
            </div>
            <div className="commentCPValuebox">
              <div className="CPValue">
                <p className="CPValueText">性價比</p>
              </div>
              <div className="CPValueSliderBox">
                <Range
                  className="CPValueslider"
                  min={1.0}
                  max={10}
                  id="cpValue"
                  name="cpValue"
                  onChange={setCPValuevalue}
                  handleStyle={{
                    backgroundColor: "#ffffff",
                    opacity: 1,
                    border: "2px solid #f9b112",
                    boxShadow: "0 0 3px rgba(0, 0, 0, 0.4)",
                    width: "15px",
                    height: "15px",
                  }}
                  railStyle={{
                    height: "5px",
                    backgroundColor: "#ccc",
                  }}
                  trackStyle={{
                    height: "5px",
                    backgroundColor: "#f9b112",
                  }}
                />
                <div className="commentCPValueScore">{CPValuevalue}</div>
              </div>
            </div>
            <div className="nullbox"></div>
          </div>
        </div>
        <div className="commentline"></div>
        <div className="commentTextarea">撰寫評論</div>
        <textarea
          className="form-control commentTextareabox"
          id="commentTextarea"
          name="commentTextarea"
          rows="5"
          placeholder="請輸入評論..."
        />
        <div className="commentbtngroup">
          <button type="submit" className="btn commentbtn">
            送出
          </button>
          <button type="" className="btn cancelbtn">
            取消
          </button>
        </div>
      </form>
    </>
  );
}

export default AdditionComment;
