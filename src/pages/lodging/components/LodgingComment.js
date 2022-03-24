import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// import ScoreRangbox from "./ScoreRangbox";
import CommentList from "./CommentList";
const Range = Slider;

const LodgingComment = (props) => {
  const { setCommentbox } = props;

  //關閉評論按鈕
  const [closebtn, setClosebtn] = useState(true);

  //撰寫評論按鈕
  const [writecommen, setWritecommen] = useState(false);

  const [cleanvalue, setCleanvalue] = useState(1);
  const [servevalue, setServevalue] = useState(1);
  const [comfortablevalue, setComfortablevalue] = useState(1);
  const [facilityvalue, setFacilityvalue] = useState(1);
  const [CPValuevalue, setCPValuevalue] = useState(1);

  //伺服器資料
  const [data, setData] = useState([]);

  //從伺服器來的原始資料
  const [comments, setComments] = useState([]);

  //用於網頁上經過處理(排序)後的資料
  const [displayComments, setDisplayComments] = useState([]);

  const clickClosebtn = () => {
    setClosebtn(!closebtn);
    setCommentbox(false);
  };
  const writecommentbtn = () => {
    setClosebtn(!closebtn);
    setWritecommen(!writecommen);
  };

  //返回評論按鈕
  const backbtn = () => {
    setClosebtn(!closebtn);
    setWritecommen(!writecommen);
  };

  // 從伺服器載入資料
  const getData = async () => {
    const response = await fetch("http://localhost:4000/roomplatform/");
    const obj = await response.json();
    setData(obj);
  };

  useEffect(() => {
    getData();
    // setComments(data);
    // setDisplayComments(data);
  }, []);

  useEffect(() => {
    setComments(data);
    setDisplayComments(data);
  }, [data]);

  //下面狀態是對應到不同的表單元素
  const [scoreRange, setScoreRange] = useState(0);
  //const scoreRangeTypes = ["所有評分", "9~10分", "6~8分", "3~5分", "0~2分"];

  const [dateRange, setDateRange] = useState(0);
  //const dateRangeTypes = ["住宿期間", "近半個月", "近半年", "近一年"];

  // const [sortRange, setSortRange] = useState("排序依據");
  // const sortRangeTypes = ["最高分至最低分", "最低分至最高分"];

  //表單元素的處理方法

  const checkRangeValue = (c, minValue, maxValue) => {
    return (
      Math.ceil(
        (c.service_score +
          c.clean_score +
          c.comfort_score +
          c.facility_score +
          c.cpValue_score) /
          5
      ) >= minValue &&
      Math.ceil(
        (c.service_score +
          c.clean_score +
          c.comfort_score +
          c.facility_score +
          c.cpValue_score) /
          5
      ) <= maxValue
    );
  };


  const handleScoreRange = (comments, scoreRange) => {
    let newComments = [...comments];

    // 處理成績區間選項

    if (scoreRange === "1") {
    
      newComments = [...newComments].filter((c) => checkRangeValue(c, 9, 10));
    }

    if (scoreRange === "2") {
      
      newComments = [...newComments].filter((c) => checkRangeValue(c, 6, 8));
    }

    if (scoreRange === "3") {
     
      newComments = [...newComments].filter((c) => checkRangeValue(c, 3, 5));
    }

    if (scoreRange === "4") {
      newComments = [...newComments].filter((c) => checkRangeValue(c, 0, 2));
    }

    

    return newComments;
  };

  // const handleDateRange = (comments, dateRange) => {
  //   let newComments = [...comments];

  //   // 處理日期區間選項

  //   if (dateRange === "1"){
  //     newComments = [...comments].filter((c)=>
      
  //     if(c.start)
      
  //     )

  //   }    
  // };

  useEffect(() => {
    let newComments = [...comments];

    // 處理價格區間選項
    newComments = handleScoreRange(newComments, scoreRange);

    setDisplayComments(newComments);
  }, [scoreRange, comments]);

  return (
    <>
      <div
        className="commentcontainer"
        style={{ display: closebtn === false && "none" }}
      >
        <div className="closeiconbox">
          <span className="commentClose material-icons" onClick={clickClosebtn}>
            close
          </span>
        </div>
        <div className="commentTotalbox">
          <div className="commentTotalScorewrap">
            <p className="commentTotalScore">9.3</p>
            <p className="commentTotal">15則評論</p>
          </div>
          <button className="writecomment btn" onClick={writecommentbtn}>
            撰寫評論
          </button>
        </div>
        <div className="commentline"></div>
        <div className="commentScore">各項評分</div>
        <div className="commentScorebox">
          <div className="Servebox">
            <div className="Serve">
              <p className="ServeText">服務素質</p>
              <div className="ServeScore">9.0</div>
            </div>
            <div className="ServeScroll">
              <div className="Scrollline"></div>
              <div className="ServeScrollScore"></div>
            </div>
          </div>
          <div className="Cleanbox">
            <div className="Clean">
              <p className="CleanText">清潔程度</p>
              <div className="CleanScore">9.0</div>
            </div>
            <div className="CleanScroll">
              <div className="Scrollline"></div>
              <div className="CleanScrollScore"></div>
            </div>
          </div>
          <div className="Comfortablebox">
            <div className="Comfortable">
              <p className="ComfortableText">舒適程度</p>
              <div className="ComfortableScore">9.0</div>
            </div>
            <div className="ComfortableScroll">
              <div className="Scrollline"></div>
              <div className="ComfortableScrollScore"></div>
            </div>
          </div>
          <div className="Facilitybox">
            <div className="Facility">
              <p className="FacilityText">設施</p>
              <div className="FacilityScore">9.0</div>
            </div>
            <div className="FacilityScroll">
              <div className="Scrollline"></div>
              <div className="FacilityScrollScore"></div>
            </div>
          </div>
          <div className="CPValuebox">
            <div className="CPValue">
              <p className="CPValueText">性價比</p>
              <div className="CPValueScore">9.0</div>
            </div>
            <div className="CPValueScroll">
              <div className="Scrollline"></div>
              <div className="CPValueScrollScore"></div>
            </div>
          </div>
          <div className="nullbox"></div>
        </div>
        <div className="commentline"></div>
        <div className="commentfilter">篩選條件</div>
        <div className="commentfilterbox">
          {/* <ScoreRangbox scoreRange={scoreRange} setScoreRange={setScoreRange} /> */}
          <select
            className="selectScore"
            value={scoreRange}
            onChange={(e) => setScoreRange(e.target.value)}
          >
            <option value="0">所有評分(15)</option>
            <option value="1">9~10分</option>
            <option value="2">6~8分</option>
            <option value="3">3~5分</option>
            <option value="4">0~2分</option>
          </select>
          <select
            className="selectDate"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="0">住宿期間</option>
            <option value="1">近三個月</option>
            <option value="2">近半年</option>
            <option value="3">近一年</option>
          </select>
          <select className="selectSort">
            <option>排序依據</option>
            <option>高分到低分</option>
            <option>低分到高分</option>
          </select>
        </div>
        <div className="commentline"></div>
        <div className="guestComment">住客評論</div>
        <CommentList comments={displayComments} />
      </div>

      <div
        className="CommentFormcontainer"
        style={{ display: writecommen === false && "none" }}
      >
        <div className="lefticonbox">
          <span class="material-icons lefticon" onClick={backbtn}>
            west
          </span>
        </div>

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
          id=""
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
      </div>
    </>
  );
};

export default LodgingComment;
