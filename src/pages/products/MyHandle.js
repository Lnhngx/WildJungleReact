import React from "react";
import styled from "styled-components";
import { Handle } from "rc-slider";

export function MyHandle(props) {
  const { value, dragging, index, ...rest } = props;

  return (
    <FlexHandle key={index} value={value} {...rest}>
      {dragging && <Value>{value} years 🎉</Value>}
    </FlexHandle>
  );
}

// If you want to center the text with the handle
const FlexHandle = styled(Handle)`
  display: flex;
  justify-content: center;
`;


const Value = styled.div`
  margin-top: -32px;
  white-space: nowrap;
  color: red;
  font-size: 16px;
  font-weight: bold;
`;
