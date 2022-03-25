import React from "react";

function CommentItem(props) {
  const {
    sid,
    service_score,
    clean_score,
    comfort_score,
    facility_score ,
    cpValue_score,
    comments,
    m_name,
    start ,
    end ,
  } = props.comment;
  return (
    <>
      <div className="guestCommentbox">
        <div className="guestInformation">
          <div className="guestimg">
            <img src="img/home/star_eagle.png" alt="" />
          </div>
          <div className="guestNameDate">
            <div className="guestName">{m_name}</div>
            <div className="cleckinDate">
              <span class="DateIcon material-icons">date_range</span>
              <p>
                {(Math.abs(new Date(end)-new Date(start)))/(1000*3600*24)}晚・<span>{start}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="guestCommentTextbox">
          <p className="guestCommentText">{comments}</p>
        </div>
        <p className="guestScore">
          {Math.ceil(
            (service_score + clean_score + comfort_score + facility_score + cpValue_score) / 5
          )}
        </p>
      </div>
    </>
  );
};

export default CommentItem;