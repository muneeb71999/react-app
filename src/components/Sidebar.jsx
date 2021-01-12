import React from "react";
import styled from "styled-components";

import SidebarLink from "./common/SideBarLink";
import FieldIcon from "./Icons/Field";
import GridIcon from "./Icons/Grid";
import LogoutIcon from "./Icons/Logout";
import PlusIcon from "./Icons/Plus";
import StarIcon from "./Icons/Star";
import TrendingIcon from "./Icons/Trending";
import { HeadingTertiary, HeadingFour } from "./styles/Typography";

const Side = styled.div`
  width: 24rem;
  border-top-right-radius: 3.5rem;
  padding: 3.5rem 0 0rem 4.8rem;
  background-color: white;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 965px) {
    padding: 3.5rem 0 0rem 3rem;
  }
  @media (max-width: 770px) {
    display: none;
  } ;
`;

const SideTop = styled.div``;

const SideTopIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`;

const PlusIconContainer = styled.div`
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 10rem;
  height: 5.5rem;
  width: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RattingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 0.9rem 1.2rem;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 10rem;
`;

const RattingText = styled.p`
  color: ${(props) => props.theme.gray};
  font-size: 1.4rem;
  font-weight: 600;
  display: inline-block;
`;

const SideTopText = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 6.5rem;
  text-align: left;
`;

const SideBottom = styled.div``;
const SideMiddle = styled.div`
  margin-top: -20rem;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  flex-direction: column;
`;

const Sidebar = (props) => {
  return (
    <Side>
      <SideTop>
        <SideTopIcons>
          <PlusIconContainer>
            <PlusIcon />
          </PlusIconContainer>
          <RattingContainer>
            <StarIcon filled={true} />
            <RattingText>4.8</RattingText>
          </RattingContainer>
        </SideTopIcons>
        <SideTopText>
          <HeadingTertiary>John Smith</HeadingTertiary>
        </SideTopText>
      </SideTop>

      {/* Middle Part */}
      <SideMiddle>
        <SidebarLink to="/">
          <GridIcon />
          <HeadingFour weight="inherit">Dashboard</HeadingFour>
        </SidebarLink>
        <SidebarLink to="/stats">
          <TrendingIcon />
          <HeadingFour weight="inherit">Stats</HeadingFour>
        </SidebarLink>
        <SidebarLink to="/rattings">
          <StarIcon filled={false} />
          <HeadingFour weight="inherit">Rattings</HeadingFour>
        </SidebarLink>
        <SidebarLink to="/match">
          <FieldIcon filled={false} />
          <HeadingFour weight="inherit">Matches</HeadingFour>
        </SidebarLink>
      </SideMiddle>

      {/* Bottom Part */}
      <SideBottom>
        <SidebarLink to="/logout">
          <LogoutIcon filled={false} />
          <HeadingFour weight="inherit">Logout</HeadingFour>
        </SidebarLink>
      </SideBottom>
    </Side>
  );
};

export default Sidebar;
