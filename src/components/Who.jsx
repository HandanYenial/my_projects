
import React from 'react';
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display: flex;
  align-items:center;
  justify-content:center;

  @media only screen and (max-width:768px){
    height:200vh;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #FB2576;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #FB2576;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


function Who(){
  return (
    <Section>
      <Container>
        <Left>
          {/* To give the size ofbox, camera effect is used:zoom */}
        <Canvas camera={{ position: [8, 8, 8], fov: 25 }}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[8,7,6,5,4,3,2,1]} />
              <Cube/>
              <OrbitControls enableZoom={false} autoRotate />
         
          </Canvas>
        </Left>
        <Right>
        <Title>
            My Projects
          </Title>
          <WhatWeDo>
           <Subtitle>Some of my projects</Subtitle>
          </WhatWeDo>
          <Desc> Building a portfolio by a project at a time.</Desc>
          <Button> See Projects </Button>
        </Right>
      </Container>

    </Section>
  )
}

export default Who;