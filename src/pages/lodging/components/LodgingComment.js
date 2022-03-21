import React from "react";

const LodgingComment = () => {
  return (
    <>
      <div className="commentcontainer">
        <div className="closeiconbox">
          <span className="commentClose material-icons">close</span>
        </div>
        <div className="commentTotalbox">
          <div className="commentTotalScorewrap">
            <p className="commentTotalScore">9.3</p>
            <p className="commentTotal">15則評論</p>
          </div>
          <button className="writecomment btn">撰寫評論</button>
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
            <div className="guestimg">
              <img src="img/home/star_eagle.png" alt="" />
            </div>
            <div className="guestNameDate">
              <div className="guestName">Karl</div>
              <div className="cleckinDate">
                <span class="DateIcon material-icons">date_range</span>
                <p>1晚・<span>2021年4月</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LodgingComment;
