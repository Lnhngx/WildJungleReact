import React, { useState, useEffect } from "react";
import Config from "../Config";
import "rc-slider/assets/index.css";
import CommentList from "./CommentList";
import AdditionComment from "./AdditionComment"

const LodgingComment = (props) => {
  const { setCommentbox } = props;

  //關閉評論按鈕
  const [closebtn, setClosebtn] = useState(true);

  //撰寫評論按鈕
  const [writecommen, setWritecommen] = useState(false);



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
    const response = await fetch(Config.COMMENT_LIST);
    const obj = await response.json();
    setData(obj);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setComments(data);
    setDisplayComments(data);
  }, [data]);

  //下面狀態是對應到不同的表單元素
  const [scoreRange, setScoreRange] = useState(0);
  //const scoreRangeTypes = ["所有評分", "9~10分", "6~8分", "3~5分", "0~2分"];

  const [dateRange, setDateRange] = useState(0);
  //const dateRangeTypes = ["住宿期間", "近三個月", "近半年", "近一年"];

  const [sortRange, setSortRange] = useState(0);
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

  const handleDateRange = (comments, dateRange) => {
    let newComments = [...comments];

    // 處理日期區間選項

    if (dateRange === "1") {
      newComments = [...comments].filter(
        (c) => Math.abs(new Date() - new Date(c.start)) <= 90 * 1000 * 3600 * 24
      );
    }

    if (dateRange === "2") {
      newComments = [...comments].filter(
        (c) =>
          Math.abs(new Date() - new Date(c.start)) <= 180 * 1000 * 3600 * 24
      );
    }

    if (dateRange === "3") {
      newComments = [...comments].filter(
        (c) =>
          Math.abs(new Date() - new Date(c.start)) <= 365 * 1000 * 3600 * 24
      );
    }

    return newComments;
  };

  const handleSortRange = (comments, sortRange) => {
    let newComments = [...comments];

    if (sortRange === "1") {
      newComments = [...comments].sort((a, b) => Math.ceil(
        (b.service_score +
          b.clean_score +
          b.comfort_score +
          b.facility_score +
          b.cpValue_score) /
          5
      ) - Math.ceil(
        (a.service_score +
          a.clean_score +
          a.comfort_score +
          a.facility_score +
          a.cpValue_score) /
          5
      ))
    }

    if (sortRange === "2") {
      newComments = [...comments].sort((a, b) => Math.ceil(
        (a.service_score +
          a.clean_score +
          a.comfort_score +
          a.facility_score +
          a.cpValue_score) /
          5
      ) - Math.ceil(
        (b.service_score +
          b.clean_score +
          b.comfort_score +
          b.facility_score +
          b.cpValue_score) /
          5
      ))
    }

    return newComments;
  };

  useEffect(() => {
    let newComments = [...comments];

    // 處理分數區間選項
    newComments = handleScoreRange(newComments, scoreRange);

    newComments = handleDateRange(newComments, dateRange);

    newComments = handleSortRange(newComments, sortRange);

    setDisplayComments(newComments);
  }, [scoreRange, comments, dateRange , sortRange]);

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
          <select
            className="selectSort"
            value={sortRange}
            onChange={(e) => setSortRange(e.target.value)}
          >
            <option value="0">排序依據</option>
            <option value="1">高分到低分</option>
            <option value="2">低分到高分</option>
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

        <AdditionComment />
      </div>
    </>
  );
};

export default LodgingComment;
