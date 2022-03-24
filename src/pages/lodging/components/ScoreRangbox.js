import React, { useState, useEffect } from "react";

const ScoreRangbox = (props) => {
  const { scoreRange, setScoreRange } = props;
  return (
    <>
      <select
        className="selectScore"
        value={scoreRange}
        onChange={(e) => setScoreRange(e.target.value)}
      >
        <option value="1">所有評分</option>
        <option value="2">9~10分</option>
        <option value="3">6~8分</option>
        <option value="4">3~5分</option>
        <option value="5">0~2分</option>
      </select>
    </>
  );
};

export default ScoreRangbox;
