import styled, { css } from "styled-components";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 480px) {
    height: 90vh;
  }
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: pink;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0,41% 100%, 0% 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 41% 0, 25% 100%, 0% 100%);
  background-color: pink;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0, 100% 100%, 67% 100%);
  background-color: crimson;
`;
function App() {
  return (
    <>
      <Container className="container">
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>

      <Container>
        <Feature />
        <FeatureShape />
      </Container>

      <Container>
        <Service />
        <ServiceShape />
      </Container>

      <Container>
        <Price />
        <PriceShape />
      </Container>

      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
