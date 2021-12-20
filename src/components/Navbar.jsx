import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  width: 100%;

  background-color: white;
  z-index: 10;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 5px 0px 17px -11px rgba(0, 0, 0, 0.58);
`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline solid crimson 2px;
`;

const Menu = styled.ul`
  display: flex;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  list-style: none;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: gray;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container style={{ position: smallScreen ? "relative" : "fixed" }}>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>
              <A onClick={() => window.scrollTo(0, 0)}>Home</A>
            </MenuItem>
            <MenuItem>
              <A href="#feature">Features</A>
            </MenuItem>
            <MenuItem>
              <A href="#services">Services</A>
            </MenuItem>
            <MenuItem>
              <A href="#pricing">Pricing</A>
            </MenuItem>
            <MenuItem>
              <A href="#contact">Contact</A>
            </MenuItem>
          </Menu>
        </Left>
        <Button>Join Today</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
