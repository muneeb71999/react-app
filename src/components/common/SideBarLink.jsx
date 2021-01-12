import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideLink = styled.div`
  a {
    text-decoration: none;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    font-weight: 500;
    font-family: inherit;
    color: ${(props) => props.theme.gray};
    padding: 1.2rem 0;
    /* margin: 3rem 0; */
    position: relative;
    overflow: hidden;
  }

  .activeLink {
    color: ${(props) => props.theme.dark};
    font-weight: 700 !important;
    &::after {
      position: absolute;
      right: -2px;
      top: 2px;
      z-index: 2;
      width: 6px;
      height: 90%;
      border-radius: 2.8rem;
      background-color: ${(props) => props.theme.primary};
      content: "";
      display: block;
    }

    & > svg path {
      stroke: ${(props) => props.theme.primary};
    }
  }
`;

const SidebarLink = (props) => {
  return (
    <SideLink {...props}>
      <NavLink to={props.to} activeClassName="activeLink" exact>
        {props.children}
      </NavLink>
    </SideLink>
  );
};

export default SidebarLink;
