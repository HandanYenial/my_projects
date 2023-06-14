import React, { Suspense }from 'react';
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;


const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
  align-items:center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;


const Title = styled.div`
  font-size:74px;
  color:"#EB5353";
  font-weight:500;
  
  
  @media only screen and (min-width:768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display:flex;
  align-items:center;
  gap:30px;
`;

const Subtitle = styled.h2`
  color:#FCE700;
  font-size:50px;
  justify-content:center;
  text-align:center;
`;

const Desc= styled.p`
  font-size:24px;
  color:white;
  justify-content:center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;



const Right = styled.div`
  flex:3;
  position:relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Logo = styled.img`
  height: 70px;
  width:70px;
`;

const List = styled.ul`
  display:flex;
  gap:20px;
  list-style:none;

  @media only screen and (max-width:768){
    display:none;
  }
`;

const ListItem = styled.li`
  cursor:pointer;
  justify-content:center;
`;

function Hero(){
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>
          {/* <Logo src="./img/gears_web.gif"/> */}
            Hello
          </Title>
          <WhatWeDo>
           <Subtitle>I'm Handan Yenial</Subtitle>
          </WhatWeDo>
          <Desc> I'm a passionate Full-Stack Web Developer and I'm actively working on expanding my portfolio with exciting projects.</Desc>
          <List>
          <ListItem><a href="https://www.linkedin.com/in/handanyenial/"> <Logo src="./img/linkedin.webp"/></a></ListItem>
          <ListItem><a href="https://github.com/HandanYenial"><Logo src="./img/kindpng.png"/></a></ListItem>
          </List>
        </Left>
        <Right>
        <Canvas>
              <Suspense>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#EB5353"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/Pngtree.png"/>
          {/* <a href='https://pngtree.com/so/hijab'>hijab png from pngtree.com/</a> */}
        </Right>
      </Container>

    </Section>
  )
}

export default Hero;