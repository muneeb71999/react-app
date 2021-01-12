import styled from "styled-components";
import Plus from "./Icons/Plus";

const Button = styled.button`
  border: none;
  position: fixed;
  right: 3%;
  bottom: 16%;
  z-index: 10;
  width: 6rem;
  height: 6rem;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  box-shadow: 0px 4px 30px rgba(209, 209, 209, 0.25);
  display: none;
  & > svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  @media (max-width: 770px) {
    display: block;
  }
`;

const Floating = (props) => {
  return (
    <Button>
      <Plus color="white"></Plus>
    </Button>
  );
};

export default Floating;
