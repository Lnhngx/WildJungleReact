import React from "react";

function Star({ marked, starId }) {
  return (
    <span star-id={starId} style={{ color: "#eb5c37" }} role="button">
      {/* 空星，實星 */}
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
}

function StarRating(props) {
  // 分数显示
  const [rating, setRating] = React.useState(
    typeof props.rating == "number" ? props.rating : 0
  );
  // 鼠标移入效果
  const [selection, setSelection] = React.useState(0);
  const hoverOver = (event) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("star-id"))
      val = event.target.getAttribute("star-id");
    setSelection(val);
  };
  const rate = (event) =>{
    setRating(event.target.getAttribute("star-id") || rating);
    console.log(selection)
    props.setSelection(selection)
    //子傳父
  }

  return (
    <>
      <div
        //鼠标移入效果
        onMouseOut={() => hoverOver(null)}
        //点击选中分数
        onClick={rate}
        onMouseOver={hoverOver}
        onChange={(e) => setSelection(e.target.value)}
      >
        {/* 创建5个组件 */}
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1} `}
            marked={selection ? selection >= i + 1 : rating >= i + 1} selection={selection}
            setSelection ={setSelection}
          />
        ))}
      </div>
    </>
  );
}

export default StarRating;
