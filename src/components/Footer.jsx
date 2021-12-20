import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
`;

const A = styled.a`
  cursor: pointer;
  color: white;
  transition: color 0.2s ease-in;
  &:hover {
    color: crimson;
  }
`;

const Copyright = styled.span``;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>
            <A href="#">Guide</A>
          </ListItem>
          <ListItem>
            <A href="#">Support</A>
          </ListItem>
          <ListItem>
            <A href="#">API</A>
          </ListItem>
          <ListItem>
            <A href="#">Community</A>
          </ListItem>
        </List>
        <Copyright>Wai Yan Dev </Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
