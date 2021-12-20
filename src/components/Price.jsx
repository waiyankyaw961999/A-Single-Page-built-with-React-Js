import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  
    @media only screen and (max-width: 480px) {
    flex-direction: column;
`;

const Price = () => {
  return (
    <Container id="pricing">
      <PriceCard price="10" type="Basic" />
      <PriceCard price="20" type="Premium" />
      <PriceCard price="50" type="Advanced" />
    </Container>
  );
};

export default Price;
