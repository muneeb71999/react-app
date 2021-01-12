import React from "react";
import styled from "styled-components";
import TargetIcon from "./Icons/Target";
import PrimaryButton from "./PrimaryButton";
import { HeadingSecondary } from "./styles/Typography";
import PlusIcon from "./Icons/Plus";

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
  color: ${(props) => props.theme.dark2};
  margin: 2.4rem 0;
  line-height: 170%;
  font-weight: inherit;
`;

const NewGameCard = (props) => {
  return (
    <Card>
      <CardHeader>
        <TargetIcon />
        <HeadingSecondary>Create Game</HeadingSecondary>
      </CardHeader>
      <CardBody>
        Create new game so you can invite all of your friends to the game and
        make it awesome!
      </CardBody>
      <PrimaryButton
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.2rem",
        }}
        primary
      >
        <PlusIcon color="white" />
        Create New Game
      </PrimaryButton>
    </Card>
  );
};

export default NewGameCard;
