import React from "react";
import styled from "styled-components";
import BellIcon from "./Icons/Bell";
import { HeadingSecondary } from "./styles/Typography";

const Card = styled.div`
  border-radius: 2.5rem;
  padding: 3rem;
  width: 31rem;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2.4rem;
`;

const CardBody = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.gray};
  margin: 2.4rem 0;
  line-height: 170%;
  font-weight: inherit;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-direction: column;
`;

const Span = styled.span`
  color: ${(props) => (props.primary ? props.theme.primary : props.theme.dark)};
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10000px;
  background-color: ${(props) => props.theme.primary};
  flex-grow: 1;
  margin-top: 1rem;
`;

const CardText = styled.div`
  font-weight: ${(props) => (props.primary ? "600" : 400)};
  font-size: 1.5rem;
  line-height: 170%;
  color: ${(props) => (props.primary ? props.theme.dark : props.theme.dark2)};
  display: ${(props) => (props.unread ? "grid" : "block")};
  grid-template-columns: 1rem 1fr;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

const NotificationCard = (props) => {
  return (
    <Card>
      <CardHeader>
        <BellIcon />
        <HeadingSecondary>Notifications</HeadingSecondary>
      </CardHeader>
      <CardBody>
        <CardText primary unread>
          <Dot></Dot>
          <div>
            HVC vs YGG will started tomorrow at 4:00 pm, prepare yourself!
            <Span primary> Here’s what you better do before match</Span>
          </div>
        </CardText>
        <CardText>
          <div>
            HVC vs YGG will started tomorrow at 4:00 pm, prepare yourself!
            <Span primary> Here’s what you better do before match</Span>
          </div>
        </CardText>
        <CardText>
          <div>
            HVC vs YGG will started tomorrow at 4:00 pm, prepare yourself!
            <Span primary> Here’s what you better do before match</Span>
          </div>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default NotificationCard;
