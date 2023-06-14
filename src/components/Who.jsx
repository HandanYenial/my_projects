
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

const Logo = styled.img`
  height: 40px;
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
  color:#FB2576;
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



const Subtitle = styled.h2`
  color: #BF9742;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #3C79F5;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ListItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #BDE6F1;
  
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


function Who(){
  return (
    <Section>
      <Container>
        <Left>
          {/* To give the size ofbox, camera effect is used:zoom */}
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[8,7,6,5,4,3,2,1]} />
              <Cube/>
              <OrbitControls enableZoom={false} autoRotate />
         
          </Canvas>
        </Left>
        <Right>
        <Title>
            About Me
          </Title>
          <WhatWeDo>
           <Subtitle>My Background</Subtitle>
          </WhatWeDo>
           <List>
           
            <ListItem>
            <Logo src="./img/work.png"/>
            Springboard 2021 - 2022
           </ListItem>
            <ListItem>
              Software Engineering Fellow
            </ListItem>
            <ListItem>
            <Logo src="./img/work.png"/>
              SANY  2019 - 2021
            </ListItem>
            <ListItem>
              STEM Teacher (Math&Coding)
            </ListItem>
            <ListItem>
            <Logo src="./img/work.png"/>
              Marmara Schools  2007 - 2015
            </ListItem>
            <ListItem>
              Math Teacher&Manager
            </ListItem>
            <ListItem>
            <Logo src="./img/graduation-cap.png"/>
              METU 2002 - 2007
            </ListItem>
            <ListItem>
              BS - Elementary Mathematics Education
            </ListItem>
           </List>
        
        </Right>
      </Container>

    </Section>
  )
}

export default Who;