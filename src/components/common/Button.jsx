import React from "react";
import styled from "styled-components";

const Link = styled.a`
  display: flex;
  padding: ${(props) => (props.primary ? "1.5rem 2.7rem" : "1.2rem 1.7rem")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  border-radius: 10rem;
  color: ${(props) => (props.color ? props.color : props.theme.dark)};
  box-shadow: ${(props) => (props.shadow ? props.shadow : "none")};
  @media (max-width: 560px) {
    padding: 0.8rem 1.8rem;
  }

  @media (max-width: 560px) {
    padding: 0.8rem 1.6rem;
  } ;
`;

const Text = styled.p`
  margin-top: 3px;
  margin-left: 4px;
  font-weight: ${(props) => (props.weight ? props.weight : 700)};
  font-size: 1.6rem;

  @media (max-width: 560px) {
    font-size: 1.3rem;
  } ;
`;

const Button = ({
  text,
  children,
  weight,
  color,
  bgColor,
  shadow,
  ...rest
}) => {
  return (
    <Link color={color} bgColor={bgColor} shadow={shadow} {...rest}>
      {children}
      {text && <Text weight={weight}>{text}</Text>}
    </Link>
  );
};

export default Button;
