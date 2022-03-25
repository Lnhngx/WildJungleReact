import React from "react";
import { useLocation, Link } from "react-router-dom";

function Star({ marked, starId }) {
  return (
    <span star-id={starId} style={{ color: "#eb5c37" }} role="button">
      {/* 空星，實星 */}
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
}

function DetailPicture(props) {
  const pic = props.pic;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Sid = searchParams.get("id");
  const pictrueArray = pic.filter((v) => v.ProductsPic === parseInt(Sid));
  return (
    <>
      {Array.from({ length: pictrueArray.length }, (v, i) => (
        <li key={i} className="alan_detailimg">
          <img src={require(`./../../../../public/img/product/${pictrueArray[i].PicName}`)} alt="" />
        </li>
      ))}
    </>
  );
}

export default DetailPicture;
