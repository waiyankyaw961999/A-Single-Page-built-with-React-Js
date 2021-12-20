import React, { useState } from "react";
import styled from "styled-components";
import MiniCard from "./MiniCard";
import Woman from "../images/woman1.png";
import Play from "../images/play.png";
const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  margin-left: 100px;
  width: 100%;
`;

const Video = styled.iframe`
  display: ${(props) => !props.open && "none"};
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
  left: 0;
  width: 80%;
  height: 300px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  padding: 15px;
  margin-top: 50px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;
const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container id="services">
      <Left>
        <Image open={open} src={Woman} />
        <Video
          open={open}
          width="1264"
          height="480"
          src="https://www.youtube.com/embed/OPMBD8wNagY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple Process to start</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </Desc>
          <CardContainer>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            width="1264"
            height="480"
            src="https://www.youtube.com/embed/OPMBD8wNagY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Video>
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
