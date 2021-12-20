import React from "react";
import styled from "styled-components";
import Map from "../images/map.png";
import Phone from "../images/phone.png";
import Send from "../images/send.png";

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  text-align: center;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;
const TextArea = styled.input`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  padding: 15px;
  margin-top: 20px;
  cursor: pointer;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;
const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <FormContainer>
          <Title>
            Question?
            <br />
            Let's Get In Touch{" "}
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name"></Input>
              <Input placeholder="Your Email"></Input>
              <Input placeholder="Subject"></Input>
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message"></TextArea>
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Shwe Wah St., Yangon, Myanmar.</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+95 980578570</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>wykdev@gmail.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
