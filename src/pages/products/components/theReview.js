import React from "react";
import { useLocation, Link } from "react-router-dom";

function TheReview(props) {
  const review = props.review;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Sid = searchParams.get("id");
  const reviewArray = review.filter((v) => v.ProductsReview === parseInt(Sid));

  return (
    <>
      {Array.from({ length: reviewArray.length }, (v, i) => (
        <div className="alan_rightReview">
          <div className="alan_rightreview1">
            <div>
              來自：張曉明
              <br />
              評分：{`${reviewArray[i].ReviewStar}`}
              <span style={{ color: "#eb5c37" }}>
                {reviewArray[i].ReviewStar >= 1 ? "\u2605" : "\u2606"}
              </span>
              <span style={{ color: "#eb5c37" }}>
                {reviewArray[i].ReviewStar >= 2 ? "\u2605" : "\u2606"}
              </span>
              <span style={{ color: "#eb5c37" }}>
                {reviewArray[i].ReviewStar >= 3 ? "\u2605" : "\u2606"}
              </span>
              <span style={{ color: "#eb5c37" }}>
                {reviewArray[i].ReviewStar >= 4 ? "\u2605" : "\u2606"}
              </span>
              <span style={{ color: "#eb5c37" }}>
                {reviewArray[i].ReviewStar >= 5 ? "\u2605" : "\u2606"}
              </span>
            </div>
            <div>評論內容:{reviewArray[i].Review}</div>
            <div>評論時間:{reviewArray[i].ReviewDate}</div>
          </div>
          <div>
            <button>刪除</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TheReview;
