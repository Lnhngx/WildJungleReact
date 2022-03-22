import React, { useRef, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const Range = Slider;

const LodgingComment = () => {
  const [closebtn, setClosebtn] = useState(true);
  const [writecommen, setWritecommen] = useState(false);

  const [cleanvalue, setCleanvalue] = useState(1);
  const [servevalue, setServevalue] = useState(1);
  const [comfortablevalue, setComfortablevalue] = useState(1);
  const [facilityvalue, setFacilityvalue] = useState(1);
  const [CPValuevalue, setCPValuevalue] = useState(1);

  const clickClosebtn = () => {
    setClosebtn(!closebtn);
  };
  const writecommentbtn = () => {
    setClosebtn(!closebtn);
    setWritecommen(!writecommen);
  };

  const backbtn = () => {
    setClosebtn(!closebtn);
    setWritecommen(!writecommen);
  };

  return (
    <>
      <div className="commentcontainer" style={{ display: closebtn === false && "none" }}>
        <div className="closeiconbox">
          <span
            className="commentClose material-icons"
            onClick={clickClosebtn}
          >
            close
          </span>
        </div>
        <div className="commentTotalbox">
          <div className="commentTotalScorewrap">
            <p className="commentTotalScore">9.3</p>
            <p className="commentTotal">15則評論</p>
          </div>
          <button className="writecomment btn" onClick={writecommentbtn}>撰寫評論</button>
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
          <select className="selectScore">
            <option>所有評分(15)</option>
            <option>9~10分</option>
            <option>6~8分</option>
            <option>4~6分</option>
            <option>0~3分</option>
          </select>
          <select className="selectDate">
            <option>住宿期間</option>
            <option>近三個月</option>
            <option>近半年</option>
            <option>近一年</option>
          </select>
          <select className="selectSort">
            <option>排序依據</option>
            <option>高分到低分</option>
            <option>低分到高分</option>
          </select>
        </div>
        <div className="commentline"></div>
        <div className="guestComment">住客評論</div>
        <div className="guestCommentwrap">
          <div className="guestCommentbox">
            <div className="guestInformation">
              <div className="guestimg">
                <img src="img/home/star_eagle.png" alt="" />
              </div>
              <div className="guestNameDate">
                <div className="guestName">Karl</div>
                <div className="cleckinDate">
                  <span class="DateIcon material-icons">date_range</span>
                  <p>
                    1晚・<span>2021年4月</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="guestCommentText">乾淨舒適，下次還會再來！</div>
            <p className="guestScore">9.2</p>
          </div>
          <div className="guestCommentbox">
            <div className="guestInformation">
              <div className="guestimg">
                <img src="img/home/star_eagle.png" alt="" />
              </div>
              <div className="guestNameDate">
                <div className="guestName">Karl</div>
                <div className="cleckinDate">
                  <span class="DateIcon material-icons">date_range</span>
                  <p>
                    1晚・<span>2021年4月</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="guestCommentText">乾淨舒適，下次還會再來！</div>
            <p className="guestScore">9.2</p>
          </div>
        </div>
      </div>

      <div
        className="CommentFormcontainer"
        style={{ display: writecommen === false && "none" }}
      >
        <div className="lefticonbox">
          <span class="material-icons lefticon" onClick={backbtn}>west</span>
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
