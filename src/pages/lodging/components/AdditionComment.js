import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Config from "../Config";

function AdditionComment() {
  const Range = Slider;

  const [comments, setComments] = useState({
    serve: "1",
    clean: "1",
    comfort: "1",
    facility: "1",
    cpValue: "1",
    commentTextarea: "",
  });

  const onInputChange = (e) => {
    setComments({...comments, [e.target.name]: e.target.value });
  };

  // const [servevalue, setServevalue] = useState("1");
  // const [cleanvalue, setCleanvalue] = useState("1");
  // const [comfortablevalue, setComfortablevalue] = useState("1");
  // const [facilityvalue, setFacilityvalue] = useState("1");
  // const [CPvalue, setCPvalue] = useState("1");
  // const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 避免傳統方式送出表單

    const fd = new FormData(e.target);

    fetch(Config.COMMENT_ADD, {
      method: "POST",
      body: fd,
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj);
      });
  };

  return (
    <>
      <form name="form1" onsubmit={handleSubmit}>
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
                <input
                  type="text"
                  id="serve"
                  name="serve"
                  value={comments.serve}
                  onChange={onInputChange}
                ></input>
                {/* <Range
                  className="serveslider"
                  min={1.0}
                  max={10}
                  id="serve"
                  name="serve"
                  value={comments.serve}
                  onChange={onInputChange}
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
                /> */}
                <div className="commentServeScore">{comments.serve}</div>
              </div>
            </div>
            <div className="commentCleanbox">
              <div className="Clean">
                <p className="CleanText">清潔程度</p>
              </div>
              <div className="cleanSliderBox">
                <input
                  type="text"
                  id="clean"
                  name="clean"
                  value={comments.clean}
                  onChange={onInputChange}
                ></input>
                {/* <Range
                  className="cleanslider"
                  min={1.0}
                  max={10}
                  id="clean"
                  name="clean"
                  value={comments.clean}
                  onChange={onInputChange}
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
                /> */}
                <div className="commentCleanScore">{comments.clean}</div>
              </div>
            </div>
            <div className="commentComfortablebox">
              <div className="Comfortable">
                <p className="ComfortableText">舒適程度</p>
              </div>
              <div className="comfortableSliderBox">
                <input
                  type="text"
                  id="comfort"
                  name="comfort"
                  value={comments.comfort}
                  onChange={onInputChange}
                ></input>
                {/* <Range
                  className="comfortableslider"
                  min={1.0}
                  max={10}
                  id="comfort"
                  name="comfort"
                  value={comments.comfort}
                  onChange={onInputChange}
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
                /> */}
                <div className="commentComfortableScore">
                  {comments.comfort}
                </div>
              </div>
            </div>
            <div className="commentFacilitybox">
              <div className="Facility">
                <p className="FacilityText">設施</p>
              </div>
              <div className="facilitySliderBox">
                <input
                  type="text"
                  name="facility"
                  id="facility"
                  value={comments.facility}
                  onChange={onInputChange}
                ></input>
                {/* <Range
                  className="facilityslider"
                  min={1.0}
                  max={10}
                  name="facility"
                  id="facility"
                  value={comments.facility}
                  onChange={onInputChange}
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
                /> */}
                <div className="commentFacilityScore">{comments.facility}</div>
              </div>
            </div>
            <div className="commentCPValuebox">
              <div className="CPValue">
                <p className="CPValueText">性價比</p>
              </div>
              <div className="CPValueSliderBox">
                <input
                  type="text"
                  id="cpValue"
                  name="cpValue"
                  value={comments.cpValue}
                  onChange={onInputChange}
                ></input>
                {/* <Range
                  className="CPValueslider"
                  min={1.0}
                  max={10}
                  id="cpValue"
                  name="cpValue"
                  value={comments.cpValue}
                  onChange={onInputChange}
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
                /> */}
                <div className="commentCPValueScore">{comments.cpValue}</div>
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
          value={comments.commentTextarea}
                  onChange={onInputChange}
          rows="5"
          placeholder="請輸入評論..."
        />
        <div className="commentbtngroup">
          <button type="submit" id="submit" className="btn commentbtn">
            送出
          </button>
          <button type="reset" className="btn cancelbtn">
            取消
          </button>
        </div>
      </form>
    </>
  );
}

export default AdditionComment;
