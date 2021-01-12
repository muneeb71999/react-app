import React from "react";
import styled from "styled-components";

import FootballIcon from "../Icons/Football";
import { HeadingPrimary, ParagraphPrimary } from "../styles/Typography";
import Avatar from "./Avatar";

const CardContainer = styled.div`
  border-radius: 2.5rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  gap: 5rem;
  background: white;
  margin: 1.25rem 0;
  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
  }

  @media (max-width: 1165px) {
    flex-direction: row;
  }

  @media (max-width: 945px) {
    flex-direction: column;
    align-items: stretch;
  }

  @media (max-width: 560px) {
    padding: 2rem;
    gap: 3rem;
    margin: 2rem 0;
  }

  @media (max-width: 420px) {
    padding: 1rem;
  } ;
`;

const CardLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5rem;
  flex-grow: 1;
  @media (max-width: 1240px) {
    flex: 0;
  }
  @media (max-width: 1165px) {
    flex: 1;
  } ;
`;

const CardRight = styled.div`
  /* @media (max-width: 1165px) {
    flex: 1;
  } ; */
`;

const CardIconContainer = styled.div`
  border-radius: 2rem;
  background: rgba(255, 130, 82, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13.2rem;
  height: 13.2rem;
  @media (max-width: 420px) {
    width: 9.9rem;
    height: 9.9rem;
  } ;
`;

const CardInfo = styled.div`
  align-self: stretch;
`;

const Card = (props) => {
  return (
    <CardContainer>
      <CardLeft>
        <CardIconContainer>
          <FootballIcon />
        </CardIconContainer>
        <CardInfo>
          <HeadingPrimary>{props.title}</HeadingPrimary>
          <ParagraphPrimary margin="1rem 0 2.5rem 0">
            {props.desc}
          </ParagraphPrimary>
          <Avatar />
        </CardInfo>
      </CardLeft>
      <CardRight>{props.button}</CardRight>
    </CardContainer>
  );
};

export default Card;
