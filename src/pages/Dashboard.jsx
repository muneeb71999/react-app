import React from "react";
import styled, { useTheme } from "styled-components";
import Card from "../components/common/Card";

import {
  HeadingPrimary,
  HeadingTertiary,
} from "../components/styles/Typography";
import PrimaryButton from "../components/PrimaryButton";
import FieldIcon from "./../components/Icons/Field";
import NewGameCard from "../components/NewGameCard";
import NotificationCard from "../components/NotificationCard";
import GameCard from "../components/GameCard";
import Button from "../components/common/Button";
import Icon from "../components/Icons/Icon";
import AwardOrange from "../components/Icons/AwardOrange";
import Bell from "../components/Icons/Bell";

const Main = styled.div`
  padding: 3.5rem;
  @media (max-width: 560px) {
    padding: 2rem;
  }
  @media (max-width: 375px) {
    padding: 2rem 1rem;
  } ;
`;

const Flex = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: minmax(55rem, 1fr) minmax(28rem, 31rem);
  align-items: stretch;
  width: 100%;
  @media (max-width: 1165px) {
    grid-template-columns: 1fr;
  } ;
`;

const CardsContainer = styled.div`
  flex-grow: 1;
  @media (max-width: 1240px) {
    flex-grow: 1;
  }
`;

const UpcommingMatchHeading = styled.div`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.4rem;
`;

const NewsContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 2.4rem;
  flex-direction: column;
  @media (max-width: 1165px) {
    display: none;
  } ;
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainHeaderRight = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  @media (max-width: 770px) {
    display: flex;
  }
  @media (max-width: 560px) {
    gap: 1rem;
  }

  @media (max-width: 375px) {
    gap: 0.2rem;
  } ;
`;

const Dashboad = (props) => {
  const theme = useTheme();
  return (
    <Main>
      <MainHeader>
        <HeadingPrimary>Games</HeadingPrimary>
        <MainHeaderRight>
          <Button
            text="Legend"
            weight={500}
            bgColor={theme.success_gradient}
            color={theme.success}
          >
            <Icon />
          </Button>
          <Button text="928" weight={700} shadow={theme.button_shadow}>
            <AwardOrange />
          </Button>
          <Button text={null} weight={700} shadow={theme.button_shadow} primary>
            <Bell />
          </Button>
        </MainHeaderRight>
      </MainHeader>
      <Flex>
        <CardsContainer>
          <Card
            title="FCL vc FCV"
            desc="5:00 pm, London"
            button={<PrimaryButton primary={true}>Join now</PrimaryButton>}
          />
          <Card
            title="BVG vc HGC"
            desc="4:00 pm, London"
            button={<PrimaryButton primary={false}>Full</PrimaryButton>}
          />

          <UpcommingMatchHeading>
            <FieldIcon color={theme.primary}></FieldIcon>
            <HeadingTertiary>Games Nearby</HeadingTertiary>
          </UpcommingMatchHeading>

          <GameCard
            title="FCH vs FCB"
            location="Location: London"
            group="Ground: Middlesex"
            button={
              <PrimaryButton style={{ width: "auto" }} primary={true}>
                More Info
              </PrimaryButton>
            }
          />
        </CardsContainer>

        <NewsContainer>
          <NewGameCard></NewGameCard>
          <NotificationCard></NotificationCard>
        </NewsContainer>
      </Flex>
    </Main>
  );
};

export default Dashboad;
