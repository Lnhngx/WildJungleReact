import React from "react";
import CommentItem from "./CommentItem";

function CommentList(props)  {
  const { comments } = props;
  return (
    <>
      <div className="guestCommentwrap">
        {comments.map((comment, i) => {
          return <CommentItem key={comment.sid} comment={comment} />;
        })}
      </div>
    </>
  );
};

export default CommentList;
