import React from "react";
import styled from "styled-components";
import Phone from "../images/phoneonhand.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  border-radius: 20px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 80%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Feature = () => {
  return (
    <Container id="feature">
      <Left>
        <Image src={Phone} />
      </Left>
      <Right>
        <Title>
          <b>good</b>design
          <br />
          <b>good</b>
        </Title>
        <SubTitle>Why do we use it?</SubTitle>
        <Desc>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Desc>
        <Desc>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
