import React, { useState } from "react";
import styled from "styled-components";
import UsersIcon from "./Icons/Users";
import ClockIcon from "./Icons/Clock";
import image from "./../img/img.jpg";
import HeartIcon from "./Icons/Heart";

import {
  HeadingPrimary,
  ParagraphPrimary,
  HeadingFour,
} from "./styles/Typography";

const CardContainer = styled.div`
  border-radius: 2.5rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.card_shadow};
  gap: 5rem;
  background: white;
  margin: 1.25rem 0;
  position: relative;

  @media (max-width: 610px) {
    display: grid;
    flex-grow: 1;
    grid-template-columns: 1fr;
  }
  @media (max-width: 560px) {
    padding: 2rem;
    grid-template-columns: min-content 1fr;
    gap: 1rem;
    margin: 2rem 0;
  }
  @media (max-width: 420px) {
    padding: 1rem;
  } ;
`;

const CardImage = styled.img`
  border-radius: 1.7rem;
  @media (max-width: 560px) {
    width: 45%;
    align-self: flex-start;
  } ;
`;

const CardLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5rem;
  @media (max-width: 560px) {
    grid-column: 1 / -1;
  } ;
`;

const CardRight = styled.div`
  @media (max-width: 1263px) {
    display: none;
  }
  @media (max-width: 1165px) {
    display: block;
  }
  @media (max-width: 945px) {
    display: none;
  } ;
`;

const CardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10%;
  top: 10%;
  @media (max-width: 610px) {
    display: none;
  } ;
`;

const CardInfo = styled.div`
  align-self: stretch;
  flex-grow: 1;
`;

const CardFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 490px) {
    display: none;
  } ;
`;

const CardFlex1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  display: none;
  grid-column: 1 / -1;
  width: 80%;
  @media (max-width: 490px) {
    display: flex;
  } ;
`;

const CardTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
`;

const GameCard = (props) => {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <CardContainer>
      <CardLeft>
        <CardImage src={image}></CardImage>
        <CardInfo>
          <HeadingPrimary>{props.title}</HeadingPrimary>
          <ParagraphPrimary margin="1rem 0 2.5rem 0">
            {props.location}
          </ParagraphPrimary>
          <ParagraphPrimary margin="-1rem 0 2.5rem 0">
            {props.group}
          </ParagraphPrimary>
          <CardFlex>
            <CardTime>
              <ClockIcon></ClockIcon>
              <HeadingFour font="1.4rem">4:00 pm</HeadingFour>
            </CardTime>
            <CardTime>
              <UsersIcon />
              <HeadingFour font="1.4rem">5 Players</HeadingFour>
            </CardTime>
          </CardFlex>
        </CardInfo>
      </CardLeft>
      <CardRight>{props.button}</CardRight>
      <CardFlex1>
        <CardTime>
          <ClockIcon></ClockIcon>
          <HeadingFour font="1.4rem">4:00 pm</HeadingFour>
        </CardTime>
        <CardTime>
          <UsersIcon />
          <HeadingFour font="1.4rem">5 Players</HeadingFour>
        </CardTime>
      </CardFlex1>
      <CardIconContainer>
        <HeartIcon filled={isLiked} onClick={() => setIsLiked(!isLiked)} />
      </CardIconContainer>
    </CardContainer>
  );
};

export default GameCard;
