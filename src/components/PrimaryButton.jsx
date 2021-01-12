import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: ${(props) =>
    props.primary ? props.theme.primary : props.theme.gray_gradient};
  border-radius: 10rem;
  padding: 1.6rem 3.4rem;
  font-size: 1.8rem;
  font-weight: 600;
  min-width: 14.4rem;
  color: ${(props) => (props.primary ? "white" : props.theme.dark)};

  @media (max-width: 770px) {
    display: block;
    width: 100%;
  } ;
`;

const PrimaryButton = (props) => {
  return (
    <Button {...props} primary={props.primary}>
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
