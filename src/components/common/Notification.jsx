import React from "react";
import styled from "styled-components";

const Dot = styled.div`
  width: 50px;
  height: 50px;
  z-index: 2;
  border-radius: 10000px;
  background-color: ${(props) => props.theme.primary};
`;
const CardText = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 170%;
  color: ${(props) => (props.primary ? props.theme.primary : props.theme.dark)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;

const Notification = (props) => {
  return (
    <CardText>
      {props.dot && <Dot />}
      {props.children}
    </CardText>
  );
};

export default Notification;
