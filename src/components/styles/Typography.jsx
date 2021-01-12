import styled from "styled-components";

// Heading Primary
const HeadingPrimary = styled.h1`
  font-size: ${(props) => (props.font ? props.font : "28px")};
  /* font-size: 20px; */
  font-family: "Nunito Sana", sans-serif;
  font-weight: bold;
  color: ${(props) => props.color};
  @media (max-width: 560px) {
    font-size: ${(props) => (props.font ? props.font : "20px")};
  } ;
`;

// Heading Primary
const HeadingSecondary = styled.h2`
  font-size: ${(props) => (props.font ? props.font : "24px")};
  font-family: "Nunito Sana", sans-serif;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? props.weight : "bold")};
`;

// Heading Primary
const HeadingTertiary = styled.h3`
  font-size: ${(props) => (props.font ? props.font : "20px")};
  font-family: "Nunito Sana", sans-serif;
  color: ${(props) => props.color};
  font-weight: 600;
  line-height: 22px;
`;

const HeadingFour = styled.h4`
  font-size: ${(props) => (props.font ? props.font : "16px")};
  font-family: "Nunito Sana", sans-serif;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: 22px;
  @media (max-width: 770px) {
    font-size: ${(props) => (props.font ? props.font : "1.4rem")};
  }
  @media (max-width: 560px) {
    font-size: ${(props) => (props.font ? props.font : "1rem")};
  } ;
`;

// Paragraph Primary
const ParagraphPrimary = styled.p`
  font-size: ${(props) => (props.font ? props.font : "16px")};
  font-family: "Nunito Sana", sans-serif;
  color: ${(props) => (props.color ? props.color : props.theme.gray)};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: 400;
  @media (max-width: 560px) {
    font-size: ${(props) => (props.font ? props.font : "14px")};
    margin: 0.7rem 0 1.4rem 0;
  } ;
`;

// Paragraph Secondary
const ParagraphSecondary = styled.p`
  font-size: ${(props) => (props.font ? props.font : "10px")};
  font-family: "Nunito Sana", sans-serif;
  font-weight: 400;
  color: ${(props) => props.color};
`;

export {
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  HeadingFour,
  ParagraphPrimary,
  ParagraphSecondary,
};
