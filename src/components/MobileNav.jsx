import styled, { useTheme } from "styled-components";
import FieldIcon from "./Icons/Field";
import GridIcon from "./Icons/Grid";
import Plus from "./Icons/Plus";
import Star from "./Icons/Star";
import TrendingIcon from "./Icons/Trending";
import MobileLink from "./MobileNavLink";
import { HeadingFour } from "./styles/Typography";

const Nav = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  display: none;
  box-shadow: 0px 0px 75px rgba(100, 87, 87, 0.1);
  @media (max-width: 770px) {
    display: grid;
  }
`;

const MobileNav = (props) => {
  const theme = useTheme();
  return (
    <Nav>
      <MobileLink to="/">
        <GridIcon />
        <HeadingFour weight="inherit">Dashboard</HeadingFour>
      </MobileLink>
      <MobileLink to="/stats">
        <TrendingIcon />
        <HeadingFour weight="inherit">Stats</HeadingFour>
      </MobileLink>
      <MobileLink to="/rattings">
        <Star filled={false} />
        <HeadingFour weight="inherit">Rattings</HeadingFour>
      </MobileLink>
      <MobileLink to="/match">
        <FieldIcon filled={false} />
        <HeadingFour weight="inherit">Matches</HeadingFour>
      </MobileLink>
      <MobileLink to="/profile">
        <Plus filled={false} color={theme.gray} />
        <HeadingFour weight="inherit">Profile</HeadingFour>
      </MobileLink>
    </Nav>
  );
};

export default MobileNav;
