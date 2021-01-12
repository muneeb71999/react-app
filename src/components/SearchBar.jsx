import React from "react";
import styled from "styled-components";
import SearchIcon from "./Icons/Search";

const InputContainer = styled.div`
  position: relative;
  min-width: 399px;

  @media (max-width: 1270px) {
    display: none;
  } ;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 14px 0 14px 50px;
  background-color: white;
  border: none;
  border-radius: 35px;
  &::placeholder {
    font-family: "Nunito Sans", sans-serif;
    color: rgba(37, 39, 41, 0.4);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  z-index: 2;
  transform: translate(0%, -50%);
`;

const SearchBar = (props) => {
  return (
    <InputContainer>
      <Input placeholder="Find game code" />
      <InputIcon>
        <SearchIcon />
      </InputIcon>
    </InputContainer>
  );
};

export default SearchBar;
