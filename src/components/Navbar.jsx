import React from "react";
import styled, { useTheme } from "styled-components";
import Button from "./common/Button";
import Logo from "./Icons/Logo";
import SearchBar from "./SearchBar";
import Icon from "./Icons/Icon";
import AwardOrange from "./Icons/AwardOrange";
import Inbox from "./Icons/Inbox";
import Heart from "./Icons/Heart";
import Setting from "./Icons/Setting";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 10px; */
  padding: 5rem 4.8rem 3.4rem 4.8rem;
  @media (max-width: 960px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 770px) {
    display: none;
  } ;
`;

const NavLeft = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  text-decoration: none;
`;

const NavCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  @media (max-width: 960px) {
    gap: 1.6rem;
  } ;
`;

const LogoText = styled.div`
  font-size: 34.87px;
  font-family: "Nunito Sana", sans-serif;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.dark};
  text-transform: capitalize;
`;

const Navbar = (props) => {
  const theme = useTheme();

  return (
    <Nav>
      <NavLeft href="/">
        <Logo />
        <LogoText>IMINN</LogoText>
      </NavLeft>

      <NavCenter>
        <SearchBar />
      </NavCenter>
      <NavRight>
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
          <Inbox />
        </Button>
        <Button text={null} weight={700} shadow={theme.button_shadow} primary>
          <Heart />
        </Button>
        <Button text={null} weight={700} shadow={theme.button_shadow} primary>
          <Setting />
        </Button>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
