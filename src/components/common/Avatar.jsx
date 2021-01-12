import React from "react";
import styled from "styled-components";
import user1 from "./../../img/user1.jpg";
import user2 from "./../../img/user2.jpg";
import user3 from "./../../img/user3.jpg";
import user4 from "./../../img/user4.jpg";
import user5 from "./../../img/user5.jpg";

const Img = styled.img`
  border: 2px solid white;
  border-radius: 10rem;
  width: 3.8rem;
  height: 3.8rem;
  margin-left: -0.7rem;
`;

const Container = styled.div``;

const Avatar = (props) => {
  return (
    <Container>
      <Img src={user1} />
      <Img src={user2} />
      <Img src={user3} />
      <Img src={user4} />
      <Img src={user5} />
    </Container>
  );
};

export default Avatar;
